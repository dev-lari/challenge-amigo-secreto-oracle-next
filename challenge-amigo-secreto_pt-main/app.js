//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Para fazer uma lista com o nome dos amigos, precisa ser na linha 1 para rodar primeiro. Criei uma lista vazia. 
let amigos = []; // Uma array vazia

function adicionarAmigo() {
    let inserirNome = document.getElementById('amigo'); // Para pegar os elementos no campo amigo
    if (inserirNome.value === "") { // Se tentar inserir com o campo de texto vazio
        alert('Por favor, insira um nome!'); // Aparece alerta para avisar para colocar um nome
    } else {
        amigos.push(inserirNome.value); // Se não tiver vazio, o nome vai ser puxado
    };
    inserirNome.value = "";
    atualizarListaAmigos();
};

// Percorrendo o array amigos
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) { // Para adicionar o nome dos amigos em lista abaixo
        let li = document.createElement('li'); 
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Criando a função para sortear o amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há mais amigos para sortear');
        return;
    }
    let numeroDoAmigo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroDoAmigo];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `${amigoSorteado}`;

    amigos.splice(numeroDoAmigo, 1);
    atualizarListaAmigos()
}