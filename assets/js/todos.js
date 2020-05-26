//2nd LOGIC for Line through effect(using CSS and JS)

$("ul").on("click", "li" , function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function() {
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});












  //1st LOGIC for Line through effect(using pure JS)
 //Check off specific Todos By Clicking
// $("li").click(function(){
//             //if li is grey
//         if($(this).css("color") === "rgb(128, 128, 128)"){
//             //turn it black
//             $(this).css({
//                 color:  "black",
//                 textDecoration:  "none"
//             });
//         }
//         //else
//         else{
//         //turn it grey
//         $(this).css({
//             color:  "grey",
//             textDecoration:  "line-through"
//         });
//     }   
// });
        
