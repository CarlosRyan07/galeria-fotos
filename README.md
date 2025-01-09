# Galeria de Fotos

Este projeto foi feito apartir de um Desafio de fazer uma aplicação web que permite buscar, visualizar e filtrar imagens da API Pexels. 

Extra: A aplicação também oferece a funcionalidade de alternar entre o modo claro e o modo escuro.

## Link da Aplicação

Você pode acessar a aplicação hospedada [aqui](https://galeria-fotos-neon.vercel.app/).

## Tecnologias Utilizadas

- React
- Axios
- API Pexels
- CSS para estilização
- Vercel para hospedagem

## Funcionalidades

- **Busca de Imagens**: Pesquise por fotos usando palavras-chave.
- **Exibição de Resultados**: As imagens são exibidas em uma galeria com suporte para exibição de erros ou mensagens de carregamento.
- **Responsividade**: A aplicação é responsiva e se adapta a diferentes tamanhos de tela.
- **Modo Claro e Escuro**: Altere entre os modos claro e escuro para uma experiência personalizada.

![Demonstração do Modo Claro e Escuro](.src/assets/modoNoturno.gif)


## Como Rodar o Projeto Localmente

### Requisitos

- Node.js (recomendado a versão 14.x ou superior)
- npm ou yarn
- Criar uma conta no [Pexels](https://www.pexels.com/), pois será necessário gerar uma chave de API

### Passos

1. Clone o repositório:

   ```bash
   git clone hhttps://github.com/CarlosRyan07/galeria-fotos.git
    ```

2. Navegue até o diretório do projeto:

   ```bash
   cd galeria-de-fotos
    ```

3. Instale as dependências:

   ```bash
   npm install
    ```

    ou

    ```bash
   yarn
    ```

4. Crie um arquivo `.env` na raiz do projeto e adicione a chave da API Pexels:

    ```env
    REACT_APP_PEXELS_API_KEY=sua-chave-aqui
     ```

5. Inicie o servidor de desenvolvimento:

    ```bash
    npm start
     ```

    ou

    ```bash
    yarn start
     ```

6. Acesse a aplicação em `http://localhost:3000`.

## 💻 Como Fiz o Deploy para a Vercel

1. Acesse o site da Vercel e faça login (ou crie uma conta, se ainda não tiver).
2. No painel da Vercel, clique em "New Project".
3. Conecte o repositório do GitHub onde o projeto está hospedado.
4. Após a conexão, a Vercel automaticamente irá detectar que o projeto é uma aplicação React e configurará as variáveis de ambiente.
5. Clique em Deploy. Após alguns minutos, o deploy será concluído e você receberá o link da aplicação hospedada.

