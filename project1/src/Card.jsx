import restaurant from './assets/Eureka!.jpeg' 
function Card(){
    return(
      <div className="App">
        <img src={restaurant} alt="profile picture"></img>
        <h2>Albert Card</h2>
        <p>Ace card!</p>
      </div>
    );
  }

  export default Card