$( document).ready(function(){
    
    $('#contenedor > div').hide();
    $('#presentacion').show();
     
    $('#insert').click(function(){
        cargarListas();
        $("#resultado").html('');
        $("#insertar #nombre").html('');
        $('#insertar').show();
        $('#leer').hide();
        $('#modificar').hide();
        $('#eliminar').hide();
        $('#presentacion').hide();
    });
     $('#read').click(function(){
         refrescar();
        $('#leer').show();
        $('#insertar').hide();
        $('#modificar').hide();
        $('#eliminar').hide();
        $('#presentacion').hide();
    });
    $('#update').click(function(){
        cargarListas();
        $("#modificar #nombre").html('');
        $('#modificar').show();
        $('#leer').hide();
        $('#insertar').hide();
        $('#eliminar').hide();
        $('#presentacion').hide();
    });
    $('#delete').click(function(){
        refrescar();
        cargarListas();
        $("#eliminar #resultado1").html('');
        $("#eliminar #resultado2").html('');
        $('#eliminar').show();
        $('#insertar').hide();
        $('#leer').hide();
        $('#modificar').hide();
        $('#presentacion').hide();
    });
    
    $("#enviarInsert").click(function(){
        
        $.post("../controlador/examen_fisico/controlador_examen_fisico_insertar.php",{id_tipo_examen:$('#idTipoFisico option:selected').val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
        
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/examen_fisico/controlador_examen_fisico_modificar.php",{id_exm_fisico: $('#idModificar option:selected').val(), id_tipo: $('#idModificarTipoExamen option:selected').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
   $("#modificar #resultado").html(resp);
    	});
});
      $("#enviarId").click(function(){
         $("#eliminar #resultado1").html('');
         $("#eliminar #resultado2").html('');
         $.post("../controlador/examen_fisico/controlador_examen_fisico_eliminar_id.php",{id: $('#eliminaIdOpcion option:selected').text()}, function(resp){
   $("#eliminar #resultado2").html(resp);
          refrescar();
          cargarListas();
    	});
          
});
});


function refrescar(){
    $.post("../controlador/examen_fisico/controlador_examen_fisico_consultar.php", function(resp){
    var parse = JSON.parse(resp);
    if (parse.listaopciones[0].length > 0 || parse.listaopciones[0].length == undefined)
    {
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
        if (x==0){
            $(".refresh").html('');
        }
            $(".refresh").append('<div class="col-md-10">'+parse.listaopciones[x].id + " "+ parse.listaopciones[x].tipo_examen+ '</div>');
        }
    }
    else
    {
        $(".refresh").html('No hay exámenes fisicos agregados');
    }
});}

function cargarListas(){
      //Limpia los select
    $('#eliminaIdOpcion')
    .empty();
    $('#idModificar')
    .empty();
    $('#idModificarTipoExamen')
    .empty();
    $('#idTipoFisico')
    .empty();
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/examen_fisico/controlador_examen_fisico_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdOpcion").append( '<option value="'+parse.listaopciones[x].id+'">'+parse.listaopciones[x].id+' </option>');
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+'">'+parse.listaopciones[x].id+' </option>');
        }});
    $.post("../controlador/tipo_examen_fisico/controlador_tipo_examen_fisico_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
           
            $("#idTipoFisico").append( '<option value="'+parse.listaopciones[x].id+'">'+parse.listaopciones[x].nombre+' </option>');
            $("#idModificarTipoExamen").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+'</option>');
          
        }});
}