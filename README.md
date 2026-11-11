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

## 2. Instruções para Uso do Git

### 2.1. Estrutura de Pastas do Projeto

Considerando o estado atual do repositório, a estrutura de pastas e arquivos está organizada da seguinte forma:

```
Hospital-Turing/
├── Documentos/                   
│   ├── Documento de Requisitos.doc # Especificações funcionais e regras de negócio
│   ├── Documento de Requisitos.pdf # Versão em PDF da documentação de requisitos
│   ├── Prototipação.zip          # Arquivos compactados de prototipação
│   └── Prototipo                
│
├── .gitignore                    # Arquivo de exclusão de rastreamento do Git
└── README.md                    
```

### 2.2. Regras de Branches

Com o propósito de mitigar conflitos e otimizar o fluxo de trabalho colaborativo, o projeto adota uma estrutura de branches com propósitos bem definidos:

- **`main`**: Contém unicamente versões estáveis e validadas do sistema. Nenhum commit direto é aceito sem um processo prévio de revisão.
- **`develop`**: Atua como o branch de integração contínua onde as novas implementações se encontram antes de irem para produção.

O ciclo operacional da equipe segue estas etapas:
- Selecionar ou abrir uma *issue* correspondente à demanda que será executada.
- Sincronizar o ambiente local com a versão mais recente da branch `develop` antes de iniciar as modificações.
- Desenvolver a funcionalidade, correção ou artefato documental necessário.
- Registrar commits atômicos, claros e coesos, respeitando o padrão estipulado.
- Enviar as alterações concluídas para a branch `develop`.
- Quando o módulo estiver íntegro e testado, solicitar a integração de `develop` na branch `main` por meio de um Pull Request.

Dessa forma, o grupo consegue trabalhar de maneira organizada, utilizando a `develop` como o eixo central de desenvolvimento e a `main` reservada estritamente às entregas finais.

### 2.3. Padrão de Commits

As mensagens de commit devem seguir um padrão semântico, inspirado no modelo de commits convencionais. Esse padrão facilita a leitura do histórico e ajuda a entender rapidamente o tipo de alteração realizada.

Formato:
`tipo: descrição breve da alteração`

Exemplos:

* `add: cadastro de pacientes`

* `fix: erro ao calcular remuneração médica`

* `update: tipo de variável (int->double)`

* `delete: função com lógica errada`

### 2.4. Uso de Issues

Cada tarefa do projeto deverá ser registrada como uma issue no GitHub. As issues devem possuir título claro, descrição objetiva e, quando possível, estar associadas ao quadro Kanban do projeto (ex: `RF001 - Cadastrar Paciente - Backend`).

### 2.5. Pull Requests

Qualquer alteração destinada às ramificações principais deve passar obrigatoriamente por um Pull Request. Antes de emitir o aceite e aprovar um PR, o grupo precisa assegurar que:
- O código está executando sem falhas ou regressões;
- O repositório encontra-se isento de conflitos de merge;
- O padrão estipulado para mensagens de commit foi devidamente respeitado;
- Os documentos correlatos foram atualizados quando necessário;
- A tarefa possui vínculo direto com a respectiva *issue* no gerenciador.

### 2.6. Arquivo `.gitignore`

O arquivo `.gitignore` será usado para impedir que arquivos desnecessários sejam enviados ao repositório, como arquivos temporários, caches locais, e logs gerados pelo VS Code ou pelo sistema operacional.

## 3. Instruções para Devs (Boas Práticas de Codificação)

Com o propósito de garantir a legibilidade, a manutenibilidade e um alto padrão técnico na base de código, a equipe deve observar estritamente as diretrizes abaixo:

### 3.1. Indentar corretamente o código

O uso adequado de espaçamento e indentação é indispensável para evidenciar a hierarquia e os limites de escopo em estruturas de controle e repetição (`if`, `else`, `while`, `for`). Blocos bem indentados simplificam a leitura e reduzem consideravelmente a incidência de falhas lógicas durante a manutenção evolutiva.

### 3.2. Nomear variáveis de maneira intuitiva

Os identificadores de variáveis devem descrever com precisão o tipo de dado e a função que exercem na regra de negócio. O grupo deve evitar denominações vagas, genéricas ou arbitrárias (como `x`, `y` ou `temp`) quando estas não refletirem com clareza o conteúdo armazenado.

### 3.3. Evitar condições negativas desnecessárias no `if`

Sempre que viável, elabore as expressões lógicas validando primeiro o cenário positivo (verdadeiro), deixando a alternativa secundária para a cláusula `else`. Essa prática descomplica o fluxo de execução, tornando o código mais direto e evitando aninhamentos excessivos em estruturas complexas.

### 3.4. Nomear funções de maneira intuitiva

As funções deverão ter nomes que indiquem claramente a ação realizada (ex: `cadastrarPaciente()`, `calcularRemuneracaoMedica()`, `validarAtendimento()`). Funções que retornam valores booleanos também deverão ter nomes claros, indicando uma verificação (ex: `pacienteAtivo()`, `cirurgiaConcluida()`).

### 3.5. Comentar e documentar o código quando necessário

Utilize comentários textuais unicamente para elucidar lógicas intrincadas, regras de negócio complexas ou validações específicas. Evite descrever instruções evidentes ou linhas óbvias; o foco do comentário deve ser esclarecer a intenção por trás de uma decisão técnica.

### 3.6. Padronizar nomes de constantes (`camelCase`)

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
| **Python** | 3.15.2 | Linguagem principal para a lógica de negócio do backend. | 

### Banco de Dados

| Tecnologia | Versão | Finalidade | 
| ----- | ----- | ----- | 
| **MySQL** | 8.0.44 | Banco de dados relacional para armazenamento seguro e estruturado de pacientes, funcionários, atendimentos e cirurgias. | 

### Ferramentas de Desenvolvimento

| Ferramenta | Finalidade | 
| ----- | ----- | 
| **VS Code** | IDE principal utilizada no desenvolvimento do projeto. | 
| **Git & GitHub** | Controle de versão do código-fonte e colaboração em equipe. | 

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
