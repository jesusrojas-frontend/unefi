app.controller("AutenCtrl", function($scope, Auth, $window){
//A network error (such as timeout, interrupted connection or unreachable host) has occurred.
  $scope.sesion = function (usuario) {
    Auth.sesion(usuario).then(function (){
      console.log("Sesion iniciada exitosamente!");
      $window.location.hash = '/';
      var user = firebase.auth().currentUser;
      user.providerData.forEach(function (profile) {
          if(profile.displayName == null){
            console.log("Se va a iniciar sesion");
            Auth.crearPerfil(usuario);
            firebase.auth().signOut().then(function() {
              console.log("Sesión cerrada exitosamente!");
              $window.location.hash = '/ingresar';
              console.log(user);
            }, function(error) {
              // An error happened.
            });
            //$scope.sesion(usuario);
          }
          else{
            console.log("Sign-in provider: "+profile.providerId);
            console.log("  Provider-specific UID: "+profile.uid);
            console.log("  Name: "+profile.displayName);
            console.log("  Email: "+profile.email);
            console.log("  Photo URL: "+profile.photoURL);
          }
        });
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Clave incorrecta.');
        } else {
          var tiempoFallido = "A network error (such as timeout, interrupted connection or unreachable host) has occurred.";
          var noEmail = "Cannot read property 'email' of undefined";
          if(errorMessage == tiempoFallido){
            alert("Error de coneccion. Intente otra vez");
          }
          else if (errorMessage == noEmail) {
            console.log(errorMessage);
          }
          else{
            alert(errorMessage);
          }
        }
        console.log(error);
      });
  }

  $scope.registro = function (usuario) {
    $scope.error = null;
    Auth.registro(usuario).then(function () {
      console.log("Registrado exitosamente!");
      $scope.sesion(usuario);
    })
    .catch(function(error) {
      var coneccionFallida = "A network error (such as timeout, interrupted connection or unreachable host) has occurred."
      if(error == coneccionFallida){
        alert("Error de coneccion. Intente otra vez");
      }
      else{
        $scope.error = error;

      }
    });
  }

});
