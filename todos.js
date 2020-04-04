$(".plus").on("click", function() {
    $("input").slideToggle();
});

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input").keypress(function(event) {
    var todoText = $(this).val();
    
    if (todoText && event.which === 13) {        
        $(this).val("");
        $("ul").prepend(`<li><span><i class="fas fa-trash-alt"></i></span>${todoText}</li>`);  
    }
});