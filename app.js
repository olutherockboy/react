const players =[
    {
        name: "Guil",
        score: 50,
        id:1
      },

      {
        name: "Treasure",
        score: 85,
        id:2
      },

      {
        name: "Ashley",
        score: 95,
        id:3
      },

      {
        name: "James",
        score: 80,
        id:4
      }
]

const Header = (props) => {
    return(
        <header>
            <h1>{props.title}</h1>
            <span className='stats'>player: {props.players}</span>
        </header>
    );
} 

const Player = (props) =>{
    return(
        <div className="player">
          <span className='player-name'>{props.name}</span>
           <Counter score={props.score} />
        </div>
    )
}

const Counter = (props) =>{
    return(
        <div className="counter">
           <button className="counnter-action decrement"> - </button>
           <span className="counter-score">{props.score}</span>
           <button className="counnter-action increment"> + </button>  
        </div>
    )
}

const App = (props) => {
    return (
        <div className="scoreboard">
          <Header title="Score Board" players={1} />
          {/* players list */}
          {props.initialPlayers.map( player =>
            <Player 
            name ={player.name}
            score={player.score}
            key ={player.id.toString()}
            />
            )}
          <Player score={37} name="olu" />
          
        </div>
    )
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);