/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

        document.getElementById('run').addEventListener('click' , ()=> {

            let r = Math.floor(Math.random() * 255);      
            let g = Math.floor(Math.random() * 255);      
            let b = Math.floor(Math.random() * 255);      
            let color ='rgb(' + r + ', ' + g + ', ' + b + ')';          
            console.log(color);
        
            document.body.style.backgroundColor = color ;

           
});
})();
