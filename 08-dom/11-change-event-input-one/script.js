/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("pass-one").addEventListener("input", () => {
        let value = document.getElementById("pass-one").value;
    
        document.getElementById("counter").innerHTML = value.length + "/10";
    
        if (value.length > 9) {
          document.getElementById("pass-one").setAttribute("maxlength", 10);
        }
      });
})();
