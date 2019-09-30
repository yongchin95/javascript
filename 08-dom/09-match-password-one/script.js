/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click' , ()=>{
   
    let mdp = document.getElementById('pass-one').value;
    let newmdp = document.getElementById('pass-two').value;
    
            if (mdp == newmdp){
            document.getElementById('pass-two').style.border = 'thick solid green';
            console.log('matching');
            }
            else {
            document.getElementById('pass-two').style.border = 'thick solid red';
            console.log('no-matching');
            }
    })
})();
