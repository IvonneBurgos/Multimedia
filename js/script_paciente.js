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
    
    //Para escoger la persona
    
    
    $("#enviarInsert").click(function(){
    $.post("../controlador/paciente/controlador_paciente_insertar.php",{persona:$('#idPersona option:selected').val(), sangre:$('#idSangre option:selected').val()}, function(resp){
        $("#insertar #resultado").html(resp);
    });
        
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/paciente/controlador_paciente_modificar.php",{paciente:$('#idModificar option:selected').text(), persona:$('#idModificar option:selected').val(), sangre:$('#modificaidSangre option:selected').val()}, function(resp){
   $("#modificar #resultado").html(resp);
    	});
});
    
   /* $("#enviarNombre").click(function(){
        $("#eliminar #resultado1").html('');
        $("#eliminar #resultado2").html('');
         $.post("../controlador/paciente/controlador_paciente_eliminar_nombre.php",{nombre: $('#eliminaNombreOpcion option:selected').text()}, function(resp){
   $("#eliminar #resultado1").html(resp);
            refrescar();
            cargarListas();
    	});
      
});*/
    
      $("#enviarId").click(function(){
         $("#eliminar #resultado1").html('');
         $("#eliminar #resultado2").html('');
         $.post("../controlador/paciente/controlador_paciente_eliminar_id.php",{paciente: $('#eliminaIdEmpleado option:selected').text()}, function(resp){
   $("#eliminar #resultado2").html(resp);
            refrescar();
            cargarListas();
    	});
});


});

function refrescar(){
     $.post("../controlador/paciente/controlador_paciente_consultar.php", function(resp){
    var parse = JSON.parse(resp);
    if (parse.listaopciones[0].length > 0 || parse.listaopciones[0].length == undefined)
    {
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
        if (x==0){
            $(".refresh").html('');
        }
            $(".refresh").append('<div class="col-md-10">'+"   "+ parse.listaopciones[x].id+"  "+parse.listaopciones[x].id_persona+"  "+parse.listaopciones[x].sangre+'</div>');
        }
    }
    else
    {
        $(".refresh").html('No hay Pacientes Agregados');
    }
});
}

function cargarListas(){
      //Limpia los select
    /*$('#eliminaNombreOpcion')
    .empty();*/
    $('#eliminaIdPaciente')
    .empty();
    $('#idModificar')
    .empty();
    $('#idSangre')
    .empty();
    $('#modificaidSangre')
    .empty();
    $('#idPersona')
    .empty();
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/paciente/controlador_paciente_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdPaciente").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id_persona+ '">'+parse.listaopciones[x].id+' </option>');
            /* $("#eliminaNombreOpcion").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');*/
        }
    ;});
    
     $.post("../controlador/persona/controlador_persona_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#idPersona").append('<option value="'+parse.listaopciones[x].id+'">'+parse.listaopciones[x].nombre+" "+parse.listaopciones[x].apellido+'</option>');
        }
     });
    
     $.post("../controlador/grupo_sanguineo/controlador_grupo_sanguineo_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
             $("#idSangre").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+' </option>');
            $("#modificaidSangre").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});
}