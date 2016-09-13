$( document).ready(function(){
    
    $('#contenedor > div').hide();
    $('#presentacion').show();
     cargarListas();
    $('#insert').click(function(){
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
        
        $.post("../controlador/etiqueta_antecedente/controlador_etiqueta_antecedente_insertar.php",{id_antecedente:$('#idAntecedente option:selected').val(), nombre:$('#insertar #nombre_etiqueta_antecedente').val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
        
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/etiqueta_antecedente/controlador_etiqueta_antecedente_modificar.php",{id_et_antecedente: $('#idModificar option:selected').val(), id_antecedente: $('#idModificarAntecedente option:selected').val(),  nombre:$('#modificar #nombre_etiqueta_antecedente').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
   $("#modificar #resultado").html(resp);
    	});
});
      $("#enviarId").click(function(){
         $("#eliminar #resultado1").html('');
         $("#eliminar #resultado2").html('');
         $.post("../controlador/examen_fisico/controlador_examen_fisico_eliminar_id.php",{id: $('#eliminaIdOpcion option:selected').text()}, function(resp){
   $("#eliminar #resultado2").html(resp);
    	});
          refrescar();
          cargarListas();
});
});


function refrescar(){
    $.post("../controlador/etiqueta_antecedente/controlador_etiqueta_antecedente_consultar.php", function(resp){
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
        $(".refresh").html('No hay Etiquetas Antecedentes Agregadas');
    }
});}

function cargarListas(){
      //Limpia los select
    $('#eliminaIdOpcion')
    .empty();
    $('#idModificar')
    .empty();
    $("#idAntecedente")
    .empty();
    $("#idModificarAntecedente")
    .empty();
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/etiqueta_antecedente/controlador_etiqueta_antecedente_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdOpcion").append( '<option value="'+parse.listaopciones[x].id+'">'+parse.listaopciones[x].id+' </option>');
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+'">'+parse.listaopciones[x].id+' </option>');
        }});
    $.post("../controlador/antecedente/controlador_antecedente_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#idAntecedente").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+' </option>');
             $("#idModificarAntecedente").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+' </option>');
        };
    });
}