//Click on X to delete written item
$("#main-ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //grabbing new written text from input
        var writtenText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("#main-ul").append("<li><span><i class='fa fa-trash'></i></span> " + writtenText + "</li>")
    }
});

//Toggle the input
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});