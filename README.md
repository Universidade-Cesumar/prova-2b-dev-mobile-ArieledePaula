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

## Integração com API

A aplicação consome dados da MockAPI através dos métodos:

* GET: busca os materiais cadastrados
* POST: cadastra novos materiais

## Test IDs Utilizados

* input-nome
* input-quantidade
* btn-cadastrar
* lista-materiais

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
