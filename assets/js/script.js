// THE ANSWER
var the_answer = "ADELE";

//comparing the guess to the answer
function doCompare() {
	
	let answers = $(".ans");
	let guess = "";

	for(let a = 0; a < answers.length; a++) {
		if(answers[a].innerHTML != "") {
			guess += answers[a].innerHTML;
		}
	}
	
	if(the_answer == guess) {
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
					doCompare();
					break;
				}				
			}

			//check so i can't select more than 5 letters from selection
			let answers = $(".ans");
			let count = 0;
	
			for(let a = 0; a < answers.length; a++) {
				if(answers[a].innerHTML != "") {
					count++;
				}
			}

			if(count != 5) {
				$(this).text("");
			}

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


