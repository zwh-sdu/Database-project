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
$sql = "CREATE TABLE ACCOUNT_INFO (
	UserId VARCHAR(20) NOT NULL,
	UserType VARCHAR(10) NOT NULL,
	UserPwd VARCHAR(30) NOT NULL,
	PRIMARY KEY (UserId)
	)";
if ($conn->query($sql) === TRUE) {
    echo "账户表创建成功";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>