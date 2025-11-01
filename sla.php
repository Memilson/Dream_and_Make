<?php
// Conexão com o banco de dados
$connection = mysqli_connect("127.0.0.1", "root", "angelo", "baiano");

if (!$connection) {
    die("Erro na conexão: " . mysqli_connect_error());
}

// Verifica se foi enviado um arquivo
if (isset($_POST['submit'])) {
    $name = mysqli_real_escape_string($connection, $_POST['name']);
    
    if ($_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $targetDir = "Imagens/";
        $fileName = basename($_FILES['image']['name']);
        $targetPath = $targetDir . $fileName;

        // Move o arquivo para o diretório de destino
        if (move_uploaded_file($_FILES['image']['tmp_name'], $targetPath)) {
            // Insere o caminho da imagem e o nome na tabela Images
            $query_insert_image = "INSERT INTO Images (image_path, image_name) VALUES ('$targetPath', '$name')";

            if (mysqli_query($connection, $query_insert_image)) {
                echo "Imagem enviada com sucesso!";
            } else {    
                echo "Erro ao inserir caminho da imagem no banco de dados: " . mysqli_error($connection);
            }
        } else {
            echo "Erro ao mover a imagem para o diretório de destino.";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
<link rel="icon" href="Logo\logo.png">
<title>Dream and Make - Envio</title>
<style>
       body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #1a1a1a;
            color: white;
            margin: 0;
            padding: 0;
        }

        /* Estilos do Cabeçalho */
        header {
            background-color: #121212;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            box-shadow: none;
        }

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

        /* Estilos do Formulário */
        .image-container {
            text-align: center;
            margin-top: 40px;
            margin-left: 330px;
            padding: 20px;
            background-color: rgba(18, 18, 18, 0.8);
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 50%;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        label {
            font-size: 18px;
            margin-bottom: 10px;
            display: block;
        }

        input[type="file"],
        input[type="text"] {
            background-color: #272727;
            border: none;
            padding: 10px;
            border-radius: 5px;
            color: white;
            margin-bottom: 15px;
            width: 40%;
        }

        button[type="submit"] {
            background-color: #72B48F;
            color: white;
            font-weight: bold;
            cursor: pointer;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        button[type="submit"]:hover {
            background-color: #61A57E;
        }
        .celebrate-phrase {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 14px;
            color: #72B48F;
        }
    </style>
    </style>
    <title>Dream and Make</title>
</head>
<body>
    <header>
        <div class="logo">
            <img src="Logo\logo.png" alt="Logo">
            <h1>Dream and Make</h1>
        </div>
        <nav>
            <ul class="content__container__list">
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
    <div class="image-container">
        <h1>Enviar Imagem</h1>
        <form method="POST" enctype="multipart/form-data">
            <input type="file" name="image" accept="image/*" required>
            <input type="text" name="name" placeholder="Coloque Seu @ do insta ou telefone de contato" required>
            <button type="submit" name="submit">Enviar</button>
        </form>
    </div>
    <div class="celebrate-phrase">
        Celebrando a Arte, Elevando Vozes...
    </div>    
</body>
</html>
