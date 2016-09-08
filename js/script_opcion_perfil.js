$( document).ready(function(){
     cargarListas();
    $('#contenedor > div').hide();
    $('#presentacion').show();
    
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
        $.post("../controlador/opcion/controlador_opcion_insertar.php",{nombre_perfil: $('#insertar #nombre_perfil').val(), nombre_opcion: $('#insertar #nombre_opcion').val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
        
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/opcion/controlador_opcion_modificar.php",{id: $('#id').val(), nombre: $('#modificar #nombre').val(), url: $('#modificar #url').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
   $("#modificar #resultado").html(resp);
    	});
});
    
    $("#enviarNombre").click(function(){
         $.post("../controlador/opcion/controlador_opcion_eliminar_nombre.php",{nombre: $('#eliminar #nombre').val()}, function(resp){
   $("#eliminar #resultado1").html(resp);
    	});
        refrescar();
});
    
      $("#enviarId").click(function(){
         $.post("../controlador/opcion/controlador_opcion_eliminar_id.php",{id: $('#eliminar #id').val()}, function(resp){
   $("#eliminar #resultado2").html(resp);
    	});
          refrescar();
});
    
    /*$('#enviarInsert').click(function(){
   $('#insertar #resultado').append("<div><?php include( 'controlador/controlador_opcion.php' ); ?></div>");
});*/  
});


function refrescar(){
    $.post("../controlador/opcion_perfil/controlador_opcion_perfil_consultar.php", function(resp){
        console.log(resp);
    var parse = JSON.parse(resp);
        
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].nombre + '</div>')
        }
       ;});
}

function cargarListas(){
    var arrayOpcion = Array();
    $.post("../controlador/opcion/controlador_opcion_consultar.php", function(resp){
        var parse = JSON.parse(resp);
         for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $("#ingresarOpcion").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    });
    
}

  

