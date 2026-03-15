# Documentação de Testes de API - BrasilAPI 🧪

Este documento descreve a estratégia de testes aplicada aos endpoints da BrasilAPI

Como Importar e Rodar
1. No Postman, clique no botão **Import**.
2. Arraste o arquivo `APIs do BrasilAPI.postman_collection` contido neste repositório.
3. Com a coleção carregada, clique em cada Endpoint desejado.

-- Cenários de Teste

1. GET - Consulta de CEP (Sucesso)
- **Endpoint:** `https://brasilapi.com.br/api/cep/v1/88034001`
- **Validação:** Status Code 200 e confirmação da cidade "Florianópolis".

2. GET - Consulta de CEP (Erro)
- **Endpoint:** `https://brasilapi.com.br/api/cep/v1/00000000`
- **Validação:** Status Code 404 e validação da mensagem de erro da API.

3. PUT - Atualização de Post (Simulação Técnica)
- **Endpoint:** `https://jsonplaceholder.typicode.com/posts/1`
- **Validação:** Status Code 200, validação do payload alterado e tempo de resposta < 500ms.

-- Scripts de Validação
Todos os testes utilizam scripts em JavaScript (aba Post-response) para garantir a integridade dos contratos e dados retornados.