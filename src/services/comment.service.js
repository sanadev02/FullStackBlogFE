
const getAll = async(id) => {
    return fetch("http://localhost:3333/articles/"+ id+ "/comments")
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }else if(response.status === 400){
            throw "Not found"
        }
        else{
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

const addComments = async(id,comment_text) => {
    return fetch("http://localhost:3333/articles/"+ id + "/comments",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "comment_text":comment_text
        })
    })
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }else if(response.status ===400){
            throw "Bad request"
        }else if(response.status ===401){
            throw "Not found"
        }
        else{
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

export const commentService = {
    getAll,
    addComments,
}

// const url = "http://mudfott.doc.stu.mmu.ac.uk/node/api/mailinglist";
//     const data = {
//         "name": name,
//         "email": email
//     };

//     fetch(url, {
//         method: "post",
//         header: {
//             "Content-type": "application/json"

//         },
//         body: JSON.stringify(data)
//     })
//     .then((response) => {
//         if(response.status === 200){
//             return response.json();
//         }else if(response.status === 400){
//             throw "Bad data was sent to the server";
//         }else{
//             alert(response.status)
//             throw "something went wrong";
//         }
//     })
//     .then((resJson)=> {
//         alert(JSON.stringify(resJson));
//     })
//     .catch((error) => {
//         alert(error);
//     })
