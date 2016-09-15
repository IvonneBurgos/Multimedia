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
        $.post("../controlador/empleado_instituto/controlador_empleado_instituto_insertar.php",{id_instituto_salud: $("#id_instituto_salud option:selected").val(), id_empleado: $("#id_empleado option:selected").val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
     
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/empleado_instituto/controlador_empleado_instituto_modificar.php",{id: $('#idModificar option:selected').text(), id_instituto_salud: $("#id_instituto_salud_modificar option:selected").val(), id_empleado: $("#id_empleado_modificar option:selected").val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
   $("#modificar #resultado").html(resp);
    	}); 
});
    
    $("#enviarNombre").click(function(){
         $.post("../controlador/empleado_instituto/controlador_empleado_instituto_eliminar_nombre.php",{id: $('#eliminaNombreInstituto option:selected').val()}, function(resp){
   $("#eliminar #resultado1").html(resp);
    	});
        refrescar();
        cargarListas();
});
    
      $("#enviarId").click(function(){
         $.post("../controlador/empleado_instituto/controlador_empleado_instituto_eliminar_id.php",{id: $('#eliminaIdEmpleadoInstituto option:selected').val()}, function(resp){
   $("#eliminar #resultado2").html(resp);
    	});
          refrescar();
          cargarListas();
});
});

function refrescar(){
    $.post("../controlador/empleado_instituto/controlador_empleado_instituto_consultar.php", function(resp){
    var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].id + " "+   parse.listaopciones[x].nombre_instituto + " "+ parse.listaopciones[x].nombre + " "+ parse.listaopciones[x].apellido + " "+  parse.listaopciones[x].nombre_especialidad + '</div>')
        }
       ;});
}

function cargarListas(){
      //Limpia los select
    $('#eliminaNombreEmpleadoInstituto')
    .empty();
    $('#eliminaIdEmpleadoInstituto')
    .empty();
    $('#idModificar')
    .empty();
    
    $('#id_instituto_salud')
    .empty();
    $('#id_instituto_salud_modificar')
    .empty();
    
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/empleado_instituto/controlador_empleado_instituto_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdEmpleadoInstituto").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            
             $("#eliminaNombreEmpleadoInstituto").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});
    
    $.post("../controlador/instituto_salud/controlador_instituto_salud_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0; x < (parse.listaopciones.length-1); x++){
            
            $("#id_instituto_salud").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre+' </option>');
            
            $("#id_instituto_salud_modificar").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre+' </option>');
        };
        
    });
}

function limpiarCampos(){

$("#insertar #resultado").empty();
    
$("#modificar #resultado").empty();

$("#eliminar #resultado1").empty();
$("#eliminar #resultado2").empty();    

}



