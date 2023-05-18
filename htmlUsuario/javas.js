function validarCampos() {
    let campo1 = document.getElementById("password").value;
    let campo2 = document.getElementById("rpassword").value;
    
    if (campo1 !== campo2) {
      alert("Los campos deben ser iguales");
      
      return false;
    }else{
        

        return true;

    }
    
    
  }

 function ocultarDiv(btn) {
      var div = btn.parentElement;
      div.style.display = "none";
    }
  