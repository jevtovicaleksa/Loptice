//AXIOS VEZBANJE

  // // Axios 
  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //   .then(response => {
  //     const users = response;
  //     console.log(users);
  //   })
  //   .catch(error => console.error(error));
  // };

  // getUsers();

  // const createuser = (user) => {
  //   axios.post('https://reqres.in/api/users', user)
  //   .then(response => {
  //     const addedUser = response.data;
  //     console.log(`POST: user is added`, addedUser);
  //   })
  //   .catch(error => console.error(error));
  // }
  // createuser('aleksa');





  // Fetch api
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => console.log(json))

  // let p = new Promise(function(resolve, reject){
  //   let a = 1 + 3;
  //   if(a == 2){
  //     resolve('Succes');
  //   }else {
  //     reject('Failed');
  //   }
  // });
  // p.then(function(message){
  //   console.log('This is in the then ' + message);
  // }).catch(function(message){
  //   console.log('This is in the catch ' + message);
  // })

  // let noviNiz = [];
  // const y = function (a){
  //   a.forEach(jedanPodatak => {
  //     jedanPodatak.email = push.noviNiz; 
  //   });
  // }
  // let x;
  // fetch('https://reqres.in/api/users')
  // .then(response => response.json())
  // .then(data => {
    //   x = data.data
    //   y(data.data);
    //   console.log(noviNiz);
    //   // apiPodaci.innerHTML = data.data;
    // } )
    // // console.log(apiPodaci);
    // console.log(x);
    
//   let noviPodaci = [];  
//   const apiPodaci = document.getElementById('podaciApi');
//   fetch('https://reqres.in/api/users')
//   .then(response => response.json())
//   .then(data => {
//     let podaci = data.data;
//     podaci.forEach(function(podatak){
//       noviPodaci.push(podatak.email)
//     })
//     apiPodaci.innerHTML = noviPodaci;
//   })

//   const response = fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST", 
//     // headers: {
//     //   'Content-Type' : 'application/json'
//     // },
//     body: {
//       'ime' : 'Aleksa'
//       }
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })

// fetch('https://jsonplaceholder.typicode.com/posts/101', {
//   method: 'DELETE',
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })