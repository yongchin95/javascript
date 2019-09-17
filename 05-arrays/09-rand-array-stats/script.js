/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click' , ()=>{
        //Array.from({length: 100}, () => Math.floor(Math.random() * 100));
        let random = []

        for (let i=1; i < 11; i++){
        
        let number = Math.floor(Math.random() * 100);

        random.push(number);

        document.getElementById('n-'+i).innerHTML= number;}

        var min = 100;
        var max = 0;
        var somme = 0;

        for (let i=0; i<10; i++){ //meme chose que i=1; i<11;i++
            somme = somme + random [i];
            if (min>random [i]) {
                min = random [i];
            }
            if (max< random [i]) {
                max = random [i];
            }
        }
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = somme;
        document.getElementById("average").innerHTML = somme / random.length;

    })
})();
