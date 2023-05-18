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

  function redirect() {
    if (validarCampos==true) {
        location.href="indice.html"
    }else{
        location.href="registro.html"
    }
  }
