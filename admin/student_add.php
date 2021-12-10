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
$stusex=$_POST['stusex'];
$stumajor=$_POST['stumajor'];
$stuclass=$_POST['stuclass'];
$stugrade=$_POST['stugrade'];
$dorm=$_POST['dorm'];
$bed=$_POST['bed'];
$isheader=$_POST['isheader'];
if($isheader===""){
    $isheader="否";
}

//由于在事务提交中系统默认提交，故这里设置为FALSE先不提交
$conn->autocommit(false);
//其实这里系统已经相当在这里做个保存点，记录此时所有状态，回滚是回滚到这里

$sql1 = "INSERT INTO student (StuID, StuName, StuSex, StuMajor,StuClass,StuGrade) 
VALUES ('$stuid','$stuname','$stusex','$stumajor','$stuclass','$stugrade')";
$result1 = $conn->query($sql1);
$sql2 = "INSERT INTO account_info (UserId, UserType, UserPwd)
VALUE ('$stuid','student','88888888')";
$result2 = $conn->query($sql2);
$sql3 = "INSERT INTO student_dormitory (StuID, DormID, BedID, IsHeader)
VALUE ('$stuid','$dorm','$bed','$isheader')";
$result3 = $conn->query($sql3);

//判断是否都执行成功
if(!$result1||!$result2||!$result3){
    //只要有一条失败便回滚，都不执行,若设置滚回点，如a,加个参数a变滚回到a处
    $conn->rollback();
}else{
    //一旦提交无法回滚，成功则提交
    $conn->commit();
}
echo json_encode($result1&&$result2&&$result3);

$conn->close();