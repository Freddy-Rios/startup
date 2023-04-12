const MovieAddedEvent = 'movie added'

async function creatCard () {
  const userName = localStorage.getItem('userName');
  const user = await getUser(userName);
  //location of where to store the new movie card
  let main = document.getElementById('main');
  //get the title and image URL form teh modal pop up 
  const rating = document.querySelector('#movieRating')?.value;
  const title = document.querySelector('#movieTitle')?.value;
  const image = document.querySelector('#movieUrl')?.value;
  //inner used to hold all the information to insert a card
  //inner also gets passed in the image URL and the text title
  let inner = `<div class="card movie_card">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
      <span class="movie_info float-right"><i class="fas fa-star"></i> ${rating}/ 10</span>
  </div>
  </div>`
  //add the movie card
  main.innerHTML += inner;

  //add to dataBase
  const newMovie = {
    userName: user?.userName,
    movieCard: inner,
  }
  
  const response = await fetch ('/api/movie', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newMovie),
  });
  const movie = await response.json();

  broadcastEvent(userName, MovieAddedEvent);
}

async function getUser(userName) {
// See if we have a user with the given email.
    const response = await fetch(`/api/user/${userName}`);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}

async function loadMovies(){
    let movies = [];
    let main = document.getElementById('main');
    const userName = localStorage.getItem('userName');
    //const user = await getUser(userName);

    const response = await fetch(`/api/movies/${userName}`);
    movies = await response.json();

    for(let i = 0; i < movies.length; ++i){
        //console.log(movies[i].movieCard);
        main.innerHTML += movies[i].movieCard;
    }
}

function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
}

// Functionality for peer communication using WebSocket
async function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
    displayMsg('system', 'game', 'connected');
    };
    socket.onclose = (event) => {
      displayMsg('system', 'game', 'disconnected');
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        displayMsg('player', msg.from, `started a new game`);
      }
    };
  }

  async function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  async function broadcastEvent(from, type) {
    const event = {
      from: from,
      type: type,
    };
    socket.send(JSON.stringify(event));
  }