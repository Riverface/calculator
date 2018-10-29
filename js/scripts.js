var qIterator = 0;
var opt1ct = 0;
var opt2ct = 0;
var opt3ct = 0;

$(document).ready(function(){
  $("#q2").hide();
  $("#q3").hide();
  $("#q4").hide();
  $(".end").hide();
  $(".end1").hide();
    $(".end2").hide();
      $(".end3").hide();
        $(".end4").hide();

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
  $(".opt1").click(function(){

    qIterator++;
    console.log(qIterator);
    switch (qIterator) {
      case 1:
      $("#q1").hide();
      $("#q2").show();
      opt1ct++;
      break;
      case 2:
      $("#q2").hide();
      $("#q3").show();
      opt1ct++;
      break;
      case 3:
      $("#q3").hide();
      $("#q4").show();
      opt1ct++;
      break;
      case 4:
      $("#q4").hide();
      $(".end").show();
      whichone();
    }
    console.log(qIterator);

  });

  $(".opt2").click(function(){


    qIterator++;

    switch (qIterator) {
      case 1:
      $("#q1").hide();
      $("#q2").show();
      opt2ct++;
      break;
      case 2:
      $("#q2").hide();
      $("#q3").show();
      opt2ct++;
      break;
      case 3:
      $("#q3").hide();
      $("#q4").show();
      opt2ct++;
      break;
      case 4:
      $("#q4").hide();
      $(".end").show();
      whichone();
      break;
    }
    console.log(qIterator);
  });
  $(".opt3").click(function(){
    qIterator++;
    console.log(qIterator);
    switch (qIterator) {
      case 1:
      $("#q1").hide();
      $("#q2").show();
      opt3ct++;
      break;

      case 2:
      $("#q2").hide();
      $("#q3").show();
      opt3ct++;
      break;

      case 3:
      $("#q3").hide();
      $("#q4").show();
      opt3ct++;
      break;

      case 4:
      $("#q4").hide();
      $(".end").show();
      whichone();
      break;
      console.log(qIterator);
    }

  });
});
function whichone()
{
if((opt2ct > opt3ct) && (opt2ct > opt1ct))
{
$(".end2").show();
console.log(opt2ct +"" + opt3ct + "" + opt1ct);
}
else if((opt3ct > opt1ct) && (opt3ct > opt2ct))
{
$(".end1").show();
console.log(opt2ct +"" + opt3ct + "" + opt1ct);
}
else if((opt3ct > opt1ct) && (opt1ct > opt2ct))
{
$(".end3").show();
console.log(opt2ct +"" + opt3ct + "" + opt1ct);
}
else {
  $(".end4").show();
}
}
