$(document).ready(function() {

    $("#btnMensagem").click(function() {
        $("#mensagem").fadeIn();
    });

    $("#btnMenu").click(function() {
        $("#conteudo").slideToggle();
    });

    $("button").hover(
        function() {
            $(this).animate({
                padding: "15px 25px"
            }, 200);
        },
        function() {
            $(this).animate({
                padding: "10px 20px"
            }, 200);
        }
    );

    $("#btnEsconder").click(function() {
        $("#mensagem").fadeOut();
    });

    $("h1").dblclick(function() {
        $(this).text("Você deu um duplo clique!");
    });

});