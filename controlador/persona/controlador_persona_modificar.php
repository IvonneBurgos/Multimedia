<?php
    require_once('../../lib/nusoap-0.9.5/lib/nusoap.php');
    //url del webservice que invocaremos
    $wsdl="http://appmedica.publidimas.com/sw/vista/servicio_web.php?wsdl";

    $client=new nusoap_client($wsdl,'wsdl');
    $err = $client->getError();
    if ($err) {	echo 'Error en Constructor' . $err ; } 
    //pasando parametros de entrada que seran pasados hacia el metodo

        //llamando al metodo y recuperando el array de productos en una variable
        //echo $_POST['idprovincia'];
        $resultado = $client->call('modificaPersona', array('id_persona'=> $_POST['id'], 'cedula'=> $_POST['cedula'], 'nombre'=> $_POST['nombre'], 'apellido'=> $_POST['apellido'], 'fecha_nac'=> $_POST['fecha_nacimiento'], 'genero' => $_POST['genero'], 'ocupacion' => $_POST['ocupacion'], 'correo' => $_POST['correo'], 'num_hijos' => $_POST['num_hijos'], 'id_usuario' => $_POST['usuario'],'id_ciudad_nacimiento' => $_POST['ciudad'], 'id_nivel_instruccion' => $_POST['nivel_instruccion'], 'id_religion' => $_POST['religion'], 'id_estado_civil' => $_POST['estado_civil'], 'id_etnia' => $_POST['etnia']));

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

               // $resultadoFinal = $resultado;
            print_r ($resultado);
            }
        }
?>