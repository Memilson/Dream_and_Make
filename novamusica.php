<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Logo\logo.png">
    <title>Dream and Make - Músicas</title>
    <link rel="icon" href="Logo\logo.png">
    <style>
        /* Estilos Gerais */
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
        form {
            margin-top: 20px;
            max-width: 70%;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid black;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: #272727;
            display: flex;
            flex-direction: column;
            align-items: left;
        }

        label {
            font-size: 18px;
            margin-bottom: 10px;
            color: white;
        }

        input[type="file"],
        input[type="text"] {
            background-color: #121212;
            border: none;
            padding: 10px;
            border-radius: 5px;
            color: white;
            margin-bottom: 15px;
            width: 100%;
        }

        button[type="submit"] {
            background-color: #72B48F;
            color: white;
            font-weight: bold;
            cursor: pointer;
            padding: 10px;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        button[type="submit"]:hover {
            background-color: #61A57E;
        }

        /* Estilos do Player de Áudio */
        .image-container {
            text-align: center;
            margin-top: 30px;
        }

        audio {
            width: 100%;
            max-width: 300px;
            margin: 20px 0;
        }

        /* Estilos de Mensagens */
        .success-message {
            color: #72B48F;
            font-weight: bold;
        }

        .error-message {
            color: #E84A5F;
            font-weight: bold;
        }

        /* Estilos da Seção de Músicas */
        .music-section {
            max-width: 70%;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid black;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: #272727;
        }

        .music-section h3 {
            color: #72B48F;
            margin-top: 20px;
        }

        .celebrate-phrase {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 14px;
            color: #72B48F;
        }
    </style>
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
                <li class="content__container__list__item"><a href="novamusica.php">Músicas</a></li>
                <li class="content__container__list__item"><a href="sla.php">Envie sua arte</a></li>
                <li class="content__container__list__item"><a href="faq.php">FAQ</a></li>
                <li class="content__container__list__item"><a href="ajuda.php">Ajuda</a></li>
                <li class="content__container__list__item"><a href="corevalues.php">Core Values</a></li>
                <li class="content__container__list__item"><a href="crievcmsm.php">Crie Você</a></li>
                <li class="content__container__list__item"><a href="sobre.php">Sobre Nós</a></li>
            </ul>
        </nav>
    </header>
    <div>
        <form method="POST" enctype="multipart/form-data">
            <label for="musica">Selecione uma música:</label>
            <input type="file" name="musica" id="musica">
            <label for="musica_name">Coloque seu @ do Instagram ou telefone de contato:</label>
            <input type="text" name="musica_name" id="musica_name" placeholder="Digite aqui">
            <button type="submit" name="submit">Enviar Música</button>
        </form>

        <div class="music-section">
            <?php
            // Conexão com o banco de dados
            $connection = mysqli_connect("127.0.0.1", "root", "angelo", "baiano");

            if (!$connection) {
                die("Erro na conexão: " . mysqli_connect_error());
            }

            // Verifica se foi enviado um arquivo
            if (isset($_POST['submit'])) {
                if ($_FILES['musica']['error'] === UPLOAD_ERR_OK) {
                    $targetDir = "Music/";
                    $fileName = basename($_FILES['musica']['name']);
                    $targetPath = $targetDir . $fileName;

                    // Move o arquivo para o diretório de destino
                    if (move_uploaded_file($_FILES['musica']['tmp_name'], $targetPath)) {
                        // Obtém o nome da música do formulário
                        $musicaName = mysqli_real_escape_string($connection, $_POST['musica_name']);

                        // Insere o caminho da música e o nome na tabela Musica
                        $query_insert_music = "INSERT INTO musica (musica, musica_name) VALUES ('$targetPath', '$musicaName')";

                        if (mysqli_query($connection, $query_insert_music)) {
                            echo '<p class="success-message">Música enviada com sucesso!</p>';
                        } else {
                            echo '<p class="error-message">Erro ao inserir caminho da música no banco de dados: ' . mysqli_error($connection) . '</p>';
                        }
                    } else {
                        echo '<p class="error-message">Erro ao mover a música para o diretório de destino.</p>';
                    }
                }
            }

            // Consulta para obter as músicas da tabela Musica
            $query_select_music = "SELECT * FROM musica";
            $result = mysqli_query($connection, $query_select_music);

            if ($result) {
                $musicas_por_usuario = array();

                while ($row = mysqli_fetch_assoc($result)) {
                    $musica_name = $row['musica_name'];

                    // Adiciona a música ao array do usuário correspondente
                    if (!isset($musicas_por_usuario[$musica_name])) {
                        $musicas_por_usuario[$musica_name] = array();
                    }
                    $musicas_por_usuario[$musica_name][] = $row;
                }

                foreach ($musicas_por_usuario as $usuario => $musicas) {
                    echo '<h3>' . $usuario . '</h3>';
                    echo '<ul>';
                    foreach ($musicas as $musica) {
                        echo "<li>";
                        echo "<audio controls>";
                        echo "<source src='" . $musica['musica'] . "' type='audio/mp3'>";
                        echo "Seu navegador não suporta o elemento de áudio.";
                        echo "</audio>";
                        echo "</li>";
                    }
                    echo '</ul>';
                }

                mysqli_free_result($result);
            } else {
                echo '<p class="error-message">Erro ao obter músicas do banco de dados: ' . mysqli_error($connection) . '</p>';
            }
            ?>
        </div>

        <div class="celebrate-phrase">
            Celebrando a Arte, Elevando Vozes...
        </div>
    </div>
</body>
</html>
