const URL = "VdE9CXnPJot3R7w4BqpV3SAPX1yv6Do3";

async function loadBooks() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    const books = data.results.books; // Adjust based on API response

    let bookList = document.getElementById('list-book');
    bookList.innerHTML = ""; // Clear existing content

    books.forEach(book => {
      let slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      slide.innerHTML = `
        <a href="${book.amazon_product_url}" target="_blank">
          <img src="${book.book_image}" alt="${book.title}">
          <h5>${book.title}</h5>
        </a>
      `;

      bookList.appendChild(slide);
    });

    // Initialize Swiper AFTER books are loaded
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 },
      },
    });

  } catch (error) {
    console.error("Error loading books:", error);
  }
}

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,  // Hiển thị 5 sách trên 1 hàng
    spaceBetween: 20,  // Khoảng cách giữa các sách
    loop: true,  // Vòng lặp khi cuộn hết sách
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000, // Tự động cuộn sau 5 giây
      disableOnInteraction: false, // Vẫn cho phép click
    },
  });
  
// Run the function
document.addEventListener("DOMContentLoaded", loadBooks);
