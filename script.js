let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read))
}


let background = document.querySelector("body")
let form = document.querySelector("form")
let add_btn = document.getElementById("add-btn")
let is_showned = 0;

document.addEventListener('click', function handleClickOutsideBox(event) {
  
    if (!form.contains(event.target) && is_showned == 1) {
        console.log(is_showned)
      form.style.display = 'none';
      background.style.backgroundColor = "white";
      is_showned = 0;
    }
  });

add_btn.addEventListener("click", (event) => {
    form.style.display = "flex"
    form.style.backgroundColor = "white"
    background.style.backgroundColor = "gray"
    setTimeout(() =>{
        is_showned = 1;
    }, 500)
})

let add_book_btn = document.getElementById("add-book-btn")
add_book_btn.addEventListener("click", (event) => {
    let title_input = document.getElementById("title-input")
    let title_value = title_input.value
    title_input.value = ""
    let author_input = document.getElementById("author-input")
    let author_value = author_input.value
    author_input.value = ""
    let pages_input = document.getElementById("pages-input")
    let pages_value = pages_input.value
    pages_input.value = ""
    let read_input = document.getElementById("read-input")
    let read_value = read_input.checked
    read_input.checked = false
    if(title_value != "" && author_value != "" && pages_value != ""){
    form.style.display = "none"
    background.style.backgroundColor = "white"
    addBookToLibrary(title_value, author_value, pages_value, read_value);
    loop();
    is_showned = 0
    }
    
})



let container = document.getElementById("container")

function loop() {
    container.innerHTML = ""
    myLibrary.forEach(element => {
        let card = document.createElement("div")
        card.classList.add("card")
        let title = document.createElement("h2")
        title.classList.add("title")
        let author = document.createElement("h2")
        author.classList.add("author")
        let pages = document.createElement("h2")
        pages.classList.add("pages")
        let read = document.createElement("h2")
        read.classList.add("read")

        title.innerText = element.title
        author.innerText = "Author: " + element.author
        pages.innerText = "Pages: " + element.pages
        read.innerText = element.read

        card.append(title, author, pages, read)
        container.appendChild(card)
    });
}