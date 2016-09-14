 <?php
    require_once('../../lib/nusoap-0.9.5/lib/nusoap.php');
    //url del webservice que invocaremos
    $wsdl="http://appmedica.publidimas.com/sw/vista/servicio_web.php?wsdl";

    $client=new nusoap_client($wsdl,'wsdl');
    $err = $client->getError();
    if ($err) {	echo 'Error en Constructor' . $err ; } 
    //pasando parametros de entrada que seran pasados hacia el metodo

   

        //llamando al metodo y recuperando el array de productos en una variable
        $resultado = $client->call('modificaInstitutoSalud', array('id_instituto_salud'=> $_POST['id'], 'ruc'=> $_POST['ruc'], 'razon_social'=> $_POST['razon_social'], 'nombre'=> $_POST['nombre'], 'id_ciudad'=> $_POST['id_ciudad'], 'direccion'=> $_POST['direccion'], 'estado'=>$_POST['estado']));

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
            print_r ($resultado . $_POST['ruc'] . $_POST['razon_social'] . $_POST['nombre'] . $_POST['direccion'] .$_POST['estado']);
            }
        }
    ?>