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
        cargarListas();
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
         $("#insertar #resultado").html('');
        $.post("../controlador/opcion_perfil/controlador_opcion_perfil_insertar.php",{nombre_perfil: $('#ingresarPerfil option:selected').val(), nombre_opcion: $('#ingresarOpcion option:selected').val()}, function(resp){
        $("#insertar #resultado").html(resp);
    	});
        
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/opcion_perfil/controlador_opcion_perfil_modificar.php",{id: $('#modificaId option:selected').val(), id_opcion: $('#modificaNombrePerfil option:selected').val(), id_perfil: $('#modificaNombrePerfil option:selected').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
            $("#modificar #resultado").html(resp);
        });
    });
    
      $("#enviarId").click(function(){
        $("#eliminar #resultado2").html('');
        $.post("../controlador/opcion_perfil/controlador_opcion_perfil_eliminar_id.php",{id: $('#eliminaIdOpcion option:selected').val()}, function(resp){
            $("#eliminar #resultado2").html(resp);
        });
            refrescar();
            cargarListas();
        });
});


function refrescar(){
    $.post("../controlador/opcion_perfil/controlador_opcion_perfil_consultar.php", function(resp){
        console.log(resp);
    var parse = JSON.parse(resp);
        if (parse.listaopciones[0].length > 0 || parse.listaopciones[0].length == undefined)
    {
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].id + " "+ parse.listaopciones[x].perfil + " " +parse.listaopciones[x].opcion + '</div>');
        }
       }
         else
    {
        $(".refresh").html('No hay Opciones por Perfil agregadas');
    }
    });}

function cargarListas(){
    $('#ingresarPerfil')
    .empty();
    $('#ingresarOpcion')
    .empty();
    $('#modificaNombreOpcion')
    .empty();
    $('#modificaNombrePerfil')
    .empty();
    $('#modificaId')
    .empty();
    eliminaIdOpcion
     $('#eliminaIdOpcion')
    .empty();
      //Llama al servicio de los perfiles y llena un select con ellas
    $.post("../controlador/perfil/controlador_perfil_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#ingresarPerfil").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
            $("#modificaNombrePerfil").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});
    //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/opcion/controlador_opcion_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#ingresarOpcion").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
            $("#modificaNombreOpcion").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    });
    
     $.post("../controlador/opcion_perfil/controlador_opcion_perfil_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
         $("#modificaId").append( '<option value="'+parse.listaopciones[x].id+'">'+parse.listaopciones[x].id+'</option>');
         $("#eliminaIdOpcion").append( '<option value="'+parse.listaopciones[x].id+'">'+parse.listaopciones[x].id+'</option>');  
        }
    ;});
}

  


