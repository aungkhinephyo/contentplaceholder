const card_header = document.getElementById ("card_header");
const title = document.getElementById ("title");
const subtitle = document.getElementById ("subtitle");
const author_img = document.getElementById ("author_img");
const author_name = document.getElementById ("name");
const date = document.getElementById ("date");
const animate_bgs = document.querySelectorAll(".animate-bg");
const animate_texts = document.querySelectorAll(".animate-text");

setTimeout(getData, 2500)


function getData(){
    card_header.innerHTML ='<img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">';

    title.innerHTML ='Data & Image?';

    subtitle.innerHTML = 'This data and image will be from API. Just focus on animation design.';

    author_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="">';

    author_name.innerHTML = 'Narashikamaru';

    date.innerHTML = 'May 28 2022';

    animate_bgs.forEach(element => {
        element.classList.remove("animate-bg");
    })
    animate_texts.forEach(element => {
        element.classList.remove("animate-text");
    })
}