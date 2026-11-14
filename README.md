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

* **No Windows (PowerShell):**
  ```bash
  python -m venv venv
  venv\Scripts\Activate
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
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    sintomas TEXT
);
```

### 2.6. Executar a Aplicação
Com tudo configurado, inicie o servidor com o Uvicorn:
```bash
python -m uvicorn main:app --reload
```

Assim que o servidor estiver rodando, acesse a documentação interativa no seu navegador:
* `http://127.0.0.1:8000/docs`

## 3. Instruções para Devs (Boas Práticas de Codificação)

Com o propósito de garantir a legibilidade, a manutenibilidade e um alto padrão técnico na base de código, a equipe deve observar estritamente as diretrizes abaixo:

### 3.1. Indentar corretamente o código

O uso adequado de espaçamento e indentação é indispensável para evidenciar a hierarquia e os limites de escopo em estruturas de controle e repetição (`if`, `else`, `while`, `for`). Blocos bem indentados simplificam a leitura e reduzem consideravelmente a incidência de falhas lógicas durante a manutenção evolutiva.

### 3.2. Nomear variáveis e funções de maneira intuitiva

Os identificadores de variáveis devem descrever com precisão o tipo de dado e a função que exercem na regra de negócio. O grupo deve evitar denominações vagas, genéricas ou arbitrárias (como `x`, `y` ou `temp`) quando estas não refletirem com clareza o conteúdo armazenado.
As funções deverão ter nomes que indiquem claramente a ação realizada (ex: `cadastrarPaciente()`, `calcularRemuneracaoMedica()`, `validarAtendimento()`). Funções que retornam valores booleanos também deverão ter nomes claros, indicando uma verificação (ex: `pacienteAtivo()`, `cirurgiaConcluida()`).

### 3.3. Padrão de Commits

As mensagens de commit devem seguir um padrão semântico, inspirado no modelo de commits convencionais. Esse padrão facilita a leitura do histórico e ajuda a entender rapidamente o tipo de alteração realizada.

Formato:
`tipo: descrição breve da alteração`

Exemplos:

* `add: cadastro de pacientes`

* `fix: erro ao calcular remuneração médica`

* `update: tipo de variável (int->double)`

* `delete: função com lógica errada`

### 3.4. Padronizar nomes de constantes (`camelCase`)

Conforme a diretriz do projeto, as constantes deverão seguir o formato **camelCase** (letras minúsculas nas iniciais e letras maiúsculas nas palavras compostas subsequentes, sem o uso de caracteres separadores como underlines ou hífens).

Exemplos:

```
statusAtendimentoAtivo = "ativo"
valorBaseCirurgiaAlta = 1500.00
limiteDiariasEnfermaria = 30
```

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
├── .gitignore
└── README.md
```

### Descrição dos Diretórios e Arquivos Principais

* **`Documentos/`**: Armazena os artefatos de requisitos, especificações detalhadas do sistema e arquivos de prototipação da interface.

* **`.gitignore`**: Configuração de arquivos ignorados pelo versionamento Git.

* **`README.md`**: Documentação descritiva de apresentação do repositório.

## 6. Equipe

* Davi Fayer Gonçalves

* João Vitor da Silva Rodrigues

* Rian Moreno Maciel
