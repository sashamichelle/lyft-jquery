$(document).ready(function(){

/*función para que desaparezca la pantalla de inicio*/

$(function(){
        $(".caja-1").fadeOut(1500);
    },3000);

/*función para que aparezca mi segunda parte*/
$(function(){
        $(".caja-2").fadeIn(1500);
    },3000);

/*funcion para tomar el valor del select del modal*/
$('select#select').on('change',function(){
	var option= $(this).val();
	alert("Eres de " + option);
});

/* funcion para ingresar numero de telefono, activar y desactivar el boton*/
 $('#text').keyup(function(){
        if($(this).val().length === 10){
            $('#siguiente').removeClass('disabled');
        }if($(this).val().length < 10){
            $('#siguiente').addClass('disabled');
        }if($(this).val().length > 10){
            $('#siguiente').addClass('disabled');
            $('#text').prop('disabled',true);/*detener el input*/
            $('#text').prop('disabled',false);/*volver a activar*/
        }if (isNaN($(this).val())){
            $('#alert').text('Sólo Números');
            $('#next').addClass('disabled');
        }else{
            $('#alert').text('');
        }
        return false;
    });
});
