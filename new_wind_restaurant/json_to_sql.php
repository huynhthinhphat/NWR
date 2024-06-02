<?php
// Tạo header cho việc kiểm soát đầy đủ
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// 1. Đọc nội dung của tệp JSON
$json_file = 'data.json';
$json_data = file_get_contents($json_file);

// 2. Chuyển đổi dữ liệu JSON thành mảng PHP
$data = json_decode($json_data, true);

// 3. Kết nối đến cơ sở dữ liệu MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "angular";

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// 4. Chạy các truy vấn SQL để chèn dữ liệu vào cơ sở dữ liệu
foreach ($data['account'] as $account) {
    $id = $account['id'];
    $user = $account['user'];
    $password = $account['password'];
    $typeAccount = $account['typeAccount'];

    $sql = "INSERT IGNORE INTO login (id, user, password, typeAccount) VALUES ('$id', '$user', '$password', '$typeAccount')";

    if ($conn->query($sql) === false) {
        echo "Lỗi khi chèn dữ liệu: " . $conn->error;
    }
}

// Đóng kết nối
$conn->close();
?>
