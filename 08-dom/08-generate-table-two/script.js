/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function addTable() {
        var myTableDiv = document.getElementById("target");
      
        var table = document.createElement('TABLE');
      
        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
      
        for (var i = 1; i < 11; i++) {
          var tr = document.createElement('TR');
          tableBody.appendChild(tr);
      
          for (var j = 1; j < 11; j++) {
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode([i]*[j]));
            tr.appendChild(td);
          }
        }
        myTableDiv.appendChild(table);
      }
      addTable();
})();
