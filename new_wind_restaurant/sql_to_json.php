<?php 
// Tạo header cho việc kiểm soát đầy đủ
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Thông tin server
$s = "localhost";
$u = "root";
$p = "";
$db = "angular";

// Kết nối
$conn = new mysqli($s, $u, $p, $db);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query để lấy thông tin tài khoản
$sql = "SELECT * FROM login";

// Thực thi query
$result = $conn->query($sql);

// Tạo mảng để chứa dữ liệu
$rows = array();

// Đọc kết quả từ MySQL và thêm vào mảng
while ($row = $result->fetch_assoc()){
    $rows[] = $row;
}

// Chuyển đổi mảng thành JSON
$json = json_encode(array("account" => $rows), JSON_PRETTY_PRINT);

// In ra JSON
// echo $json;

// Lưu dữ liệu JSON vào file
file_put_contents('data.json', $json);

// Đóng kết nối
$conn->close();
?>
