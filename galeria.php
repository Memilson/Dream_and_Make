<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dream and Make - Galeria</title>
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
.author-container {
            display: flex;
            flex-direction: column;
            align-items: left;
            padding: 20px;
            background-color: #333;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .author {
            font-weight: bold;
            color: white;
            margin-bottom: 10px;
        }

        .image-container {
            display: flex;
            overflow-x: auto;
            gap: 10px;
        }

        .image {
            flex: 0 0 auto;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.5s ease;
            cursor: pointer;
        }

        .image img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
        }

        .image:hover img {
            transform: scale(1.1);
        }

.image-name {
    position: absolute;
    top: 150px;
    left: 200px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s;
}

.comment-form {
    margin-top: 20px;
    text-align: center;
    max-width: 70%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.comment-input,
.comment-textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #272727;
    color: #ffffff;
}

.comment {
    width: 40%;
    text-align: left;
    padding: 20px;
    margin-top: 15px;
    background-color: #272727;
    left: 20%;
    transform: translate(32%, 40%);
    padding: 5px 10px;
    border-radius: 5px;
}

.comment-button {
    background-color: #347E5C;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-weight: bold;
}

.comment-button:hover {
    background-color: #166fe5;
}

@media (max-width: 768px) {
    .comment-form {
        max-width: 90%;
    }
}
.celebrate-phrase {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 14px;
            color: #72B48F;
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

    <?php
$connection = mysqli_connect("127.0.0.1", "root", "angelo", "baiano");

if (!$connection) {
    die("Erro na conexão: " . mysqli_connect_error());
}

$query = "SELECT DISTINCT image_name FROM Images";
$result = mysqli_query($connection, $query);

if ($result && mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $image_name = $row['image_name'];

        echo '<div class="author-container">';
        echo '<div class="author">' . $image_name . '</div>';

        $query_images = "SELECT * FROM Images WHERE image_name = '$image_name'";
        $result_images = mysqli_query($connection, $query_images);

        if ($result_images && mysqli_num_rows($result_images) > 0) {
            echo '<div class="image-container">';
            while ($row_image = mysqli_fetch_assoc($result_images)) {
                $image_id = $row_image['id']; // Captura o ID da imagem
                $image_path = $row_image['image_path']; // Captura o caminho da imagem

                // Adiciona um link que abre a imagem ampliada em uma nova janela
                echo '<a class="image" href="#" onclick="openOverlay(\'' . $image_path . '\'); return false;">';
                echo '<img src="' . $image_path . '" alt="Imagem">';
                echo '</a>'; // Closing image link
            }
            echo '</div>'; // Closing image-container div
        }

        echo '</div>'; // Closing author-container div
    }
} else {
    echo 'Nenhuma imagem encontrada.';
}
?>

<script>
    function openOverlay(imagePath) {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const enlargedImage = document.createElement('img');
        enlargedImage.src = imagePath;
        enlargedImage.alt = 'Imagem Ampliada';

        overlay.appendChild(enlargedImage);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    }
</script>
        <div class="celebrate-phrase">
        Celebrando a Arte, Elevando Vozes...
    </div>    
</body>
</html>
