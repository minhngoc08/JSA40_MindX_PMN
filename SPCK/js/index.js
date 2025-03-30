const TMDB_API_KEY="VdE9CXnPJot3R7w4BqpV3SAPX1yv6Do3"

// get books
const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${TMDB_API_KEY}`;
const URL2 = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${TMDB_API_KEY}`;
const URL3 = `https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=${TMDB_API_KEY}`;
const URL4 = `https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=${TMDB_API_KEY}`

// Hàm bất đồng bộ
async function loadinghardcoverfiction(){
    // async <-> await
    const res = await fetch(URL);
    const data = await res.json();
    const result = data.results;
    console.log(result);

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


    for (let i = 0; i < 10; i++) {
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
    // console.log(resultTopStories);


    let topstories = document.getElementById('topstories');

    for (let i = 0; i < 5; i++) {
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

async function loadingnewswire(){
    // async <-> await
    const responseNewswire = await fetch(URL3);
    const dataNewswire = await responseNewswire.json();
    const resultNewswire = dataNewswire.results;
    // console.log(resultNewswire);


    let newswire = document.getElementById('newswire');

    for (let i = 0; i < 7; i++) {
        element = document.createElement("div");
        
        element.innerHTML = `
        
            <a href="${resultNewswire[i].url}" class = "newswire">
            <img src="${resultNewswire[i].multimedia[0].url}" alt="">
            <h7>${resultNewswire[i].title}</h7>
            </a>
        `
        newswire.appendChild(element);
    }
    console.log(newswire);
}

async function loadingnewswire_world(){
    // async <-> await
    const responseNewswire_world = await fetch(URL4);
    const dataNewswire_world = await responseNewswire_world.json();
    const resultNewswire_world = dataNewswire_world.results;
    console.log(resultNewswire_world);


    let newswire_world = document.getElementById('newswire_world');

    for (let i = 0; i < 3; i++) {
        element = document.createElement("div");
        
        element.innerHTML = `
        
            <a href="${resultNewswire_world[i].url}" class = "newswire_world">
            <img src="${resultNewswire_world[i].multimedia[0].url}" alt="">
            <h7>${resultNewswire_world[i].title}</h7>
            </a>
        `
        newswire_world.appendChild(element);
    }
    console.log(newswire_world);
}

const apiUrl = "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml";

        fetch(apiUrl)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(xml => {
                let items = xml.getElementsByTagName("item");
                let output = "";

                for (let i = 0; i < 6; i++) {
                    let title = items[i].getElementsByTagName("title")[0].textContent;
                    let link = items[i].getElementsByTagName("link")[0].textContent;
                    let description = items[i].getElementsByTagName("description")[0].textContent;

                    // Lấy ảnh minh họa từ <media:content>
                    let media = items[i].getElementsByTagName("media:content");
                    let imageUrl = media.length > 0 ? media[0].getAttribute("url") : "https://via.placeholder.com/120x80";

                    output += `
                        <div class="article">
                            <img src="${imageUrl}" alt="Article Image">
                            <div class="article-content">
                                <a href="${link}" target="_blank">${title}</a>
                                <p>${description}</p>
                            </div>
                        </div>
                    `;
                }

                document.getElementById("rss-feed").innerHTML = output;
            })
            .catch(error => console.error("Lỗi khi tải XML:", error));

loadinghardcoverfiction()
loadingtopstories()
loadingnewswire()
loadingnewswire_world()