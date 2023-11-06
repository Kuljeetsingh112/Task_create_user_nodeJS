import axios from "axios";

const data = {

    "DB": "delhi",
    "user_name": "Happy Singh",
    "Phone_number": 15256,
    "Location": "delhi"

}


// axios.post('http://localhost:3000/api/v1/user', data).then((response) => {
//     console.log(response.data)
// }).catch((error) => {
//     console.log(error)
// })


// axios.delete('http://localhost:3000/api/v1/user/27',{
//         data: {
//           DB: 'mumbai'}})
// .then((response)=>{
//     console.log(response.data)
// }).catch((error)=>{
//     console.log(error)
// })

// axios.put('http://localhost:3000/api/v1/user/8',data)
// .then((response)=>{
//     console.log(response.data)
// }).catch((error)=>{
//     console.log(error)
// })



axios.get(`http://localhost:3000/api/v1/user/mumbai/`).then((response) => {
    console.log(response.data)
}).catch((error) => {
    console.log(error)
})