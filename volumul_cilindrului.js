function volum() {
    var raza = document.getElementById("#raza").value;
    var inaltimea = document.getElementById("#inaltimea").value;
    document.getElementById("#display").innerText = Math.PI*Math.pow(raza, 2)*inaltimea;
  }