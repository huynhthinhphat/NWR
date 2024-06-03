<?php
$action = isset($_GET['action']) ? $_GET['action'] : '';
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

if ($action == 'json_to_sql') {
    json_to_sql($conn);
} elseif ($action == 'sql_to_json') {
    sql_to_json($conn);
} else {
    echo json_encode(['error' => 'Invalid action']);
}

function json_to_sql($conn) {
    // 1. Đọc nội dung của tệp JSON
    $json_file = 'data.json';
    $json_data = file_get_contents($json_file);

    // 2. Chuyển đổi dữ liệu JSON thành mảng PHP
    $data = json_decode($json_data, true);

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
}

function sql_to_json($conn) {
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
}

$conn->close();
?>