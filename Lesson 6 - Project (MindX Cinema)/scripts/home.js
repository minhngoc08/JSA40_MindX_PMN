export const TMDB_API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWZmYTlhZDRmNzBiNTEyOTI1NGE3MjQwOWRiZWJmZCIsIm5iZiI6MTc0MDI3NTAyNy40MjcsInN1YiI6IjY3YmE3ZDUzYTk2ZGMxODk3OWJlYjkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IAJ5i6OdX5oMMLlpxraTnzwZa4IOpW_AZqkFB-RBRrU"
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY}`
    }
  };

const URL = "https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}";

// Hàm bất đồng bộ
async function loading(){
    // async <-> await
    const res = await fetch(URL, options);
    const data = await res.json();
    console.log(data.results);

    // paste 
    let movies = data.results;
    const movieList = document.getElementById("list-movie");
    movieList.innerHTML = ""; // Xóa nội dung cũ

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        movieElement.innerHTML = `
            <a href=""> <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}"></a>
            
            <div class="movie-title">${movie.title}</div>
        `;

        movieList.appendChild(movieElement);
    });
}
loading()

