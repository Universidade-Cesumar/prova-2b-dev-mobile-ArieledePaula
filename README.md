# Almoxarifado - Enfermagem<br>

Projeto está em andamento README será atualizado e finalizado<br>

## Descrição

Aplicação desenvolvida em React Native para controle de estoque de materiais de um almoxarifado hospitalar.

O sistema permite cadastrar novos materiais e visualizar os itens armazenados através da integração com uma MockAPI.

## Funcionalidades

* Cadastro de materiais
* Validação dos campos de entrada
* Validação de quantidade numérica
* Listagem dos materiais cadastrados
* Atualização automática da lista após cadastro
* Indicador de carregamento durante requisições
* Retirada rápida de estoque diretamente na lista de materiais
* Validação para impedir estoque negativo
* Exclusão de materiais cadastrados
* Atualização automática da lista após retirada de estoque
* Atualização automática da lista após exclusão

## Tecnologias Utilizadas

* React Native
* JavaScript
* MockAPI
* Hooks (useState e useEffect)

## Estrutura da Aplicação

### Campos de Entrada

* Nome do Material
* Quantidade

### Lista de Estoque

Os materiais cadastrados são exibidos em uma FlatList contendo:

* Nome do material
* Quantidade disponível

Além da visualização dos materiais, cada item possui:

* Campo para informar a quantidade a ser retirada
* Botão de baixa de estoque
* Botão de exclusão do material

## Integração com API

A aplicação consome dados da MockAPI através dos métodos:

* GET: busca os materiais cadastrados
* POST: cadastra novos materiais
* PUT: atualiza a quantidade do material após retirada de estoque
* DELETE: remove um material do estoque

## Regras de Negócio

A aplicação possui uma função de validação responsável por impedir operações inválidas de retirada:

* Não permite retirar quantidade maior que o estoque disponível
* Não permite retirar valores negativos
* Não permite retirar valor igual a zero

Função utilizada:

```javascript
export const validarRetirada = (estoqueAtual, quantidadeRetirada) => {
  return (
    quantidadeRetirada > 0 &&
    quantidadeRetirada <= estoqueAtual
  );
};
```

## Test IDs Utilizados

* input-nome
* input-quantidade
* btn-cadastrar
* lista-materiais
* input-retirada
* btn-baixar
* btn-excluir

## Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npx expo start
```

3. Execute no Expo Go ou em um emulador.

## Autor

Projeto desenvolvido para a prova de Programação para Dispositivos Móveis do 5° semestre de ADS utilizando React Native e MockAPI.
