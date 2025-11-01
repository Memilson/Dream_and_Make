<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dream and Make - Sobre</title>
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

        .about-container {
            margin: 20px;
            text-align: center;
        }

        .about-title {
            font-size: 32px;
            margin-bottom: 20px;
            color: #72B48F;
        }

        .about-content {
            font-size: 18px;
            line-height: 1.6;
            color: #ccc;
            max-width: 800px;
            margin: 0 auto;
        }
        .celebrate-phrase {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 14px;
            color: #72B48F;
        }
        .celebrate-phrase {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 14px;
            color: #72B48F;
        }
        .celebrate-phrase2 {
            position: fixed;
            bottom: 20px;
            left: 50px;
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

    <div class="about-container">
        <h1 class="about-title">Sobre Nós</h1>
        <p class="about-content">
        Somos uma equipe dedicada a criar um ambiente online para compartilhar e apreciar diversas formas de arte e criatividade.
            Nosso projeto nasceu a partir do torneio interno de robótica, onde reunimos nossas paixões pela arte e tecnologia.
            Nosso objetivo é proporcionar uma plataforma onde artistas e entusiastas com pouca visiblidade possam se conectar, expressar suas ideias e
            inspirar uns aos outros. Acreditamos na importância da liberdade criativa e na capacidade da arte de transcender fronteiras.
            Bem-vindo ao Dream and Make!
        </p>
    </div>    
    <div class="celebrate-phrase">
        Celebrando a Arte, Elevando Vozes...
    </div>
    <div class="celebrate-phrase2">
    <a href="changelog.php">ChangeLog</a>
    </div>
</body>
</html>
