// JQuery user interface logic

$(document).ready(function() {
    $("form#pingpong").click(function(event) {
        event.preventDefault();
        $("#results").empty();

        var number = $("#number").val();
        var result = parseInt(number);
        user(result);
        me.forEach(function(result) {
            $("#outcome").append("<li>" + result + "</li>");

        });


    });
});


//Back-end logic
    var me = [];
   function user(result) {
        for(index=1; index<= result; index+=1) {

        if (index % 15 === 0) {
          me.push ("pingpong");

        }else if(index % 5 === 0) {
           me.push ("pong");

        }else if (index % 3 === 0) {
          me.push("ping");
        } else
            me.push (index);

       }
      };
