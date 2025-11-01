<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Logo/logo.png">
    <title>Dream and Make - Ajuda</title>
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

        .search-bar {
            display: flex;
            align-items: center;
        }

        .search-bar input[type="text"] {
            padding: 8px;
            border: none;
            border-radius: 5px;
            background-color: #121212;
            color: white;
            outline: none;
            transition: background-color 0.3s;
        }

        .search-bar input[type="text"]:focus {
            background-color: #272727;
        }

        .search-bar-button {
            background-color: #72B48F;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .search-bar-button:hover {
            background-color: #61A57E;
        }

        .help-email {
            text-align: center;
            margin-top: 50px;
            font-size: 18px;
            color: white;
        }

        .help-email a {
            color: white;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: border-bottom 0.3s;
        }

        .help-email a:hover {
            border-bottom: 1px solid white;
        }

        .external-links {
            margin-top: 50px;
            text-align: center;
        }

        .external-links h2 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        .external-links ul {
            list-style: none;
            padding: 0;
        }

        .external-links li {
            margin-bottom: 15px;
        }

        .external-links a {
            color: #72B48F;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }

        .external-links a:hover {
            color: #61A57E;
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
        </div>
        <nav>
            <ul class="content__container__list">
            <li class="content__container__list__item"><a href="inicio.php">Explorar</a></li>
                <li class="content__container__list__item"><a href="galeria.php">Galeria</a></li>
                <li class="content__container__list__item"><a href="novamusica.php">Músicas</a></li>
                <li class="content__container__list__item"><a href="sla.php">Envie sua Arte</a></li>
                <li class="content__container__list__item"><a href="faq.php">FAQ</a></li>
                <li class="content__container__list__item"><a href="ajuda.php">Ajuda</a></li>
                <li class="content__container__list__item"><a href="corevalues.php">Core Values</a></li>
                <li class="content__container__list__item"><a href="crievcmsm.php">Crie Você</a></li>
                <li class="content__container__list__item"><a href="sobre.php">Sobre Nós</a></li>
            </ul>
        </nav>
    </header>
    <section class="external-links">
        <h2>Plataformas Online para Transformar Ideias em Imagens</h2>
        <ul>
            <li><a href="https://www.imagine.art/">Imagine I.A</a></li>
            <li><a href="https://openai.com/dall-e-2">OpenAI's DALL-E</a></li>
            <li><a href="https://www.midjourney.com/">MidJourney</a></li>
            <li><a href="https://runwayml.com/">RunwayML</a></li>
        </ul>
    </section>
    <div class="celebrate-phrase">
        Celebrando a Arte, Elevando Vozes...
    </div>    
</body>
</html>
