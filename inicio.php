<?php
$connection = mysqli_connect("127.0.0.1", "root", "angelo", "baiano");

if (!$connection) {
    die("Erro na conexão: " . mysqli_connect_error());
}

if (isset($_POST['submit_comment'])) {
    $image_id = mysqli_real_escape_string($connection, $_POST['image_id']);
    $name = mysqli_real_escape_string($connection, $_POST['name']);
    $comment = mysqli_real_escape_string($connection, $_POST['comment']);

    $query_check_image = "SELECT id FROM Images WHERE id = '$image_id'";
    $result_check_image = mysqli_query($connection, $query_check_image);

    if (!$result_check_image || mysqli_num_rows($result_check_image) == 0) {
        echo "Erro: Imagem não encontrada.";
    } else {
        $query_insert_comment = "INSERT INTO Comments (image_id, name, comment, timestamp) VALUES ('$image_id', '$name', '$comment', NOW())";

        if (!mysqli_query($connection, $query_insert_comment)) {
            echo "Erro ao adicionar o comentário: " . mysqli_error($connection);
        }
    }
}

$query = "SELECT * FROM Images ORDER BY RAND() LIMIT 1";
$result = mysqli_query($connection, $query);

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Logo\logo.png">
    <title>Dream and Make - Explorar</title>
    <style>
        /* Estilos para o corpo */
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #1a1a1a;
            color: white;
            margin: 0;
            padding: 0;
        }

        /* Estilos para o cabeçalho */
        header {
            background-color: #121212;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            box-shadow: none;
        }

        /* Estilos para o logo */
        .logo {
            display: flex;
            align-items: center;
        }

        .logo img {
            max-width: 80px;
            margin-right: 10px;
        }

        .logo h1 {
            font-size: 20px;
            color: white;
            margin: 0;
            font-weight: bold;
        }

        /* Estilos para a navegação */
        nav ul {
            list-style: none;
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
        }

        nav ul li {
            margin-right: 25px;
        }

        nav ul li a {
            text-decoration: none;
            color: #72B48F;
            font-size: 16px;
            font-weight: bold;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: #61A57E;
        }

        /* Estilos para o container de imagem */
        .image-container {
            text-align: center;
            flex: 1; /* Ocupar o espaço restante */
            margin-right: 20px; /* Espaço entre a imagem e os comentários */
        }

        /* Estilos para imagem centralizada */
        .centered-image {
            max-width: 50%;
            max-height: 40%;
            min-width: auto;
            min-height: auto;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.5s ease;
        }

        .centered-image:hover {
            transform: scale(1.1);
        }

        /* Estilos para o nome da imagem */
        .image-name {
            margin-top: 10px;
            color: white;
            font-weight: bold;
            font-size: 18px;
        }

        .author-name {
    color: #72B48F;
    font-size: 16px;
    font-weight: bold;
}


        /* Estilos para o botão de mudar imagem */
        .change-image-button {
            background-color: red;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
            margin-left: 10px;
        }

        .change-image-button:hover {
            background-color: #61A57E;
        }
        /* Estilos para a frase de celebração */
        .celebrate-phrase {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 14px;
            color: #72B48F;
        }
        .image-comments-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .image-container {
    position: relative; /* Adicione esta propriedade para criar um contexto de posicionamento */
    text-align: center;
}

        /* Estilos para a imagem */
        .centered-image {
    max-width: 70%;
    max-height: 70vh;
    min-width: auto;
    min-height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s ease;
}

        .centered-image:hover {
            transform: scale(1.05); /* Efeito de hover um pouco mais sutil */
        }

        /* Estilos para os comentários */
        .comments-section {
            width: 30%; /* Largura dos comentários */
            background-color: #121212;
            padding: 20px;
            border-radius: 10px;
            flex-shrink: 0; /* Não encolher */
        }

        .comment {
            margin-bottom: 15px;
        }

        .comment-author {
            font-weight: bold;
            color: #72B48F;
            margin: 0;
        }

        .comment-text {
            margin: 5px 0;
            color: white;
            font-size: 14px;
        }

        .comment-timestamp {
            color: #999;
            font-size: 12px;
        }

        /* Estilos para o formulário de comentários */
        .comment-form {
            margin-top: 20px;
            background-color: #121212; /* Cor de fundo escura */
            padding: 20px;
            border-radius: 10px;
        }

        .comment-input,
        .comment-textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #333;
            border-radius: 5px;
            background-color: #1a1a1a;
            color: white;
            margin-bottom: 10px;
        }

        .comment-button {
            background-color: #72B48F;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
        }

        .comment-button:hover {
            background-color: #61A57E;
        }
        .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .overlay img {
        max-width: 90%;
        max-height: 90%;
    }
      
    </style>
</head>
<body>
    <header>
        <!-- Logo e navegação -->
        <div class="logo">
            <img src="Logo\logo.png" alt="Logo">
            <h1>Dream and Make</h1>
        </div>
        <nav>
            <ul class="content__container__list">
                <!-- Lista de links de navegação -->
                <li class="content__container__list__item"><a href="inicio.php">Explorar</a></li>
                <li class="content__container__list__item"><a href="galeria.php">Galeria</a></li>
                <li class="content__container__list__item"><a href="novamusica.php">Musicas</a></li>
                <li class="content__container__list__item"><a href="sla.php">Envie sua arte</a></li>
                <li class="content__container__list__item"><a href="faq.php">FAQ</a></li>
                <li class="content__container__list__item"><a href="ajuda.php">Ajuda</a></li>
                <li class="content__container__list__item"><a href="corevalues.php">Core Values</a></li>
                <li class="content__container__list__item"><a href="crievcmsm.php">Crie Você</a></li>
                <li class="content__container__list__item"><a href="sobre.php">Sobre Nós</a></li>
            </ul>
        </nav>
    </header>
    <div class="image-comments-container">
        <div class="image-container">
            <?php
            if ($result && mysqli_num_rows($result) > 0) {
                $row = mysqli_fetch_assoc($result);
                

                echo '<div class="image">';
                echo '<img src="' . $row['image_path'] . '" alt="Imagem" class="centered-image">';
                echo '<p>Enviado Por: <span class="author-name">' . $row['image_name'] . '</span></p>';
                echo '<form method="POST" class="comment-form">';
                echo '<input type="hidden" name="image_id" value="' . $row['id'] . '">';
                echo '<input type="text" name="name" placeholder="Qual seu nome?" class="comment-input">';
                echo '<textarea name="comment" placeholder="Qual sentimento essa pintura ou imagem te transmite?, Oque vc achou dessa pintura?" class="comment-textarea"></textarea>';
                echo '<div class="button-container">';
                echo '<button class="comment-button" type="submit" name="submit_comment">Enviar</button>';
                echo '<button class="change-image-button" onclick="changeImage()">Mudar Imagem</button>';
                echo '</div>';
                echo '</form>';
                echo '</div>'; // Fechamento da div da imagem
            } else {
                echo 'Nenhuma imagem encontrada.';
            }
            ?>
        </div>
        <div class="comments-section">
            <?php
            if ($result && mysqli_num_rows($result) > 0) {
                $query_comments = "SELECT * FROM Comments WHERE image_id = '{$row['id']}' ORDER BY timestamp DESC";
                $result_comments = mysqli_query($connection, $query_comments);

                if ($result_comments && mysqli_num_rows($result_comments) > 0) {
                    echo '<div class="comments-section">';
                    while ($row_comment = mysqli_fetch_assoc($result_comments)) {
                        echo '<div class="comment">';
                        echo '<p class="comment-author">' . $row_comment['name'] . '</p>';
                        echo '<p class="comment-text">' . $row_comment['comment'] . '</p>';
                        echo '<p class="comment-timestamp">' . $row_comment['timestamp'] . '</p>';
                        echo '</div>';
                    }
                    echo '</div>';
                } else {
                    echo '<p>Nenhum comentário encontrado.</p>';
                }
            }
            ?>
        </div>
    </div>
    <div class="celebrate-phrase">
        Celebrando a Arte, Elevando Vozes...
    </div>
</body>
</html>