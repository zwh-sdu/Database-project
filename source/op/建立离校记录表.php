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
$sql = "CREATE TABLE Leave_Back (
    lbID INT NOT NULL AUTO_INCREMENT,
    StuID VARCHAR(20) NOT NULL,
	LeaveTime DATE NOT NULL,
	BackTime DATE NOT NULL,
	Reason VARCHAR(100),
	PRIMARY KEY (lbID)
)";
if ($conn->query($sql) === TRUE) {
    echo "离校记录表创建成功";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>