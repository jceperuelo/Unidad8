window.onload = function() { 
    mivisor = document.getElementById("imagen"); //referencia al visor
    }
    function mifoto(num) { 
             f = "foto"+num+".jpg"; //ruta de la nueva imagen
             document.images["central"].src=f; 
             }
