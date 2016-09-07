<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/font-awesome/css/font-awesome.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="js/script.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
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
      <a class="navbar-brand" href="#">AppMedica</a>
    </div>
  </div>
</nav>
  
<div class="container-fluid text-center">
  <div class="row content">
    <div class="col-sm-12">
        
        <div class="col-md-12">
            <h3>Persona</h3>
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Opción</p>
                    <a href="vista/vista_opcion.php"><i class="fa fa-list-alt fa-4x"></i></a>
                </div>
                 <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Opción por Perfil</p>
                    <a href="#"><i class="fa fa-th-list fa-4x"></i></a>
                </div>
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Perfil</p>
                    <a href="#"><i class="fa fa-user fa-4x"></i></a>
                </div>
      
       </div>
       
       <div class="col-md-12">
            <h3>Persona</h3>
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Usuario</p>
                    <a href="controlador/controlador_opcion.php"><i class="fa fa-user fa-4x"></i></a>
                </div>
                 <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Paciente</p>
                    <a href="#"><i class="fa fa-hotel fa-4x"></i></a>
                </div>
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Dirección</p>
                    <a href="#"><i class="fa fa-building fa-4x"></i></a>
                </div>
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Teléfono</p>
                    <a href="#"><i class="fa fa-phone fa-4x"></i></a>
                </div>  
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Etnia</p>
                    <a href="#"><i class="fa fa-users fa-4x"></i></a>
                </div>  
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Religión</p>
                    <a href="#"><i class="fa fa-heart-o fa-4x"></i></a>
                </div> 

                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Estado Civil</p>
                    <a href="#"><i class="fa fa-venus-mars fa-4x"></i></a>
                </div>     

                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Ciudad</p>
                    <a href="#"><i class="fa fa-street-view fa-4x"></i></a>
                </div>         
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Provincia</p>
                    <a href="#"><i class="fa fa-map fa-4x"></i></a>
                </div>         

                <div class="col-md-2 col-sm-3 col-xs-6">
                <p>Grupo Sanguíneo</p>
                <a href="#"><i class="fa fa-tint fa-4x"></i></a>
            </div>     
       </div>
        <div class="col-sm-12">
            <h3>Empleado</h3>
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Empleado</p>
                    <a href="#"><i class="fa fa-user-md fa-4x"></i></a>
                </div>     
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Nivel Instrucción</p>
                    <a href="#"><i class="fa fa-graduation-cap fa-4x"></i></a>
                </div> 
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Especialidad</p>
                    <a href="#"> <i class="fa fa-heartbeat fa-4x"></i></a>
                </div> 
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Instituto</p>
                    <a href="#"> <i class="fa fa-hospital-o fa-4x"></i></a>
                </div>       
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Empleado por Instituto</p>
                    <a href="#"><i class="fa fa-medkit fa-4x"></i></a>
                </div> 
       </div>
        <div class="col-sm-12">
            <h3>Información Médica</h3>
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Enfermedad</p>
                    <a href="#"><i class="fa fa-wheelchair fa-4x"></i></a>
                </div> 
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Tipo Diagnóstico</p>
                    <a href="#"><i class="fa fa-stethoscope fa-4x"></i></a>
                </div> 
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Tipo Tratamiento</p>
                    <a href="#"><i class="fa fa-folder-open fa-4x"></i></a>
                </div>     
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Examen Físico</p>
                    <a href="#"><i class="fa fa-child fa-4x"></i></a>
                </div>     
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Examen de Laboratorio</p>
                    <a href="#"><i class="fa fa-wpforms fa-4x"></i></a>
                </div>     
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Tipo Examen de Laboratorio</p>
                    <a href="#"><i class="fa fa-wpforms fa-4x"></i></a>
                </div>     
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Subtipo Examen de Laboratorio</p>
                    <a href="#"><i class="fa fa-file-text-o fa-4x"></i></a>
                </div>          
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Tipo Antecedente</p>
                    <a href="#"><i class="fa fa-files-o fa-4x"></i></a>
                </div>
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Subtipo Antecedente</p>
                    <a href="#"><i class="fa fa-file-excel-o fa-4x"></i></a>
                </div>    
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Antecedente</p>
                    <a href="#"><i class="fa fa-tags fa-4x"></i></a>
                </div>       
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Etiqueta Antecedente</p>
                    <a href="#"><i class="fa fa-tags fa-4x"></i></a>
                </div> 
                <div class="col-md-2 col-sm-3 col-xs-6">
                    <p>Composición</p>
                    <a href="#"><i class="fa fa-stethoscope fa-4x"></i></a>
                </div>        
       </div>
    </div>
  </div>
</div>

<footer class="container-fluid text-center">
  <p>2016 AppMedica</p>
</footer>

</body>
</html>
