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
$sql = "CREATE TABLE INSPECTION (
    InspID INT NOT NULL AUTO_INCREMENT,
    DormID VARCHAR(20) NOT NULL,
	Inspector VARCHAR(20) NOT NULL,
	InspTime DATE NOT NULL,
	InspType VARCHAR(10) NOT NULL,
	InspScore INT NOT NULL,
	Note VARCHAR(100),
	PRIMARY KEY (InspID)
)";
if ($conn->query($sql) === TRUE) {
    echo "检查表创建成功";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>