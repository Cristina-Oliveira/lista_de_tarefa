$(document).ready(function(){
    let formList = $('.form-list');
    let list = $('#list');

    formList.submit(function(e){
        e.preventDefault();

        let textoNome = $('#texto').val();

        list.append("<li>" + textoNome +"</li>");
    });

    list.on("click", "li", function () {
        $(this).toggleClass("completed");
      });
});