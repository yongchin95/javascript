/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function numberOfFridaythe13thsIn(year){
        const monthmap = ["Janvier","Fevrier","Mars","Avril","Mai","Juin",
    "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
        let result=  "";
        for(let month=0; month<12; month++)
        {
            const d = new Date(year, month, 13);
            if (d.getDay() == 5)
            {
            result = result + monthmap[month] + "\n";
            }
        }
    
        return result;                            
    }                      
    document.getElementById("run").addEventListener("click", () => {
        const year = document.getElementById("year").value;
        alert(numberOfFridaythe13thsIn(year));
    })
    

})();
