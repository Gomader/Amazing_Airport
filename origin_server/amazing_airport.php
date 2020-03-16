<?php
	$hn = "%";
	$db = "amazingairport";
	$un = "userdata";
	$pw = "amazingairport2020";
	$conn = new mysqli($hn,$un,$pw,$db);
	$conn->query("set names 'utf8'");
	if ($conn->connect_error) die($conn->connect_error);
	if ($_GET["module"] == 0) {
		$id = time();
		$userData = $_POST["userData"];
		$query = "insert into userdata(id,userInfo) values('$id','$userData')";
		$res = $conn->query($query);
		if(!$res){
			echo 0;
		}else{
			echo $id;
		}
	}else if($_GET["module"] == 1){
		$id = $_GET["id"];
		$query = "select * from userdata where id = '$id'";
		$result = $conn->query($query);
		if ($result->num_rows > 0){
			while($row = $result->fetch_assoc()){
				echo $row["userInfo"];
			}
		}else{
			echo 0;
		}
	}else if($_GET["module"] == 2){
		$id = $_POST["id"];
		$userInfo = $_POST["userData"];
		$query = "update userdata set userInfo = '$userInfo' where id = '$id'";
		$res = $conn->query($query);
		if(!$res){
			echo 0;
		}else{
			echo 1;
		}
	}
?>