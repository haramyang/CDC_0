<!DOCTYPE html>
<html>
	<body>

	<h1>My first PHP page</h1>

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

	?>

	</body>
</html>