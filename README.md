
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Elas em Rede: plataforma nacional de informação, prevenção e acesso à saúde da mulher.">

    <title>Elas em Rede | Saúde da Mulher</title>

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <header>
        <div class="logo">
            ELAS EM REDE
        </div>

        <nav>
            <a href="#inicio">Início</a>
            <a href="#saude">Saúde feminina</a>
            <a href="#prevencao">Prevenção</a>
            <a href="#mapa">Encontre uma UBS</a>
            <a href="#campanhas">Campanhas</a>
        </nav>

        <a href="#mapa" class="btn-header">
            Encontrar atendimento
        </a>
    </header>

    <main>

        <section id="inicio" class="inicio">

            <div class="inicio-conteudo">

                <span>SAÚDE, INFORMAÇÃO E CUIDADO</span>

                <h1>
                    Sua saúde importa.
                    Seu cuidado também.
                </h1>

                <p>
                    Conectando mulheres de todo o Brasil
                    à informação, à prevenção e aos
                    serviços públicos de saúde.
                </p>

                <a href="#mapa" class="btn-principal">
                    Encontrar uma unidade de saúde
                </a>

            </div>

        </section>

        <section id="saude" class="secao">

            <h2>Conheça mais sobre sua saúde</h2>

            <p>
                Informações educativas para ajudar
                mulheres a conhecerem e cuidarem
                melhor da própria saúde.
            </p>

            <div class="cards">

                <article class="card">
                    <h3>Saúde feminina</h3>
                    <p>
                        Conteúdos sobre o corpo,
                        saúde e bem-estar feminino.
                    </p>
                </article>

                <article class="card">
                    <h3>Prevenção</h3>
                    <p>
                        Informações sobre exames,
                        vacinação e cuidados preventivos.
                    </p>
                </article>

                <article class="card">
                    <h3>Informação</h3>
                    <p>
                        Materiais educativos
                        e orientações de saúde.
                    </p>
                </article>

            </div>

        </section>

        <section id="mapa" class="secao mapa">

            <h2>Encontre uma unidade de saúde</h2>

            <p>
                Selecione seu estado e município
                para localizar unidades básicas
                de saúde e consultar seus serviços.
            </p>

            <div class="busca-localizacao">

                <label for="estado">Estado</label>
                <select id="estado">
                    <option value="">Selecione o estado</option>
                </select>

                <label for="municipio">Município</label>
                <select id="municipio" disabled>
                    <option value="">Selecione o município</option>
                </select>

                <button id="buscar-ubs">
                    Buscar unidades
                </button>

            </div>

            <div id="resultado-ubs">
                <p>
                    As unidades encontradas aparecerão aqui.
                </p>
            </div>

            <div id="mapa-interativo">
                O mapa interativo será integrado nesta área.
            </div>

        </section>

        <section id="prevencao" class="secao">

            <h2>Prevenção e cuidado</h2>

            <p>
                A informação é uma ferramenta importante
                para a prevenção e a promoção da saúde.
            </p>

        </section>

        <section id="campanhas" class="secao">

            <h2>Campanhas de saúde</h2>

            <p>
                Acompanhe campanhas e ações
                de conscientização sobre a saúde da mulher.
            </p>

        </section>

    </main>

    <footer>
        <h3>ELAS EM REDE</h3>

        <p>
            Saúde, informação e cuidado ao alcance de todas.
        </p>

        <p>
            © 2026 Elas em Rede. Projeto acadêmico.
        </p>
    </footer>

    <script src="assets/js/script.js"></script>

</body>
</html>
