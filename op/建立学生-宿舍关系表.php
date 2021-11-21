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
$sql = "CREATE TABLE STUDENT_DORMITORY (
	StuID VARCHAR(20) NOT NULL,
	DormID VARCHAR(20) NOT NULL,
	BedID INT NOT NULL,
	IsHeader CHAR NOT NULL,
	PRIMARY KEY (StuID)
)";
if ($conn->query($sql) === TRUE) {
    echo "student—dorm关系表创建成功";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>