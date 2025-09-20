 
import api from "../js/api.js"


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


/*  async function listarPet(){
    //crio uma const que vai me dizer o local que vou por os dados, que é essa listaPetUI
            const listapetUI= 
            document.querySelector('[data-lista]')

        try{
            //puxo os arquivos json pra listadePetApi
             const listaPetApi= await api.GetPets()
            const card= 
                listaPetApi.forEach(pet => {
                    const card =cardPet(pet);
                    listapetUI.innerHTML += card;
                
            });

        }
        catch(Error){
            alert(Error)
        }
 }

listarPet() */





















































async function renderizarPet(){
        const listadePetUI = document.querySelector("[data-lista]")
    try{
        const listadePetApi = await api.GetPets();
        listadePetApi.forEach(pet => {
            const card= cardPet(pet);
            listadePetUI.innerHTML += card
        });
    }
    catch(Error){
        console.Error(Error)
    }
}



renderizarPet()