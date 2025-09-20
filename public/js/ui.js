import api  from "./api.js";

/* mural pet-------------------- */
 function cardPet(pet){

    const card= `
    <li class="conteudo-animal" data-id="${pet.id}">
        <img src="${pet.url_imagem}" alt = "">
        <div class="conteudo-animal-texto">
            <h1>${pet.nome}</h1>
            <p>idade: ${pet.idade} anos</p>
            <p>${pet.descricao}</p>
           
        </div> 
        <div class="botao"> <button><h3>Quero Adotar</h3></button></div>
    </li>`;

    return card 
 }

async function renderizarPet(){
        const listadePetUI = document.querySelector("[data-lista]")
        listadePetUI.innerHTML=""
    try{
        const listadePetApi = await api.GetPets();
        listadePetApi.forEach(pet => {
            const card= cardPet(pet);
            listadePetUI.innerHTML += card
        });
    }
    catch(Error){
        console.error(Error)
    }
}

/* FIM DO MURAL ---------- */



export {renderizarPet}