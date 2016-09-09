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
  <script src="../js/script_persona.js"></script>
  
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
                    <h3>Ingresar nueva Persona</h3>
                    <br>
                    <label>Cédula:</label><br>
                    <input id="cedula" class="form-control" type="text" name="nombre"><br>
                    <label>Nombre:</label><br>
                    <input id="nombre" class="form-control" type="text" name="nombre"><br>
                    <label>Apellido:</label><br>
                    <input id="apellido" class="form-control" type="text" name="nombre"><br>
                    <label>Fecha de Nacimiento:</label><br>
                    <input id="fechaNacimiento" class="form-control" type="date" name="nombre"><br>
                    <label>Género:</label><br>
                    <input id="genero" class="form-control" type="text" name="nombre"><br>
                    <label>Ocupación:</label><br>
                    <input id="ocupacion" class="form-control" type="text" name="nombre"><br>
                    <label>Correo:</label><br>
                    <input id="correo" class="form-control" type="email" name="nombre"><br>
                    <label>Número de Hijos:</label><br>
                    <input id="numeroHijos" class="form-control" type="number" name="nombre"><br>
                    <label>Usuario:</label><br>
                    <select id='ingresarUsuario'></select><br>
                    <label>Ciudad Nacimiento:</label><br>
                    <select id='ingresarCiudadNacimiento'></select><br>
                    <label>Nivel Instrucción:</label><br>
                    <select id='ingresarNivelInstruccion'></select><br>
                    <label>Religión:</label><br>
                    <select id='ingresarReligion'></select><br>
                    <label>Estado Civil:</label><br>
                    <select id='ingresarEstadoCivil'></select><br>
                    <label>Etnia:</label><br>
                    <select id='ingresarEtnia'></select>
                </div>
            </form>
           
            <input id="enviarInsert" class="btn btn-primary" type="button" value='Enviar'>

            <div id="resultado"></div>
      
        </div>
        
        <div id="presentacion">
            <h1>Panel de Administración de Persona</h1>
        </div>
        
        <div id="leer">
            <h3>Lista de Personas</h3>
            <div class="refresh">
                <p>Espere un momento...</p>
            </div>   
        </div>
        
        <div id="modificar">
            
            <form>
                <div class="form-group">   
                    <h3>Modificar una Persona</h3>
                    <br>
                    <label>Id:</label><br>
                    <input id="id" class="form-control" type="text" name="id"><br>
                    <label>Nombre: </label><br>
                    <input id="nombre" class="form-control" type="text" name="nombre"><br>
                    <label>Url:</label><br>
                    <input id="url" class="form-control" type="text" name="url"><br>
                    <label>Estado:</label><br>
                    <select id="estadoModificar" class="form-control">
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
            </form>
            
            <input id="enviarUpdate" class="btn btn-primary" type="button" value='Modificar'>
   
            <div id="resultado"></div>
        </div>
        
    <div id="eliminar">

        <form>
            <div class="form-group">  

                <h3>Eliminar Persona</h3>
                
                <div class="col-sm-5 text-left"> 
                    <div class="refresh">
                    <p>Espere un momento...</p>
                    </div>
                </div>

                <div class="col-sm-5 text-left"> 

                    <label>Eliminar por Nombre:</label><br>
                    <input id="nombre" class="form-control" type="text" name="nombre"><br>
                    <input id="enviarNombre" type="button" class="btn btn-primary" value='Eliminar'><br>
                    <div id="resultado1"></div><br><br>

                    <label>Eliminar por Id:</label><br>
                    <input id="id" class="form-control" type="text" name="id"><br>
                    <input id="enviarId" class="btn btn-primary" type="button" value='Eliminar'><br>
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

