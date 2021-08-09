$(function() { // smooth scrolling
    $("a").click(function(event) { //seleccionar etiqueta, accion y funcion $(selector).accion()
        if (this.hash !== "") {
            event.preventDefault(); //no haga lo que esta predeterminado

            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    $(function() { // tooltip para el footer 
        $('[data-toggle="tooltip"]').tooltip()
    })

    $("h3").click(function(event) { // alert para texto footer
        alert("Pagina creada por Rodrigo Tapia")
    });

});