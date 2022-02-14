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

$stuid=$_POST['stuid'];
$stuname=$_POST['stuname'];
$olddorm=$_POST['olddorm'];
$newdorm=$_POST['newdorm'];
$date=$_POST['date'];
$reason=$_POST['reason'];

//由于在事务提交中系统默认提交，故这里设置为FALSE先不提交
$conn->autocommit(false);
//其实这里系统已经相当在这里做个保存点，记录此时所有状态，回滚是回滚到这里

$sql1 = "INSERT INTO changedorm (StuID, OldDorm, NewDorm, Date, Reason) 
VALUES ('$stuid','$olddorm','$newdorm','$date','$reason')";
$result1 = $conn->query($sql1);
$sql2 = "UPDATE student_dormitory SET DormID='$newdorm' WHERE StuID='$stuid'";
$result2 = $conn->query($sql2);

//判断是否都执行成功
if(!$result1||!$result2){
    //只要有一条失败便回滚，都不执行,若设置滚回点，如a,加个参数a变滚回到a处
    $conn->rollback();
}else{
    //一旦提交无法回滚，成功则提交
    $conn->commit();
}
echo json_encode($result1&&$result2);

$conn->close();