const TMDB_API_KEY="VdE9CXnPJot3R7w4BqpV3SAPX1yv6Do3"

// get books
const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${TMDB_API_KEY}`;
const URL2 = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${TMDB_API_KEY}`;

// Hàm bất đồng bộ
async function loadinghardcoverfiction(){
    // async <-> await
    const res = await fetch(URL);
    const data = await res.json();
    const result = data.results;
    //console.log(result);

    let lstBook = document.getElementById('list-book');
    let title = document.getElementById('title');

    let element = document.createElement("div");
    
    element.innerHTML = `
        <a href="#">
        <h5 class="heading5">
        ${result.display_name}
        </h5>
        </a>
    `
    title.appendChild(element);


    for (let i = 0; i < 12; i++) {
        element = document.createElement("div");
        element.classList.add("book");
        element.innerHTML = `
        <a href="${result.books[i].amazon_product_url}  ">
            <img src="${result.books[i].book_image}" alt="${result.books[i].title}">
            <h5>${result.books[i].title}</h5>
            </a>
        `
        lstBook.appendChild(element);
    }



}   

async function loadingtopstories(){
    // async <-> await
    const responseTopStories = await fetch(URL2);
    const dataTopStories = await responseTopStories.json();
    const resultTopStories = dataTopStories.results;
    console.log(resultTopStories);


    let topstories = document.getElementById('topstories');

    for (let i = 0; i < 8; i++) {
        element = document.createElement("div");
        
        element.innerHTML = `
        
            <a href="${resultTopStories[i].url}" class = "topstories">
            <img src="${resultTopStories[i].multimedia[0].url}" alt="">
            <h6>${resultTopStories[i].title}</h6>
            </a>
        `
        topstories.appendChild(element);
    }
    console.log(topstories);
}

loadinghardcoverfiction()
loadingtopstories()

