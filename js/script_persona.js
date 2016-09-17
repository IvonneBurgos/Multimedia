$(document).ready(function(){
    
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
        refrescar();
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
        $("#insertar #resultado").empty();
        $.post("../controlador/persona/controlador_persona_insertar.php",{cedula: $('#insertar #cedula').val(), nombre: $('#insertar #nombre').val(), apellido: $('#insertar #apellido').val(), fecha_nacimiento: $('#insertar #fecha_nacimiento').val(), genero: $('#insertar #genero option:selected').text(),
          ocupacion: $('#insertar #ocupacion').val(), correo: $('#insertar #correo').val(), num_hijos: $('#insertar #numero_hijos').val(), usuario: $('#insertarUsuario').val(), ciudad: $('#insertarCiudadNacimiento').val(), nivel_instruccion: $('#insertarNivelInstruccion').val(), religion: $('#insertarReligion').val(), estado_civil: $('#insertarEstadoCivil').val(), etnia: $('#insertarEtnia').val()}, function(resp){
            $("#insertar #resultado").html(resp);
            cargarListas();
            refrescar();
    	});
        
    });
    $("#enviarUpdate").click(function(){
        $("#modificar #resultado").empty();
        $.post("../controlador/persona/controlador_persona_modificar.php",{id: $('#modificarId').val(), cedula: $('#modificar #cedula').val(), nombre: $('#modificar #nombre').val(),
         apellido: $('#modificar #apellido').val(), fecha_nacimiento: $('#modificar #fecha_nacimiento').val(), genero: $('#modificar #genero option:selected').text(),
          ocupacion: $('#modificar #ocupacion').val(), correo: $('#modificar #correo').val(), num_hijos: $('#modificar #numero_hijos').val(), usuario: $('#modificarUsuario').val(),
          ciudad: $('#modificarCiudadNacimiento').val(), nivel_instruccion: $('#modificarNivelInstruccion').val(), religion: $('#modificarReligion').val(),
          estado_civil: $('#modificarEstadoCivil').val(), etnia: $('#modificarEtnia').val()}, function(resp){
            $("#modificar #resultado").html(resp);
            cargarListas();
            refrescar();
    	});
    });
    
    $("#enviarCedula").click(function(){
        $("#eliminar #resultado1").empty();
        $("#eliminar #resultado2").empty();
        $.post("../controlador/persona/controlador_persona_eliminar_cedula.php",{cedula: $('#eliminar #eliminarCedula').val()}, function(resp){
            $("#eliminar #resultado1").html(resp);
            cargarListas();
            refrescar();
    	});
    });
    
    $("#enviarId").click(function(){
        $("#eliminar #resultado1").empty();
        $("#eliminar #resultado2").empty();
        $.post("../controlador/persona/controlador_persona_eliminar_id.php",{id: $('#eliminar #eliminarId').val()}, function(resp){
            $("#eliminar #resultado2").html(resp);
            cargarListas();
            refrescar();
    	});
});
     
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
    $('#modificarId, #modificarUsuario, #modificarCiudadNacimiento, #modificarNivelInstruccion, #modificarReligion, #modificarEstadoCivil, #modificarEtnia').empty();
    $('#insertarUsuario, #insertarCiudadNacimiento, #insertarNivelInstruccion, #insertarReligion, #insertarEstadoCivil, #insertarEtnia').empty();
    $('#eliminarId, #eliminarCedula').empty();

      //Llama al servicio de las tablas y llena un select con ellas
    $.post("../controlador/persona/controlador_persona_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#modificarId").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].id+' </option>');
            $("#eliminarId").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].id+' </option>'); 
            $("#eliminarCedula").append( '<option value="'+parse.listaopciones[x].cedula + '">'+parse.listaopciones[x].cedula+' </option>'); 
        }
    ;});

    $.post("../controlador/usuario/controlador_usuario_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#modificarUsuario").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre+' </option>');
            $("#insertarUsuario").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});

    $.post("../controlador/ciudad/controlador_ciudad_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
           $("#modificarCiudadNacimiento").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre +' </option>');
           $("#insertarCiudadNacimiento").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre +' </option>');
        }
    ;});

    $.post("../controlador/nivel_instruccion/controlador_nivel_instruccion_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
           $("#modificarNivelInstruccion").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre +' </option>');
           $("#insertarNivelInstruccion").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre +' </option>');
        }
    ;});

    $.post("../controlador/religion/controlador_religion_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
           $("#modificarReligion").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre +' </option>');
           $("#insertarReligion").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre +' </option>');
        }
    ;});

    $.post("../controlador/estado_civil/controlador_estado_civil_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
           $("#modificarEstadoCivil").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre +' </option>');
           $("#insertarEstadoCivil").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre +' </option>');
        }
    ;});

    $.post("../controlador/etnia/controlador_etnia_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
           $("#modificarEtnia").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre +' </option>');
           $("#insertarEtnia").append( '<option value="'+parse.listaopciones[x].id + '">'+parse.listaopciones[x].nombre +' </option>');
        }
    ;});
}
  


