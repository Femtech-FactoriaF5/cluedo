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
occupation:   Scientist

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

//Iteración 1 -Crear las cartas

// Characters Collection
const mrGreen = {
    first_name: "Jacob", 
    last_name: "Green",
    color: "green",
    description:"He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:"Entrepreneur"
};
const drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
};
const profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
};
const missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
};
const mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
};

const mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
};

const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

/*
Other option
    const charactersArray =[{mrGreen,first_name:   Jacob, last_name:    Green,},{}]
*/

// Rooms' Collection
const roomsArray = [
    {name: "Dinning Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"}
];

/*
Other option  *** Pero es si no estuviera preestipulado que fuera con el name de propiedad, podría utilizarse la forma quehay a continuación, y al llamarla en la última función se eliminaria el .name
    const roomsArray = ["Dinning Room", ...]; 
*/


// Weapons Collection
const weaponsArray = [
    {name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20}
];

/*
Other option
    const rope={
        name: "rope",
        weight: 2,
    }
    ...
    const weaponsArray = [rope,...];
*/


//Iteración 2 - Crea el misterio
    function randomSelector(array) {   
        if(!array.length){
            return undefined;
            };
        let randomElement = [];//definir las variables ??
        for(let i = 0; i < array.length; i++){
            if(array[i]>randomElement){
                randomElement+=array[i]; 
            }   
        }
        return randomElement = array[Math.floor(Math.random()*array.length)];
        
        /* 
        Other option    
            let randomElement = array[Math.floor(Math.random()*array.length)];
            return randomElement;
        */
    }

    function pickMistery() {
        let deckOfCards1= randomSelector(charactersArray);
        let deckOfCards2= randomSelector(weaponsArray);
        let deckOfCards3= randomSelector(roomsArray);
        return [deckOfCards1, deckOfCards2,deckOfCards3];
    
        /* 
            Op-1
                let mistery =[
                randomSelector(charactersArray), 
                randomSelector(weaponsArray),
                randomSelector(roomsArray)
                ];
                return mistery;
            
            Op-2
                return [randomSelector(charactersArray), randomSelector(weaponsArray),randomSelector(roomsArray)];
        */
    }  

    
//Iteración 3 - Descubrir el misterio
function revealMistery (mistery){
    return `${mistery[0].first_name} ${mistery[0].last_name} killed Mr.Boddy using the ${mistery[1].name} in the ${mistery[2].name}!!!!`
}
  
//"Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!"  [0][1][3]

console.log(revealMistery(pickMistery()));