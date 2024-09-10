
function revelar() {

    let corazón = `
     <div class="heart"></div>`
  
  
    document.getElementById("love").innerHTML += corazón;
  }
  
  function ocultar() {
    document.getElementById("love").innerHTML = "";
}