function paid() {
  alert("Hi your booking is successfull!!");
}

let payNow = document.getElementById("payNow");
function disable() {
  payNow.classList.add("disabled");
}

let place = location.search;
console.log(place);

const params = new URLSearchParams(window.location.search);

const id = params.get("location_id")
console.log(id);

const num =params.get("num");
console.log(params.get("num"));

const name = params.get("name")
console.log(params.get("name"));

const aDate = params.get("aDate")
console.log(params.get("aDate"));

const dDate = params.get("dDate")
console.log(params.get("dDate"));

const total = params.get("total")
console.log(params.get("total"));

const days = params.get("days")
console.log(params.get("days"));

const contentDetails = document.getElementById("content-details");
const html = `
<div class="desc">
<p><span style="font-weight: bolder;font-family: cursive;">Name: </span>${name}</p>
<p><span style="font-weight: bolder;font-family: cursive;">Number of Adults: </span>${num}</p>
<p><span style="font-weight: bolder;font-family: cursive;">Check-in Date: </span>${aDate}</p>
<p><span style="font-weight: bolder;font-family: cursive;">Check-out Date: </span>${dDate}</p>
</div> 
<div class="tariff">
<p><span style="font-weight: bolder;font-family: cursive;">Tariff Breakdown: </span>Rs 1000 x ${num} Adults x
    ${days} Nights</p>
<p><span style="font-weight: bolder;font-family: cursive;">Total Amount: </span>Rs ${total}</p>
</div>
<a href="#" class="btn btn-success" onclick="paid()" id="payNow">Pay Now</a>
</div>
`;

contentDetails.innerHTML = html;


function validator(){
    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9189907d9mshfeb3c8be2e26d8cp158520jsnd49f4cf5b175',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };
    
    fetch(`https://travel-advisor.p.rapidapi.com/attractions/get-details?location_id=${id}&currency=USD&lang=en_US`, options1)
        .then(response => response.json())
      .then((response) => {
        console.log(response);
   
        let hotelname = response.name;
        console.log(hotelname);

        let hotelAddress = response.address;
        console.log(hotelAddress);

        let hotelRank = response.ranking;
        console.log(hotelRank);

        let hotelImg = response.photo.images.medium.url;
    
    
        var hoteldetails = `
        <img src="${hotelImg}" alt="">
            <div class="img-desc" >
                <h3>${hotelname}</h3>
                <p>${hotelRank}</p>
                <p>${hotelAddress}</p>
            </div>
        `;
    
        document.getElementById("img-details").innerHTML = hoteldetails;
      })
        .catch(err => console.error(err));
    
    
}