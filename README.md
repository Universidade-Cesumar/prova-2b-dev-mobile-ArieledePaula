# Almoxarifado - Enfermagem

Projeto desenvolvido em **React Native** para gerenciamento de materiais de um almoxarifado hospitalar, utilizando uma **MockAPI** para armazenamento dos dados.

<img width="1362" height="634" alt="image" src="https://github.com/user-attachments/assets/cd00009a-0dbe-4241-90e9-7a3b2fde6eb7" />

## Descrição

A aplicação permite cadastrar, consultar, pesquisar, retirar e excluir materiais do estoque de forma simples e intuitiva. Também possui validações para evitar operações inválidas, tratamento de erros de conexão e indicadores visuais para alertar quando um material está com estoque crítico.

## Funcionalidades

* Cadastro de novos materiais
<img width="1354" height="178" alt="image" src="https://github.com/user-attachments/assets/29f037bf-c03a-4cfd-925d-a1aea65b6924" />

* Validação de campos obrigatórios
<img width="1361" height="322" alt="image" src="https://github.com/user-attachments/assets/48d26a4f-547e-4191-8c5f-f6a550ab6ae7" />

* Validação de quantidade numérica
<img width="1350" height="196" alt="image" src="https://github.com/user-attachments/assets/edecf859-74b0-4fa5-98f0-25f0e2a66fe9" />
<img width="1365" height="163" alt="image" src="https://github.com/user-attachments/assets/b1635180-14ec-4e40-b72b-d9269e14cab4" />

* Listagem automática dos materiais cadastrados

https://github.com/user-attachments/assets/be55066e-3c0f-4746-a6b2-8a42325cbc2c


* Atualização automática da lista após cadastro
  
https://github.com/user-attachments/assets/ad218885-a2dd-4839-a232-cac55cfadefd



* Indicador de carregamento durante as requisições
* Pesquisa de materiais em tempo real

https://github.com/user-attachments/assets/1ba4a996-3e36-4911-910e-4acabe15a608

* Totalizador da quantidade de materiais exibidos na pesquisa
<img width="1354" height="109" alt="image" src="https://github.com/user-attachments/assets/c8627b8f-ec1e-4aac-8145-f28631ecbf7e" />


* Retirada de materiais diretamente da lista
<img width="1325" height="130" alt="image" src="https://github.com/user-attachments/assets/6dbf762e-956d-4e9d-91e7-0b2c8dd4c92b" />

* Validação para impedir estoque negativo
<img width="1323" height="154" alt="image" src="https://github.com/user-attachments/assets/b5efcb0a-2f7d-49a4-87a0-7ac05ea65ee6" />
<img width="1361" height="157" alt="image" src="https://github.com/user-attachments/assets/d6743cae-921d-4c2c-8b3b-7c6534c7a09b" />

* Exclusão de materiais cadastrados
<img width="1354" height="72" alt="image" src="https://github.com/user-attachments/assets/201b276f-3118-40c4-b07b-8f57387a9301" />

* Atualização automática da lista após retirada e exclusão

https://github.com/user-attachments/assets/11c8a186-acb1-4cc8-b3d7-758ef8e013f3

* Indicador visual de estoque crítico para materiais com quantidade inferior a 10 unidades
<img width="1326" height="174" alt="image" src="https://github.com/user-attachments/assets/26a88c18-f979-4f71-804c-ee7614906389" />
* Tratamento de erros de conexão com mensagens ao usuário

## Tecnologias Utilizadas

* React Native
* JavaScript
* MockAPI
* Hooks (useState e useEffect)

## Estrutura da Aplicação

### Cadastro
<img width="1354" height="178" alt="image" src="https://github.com/user-attachments/assets/29f037bf-c03a-4cfd-925d-a1aea65b6924" />
O usuário pode informar:

* Nome do material
* Quantidade em estoque

Após o cadastro, a lista é atualizada automaticamente.

### Pesquisa
<img width="1355" height="74" alt="image" src="https://github.com/user-attachments/assets/d3033788-61b8-4934-ba30-ec01326c73e4" />
A aplicação possui um campo de pesquisa que filtra os materiais em tempo real conforme o usuário digita.

Também é exibido um totalizador informando quantos materiais estão sendo exibidos na pesquisa.

### Lista de Estoque


https://github.com/user-attachments/assets/b31e5a00-f124-438a-bfd7-000a7deac2ff


Cada material apresenta:

* Nome
* Quantidade disponível
* Campo para informar a quantidade de retirada
* Botão para baixar estoque
* Botão para excluir material

Quando a quantidade disponível é inferior a **10 unidades**, o item recebe uma estilização diferenciada para indicar **estoque crítico**.

## Integração com API

A aplicação utiliza uma MockAPI consumindo os seguintes métodos HTTP:

* GET — Consulta dos materiais
* POST — Cadastro de materiais
* PUT — Atualização do estoque após retirada
* DELETE — Exclusão de materiais

## Regras de Negócio

A aplicação realiza validações para garantir a consistência dos dados.

### Cadastro

* Não permite campos vazios.
* Não permite quantidade diferente de número.

### Retirada de Estoque

* Não permite retirar quantidade maior que o estoque.
* Não permite retirar quantidade igual a zero.
* Não permite retirar valores negativos.

Função utilizada:

```javascript
export const validarRetirada = (estoqueAtual, quantidadeRetirada) => {
  return quantidadeRetirada > 0 &&
         quantidadeRetirada <= estoqueAtual;
};
```

## Tratamento de Erros

Todas as operações de comunicação com a API utilizam `try/catch`.

Em caso de falha na conexão, a aplicação exibe uma mensagem de erro ao usuário, evitando encerramentos inesperados.

## Test IDs Utilizados

* input-nome
* input-quantidade
* btn-cadastrar
* input-busca
* total-itens
* lista-materiais
* input-retirada
* btn-baixar
* btn-excluir

Itens com estoque crítico recebem:

```
accessibilityLabel="estoque-critico"
```

## Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Execute o projeto:

```bash
npx expo start
```

3. Abra no Expo Go ou em um emulador Android/iOS.

## Autor

Projeto desenvolvido para a disciplina de **Programação para Dispositivos Móveis**, do 5º semestre de Análise e Desenvolvimento de Sistemas (ADS), utilizando React Native e MockAPI.
