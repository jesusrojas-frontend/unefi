app.controller("Auten-Prof-Ctrl", function($scope, Auth, $window){

  $scope.sesion = function (profesor) {
    Auth.sesion(profesor).then(function (){
      console.log("Sesion iniciada exitosamente!");
      $window.location.hash = '#/profesores';
      var user = firebase.auth().currentUser;
      user.providerData.forEach(function (profile) {
          if(profile.displayName == null){
            console.log("Se va a iniciar sesion");
            Auth.crearProfesor(profesor);
            firebase.auth().signOut().then(function() {
              console.log("Sesión cerrada exitosamente!");
              $window.location.hash = '#/ingresar-profesor';
              console.log(user);
            }, function(error) {
              // An error happened.
            });
            //$scope.sesion(profesor);
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

  $scope.registro = function (profesor) {
    $scope.error = null;
    Auth.registroProf(profesor).then(function () {
      Auth.crearPerfil(profesor);
      console.log("Registrado exitosamente!");
      $scope.sesion(profesor);
    })
    .catch(function(error) {
      var tiempoEspera = "A network error (such as timeout, interrupted connection or unreachable host) has occurred.";
      if(error == tiempoEspera){
        error.message = "Error de coneccion. Intente otra vez";
        $scope.error = error;
      }
      else {
        $scope.error = error;
      }

    });
  }


});
