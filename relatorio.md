Relatório de Investigação e Testes - BugBank

Objetivo: Validar os fluxos críticos de cadastro e autenticação da plataforma BugBank, garantindo a integridade dos dados e a experiência do usuário.


  Introdução
Este relatório detalha a estratégia de testes e os resultados obtidos durante a validação da plataforma BugBank. O foco foi garantir a qualidade dos fluxos de cadastro e login, utilizando tanto a investigação manual quanto a automação E2E.

  Cenários de Teste

 Cadastro de Usuário
 Cadastro com todos os campos preenchidos e opção "Criar conta com saldo" ativa.
 Dados utilizados:
 E-mail dinâmico (ex: `investigacao_17103456@teste.com`)
 Nome: QA Sênior Especialista
 Senha/Confirmação: 123456
 Resultado Esperado: Exibição na tela com número da conta e mensagem de sucesso.
 Status: Passou (Automatizado)

  Autenticação (Login)
Cenário: Tentativa de acesso com usuário não cadastrado.
Resultado Esperado: Mensagem de erro "Usuário ou senha inválido".
Status: Passou (Automatizado)

---

 Investigação de Bugs (Evidências do PDF)

Durante a exploração manual, foram identificados comportamentos que impactam a experiência do usuário e a confiabilidade do sistema:

 Bug de Cadastro (Dados Incompletos)
Descrição: Ao tentar cadastrar sem preencher campos obrigatórios, o sistema não exibe as mensagens de validação de forma clara ou permite que o usuário avance indevidamente em certos estados de rede.
Impacto: Alto (Risco de integridade de dados).


--

Framework: Cypress
Linguagem: JavaScript

---
Relatório gerado por Adriana Bussolo - QA Analyst
