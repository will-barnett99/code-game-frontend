import PlayersLeaderboard from "./PlayersLeaderboard"
import PodiumLeaderboard from"./PodiumLeaderboard"

function Leaderboard (){
  return (
    <section>
      <PodiumLeaderboard />
      <PlayersLeaderboard />
    </section>
  )
}

export default Leaderboard