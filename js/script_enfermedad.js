$( document).ready(function(){ 
    $('#contenedor > div').hide();
    $('#presentacion').show();
     
    $('#insert').click(function(){
     cargarListas();
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
        $.post("../controlador/enfermedad/controlador_enfermedad_insertar.php",{nombre_enfermedad: $('#insertar #nombre_enfermedad').val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/enfermedad/controlador_enfermedad_modificar.php",{id: $('#idModificar option:selected').text(), nombre: $('#modificar #nombre').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
   $("#modificar #resultado").html(resp);
    	});    
});
    
    $("#enviarNombre").click(function(){
         $.post("../controlador/enfermedad/controlador_enfermedad_eliminar_nombre.php",{nombre: $('#eliminaNombreEnfermedad option:selected').text()}, function(resp){
   $("#eliminar #resultado1").html(resp);
        refrescar();
        cargarListas();     
    	});
});
    
      $("#enviarId").click(function(){
         $.post("../controlador/enfermedad/controlador_enfermedad_eliminar_id.php",{id: $('#eliminaIdEnfermedad option:selected').text()}, function(resp){
   $("#eliminar #resultado2").html(resp);
        refrescar();
        cargarListas();     
    	});
});
});

function refrescar(){
    $.post("../controlador/enfermedad/controlador_enfermedad_consultar.php", function(resp){
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
    $('#eliminaNombreEnfermedad')
    .empty();
    $('#eliminaIdEnfermedad')
    .empty();
    $('#idModificar')
    .empty();
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/enfermedad/controlador_enfermedad_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdEnfermedad").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
             $("#eliminaNombreEnfermedad").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});
}

function limpiarCampos(){

$("#nombre_enfermedad").val("");
$("#insertar #resultado").empty();

$("#nombre").val(""); 
$("#modificar #resultado").empty();

$("#eliminar #resultado1").empty();
$("#eliminar #resultado2").empty();    

}



