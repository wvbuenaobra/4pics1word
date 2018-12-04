// THE ANSWER
var the_answer = "ADELE";
var guess = "";

//comparing the guess to the answer
function doCompare(guess) {
	// alert(the_answer + " - " + guess);

	if(the_answer == guess) {
		// alert("CORRECT!");
		$(".correct").css("visibility", "visible");
	}
} 

//selecting letters on the 12 choices
var choices = $(".lett");

for(let x = 0; x < choices.length; x++) {
	choices[x].onclick = (
		function () {
			let y = $(this).text();

			for(let z = 1; z <= 5; z++) {
				let str = "#ans" + z;

				if($(str).text() == "") {
					$(str).text(y);
					guess += y;
					doCompare(guess);
					break;
				}				
			}

			$(this).text("");
		}
	);
}

//bringing back letters from answer boxes to selection boxes
var answers = $(".ans");

for(let a = 0; a < answers.length; a++) {
	answers[a].onclick = (
		function () {
			let b = $(this).text();

			for(let c = 1; c <= 12; c++) {
				let string = "#lett" + c;

				if($(string).text() == "") {
					$(string).text(b);
					break;
				}
			}

			$(this).text("");
		}
	);
}


