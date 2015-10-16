$(document).ready(function(){
  var number = prompt("Please enter a number");
    for (var index=1; index <= number; index +=1) {
        if (index % 3 === 0 && index % 5 === 0) {
          document.write("ping-pong");
        } else if (index % 3 === 0) {
          document.write("ping");
        } else if (index % 5 === 0) {
          document.write("pong");
        } else {
          document.write(index)
        }


    }
});
