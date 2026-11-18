
/* =====================================
   ELAS EM REDE - FUNCIONALIDADES
===================================== */

const estadoSelect = document.getElementById("estado");
const municipioSelect = document.getElementById("municipio");
const buscarButton = document.getElementById("buscar-ubs");
const resultadoUBS = document.getElementById("resultado-ubs");

// CARREGAR ESTADOS BRASILEIROS

async function carregarEstados() {
    try {
        estadoSelect.innerHTML =
            '<option value="">Carregando estados...</option>';

        const resposta = await fetch(
            "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
        );

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os estados.");
        }

        const estados = await resposta.json();

        estadoSelect.innerHTML =
            '<option value="">Selecione o estado</option>';

        estados.forEach(estado => {
            const opcao = document.createElement("option");

            opcao.value = estado.id;
            opcao.textContent = estado.nome + " - " + estado.sigla;

            estadoSelect.appendChild(opcao);
        });

    } catch (erro) {
        estadoSelect.innerHTML =
            '<option value="">Erro ao carregar estados</option>';

        console.error(erro);
    }
}

// CARREGAR MUNICÍPIOS DO ESTADO SELECIONADO

async function carregarMunicipios() {

    const estadoId = estadoSelect.value;

    municipioSelect.disabled = true;

    municipioSelect.innerHTML =
        '<option value="">Carregando municípios...</option>';

    if (!estadoId) {
        municipioSelect.innerHTML =
            '<option value="">Selecione o município</option>';
        return;
    }

    try {
        const resposta = await fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios?orderBy=nome`
        );

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os municípios.");
        }

        const municipios = await resposta.json();

        municipioSelect.innerHTML =
            '<option value="">Selecione o município</option>';

        municipios.forEach(municipio => {

            const opcao = document.createElement("option");

            opcao.value = municipio.id;
            opcao.textContent = municipio.nome;

            municipioSelect.appendChild(opcao);

        });

        municipioSelect.disabled = false;

    } catch (erro) {

        municipioSelect.innerHTML =
            '<option value="">Erro ao carregar municípios</option>';

        console.error(erro);
    }
}

// BUSCAR UNIDADES DE SAÚDE

function buscarUnidades() {

    const estado = estadoSelect.options[
        estadoSelect.selectedIndex
    ].textContent;

    const municipio = municipioSelect.options[
        municipioSelect.selectedIndex
    ].textContent;

    if (!estadoSelect.value || !municipioSelect.value) {

        resultadoUBS.innerHTML =
            "<p>Selecione um estado e um município para continuar.</p>";

        return;
    }

    resultadoUBS.innerHTML = `
        <h3>Localização selecionada</h3>
        <p><strong>Estado:</strong> ${estado}</p>
        <p><strong>Município:</strong> ${municipio}</p>
        <p>
            A localização foi identificada.
            A integração com a base de unidades de saúde
            será implementada na próxima etapa.
        </p>
    `;
}

// EVENTOS

estadoSelect.addEventListener("change", carregarMunicipios);

buscarButton.addEventListener("click", buscarUnidades);

// INICIALIZAÇÃO

carregarEstados();
