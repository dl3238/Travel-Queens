//chart
var data = [
 { type: "Food", value: 1 },
 { type: "Flight", value: 1 },
 { type: "Lodging", value: 1 },
 { type: "Transport", value: 1 },
 { type: "Activities", value: 1 },
 { type: "Extras", value: 1 }
];
var listData = [
 data[0].value,
 data[1].value,
 data[2].value,
 data[3].value,
 data[4].value,
 data[5].value
];
var inputFood = document.querySelector("#inputFood");
var inputFlight = document.querySelector("#inputFlight");
var inputLodging = document.querySelector("#inputLodging");
var inputTransportation = document.querySelector("#inputTransportation");
var inputActivities = document.querySelector("#inputActivities");
var inputExtras = document.querySelector("#inputExtras");
var todosEl = document.querySelector("#chart");

function update() {
 //   update data
 if (data != "") {
  for (item of data) {
   if (item.type == "Food") {
    item.value = Number(inputFood.value);
   } else if (item.type == "Flight") {
    item.value = Number(inputFlight.value);
   } else if (item.type == "Lodging") {
    item.value = Number(inputLodging.value);
   } else if (item.type == "Transport") {
    item.value = Number(inputTransportation.value);
   } else if (item.type == "Activities") {
    item.value = Number(inputActivities.value);
   } else {
    item.value = Number(inputExtras.value);
   }
  }
 }
 listData = [
  data[0].value,
  data[1].value,
  data[2].value,
  data[3].value,
  data[4].value,
  data[5].value
 ];
 updateBudget();
 createPie(".pieID.legend", ".pieID.pie");
 updateTotal();
 updateCostPerDay();
 needToSave();
 //placeholder();
}
function updateBudget() {
 var todosHTML = "";
 for (item of data) {
  if (item.type == "Flight") {
   todosHTML += `<li id="flight">`;
   todosHTML += `<em>${item.type}</em>`;
   todosHTML += `<span>${item.value}</span>`;
  } else if (item.type == "Lodging") {
   todosHTML += `<li id="lodging">`;
   todosHTML += `<em>${item.type}</em>`;
   todosHTML += `<span>${item.value}</span>`;
  } else if (item.type == "Food") {
   todosHTML += `<li id="food">`;
   todosHTML += `<em>${item.type}</em>`;
   todosHTML += `<span>${item.value}</span>`;
  } else if (item.type == "Transport") {
   todosHTML += `<li id="transportation"`;
   todosHTML += `<em>${item.type}</em>`;
   todosHTML += `<span>${item.value}</span>`;
  } else if (item.type == "Activities") {
   todosHTML += `<li id="activities">`;
   todosHTML += `<em>${item.type}</em>`;
   todosHTML += `<span>${item.value}</span>`;
  } else if (item.type == "Extras") {
   todosHTML += `<li id="extras">`;
   todosHTML += `<em>${item.type}</em>`;
   todosHTML += `<span>${item.value}</span>`;
  }
  todosHTML += `</li>`;
 }
 todosEl.innerHTML = todosHTML;
}

function updateTotal() {
 var listTotal = 0;
 for (var i = 0; i < listData.length; i++) {
  listTotal += listData[i];
 }
 document.getElementById("total").value = `${listTotal}`;
}

//
function sliceSize(dataNum, dataTotal) {
 return dataNum / dataTotal * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
 $(pieElement).append("<div class='slice " + sliceID + "'><span></span></div>");
 var offset = offset - 1;
 var sizeRotation = -179 + sliceSize;
 $("." + sliceID).css({
  transform: "rotate(" + offset + "deg) translate3d(0,0,0)"
 });
 $("." + sliceID + " span").css({
  transform: "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
  "background-color": color
 });
}
function iterateSlices(
 sliceSize,
 pieElement,
 offset,
 dataCount,
 sliceCount,
 color
) {
 var sliceID = "s" + dataCount + "-" + sliceCount;
 var maxSize = 179;
 if (sliceSize <= maxSize) {
  addSlice(sliceSize, pieElement, offset, sliceID, color);
 } else {
  addSlice(maxSize, pieElement, offset, sliceID, color);
  iterateSlices(
   sliceSize - maxSize,
   pieElement,
   offset + maxSize,
   dataCount,
   sliceCount + 1,
   color
  );
 }
}

function createPie(dataElement, pieElement) {
 var listTotal = getTotal();
 var offset = 0;
 var color = [
  "cornflowerblue",
  "olivedrab",
  "orange",
  "tomato",
  "crimson",
  "purple",
  "turquoise",
  "forestgreen",
  "navy",
  "gray"
 ];
 for (var i = 0; i < listData.length; i++) {
  var size = sliceSize(listData[i], listTotal);
  iterateSlices(size, pieElement, offset, i, 0, color[i]);
  $(dataElement + " li:nth-child(" + (i + 1) + ")").css(
   "border-color",
   color[i]
  );
  offset += size;
 }
}
createPie(".pieID.legend", ".pieID.pie");

function getTotal() {
 var listTotal = 0;
 for (var i = 0; i < listData.length; i++) {
  listTotal += listData[i];
 }
 return listTotal;
}

// Cost per day
var amountOfDays = document.querySelector("#amountOfDays");



function placeholder(){
//  placeholder suggestion cost for food
  var amountFood = Number(amountOfDays.value)*30;
  document.getElementById("inputFood").placeholder = `${amountFood}`;
 //  placeholder suggestion cost for lodging
 var amountLodging = Number(amountOfDays.value)*150;
  document.getElementById("inputLodging").placeholder = `${amountLodging}`;
 //  placeholder suggestion cost for transport
 var amountTransport = Number(amountOfDays.value)*10;
  document.getElementById("inputTransportation").placeholder = `${amountTransport}`;
 //  placeholder suggestion cost for activities
 var amountActivities = Number(amountOfDays.value)*50;
  document.getElementById("inputActivities").placeholder = `${amountActivities}`;
 //  placeholder suggestion cost for extras
 var amountExtras = Number(amountOfDays.value)*20;
  document.getElementById("inputExtras").placeholder = `${amountExtras}`;
}



var todosCost = document.querySelector("#costPerDay");
// Update cost per day
function updateCostPerDay() {
 var listTotal = getTotal();
 var costPerDay = listTotal / Number(amountOfDays.value);

 var todosHTML = "";

 todosHTML += `For your ${Number(amountOfDays.value)} day trip,`;
 todosHTML += `<p> it will cost you  $\ ${costPerDay} per day.</p>`;
 todosCost.innerHTML = todosHTML;
}

// Amount need to save per days left
var leftDate = document.querySelector("#leftDate");
var todosSave = document.querySelector("#needToSave");
function needToSave() {
 //calculate todays date
 var listTotal = getTotal();
 var needToSave = listTotal / Number(leftDate.value);

 var todosHTML = "";
 todosHTML += `You have ${Number(leftDate.value)} days until your trip.`;
 todosHTML += `<p> You will need to save $\ ${needToSave} per day.</p>`;
 todosSave.innerHTML = todosHTML;
}

/* more information */
tippy("#food", {
 content: "Estimate how much you will need for the complete trip.",
 delay: 100,
 arrow: true,
 arrowType: "round",
 size: "large",
 duration: 500,
 animation: "scale"
});

tippy("#flight", {
 content: "Remember to include all the cost of flights you might take.",
 delay: 100,
 arrow: true,
 arrowType: "round",
 size: "large",
 duration: 500,
 animation: "scale"
});
tippy("#lodging", {
 content:
  "Be selective and think about the places you want to visit when choosing where you are staying.",
 delay: 100,
 arrow: true,
 arrowType: "round",
 size: "large",
 duration: 500,
 animation: "scale"
});
tippy("#transport", {
 content:
  "Estimate how much you will need for the complete trip. It could be helpful to research cost of public transportation, taxi fares, etc.",
 delay: 100,
 arrow: true,
 arrowType: "round",
 size: "large",
 duration: 500,
 animation: "scale"
});
tippy("#activities", {
 content:
  "Estimate how much you will need for the complete trip. It could be helpful to research cost of the activities and places you are interested in visiting.",
 delay: 100,
 arrow: true,
 arrowType: "round",
 size: "large",
 duration: 500,
 animation: "scale"
});
tippy("#extras", {
 content: "Budget an amount you think will be good to have as extra.",
 delay: 100,
 arrow: true,
 arrowType: "round",
 size: "large",
 duration: 500,
 animation: "scale"
});
