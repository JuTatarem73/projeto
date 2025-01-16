function toggleMode() {

  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector ("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src','./assets/avatar-light.png')
    img.setAttribute('alt','foto do maykbrito usando um óculos preto e casaco cinza, sorrindo num fundo azul')
  } else {
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute('alt','foto do maykbrito usando um óculos transparente e camiseta preta, sorrindo num fundo amarelo')
  }

}