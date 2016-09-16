<?php
//--------------------------------------En shc.php-------------------------//
function modificaOpcionPerfilNew($id_opcion_perfil,$id_opcion,$id_perfil, $estado) {
    $sql = "update opcion_perfil ";
    $sql.="set";
    $sql.= " id_opcion='$id_opcion',id_perfil='$id_perfil',estado='$estado'";
    $sql.=" where id=$id_opcion_perfil";

    $db = new conexion();
    if ($db->consulta($sql) == 0) {
        return "No se Modifico la Opcion Perfil";
    }else{
        return "Se Modifico la Opcion Perfil exitosamente";
    }
}
function agregarOpcionPerfilNew($nombre_opcion,$nombre_perfil)
{
    $db = new conexion();

    $sql2 = "select id from perfil where nombre = '$nombre_perfil'";

    $total_reg = $db->consulta($sql2);
    $fila = mysql_fetch_array($total_reg,MYSQL_NUM);
    $id_perfil=$fila[0];

    $sql3 = "select id from opcion where nombre = '$nombre_opcion'";

    $total_reg1 = $db->consulta($sql3);
    $fila1 = mysql_fetch_array($total_reg1,MYSQL_NUM);
    $id_opcion=$fila1[0];

    $sql = "INSERT INTO opcion_perfil(id_perfil,id_opcion,estado)";
    $sql.=" VALUES('$id_opcion','$id_perfil','Activo')";
    if ($db->consulta($sql) == 0) {
        return "No se Guardo la Opcion Perfil";
    } else
    {
        return "Se Guardo la Opcion Perfil exitosamente";
    }
}

function listaOpcionPerfilNew() {
     $sql = "select * from opcion_perfil where estado='Activo'";

    $db = new conexion();
    $resul = $db->consulta($sql);
    $num = $db->encontradas($resul);

    $datos.="";
    for ($i = 0; $i < $num; $i++) {
        $filas = mysql_fetch_array($resul);
        //$datos.="<elemento>";

        $datos.= $filas[0];
        $datos.="#";

        $datos.= $filas[1];
        $datos.="#";

        $datos.= $filas[2];
        $datos.="#";
        
        $datos.= $filas[3];
        $datos.="#"; 
        
        $datos.="@";
    }

    if ($num != 0) {
        return $datos;
    } else {
        return "No hay datos por mostrar";
    }
}
function listaPacienteNew() {
    $sql = "select * from paciente";

    $db = new conexion();
    $resul = $db->consulta($sql);
    $num = $db->encontradas($resul);

    $datos.="";
    for ($i = 0; $i < $num; $i++) {
        $filas = mysql_fetch_array($resul);
        //$datos.="<elemento>";

        $datos.= $filas[0];
        $datos.="#";

        $datos.= $filas[1];
        $datos.="#";

        $datos.= $filas[2];
        $datos.="#";
        
        $datos.= $filas[3];
        $datos.="#"; 
        
        $datos.="@";
    }

    if ($num != 0) {
        return $datos;
    } else {
        return "No hay datos por mostrar";
    }
}

function listaEtiquetaAntecedenteNew(){
    
    $sql = "select * from etiqueta_antecedente where estado='Activo'";

    $db = new conexion();
    $resul = $db->consulta($sql);
    $num = $db->encontradas($resul);

    $datos.="";
    for ($i = 0; $i < $num; $i++) {
        $filas = mysql_fetch_array($resul);
        //$datos.="<elemento>";

        $datos.= $filas[0];
        $datos.="#";

        $datos.= $filas[1];
        $datos.="#";

        $datos.= $filas[2];
        $datos.="#";

        $datos.= $filas[3];
        $datos.="#"; 

        $datos.="@";
    }

    if ($num != 0) {
        return $datos;
    } else {
        return "No hay datos por mostrar";
    }
}


function eliminaDireccionNew($id_direccion) {

    $sql = "update direccion ";
    $sql.= "set";
    $sql.= " estado='Inactivo'";
    $sql.=" where id=$id_direccion";

    $db = new conexion();
    if ($db->consulta($sql) == 0) {
        return "No se Elimino el Direccion";
    }else{
        return "Se Elimino el Direccion exitosamente";
    }
}

function modificaDireccionNew($id_direccion,$direccion_residencia,$direccion_trabajo,$estado) {
    $sql = "update direccion ";
    $sql.="set";
    $sql.= " direccion_residencia='$direccion_residencia', direccion_trabajo='$direccion_trabajo', estado='$estado'";
    $sql.=" where id=$id_direccion";

    $db = new conexion();
    if ($db->consulta($sql) == 0) {
        return "No se Modifico la Direccion";
    }else{
        return "Se Modifico la Direccion exitosamente";
    }
}

//--------------------------------------En servicio_web.php-------------------------//
//Agregar Opcion Perfil
$server->register("agregarOpcionPerfilNew", array(
'nombre_opcion' => 'xsd:string',
'nombre_perfil' => 'xsd:string',
), array('Respuesta' => 'xsd:string'), $ns);

//Modifica Opcion Perfil  
$server->register("modificaOpcionPerfilNew", array(
'id_opcion_perfil' => 'xsd:int',
'id_opcion' => 'xsd:int',
'id_perfil' => 'xsd:int',
'estado' => 'xsd:string',
), array('Respuesta' => 'xsd:string'), $ns);

//Lista Etiqueta Antecedente
$server->register("listaEtiquetaAntecedenteNew", array(),
            array('Respuesta' => 'xsd:string'), $ns);
//Lista de Paciente
$server->register("listaPacienteNew", array(),
            array('Respuesta' => 'xsd:string'), $ns);
//Lista Opcion Perfil
$server->register("listaOpcionPerfilNew", array(),
            array('Respuesta' => 'xsd:string'), $ns);
//Elimina Dirección
$server->register("eliminaDireccionNew", array(
'id_direccion' => 'xsd:int',
), array('Respuesta' => 'xsd:string'), $ns);

//Modifica Direccion
$server->register("modificaDireccionNew", array(
'direccion_residencia' => 'xsd:string',
'direccion_trabajo' => 'xsd:string',
'estado' => 'xsd:string',
), array('Respuesta' => 'xsd:string'), $ns);
?>