<?php
    include 'Telegram.php';
    $telegram = new Telegram('6968053879:AAF1YG6T-cfQr6GmTpe3_SEFVL0XutMU_Nk');

    $chat_id = $telegram->ChatID();
    $content = array('chat_id' => $chat_id, 'text' => 'Test');
    $telegram->sendMessage($content);
