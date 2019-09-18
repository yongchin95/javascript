/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];

    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    document.getElementById('run').addEventListener('click' , ()=>{

        let BirdName =Math.floor(Math.random()*birds.length);//birds.lenght pour mon array birds
        console.log(BirdName);

        let newarray = Array.from(adjectives);//crée une array adjective car set =/ array
        console.log(newarray);

        let x =Math.floor(Math.random()*newarray.length);//birdadjective car mon array 

        console.log(x);

        if (birds[BirdName].fem){
    document.getElementById("target").innerHTML ="la" +" " + birds[BirdName].name+ " "+ newarray[x] +"e";
        }
        else {
        document.getElementById("target").innerHTML ="le"+ " " + birds[BirdName].name+ " "+ newarray[x];
    //BirdName = index 
        }
    })
    // your code here

})();
