$(function(){ 
    $("a").click(function(event){//seleccionar etiqueta, accion y funcion $(selector).accion()
        if (this.hash !==""){
            event.preventDefault(); //no haga lo que esta predeterminado

            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            },800, function(){
                window.location.hash = gato;
            });
        }
    });
});