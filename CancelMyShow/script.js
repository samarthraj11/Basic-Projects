const container = document.querySelector('.container');
// console.log(container);
const seats= document.querySelectorAll(".row .seat:not(occupied)");
// console.log(seats);

const cnt = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

populateUi();


function setMovieData(movieIndex,moviePrice)
{
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice' , moviePrice);
}

function updateSelectedCount()
{
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    // console.log(selectedSeats); 

    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    });

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    // console.log(seatsIndex);

    const selectedSeatsCount = selectedSeats.length;
    // console.log(selectedSeatsCount);
    cnt.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice;

}

function populateUi()
{
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    // console.log(selectedSeats);

    if(selectedSeats != null && selectedSeats.length > 0)
    {
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index) > -1)
            {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex != null)
    {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

movieSelect.addEventListener("change",e=>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);

    updateSelectedCount();
});

container.addEventListener("click", function(e){

    // console.log(e.target);

    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied"))
    {
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }
});

updateSelectedCount();