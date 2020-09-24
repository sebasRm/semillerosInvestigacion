


var database = firebase.database();

function google()
{


 window.alert('pemlo');

  var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

    
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

   
      // ...
    });
  

}


function registrar(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('contraseña').value;
   


        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(result){
        window.alert("Usuario registrado exitosamente")
       
        

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






function login()
{
    var correo = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;

    firebase.auth().signInWithEmailAndPassword(correo, contraseña).
    then(function(result)
    {
      window.alert("has iniciado sesion")
      window.location.href="Salas.html"
    })

    
    .catch(function(error) 
    {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorCode);
       
        // ...
      });
     

}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

  
   
    // User is signed in.
  } 
  else {
    // No user is signed in.
    window.location.href="Recepcion.html"
   
  }
});

  var miApp={};
  function cerrarSesion()
  {

    firebase.auth().signOut();
    window.alert("has cerrado sesión")
    window.location.href="Recepcion.html"
    user=null;
    delete user;
     
      // Sign-out successful.
  }
  
  miApp.cerrarSesion=cerrarSesion;


