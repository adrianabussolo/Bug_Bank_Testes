-- 1. Selecionar todos os usuários com saldo maior que 1000

--Inserção de dados fictícios para teste:
INSERT INTO usuarios (id, nome, email, saldo) VALUES 
(1, 'Adriana', 'adriana@email.com', 5000.00),
(2, 'Usuario Teste', 'teste@bugbank.com', 0.00),


-- Objetivo: Validar contas com saldo maior que 1000.
SELECT * FROM usuarios 
WHERE saldo > 1000;

-- 2. Atualizar o saldo de um usuário específico
-- Objetivo: Simular uma alteração recebida.
UPDATE usuarios 
SET saldo = 6000.00 
WHERE id = 2;

-- 3. Contar quantos usuários possuem saldo igual a 0
-- Objetivo: Identificar contas com saldo zerado.
SELECT COUNT(*) AS total_usuarios_zerados 
FROM usuarios 
WHERE saldo = 0;