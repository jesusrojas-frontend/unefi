'use strict'

app.controller("MainCtrl",["$scope", "Auth","$window","$firebaseObject","$firebaseArray",
  function($scope,Auth, $window,$firebaseObject,$firebaseArray){
    var ref = firebase.database().ref().child("usuarios");
    var user = firebase.auth().currentUser;

    if(user){
      var user = firebase.auth().currentUser;
      var list = $firebaseObject(ref.child(user.uid).child("perfil"));
      list.$loaded().then(function() {
        console.log("loaded record:", list.$id, list.someOtherKeyInData);

       // To iterate the key/value pairs of the listect, use angular.forEach()
       angular.forEach(list, function(value, key) {
          //console.log(key, value);
          if(value == "primero"){
            var clases = firebase.database().ref().child("clases");
            $scope.matematica = $firebaseObject(clases.child("primero").child("Matematica"));
            $scope.fisica = $firebaseObject(clases.child("primero").child("fisica"));
            $scope.quimica = $firebaseObject(clases.child("primero").child("quimica"));
            $scope.biologia = $firebaseObject(clases.child("primero").child("biologia"));
            $scope.castellano = $firebaseObject(clases.child("primero").child("castellano"));
            $scope.ingles = $firebaseObject(clases.child("primero").child("ingles"));
            $scope.tierra = $firebaseObject(clases.child("primero").child("tierra"));
            console.log("Eres de 1ero");
          }
          if(value == "segundo"){
            var clases = firebase.database().ref().child("clases");
            $scope.matematica = $firebaseObject(clases.child("segundo").child("Matematica"));
            $scope.fisica = $firebaseObject(clases.child("segundo").child("fisica"));
            $scope.quimica = $firebaseObject(clases.child("segundo").child("quimica"));
            $scope.biologia = $firebaseObject(clases.child("segundo").child("biologia"));
            $scope.castellano = $firebaseObject(clases.child("segundo").child("castellano"));
            $scope.ingles = $firebaseObject(clases.child("segundo").child("ingles"));
            $scope.tierra = $firebaseObject(clases.child("segundo").child("tierra"));
            console.log("Eres de 2do");
          }
          if(value == "tercero"){
            var clases = firebase.database().ref().child("clases");
            $scope.matematica = $firebaseObject(clases.child("tercero").child("Matematica"));
            $scope.fisica = $firebaseObject(clases.child("tercero").child("fisica"));
            $scope.quimica = $firebaseObject(clases.child("tercero").child("quimica"));
            $scope.biologia = $firebaseObject(clases.child("tercero").child("biologia"));
            $scope.castellano = $firebaseObject(clases.child("tercero").child("castellano"));
            $scope.ingles = $firebaseObject(clases.child("tercero").child("ingles"));
            $scope.tierra = $firebaseObject(clases.child("tercero").child("tierra"));
            console.log("Eres de 3ero");
          }
          if(value == "cuarto"){
            var clases = firebase.database().ref().child("clases");
            $scope.matematica = $firebaseObject(clases.child("cuarto").child("Matematica"));
            $scope.fisica = $firebaseObject(clases.child("cuarto").child("fisica"));
            $scope.quimica = $firebaseObject(clases.child("cuarto").child("quimica"));
            $scope.biologia = $firebaseObject(clases.child("cuarto").child("biologia"));
            $scope.castellano = $firebaseObject(clases.child("cuarto").child("castellano"));
            $scope.ingles = $firebaseObject(clases.child("cuarto").child("ingles"));
            $scope.tierra = $firebaseObject(clases.child("cuarto").child("tierra"));
            console.log("Eres de 4to");
          }
          if(value == "quinto"){
            var clases = firebase.database().ref().child("clases");
            $scope.matematica = $firebaseObject(clases.child("quinto").child("Matematica"));
            $scope.fisica = $firebaseObject(clases.child("quinto").child("fisica"));
            $scope.quimica = $firebaseObject(clases.child("quinto").child("quimica"));
            $scope.biologia = $firebaseObject(clases.child("quinto").child("biologia"));
            $scope.castellano = $firebaseObject(clases.child("quinto").child("castellano"));
            $scope.ingles = $firebaseObject(clases.child("quinto").child("ingles"));
            $scope.tierra = $firebaseObject(clases.child("quinto").child("tierra"));
            console.log("Eres de 5to");
          }
       });
     });
      
    }
  $scope.sesionIniciada = function () {
    var user = firebase.auth().currentUser;
      var resultado = null;
      if (user) {
        resultado = true;
        user.providerData.forEach(function (profile) {
          $scope.nombre = profile.displayName;
          $scope.perfil = profile.photoURL;
        });
      } else {
      }
      return resultado;
  };


}]);
