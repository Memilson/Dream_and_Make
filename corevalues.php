<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dream and Make - Core Values</title>
    <link rel="icon" href="Logo\logo.png">
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #1a1a1a;
            color: white;
            margin: 0;
            padding: 0;
        }

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

        .image-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            grid-gap: 20px;
            justify-items: center;
            margin: 20px;
        }

        .image-container img {
            border: 5px solid #72B48F;
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
            <img src="Logo/logo.png" alt="Logo">
            <h1>Dream and Make</h1>
            <link rel="icon" href="Logo\logo.png">
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
        <?php
        $dir = 'Core Values'; // Substitua pelo caminho da sua pasta de imagens
        $images = scandir($dir);

        foreach ($images as $image) {
            if (in_array($image, array('.', '..'))) {
                continue;
            }

            echo '<img src="' . $dir . '/' . $image . '" alt="Imagem">';
        }
        ?>
    </div>
    <div class="celebrate-phrase">
        Celebrando a Arte, Elevando Vozes...
    </div>    
</body>
</html>
