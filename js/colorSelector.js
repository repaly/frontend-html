var colors = ["red", "black", "green", "white", "purple", "yellow"];   //Идея в том, что при появлении новых цветов их можно вносить в скрипт, чтобы каждый раз не менять верстку вручную.
var box = { // также можно размер боксов менять, мало ли. Эджайл, все дела
  height : 50,
  width : 50
};
var flexContainer = document.querySelector(".flex-container");


for (i = 0; i < flexContainer.offsetWidth / box.width - 3; i++) { // высчитывает ширину контейнера и добавляет боксы по цветам.

  // Понятное дело, что надо ещё подумать над overflow боксов, чтобы показать все цвета
  var boxElement = document.createElement("input");
  boxElement.setAttribute("type", "checkbox");
  boxElement.style.width = box.width + "px";
  boxElement.style.height = box.height + "px";
  boxElement.style.color = colors[i]; // и тут я понял, во что ввязался. Чтобы поменять цвет у стандартного чекбокса, нужно делать свой кастомный либо искать плагин.
  // вернусь к этому позже, если успею доверстать сайт
  boxElement.style.display = "inline-block";
  boxElement.style.marginRight = "1rem";
  flexContainer.appendChild(boxElement)
}
