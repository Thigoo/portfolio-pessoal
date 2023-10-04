const toggle = document.getElementById("chk");
const imagemPessoal = document.getElementById("imagem-pessoal");
let tema = window.localStorage.getItem("tema");

const habilitarTema = () => {
    document.body.classList.toggle("light");
    imagemPessoal.src = "./img/thigo-dev2.jpg";
    localStorage.setItem("tema", "desabilitado");
}

const desabilitarTema = () => {
    document.body.classList.toggle("light");
    imagemPessoal.src = "./img/thigo-dev.jpg";
    localStorage.setItem("tema", "habilitado");
}

if(tema === "desabilitado") {
    habilitarTema();
}

toggle.addEventListener("change", () => {
    tema = localStorage.getItem("tema");
    if (tema === "habilitado") {
        habilitarTema();
    } else {
        desabilitarTema();
    }

})