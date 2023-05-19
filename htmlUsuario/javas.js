function validarCampos() {
    let campo1 = document.getElementById("password").value;
    let campo2 = document.getElementById("rpassword").value; 
    
    let error = document.getElementById("error");

    if (campo1 !== campo2) {

      error.style.display = 'inline-block'

      return event.preventDefault()

      
    }else{
      return document.getElementById("registro").action = 'indice.html';
    }
    
  }


 function ocultarDiv(btn) {
      var div = btn.parentElement;
      div.style.display = "none";
    }
  