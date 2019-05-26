console.log('hola mundo!');
const noCambia = "Mikey";
let cambia = "@donmikey"

function cambiarNombre(nuevoNombre)

{
  cambia = nuevoNombre
}

const getUser = new Promise(function (todoChido, todoMal)


  {

    //setInterval() 
    //es una funcion de js que se va a ejecutar cada cierto tiempo
    setTimeout(function () {
      todoChido("Eso es mi carnal")
    }, 3000)
  }
  //es una funcion que se va a ejecutar luego de 3 segundos

)

const getUserAll = new Promise(function (todoChido, todoMal)


  {

    //setInterval() 
    //es una funcion de js que se va a ejecutar cada cierto tiempo
    setTimeout(function () {
      todoChido("Se te acabo el tiempo mi carnal")
    }, 5000)
  }
  //es una funcion que se va a ejecutar luego de 3 segundos

)




//cath es el metodo que se ejecuta si la promesa no se cumple
//Promise.race   solo entra al den de la promesa que se resuelba primero
Promise.race([
    getUser,
    getUserAll
  ])
  .then(function (mensaje) {
    console.log(mensaje)
  })
  .catch(function (mensaje) {
    console.log(mensaje)
  })


//cuando la primera promesa no se cumple se va al fallo
//cuando la segunda promesa no se cumple se va al fallo



//promesas jQuery

$.ajax('https://randomuser.me/api', {
  method: 'GET',
  //GET metodo de obtener datos
  success: function (data)
  //eta funcion se va a ejecutar cuando traga datos el $.ajax
  {
    console.log(data)
  },
  error: function (error) {
    console.log(error)
  }
})

//Promesas Js

fetch('https://randomuser.me/api/')
  .then(function (response) {
    //console.log(response)
    return response.json()
  })

  .then(function (a) {
    console.log('a', a.results[0].name.first)

  })
  .catch(function () {
    alert('Algo fallo')
  });

//Funciones asíncronas

(async function load() {

  async function getData(url) {
    const response = await fetch(url);
    //await es para que podamos esperar que se termine este fetch y luego se va a ejecutar lo que ponga en las siguientes lineas
    const data = await response.json()
    //await await solo funciona cuando una funcion es asincrona
    return data;
  }
  const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
  console.log(actionList, dramaList, animationList);
    //template literals
    function videoItemTemplate(movie) {
      return (
  
   `<div class="primaryPlaylistItem">
      <div class="primaryPlaylistItem-image">
        <img src="${movie.medium_cover_image}">
      </div>
      <h4 class="primaryPlaylistItem-title">
        ${movie.title}
      </h4>
    </div>`
      )
    }


    //console.log(videoItemTemplate('src/images/covers/bitcoin.jpg','bitcoin'))

  // console.log(videoItemTemplate('src/images/covers/bitcoinjpg', 'bitcoin'));
  actionList.data.movies.forEach((movie) => {
    // debugger
    const HTMLString = videoItemTemplate(movie);
    console.log(HTMLString);
  })

  //const $home = $('.home.list #item');
  const $actionContainer = document.querySelector('#action');
  const $dramaContainer = document.getElementById('#drama');
  const $animationContainer = document.getElementById('#animation');


  const $featuringContainer = document.getElementById('#featuring');
  const $form = document.getElementById('#form');
  const $home = document.getElementById('#home');


  // const $home = $('.home .list #item');
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');





})()
//sucar sintax para que se auto-ejecute