$( document).ready(function(){
    
    $('#contenedor > div').hide();
    $('#presentacion').show();
    $('#insert').click(function(){
        cargarListas();
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
        $('#modificar #resultado').html('');
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
        $.post("../controlador/direccion/controlador_direccion_insertar.php",{id_persona:$('#idPersona option:selected').val(), direccion_residencia:$('#insertar #direccion_residencia').val(),direccion_trabajo:$('#insertar #direccion_trabajo').val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
        
});
    
    $("#enviarUpdate").click(function(){
        
        $("#modificar #resultado").html('');
        $.post("../controlador/direccion/controlador_direccion_modificar.php",
               {
                    id: $('#idDireccion option:selected').text(),
                    id_persona: $('#idDireccion option:selected').attr('value2'),
                    direccion_residencia:$('#modificar #direccion_residencia').val(),
                    direccion_trabajo:$('#modificar #direccion_trabajo').val(), 
                    estado: $('#estadoModificar option:selected').text()},
               function(resp){
                    $("#modificar #resultado").html(resp);
        });
});
      $("#enviarId").click(function(){
         $("#eliminar #resultado2").html('');
         $.post("../controlador/direccion/controlador_direccion_eliminar_id.php",{id:$('#eliminaIdOpcion option:selected').val()}, function(resp){
         $("#eliminar #resultado2").html(resp);
          refrescar();
          cargarListas();
    	});  
});
    $( "#idDireccion" )
  .change(function() {
    var str = "";
    $( "#idDireccion option:selected" ).each(function() {
      str += $( this ).val() + " ";
    });
    $( "#mod_id_persona" ).text( str );
  })
  .trigger( "change" );
});


function refrescar(){
    $.post("../controlador/direccion/controlador_direccion_consultar.php", function(resp){
    var parse = JSON.parse(resp);
    if (parse.listaopciones[0].length > 0 || parse.listaopciones[0].length == undefined)
    {
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
        if (x==0){
            $(".refresh").html('');
        }
            $(".refresh").append('<div class="col-md-10">'+"   "+ parse.listaopciones[x].id+"   "+ parse.listaopciones[x].id_persona+"  "+parse.listaopciones[x].cedula+"  "+parse.listaopciones[x].nombre+"   "+parse.listaopciones[x].apellido+"  "+parse.listaopciones[x].direccion_residencia+"   "+ parse.listaopciones[x].direccion_trabajo+'</div>');
        }
    }
    else
    {
        $(".refresh").html('No hay Direcciones Agregadas');
    }
});}

function cargarListas(){
    $('#idPersona').empty();
    $('#eliminaIdOpcion').empty();
    $('#idDireccion').empty();
    $('#mod_id_persona').html('');
    $.post("../controlador/persona/controlador_persona_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#idPersona").append('<option value="'+parse.listaopciones[x].id+'">'+parse.listaopciones[x].nombre+" "+parse.listaopciones[x].apellido+'</option>');
        }});
    $.post("../controlador/direccion/controlador_direccion_consultar.php",function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdOpcion").append('<option value="'+parse.listaopciones[x].id+'">'+parse.listaopciones[x].id+'</option>');
            $("#idDireccion").append('<option value="'+parse.listaopciones[x].nombre+" "+parse.listaopciones[x].apellido +'" value2="'+ parse.listaopciones[x].id_persona+'">'+parse.listaopciones[x].id+'</option>');
        }
           $( "#mod_id_persona" ).text(parse.listaopciones[0].nombre+" "+parse.listaopciones[0].apellido);  
           
    });
}