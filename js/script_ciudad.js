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
        $("#insertar #resultado").empty();
        $.post("../controlador/ciudad/controlador_ciudad_insertar.php", {provincia: $('#insertar #nombre_provincia_ciudad').val(), nombre: $('#insertar #nombre_ciudad').val()}, function(resp){
            $("#insertar #resultado").html(resp);
        });
        cargarListas();
        refrescar();
    });
    
    $("#enviarUpdate").click(function(){
        $("#modificar #resultado3").empty();
        $.post("../controlador/ciudad/controlador_ciudad_modificar.php",{id: $('#modificar #idModificar').val(), provincia: $('#modificar #nombre_provincia_ciudad_modificar').val(), nombre: $('#modificar #nombre_ciudad').val(), estado: $('#estadoModificar option:selected').text()}, function(resp){
            $("#modificar #resultado3").html(resp);
    	});
        refrescar();
        cargarListas();
        
    });
    
    $("#enviarNombre").click(function(){
        $("#eliminar #resultado1").empty();
        $.post("../controlador/ciudad/controlador_ciudad_eliminar_nombre.php",{provincia: $('#eliminar #eliminaNombreProvincia').val(), nombre: $('#eliminar #eliminaNombreCiudad').val()}, function(resp){
        $("#eliminar #resultado1").html(resp);
    	});
        refrescar();
        cargarListas();
        $("#eliminar #resultado2").empty();
    });
    
    $("#enviarId").click(function(){
        $("#eliminar #resultado2").empty();
        $.post("../controlador/ciudad/controlador_ciudad_eliminar_id.php",{id: $('#eliminar #eliminaIdCiudad').val()}, function(resp){
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
    $.post("../controlador/ciudad/controlador_ciudad_consultar.php", function(resp){
   //console.log(resp);
        var parse = JSON.parse(resp);   
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            if (x==0){
                $(".refresh").html('');
            }
            $(".refresh").append('<div class="col-md-10">'+ parse.listaopciones[x].id + " " + parse.listaopciones[x].provincia + " " + parse.listaopciones[x].nombre + " " + parse.listaopciones[x].estado + '</div>');
        };
    });
};

function cargarListas(){
    $('#nombre_provincia_ciudad')
    .empty();
    $('#nombre_provincia_ciudad_modificar')
    .empty();
    $('#eliminaNombreProvincia')
    .empty();
    $('#eliminaNombreCiudad')
    .empty();
    $('#eliminaIdCiudad')
    .empty();
    $('#idModificar')
    .empty();
      //Llama al servicio de los usuarios y llena un select con ellas
    $.post("../controlador/ciudad/controlador_ciudad_consultar.php", function(resp){
        var parse = JSON.parse(resp);
        for(var x=0 ; x < (parse.listaopciones.length-1); x++){
            $("#eliminaNombreCiudad").append( '<option value="'+parse.listaopciones[x].nombre+ '">'+parse.listaopciones[x].nombre+' </option>');
            //console.log(parse.listaopciones[x].provincia);
            $("#eliminaIdCiudad").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
            $("#idModificar").append( '<option value="'+parse.listaopciones[x].id+ '">'+parse.listaopciones[x].id+' </option>');
        };
        
    });
    $.post("../controlador/provincia/controlador_provincia_consultar.php", function(resp2){
        var parse2 = JSON.parse(resp2);
        for(var y=0; y < (parse2.listaopciones.length-1); y++){
            $("#eliminaNombreProvincia").append( '<option value="'+parse2.listaopciones[y].nombre+ '">'+parse2.listaopciones[y].nombre+' </option>');
            $("#nombre_provincia_ciudad").append( '<option value="'+parse2.listaopciones[y].nombre + '">'+parse2.listaopciones[y].nombre+' </option>');
            //console.log(parse2.listaopciones[y].nombre);
            $("#nombre_provincia_ciudad_modificar").append( '<option value="'+parse2.listaopciones[y].id + '">'+parse2.listaopciones[y].id+' </option>');
            //console.log(parse2.listaopciones[y].nombre);
        };
        
    });
};


