

var class_list = {};

function Class(classname, professorname, grade, workload, difficulty) {
    this.className = classname;
    this.professorName = professorname;
    this.classGrade = grade;
    this.workLoad = workload;
    this.diff = difficulty;
}

window.onload = function() {

	var sum_diff = 0;
	var sum_work = 0;

	sessionStorage.setItem("sum_diff", sum_diff);
	sessionStorage.setItem("sum_work", sum_work);

	var submit = document.getElementById('class-form');

	submit.onsubmit = function(z) {

		z.preventDefault();

		// store input values
		var a = document.getElementById("class_name").value;
		var b = document.getElementById("professor_name").value;
		var c = document.getElementById("grade").value;
		var d = document.getElementById("work_load").value;
		var e = document.getElementById("difficulty").value;

		// reset the input forms
		document.getElementById("class_name").value = "";
		document.getElementById("professor_name").value = "";
		document.getElementById("grade").value = "A+";
		document.getElementById("work_load").value = "";
		document.getElementById("difficulty").value = "";

		var number = 1;
		var pnl = document.getElementById("output_class_name");
        var dynDiv = document.createElement("div");
        var myP = document.createElement("P");
		dynDiv.id = "class" + number;
		dynDiv.setAttribute("class", "fadeInDown animated float-box");
        number = number + 1;

        var a_t = document.createTextNode("Class name: " + a);
        var b_t = document.createTextNode(" Professor name: " + b);
        var c_t = document.createTextNode(" Grade: " + c);
        var d_t = document.createTextNode(" Workload: " + d);
        var e_t = document.createTextNode(" Difficulty: " + e);

        myP.appendChild(a_t);
        myP.appendChild(b_t);
        myP.appendChild(c_t);
        myP.appendChild(d_t);
        myP.appendChild(e_t);

        /* trying to figure out how to pass data */
		var temp_diff = sessionStorage.getItem('sum_diff');
		var temp_work = sessionStorage.getItem('sum_work');

		/* adding the number */
		temp_diff = Number(temp_diff) + Number(e);
		temp_work = Number(temp_work) + Number(d);

		/* printing out sum values */
		myP.appendChild(document.createTextNode(" Sum_work is: " + temp_work));
		myP.appendChild(document.createTextNode(" Sum_diff is: " + temp_diff));

		/* updating the value with the current sum */
		sessionStorage.setItem("sum_work", temp_work);
		sessionStorage.setItem("sum_diff", temp_diff);

		/* printing out the values */

        dynDiv.appendChild(myP);
        //dynDiv.innerHTML = "Class name: " + a + myBr + " Professor name: " + b + myBr + " Grade: " + c + myBr + " Workload: " + d + myBr + " Difficulty: " + e;
        pnl.appendChild(dynDiv);

        /* changing the font of javascript text */
        document.getElementById("output_class_name").style.fontFamily = "avenir";
		
		/*
		var class1 = Class(a, b, c, d, e);

		class_list[0] = class1;
		*/


	};
}