const problemas = [
    {
        titulo:"Computador não liga",
        categoria:"hardware",
        passos:[
            "verifique o cabo de energia e a tomada",
            "teste outra fonte ou filtro de  linha",
            "remova e reencaixe a memoria RAM",
            "se nada resolver, teste a fonte"
        ]       
    },

{
    titulo:"sem acesso à internet",
    categoria:"rede",
    passos: [
        "confira  se o wi-fi está ativado",
        "reinicie  o roteador e o  modem",
        "Execute ipconfig /release e ipconfig /renew",
        "teste com outro  dispositivo"
    ]
},
{
    titulo:"windows  lento",
    categoria:"windows",
    passos: [
         "abra  o gerenciador de tarefas",
         "desative programas na inicialização",
         "libere espaço em disco",
         "procure por virus"
         ]
     }
       ];

     const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

function renderizar(itens) {
    lista.innerHTML = "";

    itens.forEach(function (problema) {
        const cartao = document.createElement("div");
        cartao.className = "cartao";

        const titulo = document.createElement("h2");
        titulo.textContent = problema.titulo;

        const categoria = document.createElement("span");
        categoria.className = "categoria";
        categoria.textContent = problema.categoria;

        const passos = document.createElement("ol");
        problema.passos.forEach(function (passo) {
            const item = document.createElement("li");
            item.textContent = passo;
            passos.appendChild(item);
        });

        cartao.appendChild(titulo);
        cartao.appendChild(categoria);
        cartao.appendChild(passos);
        lista.appendChild(cartao);
    });

    contador.textContent = itens.length + " resultado(s)";
}

const busca = document.getElementById("busca");
const filtros = document.getElementById("filtros");
let categoriaAtual = "todos";

function normalizar(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filtrar() {
    const termo = normalizar(busca.value.trim());

    const resultado = problemas.filter(function (p) {
        const bateCategoria = categoriaAtual === "todos" || p.categoria === categoriaAtual;
        const textoCompleto = normalizar(p.titulo + " " + p.passos.join(" "));
        const bateBusca = textoCompleto.includes(termo);
        return bateCategoria && bateBusca;
    });

    renderizar(resultado);
}

function criarFiltros() {
    const categorias = ["todos"];

    problemas.forEach(function (p) {
        if (!categorias.includes(p.categoria)) {
            categorias.push(p.categoria);
        }
    });

    filtros.innerHTML = "";

    categorias.forEach(function (cat) {
        const botao = document.createElement("button");
        botao.textContent = cat;
        botao.className = cat === categoriaAtual ? "filtro ativo" : "filtro";

        botao.addEventListener("click", function () {
            categoriaAtual = cat;
            criarFiltros();
            filtrar();
        });

        filtros.appendChild(botao);
    });
}

busca.addEventListener("input", filtrar);

criarFiltros();
filtrar();
