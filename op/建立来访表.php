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
$sql = "CREATE TABLE VISITOR (
    visID INT NOT NULL AUTO_INCREMENT,
    VisitorName VARCHAR(20) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    Purpose VARCHAR(100) NOT NULL,
    ArriveTime DATETIME NOT NULL,
    LeaveTime DATETIME NOT NULL,
    AdminID VARCHAR(20) NOT NULL,
    VisStuID VARCHAR(20),
    PRIMARY KEY (visID)
)";
if ($conn->query($sql) === TRUE) {
    echo "来访表创建成功";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>