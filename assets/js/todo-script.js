//Check off specific todo by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("todo__item--completed");
});

//delete todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //Turns off event bubbling so that the other click listeners don't trigger (li, ul, body, html)
    e.stopPropagation();
});

$("#todoInput[type='text']").keypress(function(e){
    if(e.which === 13){
        var todoTxt = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoTxt + "</li>");
    }
});

$(".fa-edit").on("click", function(){
    $("#todoInput").fadeToggle();
});