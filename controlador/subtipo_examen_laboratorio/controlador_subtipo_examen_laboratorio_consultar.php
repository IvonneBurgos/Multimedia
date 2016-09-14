       <?php
require_once('../../lib/nusoap-0.9.5/lib/nusoap.php');
         //url del webservice que invocaremos
  $wsdl="http://appmedica.publidimas.com/sw/vista/servicio_web.php?wsdl";
        //Variables

        $client=new nusoap_client($wsdl,'wsdl');
        $err = $client->getError();
        if ($err) {	echo 'Error en Constructor' . $err ; } 
        //pasando parametros de entrada que seran pasados hacia el metodo
        $pila = [];
        $pilamaster= [];
        $pilasuperior = [];
        $arregloCampos = ['id','nombre'];
        //llamando al metodo y recuperando el array de productos en una variable
        $resultado = $client->call('listaSubtipoExamenLaboratorio');
        
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
        for ($x = 0; $x < sizeof(explode("@",$resultado)); $x++){
            $linea = (explode("@",$resultado)[$x]);
            $pila =[];
            for ($z = 0; $z < (sizeof(explode("#",$linea))-1); $z++){
                $pila[$arregloCampos[$z]]= (explode("#",$linea)[$z]);
            }
            array_push($pilamaster,$pila);
        }
        $pilasuperior['listaopciones']=$pilamaster;
        echo json_encode($pilasuperior);
	}
}
        ?>