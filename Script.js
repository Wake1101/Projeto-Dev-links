function toggleMode() {
  const html = document.documentElement

  //codigo reduzido utilizando a função toggle ao invés do if
  html.classList.toggle("light")

  //pegando a tag da imagem
  const img = document.querySelector("#profile img")
  //subtituindo a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se não tiver light mode manter a mesma
    img.setAttribute("src", "./assets/avatar.png")
  }
}
