async function creatCard () {
  const userName = localStorage.getItem('userName');
  const user = await getUser(userName);
  //location of where to store the new movie card
  let main = document.getElementById('main');
  //get the title and image URL form teh modal pop up 
  const title = document.querySelector('#movieTitle')?.value;
  const image = document.querySelector('#movieUrl')?.value;
  //inner used to hold all the information to insert a card
  //inner also gets passed in the image URL and the text title
  let inner = `<div class="card movie_card">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
      <span class="movie_info"><a href="moreinfo.html">more info</a></span>
      <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
  </div>
  </div>`
  //add the movie card
  main.innerHTML += inner;

  //add to dataBase
  const newMovie = {
    userName: user?.userName,
    movieCard: inner,
  }
  
  console.log('test')
    const response = await fetch ('/api/movie', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newMovie),
    });
    const movie = await response.json();
  
}

function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }

  async function getUser(userName) {
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${userName}`);
    if (response.status === 200) {
      return response.json();
    }
    return null;
  }