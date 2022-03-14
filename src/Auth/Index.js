

export const signup=(user)=>{
    return fetch(`http://localhost:8080/api/dakshina/register`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-type":'application/json'

        },
        body:JSON.stringify(user)

    })
    .then(response=>{
        return response.json();
    })
    .catch(error=>{
        console.log(error);
    });
}