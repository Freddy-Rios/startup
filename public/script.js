async function creatCard () {
//this inner elemtnet is used to hold all the information that is needed to make a new card
let main = document.getElementById('main');
// add the imag and title be get element by ID with the .value
const title = document.querySelector('#movieTitle')?.value;
const image = document.querySelector('#movieUrl')?.value;

let inner = `<div class="card movie_card">
<img src="${image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${title}</h5>
    <span class="movie_info"><a href="moreinfo.html">more info</a></span>
    <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
</div>
</div>`

 main.innerHTML += inner; // this is how to add a card 
}


function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }