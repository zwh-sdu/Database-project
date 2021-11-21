<?php
$servername = "localhost";
$username = "root";
$password = "lionelmessi";
$dbname = "DB_of_Course_Design";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 创建数据库
$sql = "CREATE TABLE REPAIRMENT (
	RepID INT NOT NULL AUTO_INCREMENT,
	DormID VARCHAR(20) NOT NULL,
	SubmitTime DATE NOT NULL,
	SubmitIssue VARCHAR(100) NOT NULL,
	RepTime DATE,
	RepIssue VARCHAR(100),
	IsSolved CHAR NOT NULL,
	PRIMARY KEY (RepID)
)";
if ($conn->query($sql) === TRUE) {
    echo "保修表创建成功";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>