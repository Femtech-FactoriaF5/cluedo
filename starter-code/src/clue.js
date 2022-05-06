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
...
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
const charactersArray = [
{mrGreen:{
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"}},

{drOrchid:{
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"}},

{profPlum:{
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"}},

{missScarlet:{
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"}},

{mrsPeacock:{
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"}},

{mrMustard:{
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"}}];

// Rooms' Collection
const roomsArray = [
    {name: "Dinning Room"}, 
    {name:  "Conservatory"},
    { name:"Kitchen"}, 
    { name:"Study"},
    {name: "Library"}, 
    { name:"Billiard Room"}, 
    { name:"Lounge"}, 
    { name:"Ballroom"}, 
    { name:"Hall"}, 
    { name:"Spa"}, 
    { name:"Living Room"},  
    { name:"Observatory"}, 
    {name:"Theater"},
    {name:"Guest House"}, 
    {name:"Patio"}];

// Weapons Collection
const weaponsArray = [
    {name:"rope", weight: 10},
    {name:"knife", weight: 8},
    {name:"candlestick", weight:2},
    {name:"dumbbell", weight:"30"},
    {name:"poison", weight:"2"},
    {name:"axe", weight:"15"},
    {name:"bat", weight:"13"},
    {name:"trophy", weight:"25"},
    {name:"pistol", weight:"20"}];

function randomSelector(array) {
    if (!array.length) {// remasterizado 0 = false
        return undefined
    }
let randElement = array[Math.floor(Math.random() * array.length)];
return randElement;
}
function pickMistery() {//https://www.javascripttutorial.net/es6/javascript-array-from/
    /*let randomPer = randomSelector(charactersArray);
    let randomWeapon = randomSelector(weaponsArray);
    let randomRoom = randomSelector(roomsArray);
    let asesinato = [randomPer, randomWeapon, randomRoom];

    return asesinato;*/
    // mas corto
    return [randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray)];
}

function revealMistery() {
    //"undefined killed Mr.Boddy using the undefined in the undefined!!!!"
    /*let first_name = pickMistery[0];
    let last_name = pickMistery[0];
    let weapon = pickMistery[1];
    let room = pickMistery[2];
    let misterio = `${first_name} killed Mr.Boddy using the ${weapon} in the ${room}!!!!`;
    return misterio;*/

    //let misterio = [pickMistery[0], pickMistery[0], pickMistery[1], pickMistery[2]];
    
    //"Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!"
    let misterio = ["Victor", "Plum", "poison", "Billiard Room"];
     return `${misterio[0]} ${misterio[1]} killed Mr.Boddy using the ${misterio[2]} in the ${misterio[3]}!!!!`
}
/***\<FIRST NAME\> \<LAST NAME\> killed Mr.Boddy using the \<WEAPON\> in the \<PLACE\>!!!!** */