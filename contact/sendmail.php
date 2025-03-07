<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate input
    if (empty($_POST['name']) || empty($_POST['phone']) || empty($_POST['mail']) || empty($_POST['question'])) {
        echo "Заполните все поля.";
        exit;
    }

    // Sanitize input
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL);
    $message = filter_var($_POST['question'], FILTER_SANITIZE_STRING);

    // Validate email
    if ($email === false) {
        echo "Не верный адрес";
        exit;
    }

    // Email recipient
    $to = "9152381929@bk.ru";

    // Email subject
    $subject = "Новый форм";

    // Email body
    $body = "Имя: $name\n";
    $body .= "Телефон: $phone\n";
    $body .= "Email: $email\n\n";
    $body .= "Сообщение:\n$message\n";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Prevent header injection
    if (preg_match("/[\r\n]/", $email) || preg_match("/[\r\n]/", $name)) {
        echo "Произошло ошибка.";
        exit;
    }

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение отправлено";
    } else {
        echo "Сообщение не отправлено";
    }
}
?>