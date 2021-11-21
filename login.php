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

$name = $_POST['usernameValue'];
$pass = $_POST['passwordValue'];
$sql = "SELECT * FROM account_info WHERE (UserId='$name' and UserPwd='$pass')";
$result = $conn->query($sql);

if($result->num_rows>0){
    $row = mysqli_fetch_array($result);
    if($row['UserType']=='admin'){
        echo "
        <script type=text/javascript>
        document.cookie = 'accountid='+escape('$name')
        document.cookie = 'pass='+escape('$pass')+'; '
        location.href='admin/index.html';
        </script>
        ";
    }else{
        echo "
        <script type=text/javascript>
        // 设置cookie
        document.cookie = 'stuid='+escape('$name')
        document.cookie = 'pass='+escape('$pass')+'; '
        location.href='student/index.html';
            </script>
        ";
    }
}else{
    echo "
<script type=text/javascript>
location.href='login.html'
alert('账号不存在，请检查用户名和密码是否输入正确！')
</script>
";
}

$conn->close();

//$url = "";
//echo "<script type=text/javascript>";
////echo "location.href='$url'";
//echo "</script>";