<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="css/style.css" type="text/css"/>    
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 <!-- <script src="../js/script_opcion.js"></script>-->
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="menu menuSecciones">
			<a href="#" class="right_bt" id="activator"><img src="../images/menuapp.png" alt=""/></a>
        </div>
        <div class="box" id="box">
           <div class="box_content_center">
               <div class="menu_box_list">
                   <ul>
                       <li><a href="#home" class="scroll">Home</a></li>
                       <li><a href="registro_consulta.php" class="scroll">Agregar Consulta</a></li>
                    </ul>
                </div>
                <a class="boxclose" id="boxclose"><img src="../images/close.png" alt=""/></a>
              </div>
            </div>
					<script type="text/javascript" src="../js/easing.js"></script>
					     <script type="text/javascript">
                            var $ = jQuery.noConflict();
                                $(function() {
                                    $('#activator').click(function(){
                                            $('#box').animate({'top':'0px'},500);
                                    });
                                    $('#boxclose').click(function(){
                                            $('#box').animate({'top':'-700px'},500);
                                    });
                                });
                                $(document).ready(function(){

                                //Hide (Collapse) the toggle containers on load
                                $(".toggle_container").hide();

                                //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
                                $(".trigger").click(function(){
                                    $(this).toggleClass("active").next().slideToggle("slow");
                                    return false; //Prevent the browser jump to the link anchor
                                });

                                });
                            </script>
				<div class="clearfix"></div>
			</div>

  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">AppMedica</a>
      </div>
    </div>
  </nav>


<div class="seccion container-fluid">
  <strong>Bienvenido:</strong> Sección Empleado
</div>


<div class="container mainContent">
  <p>Plantilla de opciones para empleado</p>
  <?php
  require_once('../sw/lib/nusoap-0.9.5/lib/nusoap.php');
           //url del webservice que invocaremos
    $wsdl="http://appmedica.publidimas.com/sw/vista/servicio_web.php?wsdl";

          //Variables

          $client=new nusoap_client($wsdl,'wsdl');
          $err = $client->getError();
          if ($err) {	echo 'Error en Constructor' . $err ; }
          //pasando parametros de entrada que seran pasados hacia el metodo


          //llamando al metodo y recuperando el array de productos en una variable

          $resultado = $client->call('listaOpcionesPorIdPerfil', array('id_perfil'=>5));


          //¿ocurrio error al llamar al web service?
          if ($client->fault) { // si
              $error = $client->getError();
          if ($error) { // Hubo algun error
                  echo 'Error:  ' . $client->faultstring;
              }

              die();
          }


          if ($client->fault) {
  	echo 'Fallo';
  	//print_r($resultado);
          } else {	// Chequea errores
  	$err = $client->getError();
  	if ($err) {		// Muestra el error
  		echo 'Error' . $err ;
  	} else {		// Muestra el resultado
  		echo '<b>Menú</b>';
          echo '</br>';
          echo '</br>';
  		print_r ($resultado);

  	}
  }
          ?>

  </br><a href="registro_consulta.php" class="button">Agregar Consulta!</button>
</div>


  <footer class="container-fluid text-center">
    <p>2016 AppMedica</p>
  </footer>
</body>
