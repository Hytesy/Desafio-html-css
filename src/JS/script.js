document.getElementById("btn").addEventListener('click', () => gerarTextoDeConcelho());

async function criarConcelhos() {
    const url = "https://api.adviceslip.com/advice"
    const resultado = await fetch(url)
    return await resultado.json()
}

async function gerarConcelho(id) {
    const url = `https://api.adviceslip.com/advice/${id}`;
    const resultado = await fetch(url);
    return await resultado.json();
}

async function gerarTextoDeConcelho() {
    const concelhos = await criarConcelhos();
    const concelho = await gerarConcelho(concelhos.slip.id);
    const textoConcelho = concelho.slip.advice;
    document.getElementById("concelho").textContent = `"${textoConcelho}"`;
    document.getElementById("id").textContent = `#${concelhos.slip.id}`
}