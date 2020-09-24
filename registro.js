var database = firebase.database();

function registrar(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('contraseña').value;
   


        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(result){
        window.alert("Usuario registrado exitosamente")
        window.location.href="Salas.html"
        

        })
        .catch(function(error) {
          
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
         window.alert(errorCode);
            // ...
          });
         
        // ...
}
