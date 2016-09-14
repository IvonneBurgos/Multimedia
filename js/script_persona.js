$(document).ready(function(){
    
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
        $.post("../controlador/persona/controlador_persona_insertar.php",{nombre: $('#insertar #nombre').val(), url: $('#insertar #url').val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
        
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/persona/controlador_persona_modificar.php",{id: $('#id').val(), cedula: $('#modificar #cedula').val(), nombre: $('#modificar #nombre').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
   $("#modificar #resultado").html(resp);
    	});
});
    
    /*$("#enviarNombre").click(function(){
         $.post("../controlador/opcion/controlador_persona_eliminar_nombre.php",{nombre: $('#eliminar #nombre').val()}, function(resp){
   $("#eliminar #resultado1").html(resp);
    	});
        refrescar();
});
    
      $("#enviarId").click(function(){
         $.post("../controlador/opcion/controlador_opcion_eliminar_id.php",{id: $('#eliminar #id').val()}, function(resp){
   $("#eliminar #resultado2").html(resp);
    	});
          refrescar();
});*/
    
    /*$('#enviarInsert').click(function(){
   $('#insertar #resultado').append("<div><?php include( 'controlador/controlador_opcion.php' ); ?></div>");
});*/  
});


function refrescar(){
    $.post("../controlador/persona/controlador_persona_consultar.php", function(resp){
        var parse = JSON.parse(resp);   
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].id + " " +parse.listaopciones[x].cedula + " " + parse.listaopciones[x].nombre + " " + parse.listaopciones[x].apellido + " " + parse.listaopciones[x].fecha_nacimiento + " " + parse.listaopciones[x].genero + " " + parse.listaopciones[x].ocupacion + " " + parse.listaopciones[x].correo + " " + parse.listaopciones[x].num_hijos + " " + parse.listaopciones[x].ciudad + " " + parse.listaopciones[x].provincia + " " + parse.listaopciones[x].nivel_instruccion + " " + parse.listaopciones[x].religion + " " + parse.listaopciones[x].estado_civil + " " + " " + parse.listaopciones[x].etnia + '</div>');
        };
    });
};

function cargarListas(){
    $('#ingresarUsuario')
    .empty();
    $('#ingresarCiudadNacimiento')
    .empty();
    $('#ingresarNivelInstruccion')
    .empty();
    $('#ingresarReligion')
    .empty();
    $('#ingresarEstadoCivil')
    .empty();
    $('#ingresarEtnia')
    .empty();
      //Llama al servicio de los usuarios y llena un select con ellas
    $.post("../controlador/usuario/controlador_usuario_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#ingresarUsuario").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});
    //Llama al servicio de las Ciudades de Nacimiento y llena un select con ellas
    $.post("../controlador/ciudad_nacimiento/controlador_ciudad_nacimiento_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#ingresarCiudadNacimiento").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    });
    //Llama al servicio de los Niveles de Instruccion y llena un select con ellas
    $.post("../controlador/nivel_instruccion/controlador_nivel_instruccion_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#ingresarNivelInstruccion").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    });
    //Llama al servicio de las religiones y llena un select con ellas
    $.post("../controlador/religion/controlador_religion_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#ingresarReligion").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    });
    //Llama al servicio de los estados civiles y llena un select con ellas
    $.post("../controlador/estado_civil/controlador_estado_civil_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#ingresarEstadoCivil").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    });
    //Llama al servicio de las etnias y llena un select con ellas
    $.post("../controlador/etnia/controlador_etnia_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#ingresarEtnia").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    });
}
  


