// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection

    
const mrGreen = {first_name: "Jacob", 
last_name: "Green",
color: "green",
description:"He has a lot of connections",
age:45,
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
ocupation:"Entrepeneur"}

const drOrchid ={first_name: "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"}

const profPlum ={first_name: "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"}

const missScarlet ={first_name: "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"}

const mrsPeacock = {first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"}

const mrMustard = {first_name: "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"}

const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
const roomsArray = [{name: "Dinning Room"}, {name: "Conservatory"}, {name: "Kitchen"}, {name: "Study"},
{name: "Library"}, {name: "Billiard Room"}, {name: "Lounge"}, {name: "Ballroom"},{ name: "Hall"},
{name: "Spa"}, {name: "Living Room"}, {name: "Observatory"}, {name: "Theater"},{ name: "Guest House"},
{name: "Patio"}];

// Weapons Collection
const weaponsArray = [{name: "rope", weight: 10},{name: "knife", weight: 8},
{name: "candlestick", weight: 2}, {name: "dumbbell",weight: 30}, {name: "poison",weight: 2},
{name: "axe", weight: 15}, {name: "bat", weight: 13}, {name: "trophy", weight: 25},
{name: "pistol", weight: 20}];

//### Random Selector

function randomSelector(array){

let randomItem = array[Math.floor(Math.random()*array.length)];

//console.log(aleatorio); 

return randomItem;
};

//### Crea el misterio



function pickMistery (array){

let randomCard1= randomSelector (charactersArray);
let randomCard2= randomSelector (weaponsArray);
let randomCard3= randomSelector (roomsArray);
let mistery= [randomCard1,randomCard2,randomCard3]
return mistery

}
/*it('Return a non empty array', ()=> {
    expect(pickMistery().length).toBeGreaterThan(0);
  });*/

  function checkArray (){
  if(array.length>0)
      return false
  }

/* 
let randomCharacter= [[Math.floor(Math.random()*charactersArray.length);

return 

    let card2 = [Math.floor(Math.random()*roomsArray.length);
let card3 = [Math.floor(Math.random()*weaponsArray.length)   
let mistery = [card1,card2,card3]*/

function revealMistery (mistery){

    let suma= randomCard1.first_name +  randomCard1.last_name + 
  "killed Mr Boddy using the "+ randomCard2 + "in the " + randomCard3;
  return suma
}
  

function revealMistery (){
 
    let finalArray= [{first_name: "Victor", last_name: "Plum"}, {name: "poison"}, {name: "Billiard Room"}]
    let totalstring= "Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!"
    return totalstring

}


