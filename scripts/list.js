let place = location.search;
console.log(place);

function validator(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9189907d9mshfeb3c8be2e26d8cp158520jsnd49f4cf5b175',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };
    
    fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${place}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`, options)
        .then(response => response.json())
        .then((response)=>{
            let hotel = response.data;
            
           console.log(hotel);
             var html =" ";
              hotel.map((values)=>{
               
            //    let img1 = values.result_object.photo.images.medium.url;
            //    let img2 = img1.image.medium.url
            //    console.log(img2);
               let hotelname = values.result_object.name;
               let hoteladress = values.result_object.address;
               let hotelrating = values.result_object.rating;
               let hotelid1 = values.result_object.location_id;
               //  console.log(hoteladress);s
                console.log(hotelid1);
            //    html += `
            //    <a id="atag" href="detail.html?location_id=${hotelid1}">
            //    <div class="grid-item" >   
            //        <img src="" alt=""
            //            class="hotel">
            //        <div class="rating">
            //            <h2>${hotelname}</h2>
            //            <div class="stars">
            //               <span >${hotelrating}</span>
            //                <span class="star checked">&#9733;</span>
                           
                           
            //                <br>
            //                <br>
            //                <p>${hoteladress}</p>
            //            </div>
           
            //        </div>
               
           
            //    </div>
            //    </a>
            //    `

            html+=`
            <a  href="detail.html?location_id=${hotelid1}">
            <div class="hotel">
            <img src=""
                alt="">
            <div class="text">
                <a>
                    <h3>${hotelname}</h3>
                </a>
                <a href="">
                ${hotelrating}
                    <span class="fa fa-star checked"></span>
                   
                </a>
                <a href="">
                    <p>${hoteladress}</p>
                </a>
            </div>
        </div>
        </a>
            `
           
              })
         
             
              
             document.getElementById("hotels-div").innerHTML = html;
             console.log(response.data)
           
           
           
         
         })
         .catch(err => console.error(err));
}
