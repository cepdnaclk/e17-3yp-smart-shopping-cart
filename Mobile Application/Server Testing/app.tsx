const axios = require('axios');

// const instance = axios.create({
//     baseURL: 'http://localhost:3000/',
//     timeout: 1000,
//     headers: { 'X-Custom-Header': 'foobar' }
// });
axios.defaults.baseURL = 'http://localhost:3000/';


// Optionally the request above could also be done as
// axios.get('/getusers')
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log("error");
//     })
//     .then(function () {
//         // always executed
//     });

// axios.get('/getusers/614709561a7e7d2bb78d0d02')
//     .then(function (response) {
//         console.log(response.data.email);
//     })
//     .catch(function (error) {
//         console.log("error");
//     })
//     .then(function () {
//         // always executed
//     });

axios.post('/havemail',{
    "email":"test2@gmail.com",
})
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

// sign up set up
// axios.post('/signup',{
//     "firstName": "test2",
//     "lastName": "test2",
//     "email": "test2@gmail.com",
//     "password": "hashedpassword",
// })
//     .then((res)=>{
//         console.log(res.data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

