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

$data=$_POST['data'];
$len=count($data);
$num=0;
for($i=0;$i<$len;$i++){
    $stuid=$data[$i]['学号'];
    $stuname=$data[$i]['姓名'];
    $stusex=$data[$i]['性别'];
    $stumajor=$data[$i]['学院'];
    $stuclass=$data[$i]['班级'];
    $stugrade=$data[$i]['年级'];
    $dorm=$data[$i]['宿舍'];
    $bed=$data[$i]['床位号'];
    $isheader=$data[$i]['是否为宿舍长'];
    if($isheader===""){
        $isheader="否";
    }
    $sql = "INSERT INTO student (StuID, StuName, StuSex, StuMajor,StuClass,StuGrade)
    VALUES ('$stuid','$stuname','$stusex','$stumajor','$stuclass','$stugrade')";
    $result = $conn->query($sql);
    if($result==true){
        $num++;
    }
    $sql = "INSERT INTO account_info (UserId, UserType, UserPwd)
    VALUE ('$stuid','student','88888888')";
    $result = $conn->query($sql);
    $sql = "INSERT INTO student_dormitory (StuID, DormID, BedID, IsHeader)
    VALUE ('$stuid','$dorm','$bed','$isheader')";
    $result = $conn->query($sql);
}

echo json_encode($num);

//$stuid=$_POST['stuid'];
//$stuname=$_POST['stuname'];
//$stusex=$_POST['stusex'];
//$stumajor=$_POST['stumajor'];
//$stuclass=$_POST['stuclass'];
//$stugrade=$_POST['stugrade'];
//$dorm=$_POST['dorm'];
//$bed=$_POST['bed'];
//$isheader=$_POST['isheader'];
//if($isheader===""){
//    $isheader="否";
//}

//$sql = "INSERT INTO student (StuID, StuName, StuSex, StuMajor,StuClass,StuGrade)
//VALUES ('$stuid','$stuname','$stusex','$stumajor','$stuclass','$stugrade')";
//$result = $conn->query($sql);
//$sql = "INSERT INTO account_info (UserId, UserType, UserPwd)
//VALUE ('$stuid','student','88888888')";
//$result = $conn->query($sql);
//$sql = "INSERT INTO student_dormitory (StuID, DormID, BedID, IsHeader)
//VALUE ('$stuid','$dorm','$bed','$isheader')";
//$result = $conn->query($sql);

$conn->close();