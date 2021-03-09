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
            //send post req to /neworder (inserts into db)
            $.post("http://localhost:3000/neworder", qtext, ttext, stext, function(data, status, xhr){

            });

            //display order results
            $("#orderText").html(qtext + "<br>" + ttext + "<br>" + stext);
            $(".filledOrder").show();
            $(".orderForm").hide();
        }
    });

     //dropdown function
     $("a").click(function(){
         //update month button text
         var monthtext = $(this).text()
        $("#monthbtn").html(monthtext);

        //send post request
        $.post("http://localhost:3000/orders", monthtext, function(data, status, xhr){
            var datastr = JSON.stringify(data);
            var datajson = JSON.parse(data);

            //cannot get quantities from either data/datastr/datajson
            //ex. data[0] returns undefined, cant get number with data[0].quantity
            var cherrynum = datastr[0];
            var chocolatenum = datajson[1];
            var plainnum = datastr[2];

            alert("month: " + monthtext + "\ndatastr: " + datastr
                + "\ndatajson: " + datajson
                + "\ncherrynum: " + cherrynum
                + "\nchocolatenum: " + chocolatenum
                + "\nplainnum: " + plainnum);


            //change numbers based on returned json array quantities
            $("#cherryText").html(cherrynum + " cherry");
            $("#chocolateText").html(chocolatenum + " chocolate");
            $("#plainText").html(plainnum + " plain");
        });
     });
});