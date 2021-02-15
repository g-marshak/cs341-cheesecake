//author: gabby marshak

$(document).ready(function(){
    //order form function
    $(".button").click(function(){
        //set text for quantity/topping/notes based on values
        var qtext = "Quantity: " + $("#quantity").val();
        var ttext = "Topping: " + $("input:radio[name ='topping']:checked").val();
        var stext = "Special Instructions: " + $("#notes").val();

        //check for keywords, show/hide elements to show order was completed
        if(stext.includes("vegan") || stext.includes("Vegan")){
            alert("Cheesecakes contain milk and eggs. Vegan options are not available.");
        }else{
            $("#orderText").html(qtext + "<br>" + ttext + "<br>" + stext);
            $(".filledOrder").show();
            $(".orderForm").hide();
        }
    });

     //dropdown function
     $("a").click(function(){
        $("#monthbtn").html($(this).text());
     });
});