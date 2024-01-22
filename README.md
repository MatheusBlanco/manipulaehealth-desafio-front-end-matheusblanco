# Readme

## Objetivos

Este projeto tem como objetivo servir de avaliação técnica para vaga de frontend pleno na empresa [WeCode](https://www.wecodes.com.br/). O mesmo é uma re-imaginação do aplicativo _Deezer_, que tem como objetivo testar os conhecimentos práticos do aplicante.

### Funcionalidades

A aplicação foi estruturada com duas principais funcionalidades em mente. São elas:

- Tela inicial, com busca e listagem de músicas e;
- Tela de favoritos.

### Tela inicial:

![Tela inicial](/public/tela_inicial.png "Tela inicial")

Página inicial da aplicação, conta com as funcionalidades de listagem das músicas mais tocadas do momento, busca de músicas na _API_ aberta do _Deezer_ a partir de _input_ de usuário. A listagem conta com interações nos botões de cada linha, tais como tocar a pausar prévia da música, adicionar ou retirar a música dos favoritos e abrir a música no _Deezer_ a partir de _url_ apropriada.

### Tela de favoritos:

![Tela de favoritos](/public/favoritos.png "Tela de favoritos")

Segunda página da aplicação, com as funcionalidades interativas da tela inicial, com exceção da busca por músicas.

## Tecnologias

A aplicação em questão foi feita com o _framework_ _Next.JS_, criado para a biblioteca _ReactJS_. Utiliza-se o mesmo para facilidade de roteamento, criação de páginas e renderização em servidor das páginas, diminuindo o impacto que o mesmo tem para o _client_ da aplicação. Além de _Next.JS_, foram utilizados os seguintes pacotes e bibliotecas para facilitação da construção:

- _TypeScript_: _Superset_ do _JavaScript_ que permite tipagem, mostrando erros de compilação no código criado e garantindo que os dados enviados não se alterem de seu formato indicado;
- _Axios_: o pacote mais famoso para realização de _promises_ e requisições HTTP para a linguagem _JavaScript_;
- _Styled Components_: Pacote para estilização _CSS_, que permite a inserção de _props_ e lógica de código para estilos dinâmicos;
- _React Icons_: Biblioteca com vasta gama de ícones de fácil configuração e utilização;
- _Redux_: Pacote de gerenciamento de estado, que permite a criação de estados globais, de maneira localizada e previsível;
- _Next-PWA_: Pacote que permite configuração de funcionalidades _PWA_ na aplicação _Next.JS_;
- _Jest_: Um dos pacotes mais famosos para criação de testes automatizados em _JavaScript_ e;
- _React Testing Library_: Biblioteca com _APIs_ de fácil uso para testagem de aplicações _React_.

## Onde e como rodar o projeto

A aplicação em questão foi criada para ser utilizada em navegadores modernos, entretanto a mesma pode ser instalada como um aplicativo para dispositivos _mobile_ ou _desktop_ a partir da configuração _PWA_ inserida no projeto.

## Arquitetura de código e estrutura de pastas

![Pasta raíz](/public/src_folder.png "Pasta raíz")

A pasta raíz do projeto é baseada em configuração inicial de um projeto _Next.JS_. Todo o código das telas e componentes se encontra na pasta _src_.

![Pasta SRC](/public/src_contents.png "Pasta SRC")

A pasta _src_ contém o código da aplicação, sendo separada nas seguintes subpastas:

### Pasta _components_

![Pasta components](/public/components_folder.png "Pasta components")

A pasta _components_ possui os componentes utilizados em mais de uma tela ou funcionalidade. Cada componente possui uma pasta própria, contendo um arquivo _index.tsx_, para renderização do _JSX_ de cada componente, _styles.ts_ para declaração de cada estilo necessário para criação do componente e uma pasta _**tests**_, onde os testes unitários do componente são definidos.

### Pasta _features_

![Pasta features](/public/features_folder.png "Pasta features")

A pasta _features_ possui as views individuais do projeto. Foi criada para que se pudesse manter uma arquitetura de _micro-frontends_, de maneira a isolar cada trecho de código. Cada feature possui uma pasta própria, contendo um arquivo _index.tsx_, para renderização do _JSX_ da _feature_ principal, uma pasta _components_ para a criação dos componentes únicos de cada _feature_ e uma pasta _interfaces_ para definição da tipagem utilizada apenas na _feature_ em questão.

### Pasta _lib_

![Pasta lib](/public/lib_folder.png "Pasta lib")

A pasta _lib_ possui as declarações dos _reducers_ e _slices_ utilizados para a configuração dos estados globais da aplicação, a partir do _Redux_. A mesma possui sua própria pasta _interfaces_, uma pasta _slices_, onde são definidos os estados iniciais e funções de manipulação, o arquivo _Provider.tsx_, que irá englobar toda a aplicação e dar acesso aos estados, e um arquivo _store.ts_, que define e exporta os reducers.

### Pasta _pages_

![Pasta pages](/public/pages_folder.png "Pasta pages")

A pasta _pages_ possui os índexes de cada página, os quais chamam suas respectivas _features_, sendo que a página principal (rota '/') está declarada no arquivo _index.tsx_. Também possui os arquivos padrão do _Next.JS_, _\_app.tsx_ e _\_document.tsx_, necessários para configuração e compilação das páginas principais.

### Demais pastas

- _hooks_: Define os _hooks_ customizados da aplicação;
- _services_: Define a função de chamada de _API_;
- _styles_: Define os estilos utilizados globalmente;
- _utils_: Coleta e exporta funções utilizadas em variados componentes ou _features_.

## _API_ e integração _Backend_

Como requisito de aceitação, a aplicação deveria se conectar à _API_ aberta do [_Deezer_](https://developers.deezer.com/api/explorer?url=chart), afim de buscar e mostrar dados. Por isso, a aplicação não possui um _backend_ próprio, utilizando a _API_ do _Deezer_ no lugar.

Duas rotas são consumidas, são elas:

- [chart](https://api.deezer.com/chart), rota que lista as músicas, artistas, playlists e álbuns mais famosos do momento. Dessa rota, a lista de músicas mais tocadas é capturada e mostrada ao usuário;
- [search](https://api.deezer.com/search?q=), rota utilizada para buscar músicas específicas, a partir de termos como nome da música, artista ou álbum.

As rotas são utilizadas no SSR (_Server Side Rendering_) do projeto, a partir da função _getServerSideProps_, nativa do _Next.JS_.

## Testes

Foram criados dois tipos de testes automatizados:

- Testes unitários, que testam a renderização de determinados componentes da aplicação de acordo com condições específicas, bem como variações a partir de interações do usuário, e;
- Testes de integração, que testam a interação do usuário com funcionalidades específicas. Estes testes não foram completados e podem não funcionar corretamente, pois até o momento de realização desta seleção, o autor não possuía experiência e conhecimento suficientes para a criação de tais testes.

## Como rodar o projeto

1. Clone o repositório a partir desta [_url_](https://github.com/MatheusBlanco/manipulaehealth-desafio-front-end-matheusblanco);
2. Rode o comando _yarn_ ou _npm install_ para instalação de dependências;
3. Rode o comando _yarn dev_ ou _npm run dev_ para compilação em modo de desenvolvedor;
4. Rode o comando _yarn build_ ou _npm run build_ para compilação em modo de produção;
5. Caso queira rodar os testes, rode o comando _yarn test_ ou _npm run test_.
