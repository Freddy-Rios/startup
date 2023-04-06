// the DOMContentLoad is event fires when the initial HTML document 
//has been completely loaded and parsed, without waiting for stylesheets, 
//images, and subframes to finish loading. 

//next queryselectorAll to .message a (which is the the sign in and creat account)
//and does a foreach for both elements thenaddes a event listener for click
// prevent defualt 
document.addEventListener('DOMContentLoaded', function() {       
    document.querySelectorAll('.message a').forEach(function(element) {
      element.addEventListener('click', function(event) {
        event.preventDefault();
        var forms = document.querySelectorAll('form');
        forms.forEach(function(form) {
          form.classList.toggle('active');
       });
    });
  });
});

// (async () => {
//   let authenticated = false;
//   const userName = localStorage.getItem('userName');
//   if (userName) {
//     const nameEl = document.querySelector('#userName');
//     const user = await getUser(nameEl);
//     authenticated = user?.authenticated;
//   }

//   if (authenticated) {
//     window.location.href = 'catalog.html';
//   } 
// })();


async function loginUser() {
  login(`/api/auth/login`);
}
async function createUser() {
  create(`/api/auth/create`);
}

async function create(endpoint) {
  const userName = document.querySelector('#userNamez')?.value;
  const password = document.querySelector('#userPasswordz')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ userName: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }) ;
  const body = await response.json();
  
  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    window.location.href = 'catalog.html';
  }else{
    //send error messeage
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
  }
}

async function login(endpoint) {
  const userName = document.querySelector('#userName')?.value;
  const password = document.querySelector('#userPassword')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ userName: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }) ;
  const body = await response.json();
  
  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    window.location.href = 'catalog.html';
  }else{
    //send error messeage
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
  }
}

async function getUser(userName) {
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${userName}`);
  if (response.status === 200) {
    return response.json();
  }
  return null;
}