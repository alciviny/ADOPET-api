   //api é a parte que eu crio as funcionalidades do crud
   
   const api ={

        async GetPets(){
            try{
                const response = await fetch (`http://localhost:3000/pets`)
                if (!response.ok){
                    throw new Error("Erro ao buscar dados");
                    
                }
                return await response.json()
            }
            catch(Error){
                console.log(Error);
                alert("nao foi possivel encontrar os dados da api")
            };
        },

        async adicionaPet(pets){
            try{
                const response = await fetch (`http://localhost:3000/pets`,{
                    method: "POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body: JSON.stringify(pets)
                }
                
            )
            if(!response.ok){
                throw new Error("erro ao adicionar o pet")
            }
            return  await response.json()
            }
            catch(Error){
                console.log(Error)
                alert("nao foi possivel adicionar o pet no servidor,verifique possiveis erros")
            }
        } ,
    
        async atualizaPet(id,novopet){
            try{
                const response = await fetch(`http://localhost:3000/pets/${id}`,{
                    method: "PUT",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body: JSON.stringify(novopet)}
                )
                if(!response.ok){
                    throw new Error("nao foi possivel atualizar o dado atual, verifique possiveis erros")
                }
            return await response.json();
            
            }
            
            catch(error){
                console.log(Error)
            }
        },
    
        async deletaPet(id){
            try{
                const response= await fetch (`http://localhost:3000/pets/${id}`,{
                    method:"DELETE"})
                    if(!response.ok){
                        throw new Error(" nao foi possivel deletar o dado selecionado, verifique possiveis problemas")
                    }
                    return await response.json();
            }
            catch(Error){
                console.log("erro, nao foi possivel deletar item"+ Error)
                alert("nao foi possivel deletar item "+ Error)

            }
        }
    
    }

    export default api