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
        limpiarCampos();
    });
     $('#read').click(function(){
         refrescar();
        $('#leer').show();
        $('#insertar').hide();
        $('#modificar').hide();
        $('#eliminar').hide();
        $('#presentacion').hide();
         limpiarCampos();
    });
    $('#update').click(function(){
        cargarListas();
        $('#modificar').show();
        $('#leer').hide();
        $('#insertar').hide();
        $('#eliminar').hide();
        $('#presentacion').hide();
        limpiarCampos();
    });
    $('#delete').click(function(){
        refrescar();
        cargarListas();
        $('#eliminar').show();
        $('#insertar').hide();
        $('#leer').hide();
        $('#modificar').hide();
        $('#presentacion').hide();
        limpiarCampos();
    });
    
    $("#enviarInsert").click(function(){
        $.post("../controlador/instituto_salud/controlador_instituto_salud_insertar.php",{ruc: $('#ruc_instituto').val(), razon_social: $('#razon_social_instituto').val(), nombre: $('#nombre_instituto').val(), id_ciudad: $("#id_ciudad option:selected").val(), direccion: $('#direccion_instituto').val()}, function(resp){
   $("#insertar #resultado").html(resp);
    	});
     
});
    
    $("#enviarUpdate").click(function(){
        $.post("../controlador/instituto_salud/controlador_instituto_salud_modificar.php",{id: $('#idModificar option:selected').text(), ruc: $('#ruc').val(), razon_social: $('#razon_social').val(), nombre: $('#nombre').val(), id_ciudad: $("#id_ciudad_modificar option:selected").val(), direccion: $('#direccion').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
   $("#modificar #resultado").html(resp);
    	}); 
});
    
    $("#enviarNombre").click(function(){
         $.post("../controlador/instituto_salud/controlador_instituto_salud_eliminar_nombre.php",{id: $('#eliminaNombreInstituto option:selected').val()}, function(resp){
   $("#eliminar #resultado1").html(resp);
        refrescar();
        cargarListas();     
    	});
});
    
      $("#enviarId").click(function(){
         $.post("../controlador/instituto_salud/controlador_instituto_salud_eliminar_id.php",{id: $('#eliminaIdInstituto option:selected').val()}, function(resp){
   $("#eliminar #resultado2").html(resp);
        refrescar();
        cargarListas();     
    	});
});
});

function refrescar(){
    $.post("../controlador/instituto_salud/controlador_instituto_salud_consultar.php", function(resp){
    var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].id + " "+   parse.listaopciones[x].nombre + " "+ parse.listaopciones[x].id_ciudad + " "+  parse.listaopciones[x].direccion + '</div>')
        }
       ;});
}


function cargarListas(){
      //Limpia los select
    $('#eliminaNombreInstituto')
    .empty();
    $('#eliminaIdInstituto')
    .empty();
    $('#idModificar')
    .empty();
    
    $('#id_ciudad')
    .empty();
    $('#id_ciudad_modificar')
    .empty();
    
      //Llama al servicio de las opciones y llena un select con ellas
    $.post("../controlador/instituto_salud/controlador_instituto_salud_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaIdInstituto").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            
             $("#eliminaNombreInstituto").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].nombre+' </option>');
        }
    ;});
    
    $.post("../controlador/ciudad/controlador_ciudad_consultar.php", function(resp2){
        var parse2 = JSON.parse(resp2);
        for(var y=0; y < (parse2.listaopciones.length-1); y++){
            
            $("#id_ciudad").append( '<option value="'+parse2.listaopciones[y].id + '">'+parse2.listaopciones[y].nombre+' </option>');
            $("#id_ciudad_modificar").append( '<option value="'+parse2.listaopciones[y].id + '">'+parse2.listaopciones[y].nombre+' </option>');
        };
        
    });
}

function limpiarCampos(){

$("#ruc_instituto").val("");    
$("#razon_social_instituto").val("");
$("#nombre_instituto").val("");    
$("#direccion_instituto").val("");
$("#insertar #resultado").empty();

$("#ruc").val("");    
$("#razon_social").val("");
$("#nombre").val("");    
$("#direccion").val("");
$("#modificar #resultado").empty();

$("#eliminar #resultado1").empty();
$("#eliminar #resultado2").empty();    

}



