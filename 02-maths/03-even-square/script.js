/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        let array= [];

        for (let i=0 ; i<21 ; i+=2){
            console.log(i); //pour voir si la loop fonctionne sur la console
        var square = i*i;
        array.push(square);
        }
        
        alert(array);
    });
})();