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
$sql = "INSERT INTO INSPECTION (Inspector, DormID, insptime, insptype, InspScore,note) 
VALUES ('二丫','S2-B516','2021.11.12','卫生',95,'还行')
";
if ($conn->query($sql) === TRUE) {
    echo "插入一次检查成功";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>