import axios from "axios";

const data = {

    "DB": "mumbai",
    "user_name": "Lovely Singh",
    "Phone_number": 717777,
    "Location": "mumbai"

}


axios.post('http://localhost:3000/api/user',data).then((response)=>{
    console.log(response.data)
}).catch((error)=>{
    console.log(error)
})


// axios.delete('http://localhost:3000/api/user/7',{
//         data: {
//           DB: 'mumbai'}})
// .then((response)=>{
//     console.log(response.data)
// }).catch((error)=>{
//     console.log(error)
// })

// axios.put('http://localhost:3000/api/user/8',data)
// .then((response)=>{
//     console.log(response.data)
// }).catch((error)=>{
//     console.log(error)
// })



// axios.get(`http://localhost:3000/api/user`,{
//     data: {
//       DB: 'mumbai'}
//     }).then((response)=>{
//     console.log(response.data)
// }).catch((error)=>{
//     console.log(error)
// })