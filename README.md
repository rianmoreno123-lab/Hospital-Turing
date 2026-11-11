Hospital-Turing - Sistema de Gerenciamento Hospitalar
1. Contexto do Problema e Solução
O Problema
A empresa hospitalar enfrenta atualmente sérios gargalos operacionais e de gestão devido ao controle descentralizado e desorganizado de informações referentes a pacientes, funcionários e atendimentos. A dificuldade crônica na localização ágil de dados e a ocorrência frequente de registros incorretos geram impactos financeiros e jurídicos graves para a instituição — destacando-se a omissão de dados em cirurgias e atendimentos de alta complexidade, o que impede a remuneração correta dos médicos participantes. Além disso, a empresa sofre com a constante perda e inconstância das informações, comprometendo a tomada de decisões e a confiabilidade dos serviços prestados.

A Solução
O Hospital-Turing é um sistema web para gerenciamento hospitalar que permite a centralização e o rigoroso controle das informações de pacientes, funcionários e atendimentos. Com ele:

O sistema possibilita o cadastro, consulta, alteração e exclusão (CRUD) completa dos dados.

Ele vincula de forma coesa e integrada os atendimentos aos respectivos pacientes, equipes médicas e tipos de atendimento.

Por fim, garante total controle sobre os serviços realizados, otimizando a recuperação de dados gerenciais, assegurando a consistência das informações e permitindo a apuração e o pagamento corretos dos profissionais de saúde.

O sistema requer autenticação e controle de acesso por perfis de usuário, mantendo trilhas de auditoria e segurança dos dados clínicos e administrativos.

2. Instruções para Uso do Git
2.1. Estrutura de Pastas do Projeto
Considerando o estado atual do repositório, a estrutura de pastas e arquivos está organizada da seguinte forma:

Plaintext
/
├── Documentos/                   # Documentação institucional e artefatos do projeto
│   ├── Documento de Requisitos.doc # Especificações funcionais e regras de negócio
│   ├── Documento de Requisitos.pdf # Versão em PDF da documentação de requisitos
│   ├── Prototipação.zip          # Arquivos compactados de prototipação
│   └── Prototipo/                # Interfaces e wireframes do sistema
│
├── .gitignore                    # Arquivo de exclusão de rastreamento do Git
└── README.md                     # Documentação principal e descritiva do repositório

2.2. Regras de Branches
Para evitar conflitos e facilitar o desenvolvimento em equipe, o projeto utilizará branches com finalidades específicas:

main: Deve conter apenas versões estáveis e prontas para produção/entrega. Nenhuma alteração deve ser enviada diretamente para ela sem revisão.

develop: Usada para integrar as funcionalidades em desenvolvimento antes de enviá-las para a branch principal.

Fluxo de trabalho:

Criar ou escolher uma issue relacionada à tarefa.

Atualizar a branch develop localmente antes de começar.

Desenvolver a funcionalidade, correção ou documentação necessária.

Realizar commits pequenos, objetivos e semânticos.

Enviar as alterações para a branch develop.

Quando a versão estiver validada, integrar develop em main via Pull Request.

2.3. Padrão de Commits
As mensagens de commit devem seguir um padrão semântico:

Formato: tipo: descrição breve da alteração

Exemplos:

add: cadastro de pacientes

fix: erro ao calcular remuneração médica

update: tipo de variável (int->double)

delete: função com lógica errada

2.4. Uso de Issues
Cada tarefa do projeto deverá ser registrada como uma issue no GitHub, contendo título claro, descrição objetiva e associação ao quadro Kanban (ex: RF001 - Cadastrar Paciente - Backend).

2.5. Pull Requests
Antes de aprovar um Pull Request, o grupo deve verificar:

Se o código está funcionando corretamente;

Se não há conflitos com a branch de destino;

Se o padrão de commits foi rigorosamente seguido;

Se a documentação foi atualizada quando necessário;

Se a tarefa está vinculada à issue correspondente.

2.6. Arquivo .gitignore
Utilizado para impedir o envio de arquivos desnecessários ao repositório, como arquivos temporários, caches locais, e logs gerados pelo VS Code ou pelo sistema operacional.

3. Instruções para Devs (Boas Práticas de Codificação)
3.1. Indentar corretamente o código
A indentação organiza visualmente o código e evidencia blocos de comando (if, else, while, for), facilitando a leitura e mitigando erros de escopo.

3.2. Nomear variáveis de maneira intuitiva
Utilize nomes claros e descritivos. Evite variáveis genéricas como x, y ou temp quando não representarem claramente o dado armazenado.

3.3. Evitar condições negativas desnecessárias no if
Sempre que possível, estruture as condicionais de forma positiva, verificando primeiro a regra verdadeira e deixando a alternativa para o else.

3.4. Nomear funções de maneira intuitiva
O nome da função deve indicar claramente a ação realizada (ex: cadastrarPaciente(), calcularRemuneracaoMedica(), validarAtendimento()). Funções booleanas devem indicar verificações claras (ex: pacienteAtivo(), cirurgiaConcluida()).

3.5. Comentar e documentar o código quando necessário
Adicione comentários em trechos cruciais que envolvam regras de negócio complexas, validações financeiras ou integrações específicas. Prefira sempre um código autoexplicativo através de bons nomes.

3.6. Padronizar nomes de constantes (camelCase)
Conforme a diretriz do projeto, as constantes deverão seguir o formato camelCase (letras minúsculas nas iniciais e letras maiúsculas nas palavras compostas subsequentes, sem o uso de caracteres separadores como underlines ou hífens).

Exemplos:

Python
maxTentativasLogin = 3
statusAtendimentoAtivo = "ativo"
valorBaseCirurgiaAlta = 1500.00
limiteDiariasEnfermaria = 30

4. Tecnologias
Frontend
Tecnologia	Versão	Finalidade

JavaScript	???	Interatividade, controle de sessão, permissões de tela e chamadas (fetch).
Backend
Tecnologia	Versão	Finalidade
Python	3.15.2	Linguagem principal para a lógica de negócio do backend.

Banco de Dados
Tecnologia	Versão	Finalidade
MySQL	8.0.44 	Banco de dados relacional para armazenamento seguro e estruturado de pacientes, funcionários, atendimentos e cirurgias.

Ferramentas de Desenvolvimento
Ferramenta	Finalidade
VS Code	IDE principal utilizada no desenvolvimento do projeto.
Git & GitHub	Controle de versão do código-fonte e colaboração em equipe.

5. Organização do Projeto
O repositório está estruturado para garantir a separação clara entre a documentação, a interface de usuário, a API, os testes automatizados e os scripts de suporte:

Plaintext
Hospital-Turing/
├── Documentos/
│   ├── Documento de Requisitos.doc
│   ├── Documento de Requisitos.pdf
│   ├── Prototipação.zip
│   └── Prototipo/
│
├── .gitignore
└── README.md

Descrição dos Diretórios e Arquivos Principais
Documentos/: Armazena os artefatos de requisitos, especificações detalhadas do sistema e arquivos de prototipação da interface.

.gitignore: Configuração de arquivos ignorados pelo versionamento Git.

README.md: Documentação descritiva de apresentação do repositório.

6. Equipe
Davi Fayer Gonçalves
João Vitor da Silva Rodrigues
Rian Moreno Maciel