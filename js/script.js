function multiply(){
	var result = 1;
  for (var i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
function showError(message){
	document.getElementById('errors').classList.remove('hidden');
	document.getElementById('error').innerHTML = message;
}
function getNumbers(){
	var nums = [];
	nums.push(document.getElementById('number1').value);
	nums.push(document.getElementById('number2').value);
	return nums;
}
function divide(){
	console.log('divide');
	var num1 = document.getElementById('number1').value;
	var num2 = document.getElementById('number2').value;
	document.getElementById('result').innerHTML = num1/num2;
}
window.onload = function(){
	document.getElementById('multiply').onclick = function(){
		var num1 = document.getElementById('number1').value;
		var num2 = document.getElementById('number2').value;
		document.getElementById('result').innerHTML = multiply(num1,num2);
	};
	document.getElementById('divide').onclick = function(){
		//alert("gjgjgj");
		//divide();
		var numbers = getNumbers();
		 for (var i = 0; i < numbers.length; i++) {
			if(isNaN(numbers[i])){
				var index = i+1;
				showError("The number " + index + "is not a number!");
				return;
			}
			//Empty case
			if(isEmpty(numbers[i])){
				alert('Empty');
				return;
			}
		  }
	};
};