
let id = location.search;
console.log(id);

let numOfAdlt = document.getElementById("numOfAdlt");

let name = document.getElementById("name");

let total = document.getElementById("total");

// var day1 = new Date(Adate.value);
// var day2 = new Date(Ddate.value);
// console.log(day1);
// console.log(day2);
// var difference= Math.abs(day2-day1);
// days = difference/(1000 * 3600 * 24)
// const dateOne = new Date(Adate.value); // 20th April 2021
// const dateTwo = new Date(Ddate.value); // 10th April 2021
// console.log(dateOne.getDate() - dateTwo.getDate());
// console.log(days)

function calculator() {
  let Adate = new Date(document.getElementById("Adate").value);
  let Ddate = new Date(document.getElementById("Ddate").value);
  let days;
  total.value = "Rs 0"
  if(Ddate>Adate){

  let diff = Ddate.getTime() - Adate.getTime();
  let msInDay = 1000 * 3600 * 24;
   days = diff / msInDay;
  let price = 1000 * numOfAdlt.value * days;
  total.value = "Rs " +price;
}
else{
    total.value = "Rs 0";
}
var html = `<a href="payment.html${id}&num=${numOfAdlt.value}&name=${name.value}&aDate=${Adate}&dDate=${Ddate}&total=${total.value}&days=${days}" class="btn btn-success" style="width: 100px;">Book Now</a>`
document.getElementById("anchor").innerHTML = html
}

function validator(){


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c9189907d9mshfeb3c8be2e26d8cp158520jsnd49f4cf5b175',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

fetch(`https://travel-advisor.p.rapidapi.com/photos/list${id}&currency=USD&limit=50&lang=en_US`, options)
	.then(response => response.json())
	.then((response) => {
    var hotelphoto = response.data;
    console.log(hotelphoto);

    var sliderhotelimg = " ";
    hotelphoto.map((values) => {
      let sharedhotel = values.images.large.url;
    //   sliderhotelimg += `
    // <div class="slider" >
    // <img src=${sharedhotel}
    //     alt="" class="sliderimage">
    // </div> `;

    sliderhotelimg += `
    <div class="carousel-item active">
    <img src=${sharedhotel} class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src=${sharedhotel} class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src=${sharedhotel} class="d-block w-100" alt="...">
  </div>
    `
    });

    document.getElementById("slider-div").innerHTML = sliderhotelimg;
  })
	.catch(err => console.error(err));

 // getting hotel details api

 const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c9189907d9mshfeb3c8be2e26d8cp158520jsnd49f4cf5b175',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

fetch(`https://travel-advisor.p.rapidapi.com/attractions/get-details${id}&currency=USD&lang=en_US`, options1)
	.then(response => response.json())
  .then((response) => {
    console.log(response);
    let hotelamenities = response.amenities;
    let hotediscription = response.description;
    let hotelname = response.name;
    let hotelprice = response.price;
    let hotelrating = response.rating;
    console.log(hotelamenities);
    console.log(hotelname);
    console.log(hotelprice);
    console.log(hotelrating);

    let swimming_pool = hotelamenities[0].name;
    let free_parking = hotelamenities[1].name;
    let fitness_center = hotelamenities[2].name;
    let room_service = hotelamenities[3].name;
    let restaurant = hotelamenities[4].name;
    let business_services = hotelamenities[5].name;
    let high_speed_net = hotelamenities[6].name;
    let suites = hotelamenities[7].name;
    let bar_lounge = hotelamenities[12].name;
    let Kids_Activities = hotelamenities[13].name;

    var hoteldetails = " ";

         hoteldetails = `
         <h2>${hotelname}</h2>
         <h4>RATING</h4>
         <p></p>${hotelrating}
         <span class="fa fa-star checked"></span>
        
         <h4>AMENITIES</h4>
         <ul>
         <li>${swimming_pool}</li>
         <li>${free_parking}</li>
         <li>${fitness_center}</li>
         <li>${room_service}</li>
         <li>${restaurant}</li>
         <li>${business_services}</li>
         <li>${high_speed_net}</li>
         <li>${suites}</li>
         <li>${bar_lounge}</li>
         <li>${Kids_Activities}</li>
         </ul>
         <h4>DESCRIPTION</h4>
         <p>${hotediscription}</p>
         `
    document.getElementById("desc-div").innerHTML = hoteldetails;
  })
	.catch(err => console.error(err));


}


function onClickHandler(){
  window.location.href = 'payment.html?name=${}'
}