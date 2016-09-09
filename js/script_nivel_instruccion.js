$( document).ready(function(){ 
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
        $.post("../controlador/nivel_instruccion/controlador_nivel_instruccion_insertar.php",{nombre_nivel_instruccion: $('#insertar #nombre_nivel_instruccion').val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
        
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/nivel_instruccion/controlador_nivel_instruccion_modificar.php",{id: $('#idModificar option:selected').text(), nombre: $('#modificar #nombre').val()}, function(resp){
   $("#modificar #resultado").html(resp);
    	});
});
    
    $("#enviarNombre").click(function(){
         $.post("../controlador/nivel_instruccion/controlador_nivel_instruccion_eliminar_nombre.php",{nombre: $('#eliminaNombreNivelInstruccion option:selected').text()}, function(resp){
   $("#eliminar #resultado1").html(resp);
    	});
        refrescar();
        cargarListas();
});
    
      $("#enviarId").click(function(){
         $.post("../controlador/nivel_instruccion/controlador_nivel_instruccion_eliminar_id.php",{id: $('#eliminaIdNivelInstruccion option:selected').text()}, function(resp){
   $("#eliminar #resultado2").html(resp);
    	});
          refrescar();
          cargarListas();
});
});


function refrescar(){
    $.post("../controlador/nivel_instruccion/controlador_nivel_instruccion_consultar.php", function(resp){
    var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].id + " "+ parse.listaopciones[x].nombre+ '</div>')
        }
       ;});
}

function cargarListas(){
      //Limpia los select
    $('#eliminaNombreNivelInstruccion')
    .empty();
    $('#eliminaIdNivelInstruccion')
    .empty();
    $('#idModificar')
    .empty();
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/nivel_instruccion/controlador_nivel_instruccion_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdNivelInstruccion").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
             $("#eliminaNombreNivelInstruccion").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});
}

function limpiarCampos(){

$("#nombre_nivel_instruccion").val("");
$("#insertar #resultado").empty();

$("#nombre").val(""); 
$("#modificar #resultado").empty();

$("#eliminar #resultado1").empty();
$("#eliminar #resultado2").empty();    

}



