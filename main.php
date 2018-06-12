<!DOCTYPE html>
<html>
	<body>

	<h1>TEST</h1>

	Welcome <?php
		echo $GET["uname"];
	?>
	<br>


	<?php

	$cars = array("Volvo", "BMW", "Jeep");

	class Car {
		function Car() {
			$this->model = "VW";
		}
	}

	$test = new Car();

	echo "Hello World!";
	echo $test->model;
	echo count($cars);

	foreach ($cars as $value) {
		echo "$value <br>"
	}

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		// collect value of input field
		$name = $_REQUEST['psw'];
		if (empty($name)) {
			echo "No password";
		}
		else {
			echo $name;
		}
	}

	?>

	</body>
</html>