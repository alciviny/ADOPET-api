    export const api ={


        //essa primeira funçao mostra os dados que ja existem, ele pede o local de onde vem os dados e trata a possibilidade nao existir esses dados
        //é uma funcao de leitura. ele ler os dados
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


        //esse metodo é de postar, ele adiciona um novo pet no servidor, enquanto o outro metodo apenas ler, esse busca igualmente, por isso a necessidade de adicionar o metodo
        //que desejo trabalhar nele, adiciono uma const semelhante ao get, porem adiciono um novo argumento falando que quero postar e o formato do novo dado, modifico ele
        //com JSON.stringify()
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
    //esse metodo substitui o o dado atual, ele precisa de dois argumentos, o id do dado que queremos trocar, e o novo dado que vamos modificar
    //o metodo put, assim como todos, tbm precisa de uma requisicao pra buscar os dados e assim escolher o metodo a ser utilizado, no nosso caso, metodo PUT
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