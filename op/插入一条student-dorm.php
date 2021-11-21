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
$sql = "INSERT INTO student_dormitory (StuID, DormId, BedID,IsHeader) 
VALUES ('201900161140','S2-516',4,'0')
";
if ($conn->query($sql) === TRUE) {
    echo "插入student-dorm关系成功";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
