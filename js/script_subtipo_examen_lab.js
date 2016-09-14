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
        $.post("../controlador/subtipo_examen_laboratorio/controlador_subtipo_examen_laboratorio_insertar.php",{id: $("#id_tipo_examen_laboratorio option:selected").text(),        nombre_subtipo_examen_laboratorio: $('#nombre_subtipo_examen_laboratorio').val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
     
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/subtipo_examen_laboratorio/controlador_subtipo_examen_laboratorio_modificar.php",{id: $('#idModificar option:selected').text(), id_examen_lab: $('#id_tipo_examen_laboratorio_modificar option:selected').text(), nombre: $('#modificar #nombre').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
   $("#modificar #resultado").html(resp);
    	});    
});
    
    $("#enviarNombre").click(function(){
         $.post("../controlador/subtipo_examen_laboratorio/controlador_subtipo_examen_laboratorio_eliminar_nombre.php",{nombre: $('#eliminaNombreSubtipoExamenLaboratorio option:selected').text()}, function(resp){
   $("#eliminar #resultado1").html(resp);
    	});
        refrescar();
        cargarListas();
});
    
      $("#enviarId").click(function(){
         $.post("../controlador/subtipo_examen_laboratorio/controlador_subtipo_examen_laboratorio_eliminar_id.php",{id: $('#eliminaIdSubtipoExamenLaboratorio option:selected').val()}, function(resp){
   $("#eliminar #resultado2").html(resp);
    	});
          refrescar();
          cargarListas();
});
});

function refrescar(){
    $.post("../controlador/subtipo_examen_laboratorio/controlador_subtipo_examen_laboratorio_consultar.php", function(resp){
    var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].id + " "+ parse.listaopciones[x].tipo + " "+ parse.listaopciones[x].subtipo + '</div>')
        }
       ;});
}

function cargarListas(){
      //Limpia los select
    $('#eliminaNombreSubtipoExamenLaboratorio')
    .empty();
    $('#eliminaIdSubtipoExamenLaboratorio')
    .empty();
    $('#idModificar')
    .empty();
    
    $('#id_tipo_examen_laboratorio')
    .empty();
    $('#id_tipo_examen_laboratorio_modificar')
    .empty();
    
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/subtipo_examen_laboratorio/controlador_subtipo_examen_laboratorio_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdSubtipoExamenLaboratorio").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
             $("#eliminaNombreSubtipoExamenLaboratorio").append( '<option value="'+parse.listaopciones[x].subtipo+ '">'+parse.listaopciones[x].subtipo+' </option>');
        }
    ;});
    
    $.post("../controlador/tipo_examen_laboratorio/controlador_tipo_examen_laboratorio_consultar.php", function(resp2){
        var parse2 = JSON.parse(resp2);
        for(var y=0; y < (parse2.listaopciones.length-1); y++){
            
            $("#id_tipo_examen_laboratorio").append( '<option value="'+parse2.listaopciones[y].id + '">'+parse2.listaopciones[y].id+' </option>');
            $("#id_tipo_examen_laboratorio_modificar").append( '<option value="'+parse2.listaopciones[y].id + '">'+parse2.listaopciones[y].id+' </option>');
        };
        
    });
}

function limpiarCampos(){

$("#nombre_subtipo_examen_laboratorio").val("");
$("#insertar #resultado").empty();

$("#nombre").val(""); 
$("#modificar #resultado").empty();

$("#eliminar #resultado1").empty();
$("#eliminar #resultado2").empty();    

}



