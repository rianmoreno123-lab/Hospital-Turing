# Regras de Verificação e Análise de Requisitos

**GCC 188 – Engenharia de Software**

Projeto: Hospital Turing

Versão: 1.0 – Novembro de 2026

Equipe: Davi Fayer Gonçalves, João Vitor da Silva Rodrigues e Rian Moreno Maciel.



## 1. Objetivo e fonte

Este documento estabelece os critérios utilizados para verificar a qualidade e a consistência do Documento de Requisitos do sistema Hospital-Turing. As regras apresentadas permitem avaliar se os Requisitos Funcionais (RF) e Requisitos Não Funcionais (RNF) estão descritos de maneira clara, organizada, verificável e coerente com as funcionalidades propostas para o sistema. Cada regra possui um critério mensurável e um procedimento de verificação, permitindo que diferentes integrantes da equipe realizem a análise e obtenham resultados consistentes. As regras de verificação RV1 a RV7 foram fundamentadas nas orientações do Capítulo 1, principalmente nas seções 5.1, 7.2 e 7.3. A regra RV8 considera as diretrizes de elaboração do projeto prático da disciplina. Os números de página apresentados nas regras correspondem à numeração impressa do capítulo.

Livro de referência: MAGELA, Rogério. Engenharia de Software Aplicada: Fundamentos. Alta Books.



## 2. Nomenclatura adotada

- **RF:** Requisito Funcional, identificado pela sigla RF seguida de dois dígitos, em numeração sequencial (RF01, RF02 ... RF17).

- **RNF:** Requisito Não Funcional, identificado pela sigla correspondente, seguida de numeração sequencial.

- **Interfaces:** Prefixo "I_" para interfaces gerais de tela, "IE_" para interfaces que apresentam mensagens de erro e "IS_" para interfaces que apresentam mensagens de sucesso. Os prefixos são seguidos pelo nome da interface em PascalCase, sem espaços.

- **Prioridade:** Cada requisito deve possuir exatamente uma classificação entre Essencial, Importante e Desejável, conforme os níveis definidos no atributo Benefício do livro de referência.

Observação: A identificação dos requisitos não funcionais deverá seguir um padrão único, evitando variações e duplicidades entre as categorias.



## 3. Regras de verificação

Cada regra apresenta um critério mensurável, um procedimento de verificação e a respectiva referência bibliográfica no livro de Magela.

| ID | Regra | Critério mensurável | Como verificar | Fonte | 
| ----- | ----- | ----- | ----- | ----- | 
| **RV1** | **Identificador único** | Todo RF, RNF e RN possui identificação conforme a nomenclatura adotada na seção 2. Nenhum identificador pode estar duplicado ou ser reutilizado após a exclusão de um requisito. | Listar todos os identificadores e conferir o formato e a duplicidade (esperado: 0 identificadores duplicados e 0 fora do padrão). | Cap. 1, seção 7.3.9 (Rastreável para frente), p. 22: requisitos identificados de forma única. | 
| **RV2** | **Um requisito por vez** | O título de cada RF e RNF deve representar uma única funcionalidade ou característica. O nome de cada RF deve possuir apenas um verbo principal no infinitivo. | Analisar os títulos dos requisitos, verificando a existência de múltiplas funcionalidades ou verbos principais (esperado: 1 funcionalidade por requisito). | Cap. 1, seção 7.2.1 (Defina somente um requisito por vez) e seção 7.2.2, p. 18. | 
| **RV3** | **Frases curtas no resumo** | O resumo de cada RF deve apresentar uma única frase, com no máximo 35 palavras, descrevendo sua funcionalidade de maneira objetiva. | Contar as palavras e verificar a quantidade de pontos finais no campo Resumo de cada RF (esperado: 1 frase e até 35 palavras). | Cap. 1, seção 7.2.3 (Evite frases grandes), p. 18. | 
| **RV4** | **Vocabulário fechado** | Todo termo técnico do domínio hospitalar utilizado nos requisitos deve possuir definição correspondente no Glossário do Documento de Requisitos. Cada conceito deve manter uma nomenclatura consistente. | Identificar os termos técnicos utilizados nos requisitos e conferir sua definição no Glossário (esperado: 100% dos termos técnicos definidos). | Cap. 1, seção 7.2.4 (Vocabulário fechado), p. 18, e seção 7.3.5 (Consistente), p. 21. | 
| **RV5** | **Requisito não funcional verificável** | Todo RNF deve apresentar critérios objetivos que permitam sua validação. São aceitos parâmetros como tempo de resposta, quantidade de requisições simultâneas, versões de tecnologias e códigos HTTP. | Conferir as métricas e os procedimentos de teste descritos em cada RNF (esperado: 100% dos RNFs com critérios objetivos de verificação). | Cap. 1, seção 7.3.4 (Verificável), p. 21. | 
| **RV6** | **Rastreável para frente** | Todo RF deve possuir: (a) um caso de uso correspondente; (b) pelo menos uma interface identificada no campo Interfaces; (c) representação das entidades relacionadas no Dicionário de Dados. | Conferir cada RF nos diagramas de casos de uso, na documentação das interfaces e no Dicionário de Dados (esperado: 100% de correspondência nos três elementos). | Cap. 1, seção 7.3.9, p. 22; seção 4, p. 9-10 (Caso de uso representa requisito macro). | 
| **RV7** | **Prioridade definida** | Todo RF e RNF deve possuir exatamente uma prioridade selecionada entre Essencial, Importante e Desejável. | Conferir as marcações de prioridade nas tabelas de requisitos funcionais e não funcionais (esperado: exatamente 1 prioridade por requisito). | Cap. 1, seção 5.1 (Benefício), p. 11. | 
| **RV8** | **Pré-condição com login e tela** | Todo RF que exige autenticação deve informar, na pré-condição, que o usuário precisa estar autenticado e identificar a tela inicial correspondente ao seu perfil, conforme as interfaces documentadas. | Conferir as pré-condições de cada RF e comparar os nomes das telas com as interfaces existentes no protótipo (esperado: 100% de conformidade nos requisitos que exigem autenticação). | Diretriz de alinhamento prático de Engenharia de Software (tarefa da disciplina). | 



## 4. Como aplicar

1. **Divisão de responsabilidades:** Cada integrante realizará a verificação dos requisitos sob sua responsabilidade, considerando a divisão de atividades estabelecida pela equipe.

2. **Matriz de avaliação:** Para cada requisito e regra aplicável, será registrada a classificação "✓" (atende ao requisito) ou "—" (não atende ao requisito) na tabela de avaliação.

3. **Correção e re-verificação:** Os requisitos identificados como "—" deverão ser corrigidos no Documento de Requisitos, sendo submetidos novamente aos critérios de verificação.

4. **Revisão cruzada:** Conforme recomendado no livro de referência (seção 7.3, p. 19), a análise final de consistência deverá ser realizada por um integrante diferente daquele que elaborou o requisito avaliado.

5. **Manutenção da documentação:** Sempre que forem realizadas alterações ou inclusões no Documento de Requisitos, as regras de verificação deverão ser aplicadas novamente aos itens modificados.



## 5. Tabela de avaliação

| Requisito | RV1 | RV2 | RV3 | RV4 | RV5 | RV6 | RV7 | RV8 | 
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | 
| RF01 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF02 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF03 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF04 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF05 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF06 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF07 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF08 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF09 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF10 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF11 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF12 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF13 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF14 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF15 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF16 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RF17 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | 
| RNF01 – Portabilidade e Compatibilidade | ✓ | ✓ | — | ✓ | ✓ | — | ✓ | — | 
| RNF02 – Confiabilidade e Integridade | ✓ | ✓ | — | ✓ | ✓ | — | ✓ | — | 
| RNF03 – Desempenho | ✓ | ✓ | — | ✓ | ✓ | — | ✓ | — | 
| RNF04 – Segurança e Controle de Acesso | ✓ | ✓ | — | ✓ | ✓ | — | ✓ | — | 

**Legenda**

**✓:** o requisito cumpre integralmente o critério estabelecido.

**—:** a regra não se aplica ao requisito.
