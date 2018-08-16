const Header = (props) => {
  return (
    <header>
      <span className="stats">Players: {props.totalPlayers}</span> 
      <h1>{ props.title }</h1>
    </header>
  );
}

class Counter extends React.Component {
  
  state = { 
    score: 100 
  };
  
  incrementScore() {
    this.setState( prevState => ({ 
      score: prevState.score + 1 
    }));
  }
  
  decrementScore() {
    this.setState( prevState => ({ 
      score: prevState.score - 1 
    }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
        <span className="counter-score"> {this.state.score} </span>
        <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
      </div>    
    );
  }
}
  
const Player= (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.onRemovePlayer(props.id)}>✖</button>
        { props.name }
      </span>

      <Counter />
    </div>
  );
}

class Application extends React.Component {
  
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
      },
      {
        name: "Treasure",
        id: 2,    
      },
      {
        name: "Ashley",
        id: 3,    
      },
      {
        name: "James",
        id: 4,    
      }
    ]
  };
        
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      }
    });
  }
  
  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="My Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
        
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            onRemovePlayer={ this.handleRemovePlayer }      
            name={player.name}
            id={player.id}
            key={player.id.toString()}
          />
        )}  
      </div>
    );
  }
}  

ReactDOM.render(<Application />, document.getElementById('root'));