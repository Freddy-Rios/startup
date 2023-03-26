function creatCard (title, Image) {
//this inner elemtnet is used to hold all the information that is needed to make a new card
let main = document.getElementById('main');
let inner = `<div class="container">
<div class="card">
    <div class="card-media">
        <img src="${Image}" alt="movie image" class="card-media-img" />
    </div>
    <div class="card-body">
        <h2 class="card-body-heading">${title}</h2>
        <ul class="card-body-stars">
            <fieldset class="rating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label class = "full" for="star5" title="Awesome - 5 stars"></label>
                <input type="radio" id="star4half" name="rating" value="4 and a half" />
                <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                <input type="radio" id="star3half" name="rating" value="3 and a half" />
                <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label class = "full" for="star3" title="Meh - 3 stars"></label>
                <input type="radio" id="star2half" name="rating" value="2 and a half" />
                <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star1half" name="rating" value="1 and a half" />
                <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                <input type="radio" id="starhalf" name="rating" value="half" />
                <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
            </fieldset>
        </ul>
        <a href="moreinfo.html" class="card-button">
            More info
        </a>
    </div>
</div>
</div>`

 main.innerHTML += inner; // this is how to add a card 
}