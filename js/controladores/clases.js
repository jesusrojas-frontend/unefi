'use strict'

app.controller("ClaseCtrl", function ($scope,$firebaseArray, $routeParams, $firebaseObject,$window,chatMessages,$sce) {
  var user = firebase.auth().currentUser;
  var clases = firebase.database().ref().child("clases");
  //var usuario = firebase.database().ref().child("usuarios");
  var ubicacion = "#/profesores";
  var math = "";
  if($window.location.hash == ubicacion){

    var variable = firebase.database().ref().child("profesores");
    var vari = $firebaseObject(variable);
    vari.$loaded().then(function() {
     angular.forEach(vari, function(value, key) {
       if(key == user.uid){
         console.log("Me gustas");
       }
       else {
       }
     });
    });
    var profesores = $firebaseObject(variable.child(user.uid).child("perfil"));
    $scope.materia = profesores;
    profesores.$loaded().then(function() {
     angular.forEach(profesores, function(value, key) {
       if(value == "Matematica"){
        math = firebase.database().ref().child("clases").child("quinto").child("Matematica");
         //-----------
         var matematicaPrimero = $firebaseObject(clases.child("primero").child("Matematica"));
         $scope.classPrimero = matematicaPrimero;
         //-----------
         var matematicaSegundo = $firebaseObject(clases.child("segundo").child("Matematica"));
         $scope.classSegundo = matematicaSegundo;
         //-----------
         var matematicaTercero = $firebaseObject(clases.child("tercero").child("Matematica"));
         $scope.classTercero = matematicaTercero;
         //-----------
         var matematicaCuarto = $firebaseObject(clases.child("cuarto").child("Matematica"));
         $scope.classCuarto = matematicaCuarto;
         //-----------
         var matematicaQuinto = $firebaseObject(clases.child("quinto").child("Matematica"));
         $scope.classQuinto = matematicaQuinto;
       }
       if(value == "fisica"){
         math = firebase.database().ref().child("clases").child("quinto").child("fisica");
         //-----------
         var matematicaPrimero = $firebaseObject(clases.child("primero").child("fisica"));
         $scope.classPrimero = matematicaPrimero;
         //-----------
         var matematicaSegundo = $firebaseObject(clases.child("segundo").child("fisica"));
         $scope.classSegundo = matematicaSegundo;
         //-----------
         var matematicaTercero = $firebaseObject(clases.child("tercero").child("fisica"));
         $scope.classTercero = matematicaTercero;
         //-----------
         var matematicaCuarto = $firebaseObject(clases.child("cuarto").child("fisica"));
         $scope.classCuarto = matematicaCuarto;
         //-----------
         var matematicaQuinto = $firebaseObject(clases.child("quinto").child("fisica"));
         $scope.classQuinto = matematicaQuinto;
       }
       if(value == "quimica"){
         math = firebase.database().ref().child("clases").child("quinto").child("quimica");
         //-----------
         var matematicaPrimero = $firebaseObject(clases.child("primero").child("quimica"));
         $scope.classPrimero = matematicaPrimero;
         //-----------
         var matematicaSegundo = $firebaseObject(clases.child("segundo").child("quimica"));
         $scope.classSegundo = matematicaSegundo;
         //-----------
         var matematicaTercero = $firebaseObject(clases.child("tercero").child("quimica"));
         $scope.classTercero = matematicaTercero;
         //-----------
         var matematicaCuarto = $firebaseObject(clases.child("cuarto").child("quimica"));
         $scope.classCuarto = matematicaCuarto;
         //-----------
         var matematicaQuinto = $firebaseObject(clases.child("quinto").child("quimica"));
         $scope.classQuinto = matematicaQuinto;
       }
       if(value == "biologia"){
         math = firebase.database().ref().child("clases").child("quinto").child("biologia");
         //-----------
         var matematicaPrimero = $firebaseObject(clases.child("primero").child("biologia"));
         $scope.classPrimero = matematicaPrimero;
         //-----------
         var matematicaSegundo = $firebaseObject(clases.child("segundo").child("biologia"));
         $scope.classSegundo = matematicaSegundo;
         //-----------
         var matematicaTercero = $firebaseObject(clases.child("tercero").child("biologia"));
         $scope.classTercero = matematicaTercero;
         //-----------
         var matematicaCuarto = $firebaseObject(clases.child("cuarto").child("biologia"));
         $scope.classCuarto = matematicaCuarto;
         //-----------
         var matematicaQuinto = $firebaseObject(clases.child("quinto").child("biologia"));
         $scope.classQuinto = matematicaQuinto;
       }
       if(value == "castellano"){
        math = firebase.database().ref().child("clases").child("quinto").child("castellano");
         //-----------
         var matematicaPrimero = $firebaseObject(clases.child("primero").child("castellano"));
         $scope.classPrimero = matematicaPrimero;
         //-----------
         var matematicaSegundo = $firebaseObject(clases.child("segundo").child("castellano"));
         $scope.classSegundo = matematicaSegundo;
         //-----------
         var matematicaTercero = $firebaseObject(clases.child("tercero").child("castellano"));
         $scope.classTercero = matematicaTercero;
         //-----------
         var matematicaCuarto = $firebaseObject(clases.child("cuarto").child("castellano"));
         $scope.classCuarto = matematicaCuarto;
         //-----------
         var matematicaQuinto = $firebaseObject(clases.child("quinto").child("castellano"));
         $scope.classQuinto = matematicaQuinto;
       }
       if(value == "ingles"){
         math = firebase.database().ref().child("clases").child("quinto").child("ingles");
         //-----------
         var matematicaPrimero = $firebaseObject(clases.child("primero").child("ingles"));
         $scope.classPrimero = matematicaPrimero;
         //-----------
         var matematicaSegundo = $firebaseObject(clases.child("segundo").child("ingles"));
         $scope.classSegundo = matematicaSegundo;
         //-----------
         var matematicaTercero = $firebaseObject(clases.child("tercero").child("ingles"));
         $scope.classTercero = matematicaTercero;
         //-----------
         var matematicaCuarto = $firebaseObject(clases.child("cuarto").child("ingles"));
         $scope.classCuarto = matematicaCuarto;
         //-----------
         var matematicaQuinto = $firebaseObject(clases.child("quinto").child("ingles"));
         $scope.classQuinto = matematicaQuinto;
       }
       if(value == "tierra"){
         math = firebase.database().ref().child("clases").child("quinto").child("tierra");
         //-----------
         var matematicaPrimero = $firebaseObject(clases.child("primero").child("tierra"));
         $scope.classPrimero = matematicaPrimero;
         //-----------
         var matematicaSegundo = $firebaseObject(clases.child("segundo").child("tierra"));
         $scope.classSegundo = matematicaSegundo;
         //-----------
         var matematicaTercero = $firebaseObject(clases.child("tercero").child("tierra"));
         $scope.classTercero = matematicaTercero;
         //-----------
         var matematicaCuarto = $firebaseObject(clases.child("cuarto").child("tierra"));
         $scope.classCuarto = matematicaCuarto;
         //-----------
         var matematicaQuinto = $firebaseObject(clases.child("quinto").child("tierra"));
         $scope.classQuinto = matematicaQuinto;
       }
     });
    });
  }
  if(!user){
    $window.location.hash = "/";
  }
  var claseId = $routeParams.claseId;
  if(claseId){
    //buscarAno();
    //console.log($scope.math);
    $scope.claseElegida = obtenerClase(claseId, math);
    var claseElegidaArray = obtenerClaseArray(claseId, math);
    var location = "#/clase/"+claseId;

    //console.log($scope.claseElegida);
    $scope.claseElegida.$loaded(function(){
      console.log($scope.claseElegida.contenido.video);
    })
  };
  function obtenerClase(claseId) {
    //console.log(claseId);
    math = firebase.database().ref().child("clases").child("quinto").child("Matematica");
    return $firebaseObject(math.child(claseId));
  }
  function obtenerClaseArray(claseId) {
    var chats = math.child(claseId).child("contenido").child("chat");
    return $firebaseArray(chats);
  }

  $scope.publicarClase = function (clase) {
    var user = firebase.auth().currentUser;
    clase.fecha = firebase.database.ServerValue.TIMESTAMP;
    clase.gravatar = user.photoURL;
    clase.nombre = user.displayName;
    clases.child(clase.ano).child(clase.materia).child(clase.titulosin).set({
      contenido: clase
    });
    console.log("Clase publicado exitosamente\n");
    $window.location.hash = "#/profesores"
    console.log(clase);
  }
    //---------------------------------------------------

  if($window.location.hash == location){
    chat();
  }
  function chat() {
    var referencia = claseElegidaArray;
    var user = firebase.auth().currentUser;
    if(user){
      var usuario = user.displayName;
      var foto = user.photoURL;
    }
    $scope.user = usuario;
    $scope.foto = foto;
    $scope.messages = referencia;

    $scope.addMessage = function() {
      // $add on a synchronized array is like Array.push() except it saves to the database!
      $scope.messages.$add({
        from: $scope.user,
        content: $scope.message,
        foto: $scope.foto,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });

      $scope.message = "";
    };

    // if the messages are empty, add something for fun!
    $scope.messages.$loaded(function() {
      if ($scope.messages.length === 0) {
        $scope.messages.$add({
          from: "Jesús Rojas",
          content: "Dime que opinas de la clase",
          foto: "https://www.gravatar.com/avatar/4a173bccee235e94b623d6abd2661076.jpg?d=identicon",
          timestamp: firebase.database.ServerValue.TIMESTAMP
        });
      }
    });

  }
  function buscarAno(){
    var usuarios = $firebaseObject(usuario);
    usuarios.$loaded().then(function () {
      angular.forEach(usuarios, function (value, key) {
        var usuarioId = user.uid;
        console.log(key);
        console.log(usuarioId);
        if(key == usuarioId){
          console.log("Entramos a value.ano");
          var users = usuarios.child(usuarioId)
            var use = $firebaseObject(users);
            use.$loaded().then(function () {
              angular.forEach(use, function (value, key) {
                if(value.ano == "quinto"){
                  console.log("Si funciono");
                  $scope.math = clases.child("quinto");
                }
              });
            });
          }
        });
      });
    }

});
