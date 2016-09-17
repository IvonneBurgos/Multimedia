$(document).ready(function(){ 
    $('#contenedor > div').hide();
    $('#presentacion').show();
     cargarListas();
    $('#insert').click(function(){
     
        $('#insertar').show();
        $('#leer').hide();
        $('#modificar').hide();
        $('#eliminar').hide();
        $('#presentacion').hide();
        limpiarCampos();
    });
     $('#read').click(function(){
         refrescar();
        $('#leer').show();
        $('#insertar').hide();
        $('#modificar').hide();
        $('#eliminar').hide();
        $('#presentacion').hide();
         limpiarCampos();
    });
    $('#update').click(function(){
        cargarListas();
        $('#modificar').show();
        $('#leer').hide();
        $('#insertar').hide();
        $('#eliminar').hide();
        $('#presentacion').hide();
        limpiarCampos();
    });
    $('#delete').click(function(){
        refrescar();
        cargarListas();
        $('#eliminar').show();
        $('#insertar').hide();
        $('#leer').hide();
        $('#modificar').hide();
        $('#presentacion').hide();
        limpiarCampos();
    });
    
    $("#enviarInsert").click(function(){
        $.post("../controlador/empleado/controlador_empleado_insertar.php",{id_persona: $("#id_persona option:selected").val(), id_especialidad: $("#id_especialidad option:selected").val(), id_nivel_instruccion: $("#id_nivel_instruccion option:selected").val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
     
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/empleado/controlador_empleado_modificar.php",{id: $('#idModificar option:selected').text(), id_especialidad: $("#id_especialidad_modificar option:selected").val(), id_nivel_instruccion: $("#id_nivel_instruccion_modificar option:selected").val(), estado: $("#estadoModificar option:selected").val() }, function(resp){
   $("#modificar #resultado").html(resp);
    	}); 
});
    
    $("#enviarNombre").click(function(){
         $.post("../controlador/empleado/controlador_empleado_eliminar_nombre.php",{nombre: $('#eliminaNombreEmpleado option:selected').val(), apellido: $('#eliminaApellidoEmpleado option:selected').val(), especialidad: $('#eliminaEspecialidadEmpleado option:selected').val()}, function(resp){
   $("#eliminar #resultado1").html(resp);
        refrescar();
        cargarListas();     
    	});
});
    
      $("#enviarId").click(function(){
         $.post("../controlador/empleado/controlador_empleado_eliminar_id.php",{id: $('#eliminaIdEmpleado option:selected').val()}, function(resp){
   $("#eliminar #resultado2").html(resp);
        refrescar();
        cargarListas();     
    	});
});
});

function refrescar(){
    $.post("../controlador/empleado/controlador_empleado_consultar.php", function(resp){
    var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].id + " "+   parse.listaopciones[x].nombre + " "+ parse.listaopciones[x].apellido + " "+ parse.listaopciones[x].especialidad + " "+ parse.listaopciones[x].telefono_fijo + " "+ parse.listaopciones[x].telefono_movil + " "+ parse.listaopciones[x].correo + '</div>')
        }
       ;});
}

function cargarListas(){
      //Limpia los select
    $('#eliminaIdEmpleado')
    .empty();
    
    $('#eliminaNombreEmpleado')
    .empty();
    $('#eliminaApellidoEmpleado')
    .empty();
    $('#eliminaEspecialidadEmpleado')
    .empty();
    
    $('#idModificar')
    .empty();
    
    $('#id_persona')
    .empty();
    $('#id_persona_modificar')
    .empty();
    
    $('#id_especialidad')
    .empty();
    $('#id_especialidad_modificar')
    .empty();
    
    $('#id_nivel_instruccion')
    .empty();
    $('#id_nivel_instruccion_modificar')
    .empty();
    
    $('#id_nivel_instruccion')
    .empty();
    $('#id_nivel_instruccion_modificar')
    .empty();
    
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/empleado/controlador_empleado_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdEmpleado").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
        }
    ;});
    
    $.post("../controlador/persona/controlador_persona_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0; x < (parse.listaopciones.length-1); x++){
            
            $("#id_persona").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre+ " " + parse.listaopciones[x].apellido +' </option>');
            
            $("#id_persona_modificar").append( '<option value="'+parse.listaopciones[x].id + '">'+ parse.listaopciones[x].nombre+ " " + parse.listaopciones[x].apellido +' </option>');
            
            $("#eliminaNombreEmpleado").append( '<option value="'+parse.listaopciones[x].nombre + '">'+  parse.listaopciones[x].nombre +' </option>');
            
            $("#eliminaApellidoEmpleado").append( '<option value="'+parse.listaopciones[x].apellido + '">'+  parse.listaopciones[x].apellido +' </option>');
        };    
    });

    $.post("../controlador/especialidad/controlador_especialidad_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0; x < (parse.listaopciones.length-1); x++){
            
            $("#id_especialidad").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre+ ' </option>');
            
            $("#id_especialidad_modificar").append( '<option value="'+parse.listaopciones[x].id + '">'+ parse.listaopciones[x].nombre+ ' </option>');
            
            $("#eliminaEspecialidadEmpleado").append( '<option value="'+parse.listaopciones[x].nombre + '">'+ parse.listaopciones[x].nombre+ ' </option>');
        };    
    });
    
    $.post("../controlador/nivel_instruccion/controlador_nivel_instruccion_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0; x < (parse.listaopciones.length-1); x++){
            
            $("#id_nivel_instruccion").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre+ ' </option>');
            
            $("#id_nivel_instruccion_modificar").append( '<option value="'+parse.listaopciones[x].id + '">'+ parse.listaopciones[x].nombre+ ' </option>');
        };    
    });
}

function limpiarCampos(){

$("#insertar #resultado").empty();

$("#modificar #resultado").empty();

$("#eliminar #resultado1").empty();
$("#eliminar #resultado2").empty();    

}



