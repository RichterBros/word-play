$(document).ready(function(){
  $("#form-one").submit(function(event) {
    event.preventDefault();


    let inputsArr = ($("input#input").val()).split(" ");
    console.log(inputsArr);
    let newArray = [];
    inputsArr.forEach(function(input){
      if (input.length >= 3){
          newArray.push(input);
      } 

    });
  });
});
