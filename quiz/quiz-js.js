// constant to store all the questions and answers
const questions = {
  question0: {
    question: "Which of these images appeal to you?",
    option0: {
      type: "image",
      content:
        "https://images.unsplash.com/photo-1534152410228-38e97861b36c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4dd25e2a5420abaf7b2d8df6c7ebe065&auto=format&fit=crop&w=1500&q=80",
      personality: "Adventurous"
    },
    option1: {
      type: "image",
      content:
        "https://images.unsplash.com/photo-1524014444623-194fde519952?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50a0bf5cb937121cd79cef6b1f22421e&auto=format&fit=crop&w=750&q=80",
      personality: "Intellectual"
    },
    option2: {
      type: "image",
      content:
        "https://images.unsplash.com/photo-1517226830096-935b8186475c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5344831319a6b8ce74fafc97fd8f5a4f&auto=format&fit=crop&w=752&q=80",
      personality: "Immersed"
    },
    option3: {
      type: "image",
      content:
        "https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=397bf529b8e82111623d4580174c8d6d&auto=format&fit=crop&w=1050&q=80",
      personality: "Dreamy"
    }
  },
  question1: {
    question: "Pick 1 item for your bucket list",
    option0: {
      type: "string",
      content: "Bungee Jumping in New Zealand",
      personality: "Adventurous"
    },
    option1: {
      type: "string",
      content: "Seeing the Louvre",
      personality: "Intellectual"
    },
    option2: {
      type: "string",
      content: "Tasting your way through Italy",
      personality: "Immersed"
    },
    option3: {
      type: "string",
      content: "Being serenaded whilst sitting in a gondola",
      personality: "Dreamy"
    }
  },
  question2: {
    question: "What do you never leave your house without?",
    option0: {
      type: "string",
      content: "Sneakers",
      personality: "Adventurous"
    },
    option1: {
      type: "string",
      content: "Earphones and a charger",
      personality: "Dreamy"
    },
    option2: {
      type: "string",
      content: "A book",
      personality: "Intellectual"
    },
    option3: {
      type: "string",
      content: "A camera",
      personality: "Immersed"
    }
  },
  question3: {
    question:
      "You've arrived at your destination. What's the first thing you do?",
    option0: {
      type: "string",
      content:
        "Take public transportation into the city. It's the cheapest city tour possible!",
      personality: "Immersed"
    },
    option1: {
      type: "string",
      content:
        "Stop by the oldest bookstore in the city on the way to the hotel.",
      personality: "Intellectual"
    },
    option2: {
      type: "string",
      content: "Head for the hotel spa and then enjoy the view from my room",
      personality: "Dreamy"
    },
    option3: {
      type: "string",
      content:
        "Dump my bags and find some physical activity that will get my adrenaline pumping. Best way to shake off the jet lag.",
      personality: "Adventurous"
    }
  },
  question4: {
    question:
      "If you were to go on a first date, which activity would be your top pick?",
    option0: {
      type: "string",
      content: "Checking out an escape room",
      personality: "Adventurous"
    },
    option1: {
      type: "string",
      content: "Going to the museum",
      personality: "Intellectual"
    },
    option2: {
      type: "string",
      content: "Taking a walk through central park",
      personality: "Dreamy"
    },
    option3: {
      type: "string",
      content: "Hitting the flea market",
      personality: "Immersed"
    }
  }
};

// constant to store the description for each type of traveller
const result = {
  Adventurous: [
    "If you imagine yourself bungee jumping in New Zealand, running with the bulls in Pamplona, dancing until 6 in the morning in Berlin, heliskiing from the top of a mountain in Banff or boating down the Amazon, all signs point to you being an adventure traveler.",
    "National Geographic has a list of the top adventure tour operators and outfitters worldwide that may be worth a look. Of course, you don't need to be a part of a tour to have an adventure, but if you're not sure what adventure travel means or if you just want an idea of what kind of companies operate tours and which ones to use, it's a great place to start.",
    "Recommended destinations for adventure travelers: New Zealand, Brazil, Bolivia, Nepal/Tibet, Tanzania, India."
  ],
  Immersed: [
    "If your travel dreams are populated by the perfect sunset on a secluded beach in the Seychelles, gondola rides in Venice, and catching falling Sakura flowers, this is probably you.",
    "Travel can be an amazing way to inspire creativity and connect with your inner muse! Check out Travel and Leisure's list of the 50 most dreamy places for a general idea of what's out there in the way of romantic destinations. The notion of taking off to far-flung places is a dream come through in itself, so grab your passports, and get out and see the world.",
    "Recommended spots for dreamy travelers: Santorini, Venice, Paris, Buenos Aires, Goa, Bali, Phuket, Fiji, Tahiti."
  ],
  Intellectual: [
    "If travel is just another way you broaden your internal encyclopedia with art, culture, and history, and your dream itinerary includes days filled with museums, archeological sites, groundbreaking architecture and traditional experiences, you may be an intellectual traveler.",
    "Lucky for you, destinations all over the world cater to the student inside of all of us. The world's full of lessons, and travel is the way to learn them.",
    "Recommended regions for intellectual travelers: Europe, India, Japan, Machu Picchu, Istanbul, Cairo."
  ],
  Dreamy: [
    "If your travel dreams are populated by the perfect sunset on a secluded beach in the Seychelles, gondola rides in Venice, and catching falling Sakura flowers, this is probably you.",
    "Travel can be an amazing way to inspire creativity and connect with your inner muse! Check out Travel and Leisure's list of the 50 most dreamy places for a general idea of what's out there in the way of romantic destinations. The notion of taking off to far-flung places is a dream come through in itself, so grab your passports, and get out and see the world.",
    "Recommended spots for dreamy travelers: Santorini, Venice, Paris, Buenos Aires, Goa, Bali, Phuket, Fiji, Tahiti."
  ]
};

// for keeping track of the score
var score = {
  Adventurous: 0,
  Immersed: 0,
  Intellectual: 0,
  Dreamy: 0
};

// for keep track of the current question
var currentQn = 0;

// for setting up each of the questions
function setupQuestion() {
  // find out the current percentage of completion and updates the css
  var progress = 20 + currentQn * 20;
  var progressbar = document.getElementById("progress");
  progressbar.style.width = progress + "%";
  progressbar.innerText = currentQn + 1 + "/5";

  // get the current questions content
  var qn = questions["question" + currentQn];
  var qnText = document.getElementById("question");
  qnText.innerText = qn.question;

  // updates each of the options for the current question
  for (var i = 0; i < 4; i++) {
    var option = document.getElementById("option" + i);
    var content = option.getElementsByClassName("content")[0];
    var qnOption = qn["option" + i];
    if (qnOption.type == "image") {
      var htmlStr = "<img src='" + qnOption.content + "'>";
      content.innerHTML = htmlStr;
    } else {
      var htmlStr = "<p>" + qnOption.content + "</p>";
      content.innerHTML = htmlStr;
    }
  }
}

// to unselect all of the options
function resetOptions() {
  var btn = document.getElementsByTagName("input");
  btn[0].checked = false;
  btn[1].checked = false;
  btn[2].checked = false;
  btn[3].checked = false;
}

// to select the option that is clicked
function select(element) {
  var btn = element.getElementsByTagName("input")[0];
  btn.checked = true;
  next();
}

// get the next questions, or display result if all questions were answered
function next() {
  // get the current select option
  var ans = $("input[name=answer]:checked").val();
  var qn = questions["question" + currentQn];
  // get the personality type for the option selected
  var personality = qn["option" + ans].personality;
  // increase the score of the personality by one
  score[personality]++;
  // increase the question count by 1
  currentQn = currentQn + 1;
  // unselect all options
  resetOptions();
  // check if quiz is completed
  if (currentQn < 5) {
    // if quiz not completed, setup the next question
    setupQuestion();
  } else {
    // else quiz is completed
    // assume that the highest score is the adventurous personality
    // and go through each of the personality type, and update the highest score and personality
    var highestScore = score["Adventurous"];
    var highestPersonality = "Adventurous";
    if (highestScore < score["Intellectual"]) {
      highestScore = score["Intellectual"];
      highestPersonality = "Intellectual";
    }
    if (highestScore < score["Immersed"]) {
      highestScore = score["Immersed"];
      highestPersonality = "Immersed";
    }
    if (highestScore < score["Dreamy"]) {
      highestScore = score["Dreamy"];
      highestPersonality = "Dreamy";
    }
    
    // get the description of the personality and update the result page
    var personalityResult = result[highestPersonality];
    document.getElementById("personality-type").innerText =
      highestPersonality + " Traveller";
    document.getElementById("personality-part-1").innerText =
      personalityResult[0];
    document.getElementById("personality-part-2").innerText =
      personalityResult[1];
    document.getElementById("personality-recommended").innerText =
      personalityResult[2];
    // set question count to 0 so that when the user wishes to retry, the quiz is on the right question count
    currentQn = 0;
    showPage(1);
  }
}

// bring the particular page into view.
// page 0: start page
// page 1: result page
// page 2: quiz
function showPage(num) {
  var pages = document.getElementsByClassName("container");
  pages[0].style.display = "none";
  pages[1].style.display = "none";
  pages[2].style.display = "none";
  pages[num].style.display = "block";
}
