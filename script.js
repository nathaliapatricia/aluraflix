var listaAnimes = []
listaAnimes [0] = "./assets/animes/swordartonline.png"
listaAnimes [1] = "./assets/animes/bunnygirlsenpai.webp"
listaAnimes [2] = "./assets/animes/shigatsuwakiminouso.jpg"
listaAnimes [3] = "./assets/animes/violetevergarden.jpg"
listaAnimes [4] = "./assets/animes/caroleandtuesday.jpg"
listaAnimes [5] = "./assets/animes/yourname.webp"
listaAnimes [6] = "./assets/animes/otempocomvoce.webp"


var nomesLista = ['Sword Art Online', 'Bunny Girl Senpai', 'Your Lie in April',
'Violet Evergarden', 'Carole and Tuesday', 'Your Name', 'Weathering with You',]


// document.write é utilizado para adicionar codigos html dentro do javascript

document.write('<h2 class="title">' + "Animes favoritos" + '</h2>')

document.write('<div class="bloco">') // Cria uma div onde ficará tanto as imagens quanto os nomes
for ( var i=0; i < listaAnimes.length; i++) {
    document.write('<div class="animes">') // Cria uma div para determinar a area onde ficará os animes
    document.write("<img src =" + listaAnimes[i] + ">") // sessão onde ficará as imagens
    document.write ('<p class="texto">' + nomesLista[i] + '</p>') // Adicionar o nome de cada anime logo abaixo de cada imagem
    document.write ('</div><br>')
}

/*
//Filmes

var listaFilmes = []
listaFilmes [0] = "./assets/filmes/teenwolf.png"
listaFilmes [1] = "./assets/filmes/continenciaaoamor.jpg"
listaFilmes [2] = "./assets/filmes/thoramoretrovao.jpeg"
listaFilmes [3] = "./assets/filmes/traintobusan.jpg"
listaFilmes [4] = "./assets/filmes/exit.jpg"
listaFilmes [5] = "./assets/filmes/avatar.jpg"

var nomesFilmes = ['Teen Wolf', 'Continência ao Amor', 'Thor: Amor e Trovão', 'Train to Busan', 'Exit', 'Avatar']

document.write('<br><h2 class="title">' + "Filmes Favoritos" + '</h2>')

document.write('<div class="bloco">')
for ( var i=0; i < listaFilmes.length; i++) {
  document.write('<div class="filmes">')
  document.write("<img src=" + listaFilmes[i] + ">")
  document.write('<p class="texto">' + nomesFilmes[i] + '</p>')
  document.write ('</div>')
}
*/


/*
document.write('<h1 class="titulo">' +"Series"+'</h1>')
document.write('<div class="container_blocao">')
  for(var i=0; i < listaSeries.length; i++) {
    document.write('<div class="container_series">')
    document.write('<img src='+ listaSeries[i] +'>')
    document.write('<p>'+ listaNomes[i] +'</p>')
    document.write('</div>')
}
document.write('</div>')


*/