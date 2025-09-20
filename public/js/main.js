import api from "./api.js";
import {renderizarPet} from "./ui.js"

const formulario= document.querySelector('[data-formulario]')

formulario.addEventListener("submit",async(evento)=>{
    evento.preventDefault();

    const nome= document.querySelector('[data-nome]').value;
    const descricao= document.querySelector('[data-descricao]').value;
    const url_imagem= document.querySelector('[data-url]').value;
    const idade= document.querySelector('[data-idade]').value;
    const raca =document.querySelector('[data-raca]').value;


    try{
        
        await api.adicionaPet({nome,descricao,url_imagem,idade,raca})

        renderizarPet()

        formulario.reset()


    
    }

    catch(Error){
        console.log(" nao foi possivel adicionar pets pelo formulario")
    }
})

renderizarPet()