const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

let userName;

do {
  userName = prompt('Please enter your username:', 'username');
  if (userName == 'username') {
    alert('Please enter a valid username')
  }
} while (userName == 'username')

alert(`Wellcome ${userName}`);


for(let i=0;  i< flights.length; i++){
  let flightWithScale;
  flights[i].scale ? flightWithScale = 'it is a non-stop flight' : flightWithScale = 'it has scales'
  console.log(`The flight from ${flights[i].from} to ${flights[i].to} costs ${flights[i].cost} € and ${flightWithScale}`); //output: New York
}

//Average price
let costSum = 0;
for(let i=0;  i< flights.length; i++){
  costSum = costSum + flights[i].cost;
}
let averagePrice = costSum / flights.length;
console.log(`Flights average price: ${averagePrice}.`);

let scaleCounter = 0;
for(let i=0;  i< flights.length; i++){
  if (flights[i].scale){
    scaleCounter++;
  }
}
console.log(`Total flights with scales: ${scaleCounter}.`);

console.log('Last five flights of the day:')
for(let i=05;  i< flights.length; i++){
    console.log(`From ${flights[i].from} to ${flights[i].to}`); //output: New York
}