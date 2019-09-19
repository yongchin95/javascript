/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
        class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
            }
        }
    // your code here
        class Cat extends Animal{
            constructor(name) {
                super();
                Cat.greeting = "Miaou";
                this.name = name;
            }
        }
        class Dog extends Animal{
            constructor(name) {
                super();
                Dog.greeting = "Woof";
                this.name = name;
            }
        }
        document.getElementById('run').addEventListener('click' , ()=>{
        
        let user = new Cat ("Jacky")
        let us = new Dog ("Chan")
        console.log(user.sayHello() , us.sayHello())

        })
    
})();
