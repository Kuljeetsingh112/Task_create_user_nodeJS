import axios from "axios";

const data = {

    "DB": "delhi1",
    "user_name": "Nazam Singh",
    "Phone_number": 15256,
    "Location": "delhi"

}


// axios.post('http://localhost:3000/api/v1/user', data).then((response) => {
//     console.log(response.data)
// }).catch((error) => {
//     console.log(error)
// })


// axios.delete('http://localhost:3000/api/v1/user/9',{
//         data: {
//           DB: 'delhi'}})
// .then((response)=>{
//     console.log(response.data)
// }).catch((error)=>{
//     console.log(error)
// })

// axios.put('http://localhost:3000/api/v1/user/7',data)
// .then((response)=>{
//     console.log(response.data)
// }).catch((error)=>{
//     console.log(error)
// })



axios.get(`http://localhost:3000/api/v1/user/15`,{
    data: {
      DB: 'delhi'}
    }).then((response)=>{
    console.log(response.data)
}).catch((error)=>{
    console.log(error)
})