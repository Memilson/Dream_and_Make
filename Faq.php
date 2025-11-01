<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dream and Make - FAQ</title>
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

        /* Estilos para a seção de Perguntas Frequentes (FAQ) */
        .faq-container {
            margin: 20px;
        }

        .faq-item {
            margin-bottom: 20px;
        }

        .faq-question {
            cursor: pointer;
            font-weight: bold;
        }

        .faq-answer {
            display: none;
            margin-top: 10px;
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

    <!-- Seção de Perguntas Frequentes (FAQ) -->
    <div class="faq-container">
    <div class="faq-container">
    <h1>Perguntas Frequentes (FAQ)</h1>

    <div class="faq-item">
        <div class="faq-question" onclick="toggleAnswer(this)">1. O que é esse projeto?</div>
        <div class="faq-answer">
            Este projeto constitui uma iniciativa privada do Terceiro Ano do Sesi Charuri. É desenvolvido pela equipe TGP e está atualmente em fase de testes.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="toggleAnswer(this)">2. Como faço para adicionar imagens?</div>
        <div class="faq-answer">
        Imagens podem ser enviadas com o autor, mas nao, mas falta varias outras coisas para implementar.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="toggleAnswer(this)">3. Posso personalizar meu perfil?</div>
        <div class="faq-answer">
            Atualmente, encontramo-nos em uma etapa de testes e, por consequência, ainda não é possível realizar essa ação.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="toggleAnswer(this)">4. Como posso publicar conteúdo?</div>
        <div class="faq-answer">
        Imagens podem ser enviadas com o autor, mas nao, mas falta varias outras coisas para implementar.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="toggleAnswer(this)">5. Como denunciar conteúdo inapropriado?</div>
        <div class="faq-answer">
            Contate o administrador.
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question" onclick="toggleAnswer(this)">5. Como utilizar a plataforma</div>
        <div class="faq-answer">
        <li>      Explorar = comentar nas fotos e conhecer novos autores e tipo de autores</li>
            <li> Galeria = Todas as fotos</li>
            <li>  Musicas = Sao todas as Musicas</li>
            <li> Envie sua arte = o nome ja diz</li>
            <li> Faq = Perguuntas e Respostas</li>
            <li>  Ajuda = nome ja diz</li>
            <li> Core Values = fotos do tir e fotos de nossos amigos</li>
            <li>Sobre = tudo sobre a equipe</li>
        </div>
</div>
    <script>
        function toggleAnswer(element) {
            var answer = element.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        }
    </script>
        <div class="celebrate-phrase">
        Celebrando a Arte, Elevando Vozes...
    </div>    
</body>
</html>
