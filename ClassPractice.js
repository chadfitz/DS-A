class Leaderboard {
  constructor() {
    this.leaderboard = [];
  }

  /** 
   * @param {number} playerId 
   * @param {number} score
   * @return {void}
  */
  // adding score to the given player's score
    // if no player with id on the leaderboard, add player to leaderboard with the score
  addScore(playerId, score) {
    // given the example, I am assuming playerIds will be organized starting with 1, so if playerId > leaderboard.length, add player to leaderboard
    if (playerId > this.leaderboard.length) this.leaderboard.push([playerId, score])
    // else, if player exists, replace his score
    else this.leaderboard[(playerId - 1)][1] = score;
  }

  /** 
   * @param {number} K
   * @return {number}
  */
  // return the score sum of the top K players
  top(K) {
    let sum = 0;
    let i = 0;
    
    // K is always this.leaderboard.length
    while (i < K) {
      sum += this.leaderboard[i][1]
      i++
    }

    return sum;
  }

  /** 
   * @param {number} playerId
   * @return {void}
  */
  // reset the score of this player to 0
  reset(playerId) {
    this.leaderboard[playerId - 1][1] = 0;
  }
}