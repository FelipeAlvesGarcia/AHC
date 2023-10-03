/*//Medidas
let viewportWidth = window.innerWidth || document.documentElement.clientWidth
let boadireita = (33 * viewportWidth) / 100
let carrovw = (74 * viewportWidth) / 100
//
*/


//API
let urlapi = "https://restcountries.com/v3.1/all"

var container = document.getElementById("container")

fetch(urlapi)
  .then(resposta=>resposta.json())
  .then(dados=>{
    console.log(dados)
    for (i = 0; i <= 249; i++) 
    {
      if (i != 129 && i!= 83)
      {
        var div1 = document.createElement("div")
        container.appendChild(div1)

        var div2 = document.createElement("div")
        div1.appendChild(div2)

        var titulo = document.createElement("p")
        titulo.textContent = dados[i].name.common
        div2.appendChild(titulo)

        var oficial = document.createElement("p")
        oficial.textContent = "Nome Oficial: " + dados[i].name.official
        div2.appendChild(oficial)

        var imagem = document.createElement("img")
        imagem.src = dados[i].flags.png
        div2.appendChild(imagem)

        var div10 = document.createElement("div")
        div1.appendChild(div10)

        var div11 = document.createElement("div")
        div10.appendChild(div11)

        var area = document.createElement("p")
        area.textContent = "ÁREA: " + dados[i].area + "km²"
        div11.appendChild(area)

        if (i != 44 && i != 87 && i != 91 && i != 152)
        {
          var capital = document.createElement("p")
          capital.textContent = "CAPITAL: " + dados[i].capital[0]
          div11.appendChild(capital)
        }
        else
        {
          var capital = document.createElement("p")
          capital.textContent = "CAPITAL: Não Possui"
          div11.appendChild(capital)
        }

        var carros = document.createElement("p")
        carros.textContent = "CARROS: " + dados[i].car.side
        div11.appendChild(carros)

        var mapa = document.createElement("a")
        mapa.textContent = "MAPA"
        mapa.href = dados[i].maps.googleMaps
        div11.appendChild(mapa)

        var div12 = document.createElement("div")
        div10.appendChild(div12)

        var continente = document.createElement("p")
        continente.textContent = "CONTINENTE: " + dados[i].continents[0]
        div12.appendChild(continente)

        if (i != 44)
        {
          var lingua = document.createElement("p")
          linguas = Object.keys(dados[i].languages)
          lingua.textContent = "LINGUA(s): " + linguas
          div12.appendChild(lingua)
        }
        else
        {
          var lingua = document.createElement("p")
          lingua.textContent = "LINGUA: Não Possui"
          div12.appendChild(lingua)
        }

        var popu = document.createElement("p")
        popu.textContent = "POPULAÇÃO: " + dados[i].population
        div12.appendChild(popu)

        var sigla = document.createElement("p")
        sigla.textContent = "SIGLA: " + dados[i].cca2
        div12.appendChild(sigla)

        var div13 = document.createElement("div")
        div10.appendChild(div13)

        var sema = document.createElement("p")
        sema.textContent = "COMEÇO DA SEMANA: " + dados[i].startOfWeek
        div13.appendChild(sema)

        var regi = document.createElement("p")
        regi.textContent = "REGIÃO: " + dados[i].region
        div13.appendChild(regi)

        var sregi = document.createElement("p")
        sregi.textContent = "SUB REGiÃO: " + dados[i].subregion
        div13.appendChild(sregi)

        var inde = document.createElement("p")
        inde.textContent = "INDEPENDÊNCIA: " + dados[i].independent
        div13.appendChild(inde)

        div1.id = "div1"
        div2.id = "div2"
        titulo.id = "titu"
        oficial.id = "oficial"
        imagem.id = "imagem"
        div10.id = "div10"
        div11.id = "div11"
        div12.id = "div12"
        div13.id = "div13"
      }
    }
})
//







// Pesquisa
const pesqbotao = document.getElementById("pesqbotao")
const pesquisar = document.getElementById("pesquisar")
const resultados = document.getElementById("resultados")

pesqbotao.addEventListener("click", () => {
  const termoPesquisa = pesquisar.value.toLowerCase() // Convertendo para minúsculas

  fetch(urlapi)
      .then((resposta) => resposta.json())
      .then((dados) => {
          resultados.innerHTML = "" // Limpa os resultados anteriores

          for (let i = 0; i < dados.length; i++) {
              const nomePais = dados[i].name.common.toLowerCase() // Convertendo para minúsculas
              if (nomePais.includes(termoPesquisa) && i != 129 && i != 83) 
              {
                container.style.display = "none"

                const divPais = document.createElement("div")
                resultados.appendChild(divPais)

                const div2P = document.createElement("div")
                divPais.appendChild(div2P)

                const tituloP = document.createElement("p")
                tituloP.textContent = dados[i].name.common
                div2P.appendChild(tituloP);
                
                const oficialP = document.createElement("p")
                oficialP.textContent = "Nome Oficial: " + dados[i].name.official
                div2P.appendChild(oficialP)

                const imagemP = document.createElement("img")
                imagemP.src = dados[i].flags.png
                div2P.appendChild(imagemP)
                
                var div10P = document.createElement("div")
                divPais.appendChild(div10P)

                var div11P = document.createElement("div")
                div10P.appendChild(div11P)

                var areaP = document.createElement("p")
                areaP.textContent = "ÁREA: " + dados[i].area + "km²"
                div11P.appendChild(areaP)

                if (i != 44 && i != 87 && i != 91 && i != 152)
                {
                  var capitalP = document.createElement("p")
                  capitalP.textContent = "CAPITAL: " + dados[i].capital[0]
                  div11P.appendChild(capitalP)
                }
                else
                {
                  var capitalP = document.createElement("p")
                  capitalP.textContent = "CAPITAL: Não Possui"
                  div11P.appendChild(capitalP)
                }

                var carrosP = document.createElement("p")
                carrosP.textContent = "CARROS: " + dados[i].car.side
                div11P.appendChild(carrosP)

                var mapaP = document.createElement("a")
                mapaP.textContent = "MAPA"
                mapaP.href = dados[i].maps.googleMaps
                div11P.appendChild(mapaP)

                var div12P = document.createElement("div")
                div10P.appendChild(div12P)

                var continenteP = document.createElement("p")
                continenteP.textContent = "CONTINENTE: " + dados[i].continents[0]
                div12P.appendChild(continenteP)

                if (i != 44)
                {
                  var linguaP = document.createElement("p")
                  linguasP = Object.keys(dados[i].languages)
                  linguaP.textContent = "LINGUA(s): " + linguasP
                  div12P.appendChild(linguaP)
                }
                else
                {
                  var linguaP = document.createElement("p")
                  linguaP.textContent = "LINGUA: Não Possui"
                  div12P.appendChild(linguaP)
                }

                var popuP = document.createElement("p")
                popuP.textContent = "POPULAÇÃO: " + dados[i].population
                div12P.appendChild(popuP)

                var siglaP = document.createElement("p")
                siglaP.textContent = "SIGLA: " + dados[i].cca2
                div12P.appendChild(siglaP)

                var div13P = document.createElement("div")
                div10P.appendChild(div13P)

                var semaP = document.createElement("p")
                semaP.textContent = "COMEÇO DA SEMANA: " + dados[i].startOfWeek
                div13P.appendChild(semaP)

                var regiP = document.createElement("p")
                regiP.textContent = "REGIÃO: " + dados[i].region
                div13P.appendChild(regiP)

                var sregiP = document.createElement("p")
                sregiP.textContent = "SUB REGiÃO: " + dados[i].subregion
                div13P.appendChild(sregiP)

                var indeP = document.createElement("p")
                indeP.textContent = "INDEPENDÊNCIA: " + dados[i].independent
                div13P.appendChild(indeP)

                divPais.id = "div1"
                div2P.id = "div2"
                tituloP.id = "titu"
                oficialP.id = "oficial"
                imagemP.id = "imagem"
                div10P.id = "div10"
                div11P.id = "div11"
                div12P.id = "div12"
                div13P.id = "div13"
              }
          }
      })
})
//

//recarregar
const recarregar = document.getElementById("reca")
let elementos = document.getElementsByClassName("pais")

recarregar.addEventListener("click", function (){
  location.reload()
})
//

//Menu Sanduiche
const botao = document.getElementById('botaome')
const menu = document.getElementById('menu')
const main = document.querySelector("main")
const header = document.querySelector("header")
const footer = document.querySelector("footer")

botao.addEventListener("click", function() {
  if (menu.style.transform === 'translateX(0vw)')
  {
    menu.style.transform = 'translateX(35.1vw)'
    botao.style.transform = 'translateX(0vw)' + 'rotate(0deg)'
    main.style.opacity = 1
    header.style.opacity = 1
    footer.style.opacity = 1
  }
  else
  {
    menu.style.transform = 'translateX(0vw)'
    botao.style.transform = 'translateX(-27.5vw)' + 'rotate(180deg)'
    main.style.opacity = 0.2
    header.style.opacity = 0.2
    footer.style.opacity = 0.2
    botao.style.opacity = 1
  }
  menu.addEventListener("mouseleave", function() {
    if (menu.style.transform === 'translateX(0vw)')
    {
      menu.style.transform = 'translateX(35.1vw)'
      botao.style.transform = 'translateX(0vw)' + 'rotate(0deg)'
      main.style.opacity = 1
      header.style.opacity = 1
      footer.style.opacity = 1
    }
  })
});
//