/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click' , ()=>{
        let person = new Object();
        person.lastname = "Curry";
        person.firstname = "Stephen";
        person.age = "26";
        person.city = "Bruxelles";
        person.country = "Belgium";
        
        console.log(person);

    })
})();
