$(document).ready(function(){
      $("#q2").hide();
      $("#q3").hide();
      $("#q4").hide();

            var qIterator = 0;
  $("form#calc").click(function(){

    var num1 = parseInt($("#input1").val());
    var num2 = parseInt($("#input2").val());
    var op = $("input:radio[name=operator]:checked").val();
    var result = 0;

    if(op === "add")
    {
      result = num1 + num2;
    }
    else if (op === "subtract")
    {
      result = num1 - num2;
    }
    else if (op === "multiply")
    {
      result = num1 * num2;
    }
    else if (op === "divide")
    {
      result = num1 / num2;
    }
    console.log(result);
    $("#output").text(result);

  });
    $(".radioform #opt1").click(function(){

      qIterator++;
      if(qIterator == 1){
        switch () {
          case expression:
            
            break;
          default:

        }
      $("#q1").hide();
      $("#q2").show();
    }
        });

        $(".radioform #opt2").click(function(){

          qIterator++;
          if(qIterator == 2)
          $("#q2").hide();
          $("#q3").show();

            });
            $(".radioform #opt3").click(function(){

              qIterator++;
              if(qIterator == 2)
              $("#q2").hide();
              $("#q3").show();

                });
});
