/**
 * Web App HW 3
 * Created by Hans Dulimarta
 * Functions written by Jacob Walton
 * 9/21/18
 */

/**
 * Given the ID of a node {rootId}, find all its descendant elements having
 * its attribute id set and then change their class to {klazName}.
 * The function returns the number of such elements found.
 *
 * @param rootId    the ID of the "root" element to begin searching
 * @param klazName  the class to assign to each descendant whose id attrib 
 *                  is set.
 * @returns {number}
 */
function findElementsWithId(rootId, klazName) {
  var root = document.getElementById(rootId);
  var elems = root.childNodes;
  var count = elems.length;
  var result = 0;
  for (i = 0; i < count; i++) {
    if (elems[i].id != ""){
        result += 1;
        elems[i].className = klazName;
    }
  }
  return result;
}

/**
 * The following function finds all elements with attribute 'data-gv-row' (or
 * 'data-gv-column') and create a table of the desired dimension as a child of
 * the element.
 *
 * @returns NONE
 */
function createTable() {
  /* complete this function */
  const lips = new LoremIpsum();
  var table = document.createElement("table");
  var root = document.querySelector("[data-gv-row]");
  var tr = document.createElement("tr");
  for (j = 1; j < root.getAttribute("data-gv-column"); j++)
    {
      var td = document.createElement('td');
      td.appendChild(document.createTextNode("Heading " + j))
      tr.appendChild(td)
    }
    table.appendChild(tr);
  
  for (i = 0; i < root.getAttribute("data-gv-row"); i++)
  {
    var tr = document.createElement("tr");
    for (j = 1; j < root.getAttribute("data-gv-column"); j++)
    {
      var td = document.createElement('td');
      td.appendChild(document.createTextNode(lips.generate(3)))
      tr.appendChild(td)
    }
    table.appendChild(tr);
  }

  root.appendChild(table);
  }
  
