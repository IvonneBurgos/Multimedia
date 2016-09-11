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
        $.post("../controlador/provincia/controlador_provincia_insertar.php", {nombre: $('#insertar #nombre_provincia').val()}, function(resp){
            $("#insertar #resultado").html(resp);
        });
        cargarListas();
        refrescar();
    });
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/provincia/controlador_provincia_modificar.php",{id: $('#modificar #idModificar').val(), nombre: $('#modificar #nombre_provincia').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
            $("#modificar #resultado3").html(resp);
    	});
        refrescar();
        cargarListas();
    });
    
    $("#enviarNombre").click(function(){
        $.post("../controlador/provincia/controlador_provincia_eliminar_nombre.php",{nombre: $('#eliminar #eliminaNombreProvincia').val()}, function(resp){
        $("#eliminar #resultado1").html(resp);
    	});
        refrescar();
        cargarListas();
        $("#eliminar #resultado2").empty();
    });
    
    $("#enviarId").click(function(){
        $.post("../controlador/provincia/controlador_provincia_eliminar_id.php",{id: $('#eliminar #eliminaIdProvincia').val()}, function(resp){
        $("#eliminar #resultado2").html(resp);
    	});
          refrescar();
          cargarListas();
        $("#eliminar #resultado1").empty();
    });
    
    /*$('#enviarInsert').click(function(){
   $('#insertar #resultado').append("<div><?php include( 'controlador/controlador_opcion.php' ); ?></div>");
});*/  
});


function refrescar(){
    $.post("../controlador/provincia/controlador_provincia_consultar.php", function(resp){
   //console.log(resp);
        var parse = JSON.parse(resp);   
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].id + " " +parse.listaopciones[x].nombre + " " +parse.listaopciones[x].estado + '</div>');
        };
    });
};

function cargarListas(){
    $('#eliminaNombreProvincia')
    .empty();
    $('#eliminaIdProvincia')
    .empty();
    $('#idModificar')
    .empty();
      //Llama al servicio de los usuarios y llena un select con ellas
    $.post("../controlador/provincia/controlador_provincia_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaNombreProvincia").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
            $("#eliminaIdProvincia").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
        };
    });
};


