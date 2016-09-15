$( document).ready(function(){
    
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
    
 /*   $( "#idModificar" ).change(function() {
    var str = "";
    $( "idModificar option:selected" ).each(function(){
        $.post("../controlador/opcion/controlador_opcion_consultar.php", function(resp){
            str += $( this ).text() + " ";
            $("#insertar #resultado").html(resp);
    	});
      
    });
    $( "div" ).text( str );
  })
  .trigger( "change" );*/
    
    $("#enviarInsert").click(function(){
    $.post("../controlador/paciente/controlador_paciente_insertar.php",{persona:$('#idPersona option:selected').val(), sangre:$('#idSangre option:selected').val()}, function(resp){
        $("#insertar #resultado").html(resp);
    });
        
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/paciente/controlador_paciente_modificar.php",{}, function(resp){
   $("#modificar #resultado").html(resp);
    	});
});
    
    $("#enviarNombre").click(function(){
        $("#eliminar #resultado1").html('');
        $("#eliminar #resultado2").html('');
         $.post("../controlador/paciente/controlador_paciente_eliminar_nombre.php",{nombre: $('#eliminaNombreOpcion option:selected').text()}, function(resp){
   $("#eliminar #resultado1").html(resp);
    	});
        refrescar();
        cargarListas();
});
    
      $("#enviarId").click(function(){
         $("#eliminar #resultado1").html('');
         $("#eliminar #resultado2").html('');
         $.post("../controlador/opcion/controlador_opcion_eliminar_id.php",{id: $('#eliminaIdOpcion option:selected').text()}, function(resp){
   $("#eliminar #resultado2").html(resp);
    	});
          refrescar();
          cargarListas();
});
});


function refrescar(){
    $.post("../controlador/paciente/controlador_paciente_consultar.php", function(resp){
    var parse = JSON.parse(resp);
        var save = parse.listaopciones[0].length;
        if (parse.listaopciones[0].length > 0 || parse.listaopciones[0].length == undefined){
            for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.lista[x] + parse.listaopciones[x].id + " "+ parse.listaopciones[x].id_persona+'</div>');
        }
        }
        else{
                $(".refresh").html('No hay Pacientes agregados');
            }
        
       });
}

function cargarListas(){
      //Limpia los select
    $('#eliminaNombreOpcion')
    .empty();
    $('#eliminaIdOpcion')
    .empty();
    $('#idModificar')
    .empty();
    $('#idSangre')
    .empty();
    $('#modificaidSangre')
    .empty();
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/paciente/controlador_paciente_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdOpcion").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
             $("#eliminaNombreOpcion").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});
    
     $.post("../controlador/grupo_sanguineo/controlador_grupo_sanguineo_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
             $("#idSangre").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+' </option>');
            $("#modificaidSangre").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});
}