/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let reg = /(^(?=(.*\d){2,}).{8,}$)/
    document.getElementById("pass-one").addEventListener("input", () => {
        let value = document.getElementById("pass-one").value;
        
        if (reg.test(value)) {
          document.getElementById('validity').innerHTML = 'ok';
        }
        else {
        document.getElementById('validity').innerHTML = 'not ok';
        }
      });
})();
