function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //tem que pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver em modo normal, manter a iamgem
    img.setAttribute("src", "./assets/avatar.png")
  }
}
