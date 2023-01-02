const getAll = async() => {
     fetch("http://localhost:3333/articles")
    .then(res => res.json())
    .then(data => {
        console.log(data, 'data')
        return data
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

const getOne = () => {
    return fetch("http://localhost:3333/articles/:article_id")
    .then((response)=> {
        if(response.status === 200){
            return response.json();
        }else{
            throw "Something went wrong"
        }
    })
    .then((resJson)=> {
        return resJson
    })
    .catch((error) => {
        console.log("Err",error)
        return Promise.reject(error)
    })
}

export const articleService = {
   // getAll,
    getOne,
}