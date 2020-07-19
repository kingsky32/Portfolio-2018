<html>

<head>
    <meta charset="UTF-8">
    <?php
    // 메일발송 시작
    $nameFrom  = $_POST['name'];
    $mailFrom = $_POST['email'];
    $nameTo  = '오승주';
    $mailTo = 'kingsky32@gmail.com';
    $cc = "참조";
    $bcc = "숨은참조";
    $subject = $_POST['title'];
    $content = $_POST['message'];

    $charset = "UTF-8";

    $nameFrom   = "=?$charset?B?".base64_encode($nameFrom)."?=";
    $nameTo   = "=?$charset?B?".base64_encode($nameTo)."?=";
    $subject = "=?$charset?B?".base64_encode($subject)."?=";

    $header  = "Content-Type: text/html; charset=utf-8\r\n";
    $header .= "MIME-Version: 1.0\r\n";

    $header .= "Return-Path: <". $mailFrom .">\r\n";
    $header .= "From: ". $nameFrom ." <". $mailFrom .">\r\n";
    $header .= "Reply-To: <". $mailFrom .">\r\n";
    if ($cc)  $header .= "Cc: ". $cc ."\r\n";
    if ($bcc) $header .= "Bcc: ". $bcc ."\r\n";

    $result = mail($mailTo, $subject, $content, $header, $mailFrom);

    if(!$result) {
?>

    <script>
        alert('메일전송실패');
    </script>

    <?php
} else {
?>

    <script>
        alert('감사합니다.');
        history.back();
    </script>

    <?php
}
?>

</head>
</html>
