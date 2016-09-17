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
        $('#modificar').show();
        $('#leer').hide();
        $('#insertar').hide();
        $('#eliminar').hide();
        $('#presentacion').hide();
    });
    $('#delete').click(function(){
        cargarListas();
        refrescar();
        $('#eliminar').show();
        $('#insertar').hide();
        $('#leer').hide();
        $('#modificar').hide();
        $('#presentacion').hide();
    });
    
    $("#enviarInsert").click(function(){
        $.post("../controlador/perfil/controlador_perfil_insertar.php",{nombre_perfil: $('#insertar #nombre_perfil').val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
        
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/perfil/controlador_perfil_modificar.php",{id: $('#idModificar option:selected').text(), nombre: $('#modificar #nombre').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
   $("#modificar #resultado").html(resp);
    	});
});
    
    $("#enviarNombre").click(function(){
         $.post("../controlador/perfil/controlador_perfil_eliminar_nombre.php",{nombre: $('#eliminaNombrePerfil option:selected').text()}, function(resp){
   $("#eliminar #resultado1").html(resp);
        refrescar();
        cargarListas();
    	});
        
});
    
      $("#enviarId").click(function(){
         $.post("../controlador/perfil/controlador_perfil_eliminar_id.php",{id: $('#eliminaIdPerfil option:selected').text()}, function(resp){
            $("#eliminar #resultado2").html(resp);
            refrescar();
            cargarListas();
    	});

});
    
    /*$('#enviarInsert').click(function(){
   $('#insertar #resultado').append("<div><?php include( 'controlador/controlador_opcion.php' ); ?></div>");
});*/  
});


function refrescar(){
    $.post("../controlador/perfil/controlador_perfil_consultar.php", function(resp){
        console.log(resp);
    var parse = JSON.parse(resp);
    if (parse.listaopciones[0].length > 0 || parse.listaopciones[0].length == undefined){
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].nombre + '</div>')
        }}
        
        else{
                $(".refresh").html('no hay datos que presentar');
            }});
}

function cargarListas(){
      //Limpia los select
    $('#eliminaNombrePerfil')
    .empty();
    $('#eliminaIdPerfil')
    .empty();
    $('#idModificar')
    .empty();
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/perfil/controlador_perfil_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdPerfil").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            $("#eliminaNombrePerfil").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});
}


  


