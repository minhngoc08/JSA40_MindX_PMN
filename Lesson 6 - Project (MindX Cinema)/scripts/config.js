export const TMDB_API_KEY="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWZmYTlhZDRmNzBiNTEyOTI1NGE3MjQwOWRiZWJmZCIsIm5iZiI6MTc0MDI3NTAyNy40MjcsInN1YiI6IjY3YmE3ZDUzYTk2ZGMxODk3OWJlYjkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IAJ5i6OdX5oMMLlpxraTnzwZa4IOpW_AZqkFB-RBRrU"
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY}`
    }
  };