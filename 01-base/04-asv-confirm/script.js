/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


while (true){
    let age= prompt ("Quel âge as tu?");
  let  sexe=prompt ("Quel est ton sexe?");
   let  ville=prompt ("Quel ville habite-tu?");
    let conf=confirm (`Tu as ${age} ans,tu es ${sexe}, tu habite à ${ville}`);
 
    if (conf==true) {
    break;
    }
}

})();
