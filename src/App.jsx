import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthState } from './login/authState';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');

  // Asynchronously determine if the user is authenticated by calling the service
  const [authState, setAuthState] = React.useState(AuthState.Unknown);

  React.useEffect(() => {
    if (userName){
      fetch(`/api/user/${userName}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((user) => {
          const state = user?.authenticated ? AuthState.Authenticated : AuthState.Unauthenticated;
          setAuthState(state);
        })
    } else {
      setAuthState(AuthState.Unauthenticated);
    }
  }, [userName]);

  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="#" className="navbar-brand mb-0 h1"> Movie Catalog</a>
            <button 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            className="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"> 
            <span className="navbar-toggler-icon"></span> 
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <a href="catalog.html" className="nav-link active"> Home </a>
                </li>
                {authState === AuthState.Authenticated && (
                  <li className="nav-item ">
                  <a href="account.html" className="nav-link" onclick="loadUserInfo()"> account </a>
                  </li>
                )}
                
                {authState === AuthState.Authenticated && (
                  <li className="nav-item ">
                  <button type="button" className="btn btn-secondary" onclick="logout()">logout</button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>


      <footer>
        <div class="container-fluid">
          <span class="text-reset">Freddy </span>
          <a 
          class="text-reset"
          href="https://github.com/Freddy-Rios/simon.git">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
