
const getAll = () => {
    return fetch("http://localhost:3333/comments")
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }else{
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

const addComments = () => {
    return fetch("http://localhost:3333/comments")
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }else{
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
