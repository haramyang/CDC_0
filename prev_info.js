
/*
var class_list = {};

function Class(classname, professorname, grade) {
    this.className = classname;
    this.professorName = professorname;
    this.classGrade = grade;
}
*/

window.onload = function() {

	var submit = document.getElementById('class-form');

	submit.onsubmit = function(z) {
		z.preventDefault();
		var a = document.getElementById("class_name").value;
		var b = document.getElementById("professor_name").value;
		var c = document.getElementById("grade").value;
		var d = document.getElementById("work_load").value;
		var e = document.getElementById("difficulty").value;

		document.getElementById("className").innerHTML = a;
		document.getElementById("professorName").innerHTML = b;
		document.getElementById("outputGrade").innerHTML = c;
		document.getElementById("workLoad").innerHTML = d;
		document.getElementById("outputDiff").innerHTML = e;

		//console.log(submit.difficulty.value);

		/*
		var class1 = Class(a, b, c);

		class_list[0] = class1;
		*/
	};
}