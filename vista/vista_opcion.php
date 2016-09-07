<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="../js/script.js"></script>
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;}
    }
  </style>
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
     <!-- <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>-->
      <a class="navbar-brand" href="#">AppMedica</a>
    </div>
  </div>
</nav> 
<div class="container-fluid text-center">
  <div class="row content">
    <div id="contenedor" class="col-sm-10 text-left">
        <div id="insertar">
            <h3>Ingresar nueva Opción</h3>
            <br>
            Nombre:<br>
            <input id="nombre" type="text" name="nombre"><br>
            Url:<br>
            <input id="url" type="text" name="url">
            <br><br>
            <input id="enviarInsert" type="button" value='Enviar'>
   
            <div id="resultado"></div>
         
        </div>
        <div id="presentacion">
            <h1>Panel de Administración de Opciones</h1>    
        </div>
        <div id="leer">
            <h3>Lista de Opciones</h3>
            <div class="refresh">
                <p>Espere un momento...</p>
            </div>
                
        </div>
        <div id="modificar">
            <h3>Modificar una Opción</h3>
            <br>
            Id:<br>
            <input id="id" type="text" name="id"><br><br>
            Nombre:<br>
            <input id="nombre" type="text" name="nombre"><br><br>
            Url:<br>
            <input id="url" type="text" name="url"><br><br>
             Estado:<br>
            <select id="estadoModificar">
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
            <br><br>
            <input id="enviarUpdate" type="button" value='Modificar'>
   
            <div id="resultado"></div>
        </div>
        <div id="eliminar">
            <h3>Eliminar Opción</h3>
            <div class="col-sm-5 text-left"> 
                <div class="refresh">
                <p>Espere un momento...</p>
            </div>
            </div>
            <div class="col-sm-5 text-left"> 
                Eliminar por Nombre:<br>
                <input id="nombre" type="text" name="nombre"><input id="enviarNombre" type="button" value='Eliminar'><br>
                <div id="resultado1"></div><br><br>
                Eliminar por Id:<br>
                <input id="id" type="text" name="id"><input id="enviarId" type="button" value='Eliminar'><br>
                <div id="resultado2"></div>
            </div>
        </div>
    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
        <p><a href="#" id="insert">Insertar</a></p>
      </div>
      <div class="well">
        <p><a href="#" id="read">Consultar</a></p>
      </div>
        <div class="well">
        <p><a href="#" id="update">Modificar</a></p>
      </div>
        <div class="well">
        <p><a href="#" id="delete">Eliminar</a></p>
      </div>
        <div class="well">
        <p><a href="../perfilAdmin.php">Regresar</a></p>
      </div>
    </div>
  </div>
</div>

<footer class="container-fluid text-center">
  <p>2016 AppMedica</p>
</footer>

</body>
</html>

