<!DOCTYPE html>
<html lang="en">
<head>
  <title>AppMedica</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 <link rel="stylesheet" href="../css/style.css" type="text/css"/>     
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="../js/script_composicion.js"></script>
  
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
            
            <form>
                <div class="form-group">    
                    <h3>Ingresar nueva Composición</h3>
                    <br>
                    <label>Tipo:</label><br>
                    <input id="nombre_composicion" class="form-control" type="text" name="nombre"><br>               
                </div>
            </form>
           
            <input id="enviarInsert" class="btn btn-primary" type="button" value='Enviar'><br><br>
            <div id="resultado"></div>
      
        </div>
        
        <div id="presentacion">
            <h1>Panel de Administración de Opciones</h1>
        </div>
        
        <div id="leer">
            <h3>Lista de Composiciones</h3>
            <div class="refresh">
                <p>Espere un momento...</p>
            </div>   
        </div>
        
        <div id="modificar">
            
            <form>
                <div class="form-group">   
                    <h3>Modificar una Composición</h3>
                    <br>
                    <label>Id:</label><br>
                    <select id='idModificar'></select><br>
                    <br>
                    <label>Tipo: </label><br>
                    <input id="nombre" class="form-control" type="text" name="nombre"><br>
                    <label>Estado:</label><br>
                    <select id="estadoModificar" class="form-control">
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
            </form>
            
            <input id="enviarUpdate" class="btn btn-primary" type="button" value='Modificar'><br><br>
            <div id="resultado"></div>
        </div>
        
    <div id="eliminar">

        <form>
            <div class="form-group">  

                <h3>Eliminar Composición</h3>
                
                <div class="col-sm-5 text-left"> 
                    <div class="refresh">
                    <p>Espere un momento...</p>
                    </div>
                </div>

                <div class="col-sm-5 text-left"> 

                    <label>Eliminar por Tipo:</label><br>
                    <select id='eliminaNombreComposicion'></select><br>
                    <br>
                    <input id="enviarNombre" type="button" class="btn btn-primary" value='Eliminar'><br><br>
                    <div id="resultado1"></div><br><br>

                    <label>Eliminar por Id:</label><br>
                    <select id='eliminaIdComposicion'></select><br>
                    <br>
                    <input id="enviarId" class="btn btn-primary" type="button" value='Eliminar'><br><br>
                    <div id="resultado2"></div>
                
                </div>
            </div>
        </form>
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
        <div class="well back">
        <p><a href="../perfilAdmin.php">Regresar</a></p>
      </div>
        <div class="logo">
        <p><a href="#"><img src= "../images/logo.png" width="100%"/></a></p>
      </div>
        
    </div>
  </div>
</div>

<footer class="container-fluid text-center">
  <p>2016 AppMedica</p>
</footer>

</body>
</html>

