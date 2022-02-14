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
$sql = "INSERT INTO student (StuID, StuName, StuSex, StuMajor,StuClass,StuGrade) 
VALUES ('201900161140','张文浩','男','计算机科学与技术','人工智能','2019')
";
if ($conn->query($sql) === TRUE) {
    echo "插入student成功";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>