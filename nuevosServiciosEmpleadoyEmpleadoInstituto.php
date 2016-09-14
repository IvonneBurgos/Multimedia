<?php
//--------------------------------------En shc.php-------------------------//

<?php

$path = "";
$path = $_SERVER['DOCUMENT_ROOT'];
include($path.'/sw/db/Conexion.class.php');

function listaEmpleadoNueva() {

    $sql = "select * from empleado where estado='Activo'";

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

        $datos.= $filas[4];
        $datos.="#";

        $datos.="@";
    }

    if ($num != 0) {
        return $datos;
    } else {
        return "No hay datos por mostrar";
    }
}

function agregarEmpleadoNuevo ($id_persona,$id_especialidad,$id_nivel_instruccion)
{
    $db = new conexion();

    $sql ="INSERT INTO empleado(id_persona,id_especialidad,id_nivel_instruccion, estado)";
    $sql.=" VALUES($id_persona,$id_especialidad,$id_nivel_instruccion, 'Activo')";
    if ($db->consulta($sql) == 0) {
        return "No se Guardo el Empleado";
    } else
    {
        return "Se Guardo el Empleado exitosamente";
    }
}

function modificaEmpleadoNuevo($id_empleado,$id_especialidad,$id_nivel_instruccion, $estado) {
    $sql ="update empleado ";
    $sql.="set";
    $sql.=" id_especialidad='$id_especialidad',id_nivel_instruccion='$id_nivel_instruccion', estado='$estado'";
    $sql.=" where id=$id_empleado";

    $db = new conexion();
    if ($db->consulta($sql) == 0) {
        return "No se Modifico el Empleado";
    }else{
        return "Se Modifico el Empleado exitosamente";
    }
}

function eliminaEmpleadoNuevo($id_empleado) {

    $sql ="update empleado";
    $sql.="set";
    $sql.=" estado='Inactivo'";
    $sql.=" where id=$id_empleado";

    $db = new conexion();
    if ($db->consulta($sql) == 0) {
        return "No se Elimino el Empleado";
    }else{
        return "Se Elimino el Empleado exitosamente";
    }
}


//---EMPLEADO INSTITUTO-//

function listaEmpleadoInstitutoNueva() {

    $sql = "select * from empleado_instituto where estado='Activo'";

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


//---VISTA - archivo: servicio_web-//

$server->register("listaEmpleadoNueva", array(),
            array('Respuesta' => 'xsd:string'), $ns);


$server->register("agregarEmpleadoNuevo", array(
'id_persona' => 'xsd:int',
'id_especialidad' => 'xsd:int',
'id_nivel_instruccion' => 'xsd:int',
), array('Respuesta' => 'xsd:string'), $ns);


$server->register("modificaEmpleadoNuevo", array(
'id_empleado' => 'xsd:int',
'id_especialidad' => 'xsd:int',
'id_nivel_instruccion' => 'xsd:int',
'estado' => 'xsd:string',
), array('Respuesta' => 'xsd:string'), $ns);


$server->register("eliminaEmpleadoNuevo", array(
'id_empleado' => 'xsd:int',
), array('Respuesta' => 'xsd:string'), $ns);


$server->register("listaEmpleadoInstitutoNueva", array(),
            array('Respuesta' => 'xsd:string'), $ns);