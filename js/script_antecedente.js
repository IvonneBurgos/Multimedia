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
        refrescar();
        $('#modificar').show();
        $('#leer').hide();
        $('#insertar').hide();
        $('#eliminar').hide();
        $('#presentacion').hide();
        
    });
    
    $('#delete').click(function(){
        refrescar();
        $('#eliminar').show();
        $('#insertar').hide();
        $('#leer').hide();
        $('#modificar').hide();
        $('#presentacion').hide();
    });
    
    $("#enviarInsert").click(function(){
        $("#insertar #resultado").empty();
        $.post("../controlador/antecedente/controlador_antecedente_insertar.php", {nombre: $('#insertar #nombre_antecedente').val(), tipo: $('#insertar #nombre_tipo_antecedente_modificar').val(), subtipo: $('#insertar #nombre_subtipo_antecedente_modificar').val()}, function(resp){
            $("#insertar #resultado").html(resp);
            cargarListas();
            refrescar();
        });
    });
    
    $("#enviarUpdate").click(function(){
        $("#modificar #resultado3").empty();
        $.post("../controlador/antecedente/controlador_antecedente_modificar.php",{id: $('#modificar #idModificar').val(), tipo: $('#modificar #nombre_tipo_antecedente_modificar').val(), subtipo: $('#modificar #nombre_subtipo_antecedente_modificar').val(), nombre: $('#modificar #nombre_antecedente').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
            $("#modificar #resultado3").html(resp);
            cargarListas();
            refrescar();
    	});
    });
    
    $("#enviarNombre").click(function(){
        $("#eliminar #resultado1").empty();
        $.post("../controlador/antecedente/controlador_antecedente_eliminar_nombre.php",{tipo: $('#eliminar #eliminaNombreAntecedenteTipo').val(), subtipo: $('#eliminar #eliminaNombreAntecedenteSubtipo').val()}, function(resp){
            $("#eliminar #resultado1").html(resp);
            cargarListas();
            refrescar();
    	});
        $("#eliminar #resultado2").empty();
    });
    
    $("#enviarId").click(function(){
        $("#eliminar #resultado2").empty();
        $.post("../controlador/antecedente/controlador_antecedente_eliminar_id.php",{id: $('#eliminar #eliminaIdAntecedente').val()}, function(resp){
            $("#eliminar #resultado2").html(resp);
            cargarListas();
            refrescar();
    	});
        $("#eliminar #resultado1").empty();
    });
    
    /*$('#enviarInsert').click(function(){
   $('#insertar #resultado').append("<div><?php include( 'controlador/controlador_opcion.php' ); ?></div>");
});*/  
});


function refrescar(){
    $.post("../controlador/antecedente/controlador_antecedente_consultar.php", function(resp){
   //console.log(resp);
        var parse = JSON.parse(resp);   
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].id + " " + parse.listaopciones[x].nombre + " " + parse.listaopciones[x].tipo + " " + parse.listaopciones[x].subtipo + " " + parse.listaopciones[x].estado + '</div>');
        };
    });
};

function cargarListas(){
    $('#nombre_tipo_antecedente_modificar')
    .empty();
    $('#nombre_subtipo_antecedente_modificar')
    .empty();
    $('#eliminaNombreAntecedenteTipo')
    .empty();
    $('#eliminaNombreAntecedenteSubtipo')
    .empty();
    $('#eliminaIdAntecedente')
    .empty();
    $('#idModificar')
    .empty();
      //Llama al servicio de los usuarios y llena un select con ellas
    $.post("../controlador/antecedente/controlador_antecedente_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            //console.log(parse.listaopciones[x].provincia);
            $("#eliminaIdAntecedente").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
        };
        
    });
    $.post("../controlador/tipo_antecedente/controlador_tipo_antecedente_consultar.php", function(resp2){
        var parse2 = JSON.parse(resp2);
        for(var y=0; y < (parse2.listaopciones.length-1); y++){
            $("#eliminaNombreAntecedenteTipo").append( '<option value="'+parse2.listaopciones[y].id+ '">'+parse2.listaopciones[y].id+' </option>');
            $("#nombre_tipo_antecedente_modificar").append( '<option value="'+parse2.listaopciones[y].id+ '">'+parse2.listaopciones[y].id+' </option>');
        };
        
    });

    $.post("../controlador/subtipo_antecedente/controlador_subtipo_antecedente_consultar.php", function(resp3){
        var parse3 = JSON.parse(resp3);
        for(var z=0; z < (parse3.listaopciones.length-1); z++){
            $("#eliminaNombreAntecedenteSubtipo").append( '<option value="'+parse3.listaopciones[z].id+ '">'+parse3.listaopciones[z].id+' </option>');
            $("#nombre_subtipo_antecedente_modificar").append( '<option value="'+parse3.listaopciones[z].id+ '">'+parse3.listaopciones[z].id+' </option>');
        };
        
    });
};


