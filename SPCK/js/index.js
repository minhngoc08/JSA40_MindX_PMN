const TMDB_API_KEY="VdE9CXnPJot3R7w4BqpV3SAPX1yv6Do3"

// get books
const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${TMDB_API_KEY}`;
const URL2 = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key${TMDB_API_KEY}`;

// Hàm bất đồng bộ
async function loading(){
    // async <-> await
    const res = await fetch(URL);
    const data = await res.json();
    const result = data.results;
    console.log(result);

    let lstBook = document.getElementById('list-book');
    let title = document.getElementById('title');

    let element = document.createElement("div");
    
    element.innerHTML = `
        <h5 class="heading5">
        ${result.display_name}
        </h5>
    `
    title.appendChild(element);


    for (let i = 0; i < 5; i++) {
        element = document.createElement("div");
        element.classList.add("book");
        element.innerHTML = `
            <img src="${result.books[i].book_image}" alt="${result.books[i].title}">
            <h6>${result.books[i].title}</h6>
        `
        lstBook.appendChild(element);
    }



}   

async function loadingtopstories(){
    // async <-> await
    const res = await fetch(URL2);
    const data = await res.json();
    const result = data;
    console.log(result);

}

loading()
loadingtopstories()

