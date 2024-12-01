### Tabela Cliente

| id_cliente | nome            | cpf            | telefone    | endereco              |
| ---------- | --------------- | -------------- | ----------- | --------------------- |
| 1          | Tatiana Souza   | 222.333.444.01 | 9 1234-5678 | Rua Manoel Vitor, 111 |
| 2          | Ricardo Santos  | 333.444.555.02 | 9 2345-6789 | Rua Castro Alves, 222 |
| 3          | Leonardo Dias   | 444.555.666.03 | 9 4567-8901 | Rua Agamenon, 333     |
| 4          | Liliana Batista | 555.666.777.04 | 9 5678-9012 | Rua Bastos Ramos, 444 |

### Tabela Distribuidor

| id_distribuidor | nome                 | cnpj         | telefone    |
| --------------- | -------------------- | ------------ | ----------- |
| 1               | Josefa Almeida       | 222.333/0001 | 9 1234-1212 |
| 2               | Vagner Vieira        | 333.444/0001 | 9 2345-8989 |
| 3               | João Ramalho        | 444.555/0001 | 9 7667-8901 |
| 4               | Maria da Conceição | 555.666/0001 | 9 5699-9013 |

### Tabela Produto

| id_produto | nome      | id_distribuidor | qtd_estoque | valor |
| ---------- | --------- | --------------- | ----------- | ----- |
| 1          | Produto A | 1               | 100         | 10.00 |
| 2          | Produto B | 2               | 200         | 20.00 |
| 3          | Produto C | 3               | 150         | 15.00 |
| 4          | Produto D | 4               | 300         | 30.00 |

### Tabela Pedido

| id_pedido | id_cliente | valor_total |
| --------- | ---------- | ----------- |
| 1         | 1          | 100.00      |
| 2         | 2          | 100.00      |
| 3         | 3          | 300.00      |
| 4         | 4          | 450.00      |

### Tabela Pedido_Produto

| id_pedido | id_produto | quantidade | valor_pedido |
| --------- | ---------- | ---------- | ------------ |
| 1         | 1          | 10         | 100.00       |
| 2         | 2          | 5          | 100.00       |
| 3         | 3          | 20         | 300.00       |
| 4         | 4          | 15         | 450.00       |

### Modelo Entidade-Relacionamento (MER)

#### Entidades e Relacionamentos

1. **Cliente**

   - **Atributos**: id_cliente (PK), nome, cpf, telefone, endereco
2. **Distribuidor**

   - **Atributos**: id_distribuidor (PK), nome, cnpj, telefone
3. **Produto**

   - **Atributos**: id_produto (PK), nome, id_distribuidor (FK), qtd_estoque, valor
4. **Pedido**

   - **Atributos**: id_pedido (PK), id_cliente (FK), valor_total
5. **Pedido_Produto**

   - **Atributos**: id_pedido (PK, FK), id_produto (PK, FK), quantidade, valor_pedido

#### Relacionamentos

- **Distribuidor** fornece **Produto**
  - Relacionamento: 1:N (Um distribuidor pode fornecer vários produtos)
- **Cliente** faz **Pedido**
  - Relacionamento: 1:N (Um cliente pode fazer vários pedidos)
- **Pedido** inclui **Produto**
  - Relacionamento: N:M (Um pedido pode incluir vários produtos e um produto pode estar em vários pedidos)

### Diagrama

```plaintext
+-----------------+          +-----------------+          +-----------------+
|     Cliente     |          |  Distribuidor   |          |     Produto     |
+-----------------+          +-----------------+          +-----------------+
| id_cliente (PK) |          | id_distribuidor (PK) |<----| id_produto (PK) |
| nome            |          | nome            |          | nome            |
| cpf             |          | cnpj            |          | id_distribuidor (FK) |
| telefone        |          | telefone        |          | qtd_estoque     |
| endereco        |          +-----------------+          | valor           |
+-----------------+                                       +-----------------+

+-----------------+          +-------------------------+
|     Pedido      |          |     Pedido_Produto      |
+-----------------+          +-------------------------+
| id_pedido (PK)  |<---------| id_pedido (PK, FK)      |
| id_cliente (FK) |          | id_produto (PK, FK)     |
| valor_total     |          | quantidade              |
+-----------------+          | valor_pedido            |
                             +-------------------------+
```


# Criação do Banco de Dados e Tabelas
```sql
-- Criação do banco de dados
CREATE DATABASE MeuBancoDeDados;
USE MeuBancoDeDados;

-- Criação da tabela Cliente
CREATE TABLE Cliente (
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    endereco VARCHAR(255) NOT NULL
);

-- Criação da tabela Distribuidor
CREATE TABLE Distribuidor (
    id_distribuidor INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cnpj VARCHAR(18) NOT NULL,
    telefone VARCHAR(15) NOT NULL
);

-- Criação da tabela Produto
CREATE TABLE Produto (
    id_produto INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    id_distribuidor INT,
    qtd_estoque INT NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_distribuidor) REFERENCES Distribuidor(id_distribuidor)
);

-- Criação da tabela Pedido
CREATE TABLE Pedido (
    id_pedido INT PRIMARY KEY,
    id_cliente INT,
    valor_total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);

-- Criação da tabela Pedido_Produto
CREATE TABLE Pedido_Produto (
    id_pedido INT,
    id_produto INT,
    quantidade INT NOT NULL,
    valor_pedido DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (id_pedido, id_produto),
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES Produto(id_produto)
);

-- Inserções na tabela Cliente
INSERT INTO Cliente (id_cliente, nome, cpf, telefone, endereco) VALUES
(1, 'Tatiana Souza', '222.333.444.01', '9 1234-5678', 'Rua Manoel Vitor, 111'),
(2, 'Ricardo Santos', '333.444.555.02', '9 2345-6789', 'Rua Castro Alves, 222'),
(3, 'Leonardo Dias', '444.555.666.03', '9 4567-8901', 'Rua Agamenon, 333'),
(4, 'Liliana Batista', '555.666.777.04', '9 5678-9012', 'Rua Bastos Ramos, 444');

-- Inserções na tabela Distribuidor
INSERT INTO Distribuidor (id_distribuidor, nome, cnpj, telefone) VALUES
(1, 'Josefa Almeida', '222.333/0001', '9 1234-1212'),
(2, 'Vagner Vieira', '333.444/0001', '9 2345-8989'),
(3, 'João Ramalho', '444.555/0001', '9 7667-8901'),
(4, 'Maria da Conceição', '555.666/0001', '9 5699-9013');

-- Inserções na tabela Produto
INSERT INTO Produto (id_produto, nome, id_distribuidor, qtd_estoque, valor) VALUES
(1, 'Produto A', 1, 100, 10.00),
(2, 'Produto B', 2, 200, 20.00),
(3, 'Produto C', 3, 150, 15.00),
(4, 'Produto D', 4, 300, 30.00);

-- Inserções na tabela Pedido
INSERT INTO Pedido (id_pedido, id_cliente, valor_total) VALUES
(1, 1, 100.00),
(2, 2, 100.00),
(3, 3, 300.00),
(4, 4, 450.00);

-- Inserções na tabela Pedido_Produto
INSERT INTO Pedido_Produto (id_pedido, id_produto, quantidade, valor_pedido) VALUES
(1, 1, 10, 100.00),
(2, 2, 5, 100.00),
(3, 3, 20, 300.00),
(4, 4, 15, 450.00);

