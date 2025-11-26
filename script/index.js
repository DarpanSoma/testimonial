let form = document.getElementById("review-form")
let reviews = document.getElementById("allreviews")
let author = document.getElementById("author")
let message = document.getElementById("message")


function addReviews(event){
    event.preventDefault(); 

    authorHTML = author.value;
    messageHTML = message.value;


    reviews.innerHTML += 
    `
        <div class="review-box">
        <p class="review-author">${authorHTML}</p>
        <p class="review-message">${messageHTML}</p>
        </div>
    `;
}

form.addEventListener("submit", addReviews);