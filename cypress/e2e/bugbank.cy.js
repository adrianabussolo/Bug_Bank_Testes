/// <reference types="cypress" />

describe('Fluxos de Autenticação e Cadastro - BugBank', () => {
  
  // Acessar o site antes de cada teste
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');
  });

  
  it('Deve cadastrar um novo usuário com saldo com sucesso', () => {
    // Criando um e-mail único para evitar erro de "usuário já cadastrado"
    cy.visit('https://bugbank.netlify.app/');
    
    const email = `investigacao_${Date.now()}@teste.com`;

    // 1. Clicar em Registrar
    cy.contains('button', 'Registrar').click({force: true});

    // 2. Preencher Cadastro (Usamos .eq(1) porque o index 0 é o campo de login)
    cy.get('input[name="email"]').eq(1).type(email, {force: true});
    cy.get('input[name="name"]').type('QA Sênior Especialista', {force: true});
    cy.get('input[name="password"]').eq(1).type('123456', {force: true});
    cy.get('input[name="passwordConfirmation"]').type('123456', {force: true});
    
    // 3. Ativar opção de criar conta com saldo
    cy.get('#toggleAddBalance').click({force: true});

    // 4. Cadastrar e Validar
    cy.contains('button', 'Cadastrar').click({force: true});

    // Verifica se o texto de sucesso apareceu.
    cy.get('#modalText').should('contain', 'foi criada com sucesso');
    
    // Fechar a tela para concluir o fluxo
    cy.get('#btnCloseModal').click();
  });

  it('Deve exibir mensagem de erro ao tentar login com credenciais inválidas', () => {
    // Preenche os campos de login (index 0)
    cy.get('input[name="email"]').eq(0).type('nao_existente@teste.com');
    cy.get('input[name="password"]').eq(0).type('senha12345');
    
    cy.contains('button', 'Acessar').click();

    // Valida se a mensagem de erro esperada apareceu
    cy.get('#modalText').should('contain', 'Usuário ou senha inválido');
  });
});