/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   
 document.getElementById('run').addEventListener('click' , ()=>{
        class Person {
            constructor(firstname, lastname) {
                this.firstname = firstname
                this.lastname = lastname
            }
            get sayHello() {
                return this.getSayHello()
            }
            getSayHello() {
                return 'Hello' + ' ' +this.firstname + ' ' + this.lastname + '!'
            }
        }
        
        
        let user = new Person('chinchin' , 'lamachine')
        console.log (user.sayHello)
    });
})();
