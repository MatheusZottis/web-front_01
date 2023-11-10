const buttonMedicamentos = document.querySelector("#medicamentos");
const remedios = document.querySelector(".remedios");

// Variável validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonEnviar = document.querySelector("button");

// Criando um elemento p
const pMensagem = document.createElement("p");

function clearForm() {
    campoNome.value = "";
    campoCidade.value = "";
}

// Função validação
buttonEnviar.addEventListener("click", function(event) {
    event.preventDefault();
    if (campoNome.value === '') {
        // alert("Preencha o campo nome");
        pMensagem.textContent = "Preencha o campo nome"
        campoNome.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "erro");
        return false;
    }

    if (campoCidade.value === '') {
        // alert("Preencha o campo cidade");
        pMensagem.textContent = "Preencha o campo cidade"
        campoNome.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "erro");
        return false;
    }

    pMensagem.classList.add('d-none')
    clearForm();
});

// Chamando medicamentos
buttonMedicamentos.addEventListener("click", function() {
    remedios.classList.add("d-block");
});