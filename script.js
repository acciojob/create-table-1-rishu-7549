function insert_Row() {
    //Write your code here
    let table = document.getElementById("sampleTable");
	
	 let newRow = table.insertRow(0);
    
    // Insert new cells in the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    
    // Set the text content for each cell
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';

	// let newRow = document.createElement("tr");
	// let cell1 = document.createElement("td");
	// cell1.textContent = "New Cell1";
	// let cell2 = document.createElement("td");
	// cell2.textContent = "New Cell2";

	// newRow.appendChild(cell1);
	// newRow.appendChild(cell2);

	// table.insertBefore(newRow, table.firstChild);
	
  
}
