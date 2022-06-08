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

  if(Ddate>Adate){

  let diff = Ddate.getTime() - Adate.getTime();
  let msInDay = 1000 * 3600 * 24;
  let days = diff / msInDay;
  let price = 1000 * numOfAdlt.value * days;
  total.value = price;
}
else{
    total.value = 0;
}
}
