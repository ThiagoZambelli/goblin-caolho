![Alt text](src/componentes/Banner/assets/banner.png)

&nbsp;

<div align="center">

![Alt text](src/assets/logoLithtleZ.svg) 

&nbsp;

---

&nbsp;

</div>


<img align="left" width="40%" style="margin-top:-20px" src="./src/assets/eu.png">

&nbsp;
&nbsp;

<div dsplay="inline-block">

<h1 align="justify">Goblin Caolho</h1>
<h2 align="justify">Feito por : Thiago Zambelli 
    <a href="https://www.linkedin.com/in/thiagozambelli">
        <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
    </a>
</h2>
<h3 align="justify">Projeto faz parte da plataforma LithtleZ, simulando um e-commerce de itens magicos.</h3>
 
  

</div>

- [Projeto](#projeto)
- [Problemas e Soluções](#problemas__solucoes)

&nbsp;

---

# Projeto -> <div id='projeto'></div>
> O projeto consiste em uma das aplicações da plataforma para jogadores de RPG, onde é gerado uma loja virtual para exposição e controle de itens magicos para campanhas de RPG, ligando-se a outras aplicações para formar um grade ecossistema.

## Criação do projeto ->
> O Projeto foi criado com o comando `npx create-react-app --template typescript react-typescript --use-npm`, onde o `create-react-app` criou a base do projeto, `--template typescript react-typescript` setou o tamplate de typescript e o `--use-npm` setou o npm como padrao do projeto.

## Recoil ->
> Com o comando `npm i recoil` foi intalado o React Recoil, que servira para lidar com os estados globais da aplicação.

## React-Icons->
> Com o comando `npm i react-icons` foi instalado o pacote de icones que sera usado no projeto.

## React-router-dom ->
> Com o comando `npm i react-router-dom`, foi instalado o Router Dom, para lidar com o sistema de SPA e controle de rotas.

## SASS ->
> Com o comando `npm i SASS`, foi configurado o SASS para a sua utilização durante o desenvolvimento do projeto.

## Normalize ->
> Com o comando `npm install --save normalize.css` e posteriormente sua importação no index do projeto, foi intalado o reset.css utilizado na aplicação, o Normalize.

&nbsp;

---

# Problemas e Soluções -> <div id='problemas__solucoes'></div>

## Problema com atom `objeto`
> Na criação do atom de um objeto para criar os nomes de jogador e personagem estava gerando um erro de typagem pois foi passado como tipo do atomo `object`. Para solucionar, eu criei uma ´interface´ para o atom, passando as chaves e seus tipos e depois passando como tipagem do atom a interface.S

## Suavisando a renderização de componentes:
> para fazer isso foi passado uma `key` ao componente e posterior mente foi colocado em seu `CSS`:
  ~~~css
      opacity: 0;
      animation: fadeIn 1s ease-in-out forwards;

      @keyframes fadeIn {
          from {
              opacity: 0;
          }

          to {
              opacity: 1;
          }
      }
  ~~~

> Assim a animação é exxecutada sempre que o valor do componente muda

> A propriedade `animation` aplica uma animação ao elemento. Nesse caso, a animação é chamada de `fadeIn`. O valor `1s` define a duração da animação, que é de 1 segundo. O valor `ease-in-out` especifica a curva de aceleração da animação, começando devagar, acelerando no meio e diminuindo novamente no final. O valor `forwards` faz com que o estado final da animação seja mantido após a conclusão.

## Re-renderização desnecessaria de icones do `react-icons`:
> Para corrigir a re-renderização desnecessaria foi utilizado o hook `useMemo` que tem como primeiro parametro uma função anonima retornando o icone e como segundo paramtro um array com os elemntos que poderim disparar a re-renderização caso fosse necessario.
  - E.X:
  ~~~JavaScript
    const icone = useMemo(() => <Icone />, [])
  ~~~

## Evitando carregamento desnecessario:
> Para evitar o carregamento desnecessario de paginas que nem foram acessadas ainda, utilizamos o `lazy` somado ao `Suspense`, onde o lazy é um metodo do proprio React para fazer a importação lenta de componentes, ou seja, importa somente quando o componente for chamado. E o `Suspense` é um componente do proprio React que funciona como uma "Tela de carregamento", ele é o que vai ser exibido enquanto o import do `lazy` é feito.
  ~~~JavaScript
      // Aqui vemos uma importação com o lazy, onde ele recebe uma função anonima com um import
      const ComponenteExemplo = lazy(() => import('exemplos/ComponenteExemplo'));


      // Aqui vemos o suspense que recebe como fallback o que sera exibido enquanto carrega
      <Suspense fallback={<Carregando />}>
            <Routes>                
                <Route path='*' element={<ComponenteExemplo />} />
            </Routes>
        </Suspense>
  ~~~