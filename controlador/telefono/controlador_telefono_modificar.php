<?php
    require_once('../../lib/nusoap-0.9.5/lib/nusoap.php');
    //url del webservice que invocaremos
    $wsdl="http://appmedica.publidimas.com/sw/vista/servicio_web.php?wsdl";

    $client=new nusoap_client($wsdl,'wsdl');
    $err = $client->getError();
    if ($err) {	echo 'Error en Constructor' . $err ; } 
    //pasando parametros de entrada que seran pasados hacia el metodo

   

        //llamando al metodo y recuperando el array de productos en una variable
       /* $resultado = $client->call('modificaDireccionNew', array('id_direccion'=> intval($_POST['id']),'direccion_residencia'=>$_POST['direccion_residencia'],'direccion_trabajo'=>$_POST['direccion_trabajo'],'estado'=>$_POST['estado']));*/

$resultado = $client->call('modificaTelefono', array('id_telefono'=> intval($_POST['id']),'id_persona'=> intval($_POST['id_persona']),'id_direccion'=> intval($_POST['id_direccion']),'telefono_fijo'=>$_POST['telefono_fijo'],'telefono_movil'=>$_POST['telefono_movil'],'estado'=>$_POST['estado']));
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