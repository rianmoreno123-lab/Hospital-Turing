# Hospital-Turing - Sistema de Gerenciamento Hospitalar

## 1. Contexto do Problema e Solução

### O Problema

A empresa hospitalar enfrenta atualmente sérios gargalos operacionais e de gestão devido ao controle descentralizado e desorganizado de informações referentes a pacientes, funcionários e atendimentos. A dificuldade crônica na localização ágil de dados e a ocorrência frequente de registros incorretos geram impactos financeiros e jurídicos graves para a instituição, destacando-se a omissão de dados em cirurgias e atendimentos de alta complexidade, o que impede a remuneração correta dos médicos participantes. Além disso, a empresa sofre com a constante perda e inconstância das informações, comprometendo a tomada de decisões e a confiabilidade dos serviços prestados.

### A Solução

O **Hospital-Turing** é um sistema web para gerenciamento hospitalar que permite a centralização e o rigoroso controle das informações de pacientes, funcionários e atendimentos. Com ele:

* O sistema possibilita o cadastro, consulta, alteração e exclusão (**CRUD**) completa dos dados.

* Ele vincula de forma coesa e integrada os atendimentos aos respectivos pacientes, equipes médicas e tipos de atendimento.

* Por fim, garante total controle sobre os serviços realizados, otimizando a recuperação de dados gerenciais, assegurando a consistência das informações e permitindo a apuração e o pagamento corretos dos profissionais de saúde.

* O sistema requer autenticação e controle de acesso por perfis de usuário, mantendo trilhas de auditoria e segurança dos dados clínicos e administrativos.

## 2. Instruções para Uso 

Para executar o projeto localmente, certifique-se de instalar os programas abaixo (conforme as versões especificadas na seção de Tecnologias):

* **Git**: v2.50.1
* **Python**: v3.15.2 - na instalação, marque a opção **"Add python.exe to PATH"**.
* **MySQL Server**: v8.0.44
* **VS Code**: v1.146.0 (ou outro editor de código de sua preferência)
* **Cliente MySQL**: MySQL Workbench ou DBeaver

### 2.1. Clonar o Repositório
Abra o seu terminal e clone o projeto para a sua máquina:
```bash
git clone https://github.com/rianmoreno123-lab/Hospital-Turing.git
cd Hospital-Turing
```

### 2.2. Criar e Ativar o Ambiente Virtual
O ambiente virtual isola as dependências do projeto na sua máquina.

* **No Windows:**

  
  ```bash
  python -m venv venv
  venv\Scripts\Activate
  ```
  Se der erro de permissão, rode primeiro:
  ```bash
  Set-ExecutionPolicy Bypass -Scope Process
  ```

* **No Mac / Linux:**
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```

### 2.3. Instalar as Dependências
Com o ambiente virtual ativado, instale os pacotes necessários:
```bash
pip install -r requirements.txt
```

### 2.4. Configurar as Variáveis de Ambiente
1. Na raiz do projeto, localize o arquivo `.env.example`.
2. Faça uma cópia dele e renomeie o novo arquivo para `.env`.
3. Abra o arquivo `.env` e preencha com a sua senha real do MySQL.

### 2.5. Criar o Banco de Dados e a Tabela no MySQL
Abra o seu gerenciador de MySQL (como o Workbench ou DBeaver) e execute o script SQL abaixo para criar a estrutura que o projeto utiliza:

```sql
CREATE DATABASE hospital_turing;

USE hospital_turing;

CREATE TABLE Paciente (
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    dataNascimento DATE NOT NULL,
    telefone VARCHAR(15),
    endereco VARCHAR(200)
);
```

### 2.6. Executar a Aplicação
Com tudo configurado, inicie o servidor com o Uvicorn:
```bash
python -m uvicorn main:app --reload
```
Caso já esteja usando essa porta, tente:
```bash
python -m uvicorn backend.main:app --reload --port 8001
```
Ou algum outro valor.

Assim que o servidor estiver rodando, acesse a documentação interativa no seu navegador:
* `http://127.0.0.1:8000/docs`

Lembre-se de usar a porta correta.

## 3. Regras a serem seguidas durante a programação

Com o propósito de garantir a legibilidade, a manutenibilidade e um alto padrão técnico na base de código, a equipe deve observar estritamente as diretrizes abaixo:

### 3.1. Padrão de Commits

As mensagens de commit devem seguir um padrão semântico, inspirado no modelo de commits convencionais. Esse padrão facilita a leitura do histórico e ajuda a entender rapidamente o tipo de alteração realizada.

Formato:
`tipo: descrição breve da alteração`

Exemplos:

* `add: cadastro de pacientes`

* `fix: erro ao calcular remuneração médica`

* `update: tipo de variável (int->double)`

* `delete: função com lógica errada`

### 3.2. Regras de Branches

Para evitar conflitos e facilitar o desenvolvimento em equipe, o projeto utilizará branches com finalidades específicas.

**Branch principal**

```
main
```

A branch `main` deve conter apenas versões estáveis do projeto. Nenhuma alteração deve ser enviada diretamente para ela sem revisão.

**Branch de desenvolvimento**

```
develop
```

A branch `develop` será usada para integrar as funcionalidades em desenvolvimento antes de enviá-las para a branch principal.
O fluxo de trabalho do grupo será:

* Criar ou escolher uma issue relacionada à tarefa que será feita.

* Atualizar a branch `develop` antes de começar a alteração.

* Desenvolver a funcionalidade, correção ou documentação necessária.

* Realizar commits pequenos e objetivos, seguindo o padrão definido.

* Enviar as alterações para a branch `develop`.

* Quando a versão estiver funcionando, integrar a branch `develop` na branch `main` via Pull Request.

### 3.3. Indentar corretamente o código

O uso adequado de espaçamento e indentação é indispensável para evidenciar a hierarquia e os limites de escopo em estruturas de controle e repetição (`if`, `else`, `while`, `for`). Blocos bem indentados simplificam a leitura e reduzem consideravelmente a incidência de falhas lógicas durante a manutenção evolutiva.

### 3.4. Nomear variáveis e funções de maneira intuitiva

Os identificadores de variáveis devem descrever com precisão o tipo de dado e a função que exercem na regra de negócio. O grupo deve evitar denominações vagas, genéricas ou arbitrárias (como `x`, `y` ou `temp`) quando estas não refletirem com clareza o conteúdo armazenado.
As funções deverão ter nomes que indiquem claramente a ação realizada (ex: `cadastrarPaciente()`, `calcularRemuneracaoMedica()`, `validarAtendimento()`). Funções que retornam valores booleanos também deverão ter nomes claros, indicando uma verificação (ex: `pacienteAtivo()`, `cirurgiaConcluida()`).

### 3.5. Padronizar nomes de constantes (`camelCase`)

Conforme a diretriz do projeto, as constantes deverão seguir o formato **camelCase** (letras minúsculas nas iniciais e letras maiúsculas nas palavras compostas subsequentes, sem o uso de caracteres separadores como underlines ou hífens).

Exemplos:

```
statusAtendimentoAtivo = "ativo"
valorBaseCirurgiaAlta = 1500.00
limiteDiariasEnfermaria = 30
```

### 3.6. Comentar e documentar o código quando necessário

O código deverá conter comentários em trechos importantes, principalmente quando houver regras de negócio, validações ou lógicas mais complexas. Comentários não devem ser usados para explicar comandos óbvios, mas sim para esclarecer a intenção de uma regra ou funcionamento.

### 3.7. Funções e Componentes de Responsabilidade Única

Cada função, rota ou componente de interface deve executar estritamente uma única tarefa clara e bem definida. O código produzido deve ser simples, limpo e direto, o que facilita consideravelmente a explicabilidade técnica detalhada passo a passo e a manutenção evolutiva.

### 3.8. Redução de Aninhamento Excessivo 

A estrutura lógica de blocos condicionais (`if`, `else`, `for`) deve ser mantida o mais linear e plana possível, evitando aninhamentos profundos. O grupo deve priorizar o uso de cláusulas de guarda para tratar exceções ou validações iniciais logo no topo da função, facilitando a leitura sequencial do fluxo principal de negócio.

## 4. Tecnologias

### Frontend

| Tecnologia | Versão | Finalidade | 
| ----- | ----- | ----- | 
| **JavaScript** | v24.22.1 | Interatividade, controle de sessão, permissões de tela e chamadas (`fetch`). | 

### Backend

| Tecnologia | Versão | Finalidade | 
| ----- | ----- | ----- | 
| **Python** | v3.15.2 | Linguagem principal para a lógica de negócio do backend. | 
| **FastAPI** | v0.163.0 | Framework web moderno e de alta performance para construção da API RESTful. | 
| **Uvicorn** | v0.54.0 | Servidor ASGI para execução da aplicação FastAPI. | 
| **Pydantic** | v2.14.3 | Validação de dados e tipagem utilizando anotações do Python. | 
| **mysql-connector-python** | v26.10.0 | Driver oficial de conexão com o banco de dados MySQL. | 
| **python-dotenv** | v1.2.4 | Gerenciamento seguro de variáveis de ambiente a partir do arquivo `.env`. | 

### Banco de Dados

| Tecnologia | Versão | Finalidade | 
| ----- | ----- | ----- | 
| **MySQL** | 8.0.44 | Banco de dados relacional para armazenamento seguro e estruturado de pacientes, funcionários, atendimentos e cirurgias. | 

### Ferramentas de Desenvolvimento

| Ferramenta | Versão | Finalidade | 
| ----- | ----- | ----- | 
| **VS Code** | 1.146.0 | IDE principal utilizada no desenvolvimento do projeto. | 
| **Git & GitHub** | 2.50.1 | Controle de versão do código-fonte e colaboração em equipe. | 
| **Astah UML** | 12.0.0 | Diagramas UML. | 
| **GitHub Projects** | Serviço web | Quadro de tarefas das sprints. | 

## 5. Organização do Projeto

O repositório está estruturado para garantir a separação clara entre a documentação, a interface de usuário, a API, os testes automatizados e os scripts de suporte:

```
Hospital-Turing/
├── Documentos/
│   ├── Documento de Requisitos.doc
│   ├── Documento de Requisitos.pdf
│   ├── Prototipação.zip
│   └── Prototipo
│
├── Padrões Adotados
│   └── Regras de Verificacao e Analise de Requisitos.md
│
├── backend/
│   ├── database.py
│   ├── main.py
│   └── models.py
│
├── .env.example
├── .gitignore
├── README.md
└── requirements.txt
```

### Descrição dos Diretórios e Arquivos Principais

- **`Documentos/`**: Armazena os artefatos de requisitos, especificações detalhadas do sistema e arquivos de prototipação da interface.

- **`Padrões Adotados/`**: Diretório que consolida as diretrizes, convenções de código, arquitetura e regras metodológicas estabelecidas para o desenvolvimento do projeto, incluindo o arquivo `Regras de Verificacao e Analise de Requisitos.md`.

- **`backend/`**: Diretório central do código-fonte do servidor, dividido modularmente entre o gerenciamento de conexão com o MySQL (`database.py`), a validação e tipagem estrita com Pydantic (`models.py`) e as rotas do CRUD em FastAPI (`main.py`).

- **`.env.example`**: Arquivo de modelo que ilustra as variáveis de ambiente necessárias para configurar e executar a aplicação localmente.

- **`.gitignore`**: Configuração de arquivos e diretórios ignorados pelo versionamento Git.

- **`README.md`**: Documentação descritiva de apresentação e guia inicial do repositório.

- **`requirements.txt`**: Lista de dependências e bibliotecas Python necessárias para a instalação e execução do *backend*.

## 6. Equipe

* Davi Fayer Gonçalves

* João Vitor da Silva Rodrigues

* Rian Moreno Maciel
