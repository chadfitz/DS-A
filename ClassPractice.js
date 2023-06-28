class Leaderboard {
  constructor() {
    this.leaderboard = [];
  }

  // adding score to the given player's score
    // if no player with id on the leaderboard, add player to leaderboard with the score
  addScore(playerId, score) {
    // given the example, I am assuming playerIds will be organized starting with 1, so if playerId > leaderboard.length, add player to leaderboard
    if (playerId > this.leaderboard.length) this.leaderboard.push([playerId, score])
    // else, if player exists, replace his score
    else this.leaderboard[(playerId - 1)][1] = score;
  }

  // return the score sum of the top K players
  top(K) {
    
  }

  // reset the score of this player to 0
  resizeTo(playerId) {

  }
}