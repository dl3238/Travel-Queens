// The core TRUTH of this program
var data = [
	{
		id: 1497141891479,
		task: "Notify banks of travel days",
		done: false,
    type: "month"
	},
	{
		id: 1497141913701,
		task: "Buy travel insurance",
		done: false,
    type: "week"
	},
	{
		id: 1497141937545,
		task: "Make hard copies of passport",
		done: true,
    type: "month"
	},
  {
    id: 1233048902189,
    task: "Pack medication for common ailments",
    done: true,
    type: "week"
  }
  ,
  {
    id: 1497141937546,
    task: "Passport: check for expiration and pages",
    done: false,
    type: "month"   
  },
  {
    id: 1497141937547,
    task: "Get foreign transaction free Credit Cards/ATM cards",
    done: false,
    type: "month"
  },
  {
    id: 1497141937548,
    task: "Confirm if you need to obtain visa",
    done: false,
    type: "month"
  },
  {
    id: 1497141937549,
    task: "Outbound flight: Check with your airline",
    done: false,
    type: "month",
  },
  {
    id: 1497141937550,
    task: "Shop for essential travel gear",
    done: false,
    type: "month",
  },
  {
    id:1497141937551,
    task: "Call credit card: Inform your travel destinations",
    done: false,
    type: "week",
  },
  {
    id:1497141937552,
    task: "Download travel apps",
    done: false,
    type: "week",
  },
  {
    id: 1497141937553,
    task: "Prepare meds & first aid kit",
    done: false,
    type: "week",
  },
  {
    id: 1497141937554,
    task: "Upload copies of documents to cloud",
    done: false,
    type: "week",
  },
  {
    id: 1497141937555,
    task: "Give itinerary to family",
    done: false,
    type: "week",
  }
  
];
// filter events;

function filterEvent(event) {
  return {
    typeM: data.filter(function(item) {
      return item.type === "month";
    }),
    typeW: data.filter(function(item) {
      return item.type === "week";
    })
  }
}

// Important Elements - Cached as variables
var todosMonth = document.querySelector('#todoM');
var todosWeek = document.querySelector('#todoW');
var inputEl = document.querySelector('input');
var completedEl = document.querySelector('#counter');

function initializeTodos() {
	updateTodoItems();
}

// function updateTodoItems(){
//   var monthHTML = "";
//   var weekHTML = "";
  
//   var selection = document.getElementsById('selection').value;
//   for (todo of data){
//     if (todo.done == false && todo.type =="month"){
//       monthHTML += `<li id="${ todo.id }" onclick="toggleComplete(event)" class="month">`;
// 			monthHTML += `<i class="fa fa-circle-o"></i>`;
//     } else if (todo.done == false && todo.type =="week"){
//             weekHTML += `<li id="${ todo.id }" onclick="toggleComplete(event)" class="week">`;
// 			weekHTML += `<i class="fa fa-circle-o"></i>`; 
//     }
//     else { 			monthHTML += `<li id="${ todo.id }" class="complete" onclick="toggleComplete(event)">`;
//  			monthHTML += `<i class="fa fa-check-circle-o"></i>`;               weekHTML += `<li id="${ todo.id }" class="complete" onclick="toggleComplete(event)">`;
//  			weekHTML += `<i class="fa fa-check-circle-o"></i>`; }
//     	if (monthHTML === "") {
// 		monthHTML = "<li>Nothing todo...</li>";
// 	}
// 	todosMonth.innerHTML = monthHTML;
//   todosWeek.innerHTML = weekHTML;
// 	updateRemoveBtn();
    
//   }
// }
function updateTodoItems() {
	
  var monthHTML = "";
  var weekHTML = ""; 
  
  var selection = document.getElementById('selection').value;
  debugger;
	for (todo of data) {
    
    // if (todo.type == "month") {
    //   monthHTML += `<li id="${ todo.id }" class="${todo.done ? 'complete' : ''}" onclick="toggleComplete(event)">`;
    //   monthHTML += `<i class="fa fa-check-circle-o"></i>${ todo.task }</li>`;
    // } else {
    //   weekHTML += `<li id="${ todo.id }" class="${todo.done ? 'complete' : ''}" onclick="toggleComplete(event)">`;
    //   weekHTML += `<i class="fa fa-check-circle-o"></i>${ todo.task }</li>`;
    // }
    
		if (todo.done && todo.type =="month") {
			monthHTML += `<li id="${ todo.id }" class="complete" onclick="toggleComplete(event)">`;
			monthHTML += `<i class="fa fa-check-circle-o"></i>${ todo.task }</li>`;
		} else if (todo.done && todo.type =="week") {
		weekHTML += `<li id="${ todo.id }" class="complete" onclick="toggleComplete(event)">`;
			weekHTML += `<i class="fa fa-check-circle-o"></i>${ todo.task }</li>`; 
		}
		else if(todo.type == "month"){
		monthHTML += `<li id="${ todo.id }" onclick="toggleComplete(event)" class="month">`;
			monthHTML += `<i class="fa fa-circle-o"></i>${ todo.task }</li>`;
		}
		else if(todo.type == "week"){
		weekHTML += `<li id="${ todo.id }" onclick="toggleComplete(event)" class="week">`;
			weekHTML += `<i class="fa fa-circle-o"></i>${ todo.task }</li>`; 
		} 
		// else{
		// // alert('SElect cat');
		// // 	// monthHTML += `<li id="${ todo.id }" onclick="toggleComplete(event)">`;
		// // 	// monthHTML += `<i class="fa fa-circle-o"></i>`; 
		// // 	// weekHTML += `<li id="${ todo.id }" onclick="toggleComplete(event)">`;
		// // 	// weekHTML += `<i class="fa fa-circle-o"></i>`; 
		// }

		// monthHTML += `${ todo.task }`;
		// monthHTML += `</li>`;
		// weekHTML += `${ todo.task }`;
		// weekHTML += `</li>`;
	}
	if (monthHTML === "") {
		monthHTML = "<li>Nothing todo...</li>";
	}
	todosMonth.innerHTML = monthHTML;
  todosWeek.innerHTML = weekHTML;
	updateRemoveBtn();
}

function updateRemoveBtn() {
	var completedTodos = data.filter(function(todo){
	  return todo.done === true;
	});

	completedEl.textContent = completedTodos.length;

	if (completedTodos.length) {
		completedEl.parentElement.disabled = false;
	} else {
		completedEl.parentElement.disabled = true;
	}
}

function onEnterKey(event) {
	if (event.code === "Enter") {
		addTodoItem();
	}
}

function validateTask(task) {
	if (task !== "") {
		return true;
	} else {
		return false;
	}
}

function addTodoItem() {
	if (!validateTask(inputEl.value)) {
		return;
	}

	var newTodo = {
		id: getTimeStamp()
	};

	newTodo.task = inputEl.value;
	newTodo.done = false;
  newTodo.type = document.getElementById('selection').value;
	data.push(newTodo);
  
  filterEvent();
	updateTodoItems();
	resetInput();
}

function toggleComplete(event) {
	var todoID = parseInt(event.currentTarget.id);
  
	var todoData = getTodoData(todoID);
	todoData.done = !todoData.done;
	updateTodoItems();
}

function removeTodoItem(event) {
	var incompleteTodos = data.filter(function(todo){
	  return todo.done === false;
	});
	data = incompleteTodos;
	updateTodoItems();
  updateItemsLeft();
}

function resetInput() {
	inputEl.value = "";
}

function getTodoData(id) {
	var todoFound;

	for (var i=0; i < data.length; i++) {
		if (data[i].id === id) {
			todoFound = data[i];
			indexAt = i;
			break;
		}
	}

	if (todoFound) {
		return todoFound;
	} else {
		return null;
	}
}

// HELPER FUNCTION
function getTimeStamp() {
	return Date.now(); // this returns a timestamp in milliseconds since 1970.
}



// START THE APPLICATION
initializeTodos();
console.log('a');
console.log('b');