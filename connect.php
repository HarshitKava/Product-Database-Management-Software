<?php
	$RM_code = $_POST['addmatcode'];
	$RM_name = $_POST['addmatname'];
	$Price = $_POST['addmatprice'];
	$Provider = $_POST['addmatprov'];

	// Database connection
	$conn = new mysqli('localhost','root','Harshit','se_project');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into rawmateriallist(RM_code,RM_name,Price,Provide) values(?, ?, ?, ?)");
		$stmt->bind_param("ssds", $RM_code, $RM_name, $Price, $Provider);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>