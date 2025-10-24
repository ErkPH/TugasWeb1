<?php
// Cek apakah data dikirim menggunakan metode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // (Logika ambil data... tidak berubah)
    $name = htmlspecialchars(strip_tags(trim($_POST['user_name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['user_email'])));
    $company = htmlspecialchars(strip_tags(trim($_POST['user_company'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['user_message'])));

    // (Logika validasi... tidak berubah)
    if (!empty($name) && !empty($email) && !empty($company) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
        // Halaman Sukses
        echo "<!DOCTYPE html>";
        echo "<html lang='id'>";
        echo "<head>";
        echo "    <meta charset='UTF-8'>";
        // UPDATE
        echo "    <title>Demo Diminta! - Hoshinova AI</title>";
        echo "    <link rel='stylesheet' href='assets/css/style.css'>";
        echo "</head>";
        echo "<body>";
        echo "    <div class='hero' style='min-height: 100vh;'>";
        // (Konten sukses... tidak berubah)
        echo "        <h1>Terima Kasih, $name!</h1>";
        echo "        <p>Demo gratis Anda untuk perusahaan <strong>$company</strong> sedang kami proses.</p>";
        echo "        <p>Tim kami akan segera menghubungi Anda di <strong>$email</strong>.</p>";
        echo "        <br>";
        echo "        <a href='index.html' class='cta-button'>Kembali ke Halaman Utama</a>";
        echo "    </div>";
        echo "</body>";
        echo "</html>";

    } else {
        // Halaman Error
        echo "<!DOCTYPE html>";
        echo "<html lang='id'>";
        // UPDATE
        echo "<head><title>Error - Hoshinova AI</title><link rel='stylesheet' href='assets/css/style.css'></head>";
        echo "<body>";
        echo "    <div class='hero' style='min-height: 100vh;'>";
        // (Konten error... tidak berubah)
        echo "        <h1>Oops! Terjadi Kesalahan.</h1>";
        echo "        <p>Data yang Anda masukkan tidak lengkap atau email tidak valid. Silakan kembali.</p>";
        echo "        <br>";
        echo "        <a href='contact.html' class='cta-button'>Kembali ke Form Demo</a>";
        echo "    </div>";
        echo "</body>";
        echo "</html>";
    }

} else {
    // (Redirect... tidak berubah)
    header("Location: contact.html");
    exit;
}
?>