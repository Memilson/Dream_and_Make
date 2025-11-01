<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Logo\logo.png">
    <title>Bem-Vindo(a) ao Dream and Make</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .welcome-container {
            background-color: rgba(18, 18, 18, 0.8);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #61A57E;
        }

        p {
            color: #72B48F;
            margin-top: 10px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #72B48F;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: #61A57E;
        }

        /* Div para sobreposição escura */
        .dark-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5); /* Ajuste a opacidade conforme necessário */
            z-index: -1;
        }
    </style>
    <?php
        $imageFolder = 'Core Values'; // Substitua pelo nome da sua pasta de imagens
        $imageExtensions = ['jpg', 'jpeg', 'png', 'gif']; // Extensões de imagem permitidas

        // Obtém uma lista de arquivos na pasta
        $files = scandir($imageFolder);

        // Filtra apenas os arquivos de imagem
        $imageFiles = array_filter($files, function($file) use ($imageExtensions) {
            $extension = pathinfo($file, PATHINFO_EXTENSION);
            return in_array($extension, $imageExtensions);
        });

        // Escolhe uma imagem aleatória
        $randomImage = $imageFiles[array_rand($imageFiles)];
    ?>
    <style>
        /* Aplica a imagem de fundo */
        body {
            background-image: url('<?php echo $imageFolder . "/" . $randomImage; ?>');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        @media (max-width: 768px) {
            /* Estilos para telas menores que 768px de largura */
            body {
                background-size: contain;
            }
        }
    </style>
</head>
<body>
    <div class="dark-overlay"></div>
    <div class="welcome-container">
        <h1>Bem-Vindo(a) ao Dream and Make</h1>
        <p>Celebrando a Arte, Elevando Vozes..</p>
        <a class="button" href="regras.php">Regras</a>
    </div>
    
</body>
</html>
