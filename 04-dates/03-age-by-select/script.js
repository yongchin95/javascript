/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here



    document.getElementById('run').addEventListener('click' , ()=>{

        let dayhb = document.getElementById('dob-day').value;
        let monthhb = document.getElementById('dob-month').value;
        let yearhb = document.getElementById('dob-year').value;
        let inputhb = (dayhb , monthhb , yearhb);
        
        let day = getDay ();
        let month = getMonth ()-1;
        let year = getFullYear();
        let yeardiff = year - yearhb;

        alert ( "Vous etez né le "+ dayhb +" - " + monthhb+ " - " +yearhb+" ");



        if(monthhb > month) yeardiff--;
            else
                {
            if(monthhb == month)
            {
              if(dayhb > day) yeardiff--;
            }
  }
            alert( yeardiff);

        




    });

    
})();
