<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate input
    if (empty($_POST['name']) || empty($_POST['phone']) ) {
        echo "Заполните все поля.";
        exit;
    }

    // Sanitize input
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);


    // Email recipient
    $to = "rzayev-ceyhun-99@mail.ru";

    // Email subject
    $subject = "Новый форм";

    // Email body
    $body = "Имя: $name\n";
    $body .= "Телефон: $phone\n";

    // Email şakkala
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Prevent header injection
    if (preg_match("/[\r\n]/", $email) || preg_match("/[\r\n]/", $name)) {
        echo "Произошло ошибка.";
        exit;
    }

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение отправлено.";
    } else {
        echo "Сообщение не отправлено.";
    }
}
?>