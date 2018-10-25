$(document).ready(function(){
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
    $("form#calc").click(function(){

        });
});
