async function getUser(userName) {
// See if we have a user with the given email.
    const response = await fetch(`/api/user/${userName}`);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}

async function loadUserInfo() {
    const userName = localStorage.getItem('userName');
    const user = await getUser(userName);
    let userInfo = document.getElementById('userInfo');

    let inner = `<div>
    <p>${user?.userName}</p> 
    <p>Friends</P>
    </div>`

    userInfo.innerHTML += inner;
}

// loadUserInfo();