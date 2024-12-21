export function getLatestGames (){
  return fetch('https://www.freetogame.com/api/games')
  .then((response) => response.json())
}