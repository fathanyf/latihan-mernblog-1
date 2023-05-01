// import { Main } from 'next/document';
import './App.css';
//24.03
function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">BlogFathan</a>
        <nav>
          <a href="Login">Login</a>
          <a href="Register">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1555043722-4523972f07ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt=""></img>
        </div>
        <div className="texts">
          <h2>Full House</h2>  
          <p className="info">
            <a className="author">Fathan Yuda F.</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur scelerisque lectus. Maecenas aliquet facilisis urna vel pellentesque. Nullam sollicitudin finibus eros quis pulvinar.</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1555043722-4523972f07ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt=""></img>
        </div>
        <div className="texts">
          <h2>Full House</h2>  
          <p className="info">
            <a className="author">Fathan Yuda F.</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur scelerisque lectus. Maecenas aliquet facilisis urna vel pellentesque. Nullam sollicitudin finibus eros quis pulvinar.</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1555043722-4523972f07ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt=""></img>
        </div>
        <div className="texts">
          <h2>Full House</h2>  
          <p className="info">
            <a className="author">Fathan Yuda F.</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur scelerisque lectus. Maecenas aliquet facilisis urna vel pellentesque. Nullam sollicitudin finibus eros quis pulvinar.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
