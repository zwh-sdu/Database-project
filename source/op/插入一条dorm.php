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
$sql = "INSERT INTO dormitory (DormID, BuildingID, FloorID, RoomID) 
VALUES ('S2-B516','S2',5,'B516')
";
if ($conn->query($sql) === TRUE) {
    echo "插入dorm关系成功";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
