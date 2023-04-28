var selectedRow = null;

function onFormSubmit(e) {
  let t=document.getElementById("storeList");
  let h=t.getAttribute("hidden");
  if(h){
    t.removeAttribute("hidden");
  }
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["studentName"] = document.getElementById("studentName").value;
  formData["collegeName"] = document.getElementById("collegeName").value;
  formData["Email"] = document.getElementById("Email").value;
  if (document.getElementById("M").checked){
    formData["Gender"]=document.getElementById("M").value;  
  }
  if (document.getElementById("F").checked){
    formData["Gender"]=document.getElementById("F").value;  
  }
  
  formData["dob"] = document.getElementById("dob").value;

  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.studentName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.collegeName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Gender;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.dob;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> 
                    <button onClick="onDelete(this)">Delete</button>`
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("collegeName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("dob").value = selectedRow.cells[4].innerHTML;
  if(selectedRow.cells[3].innerHTML=="Female")
  {
    document.getElementById("F").checked=true;
  }
  if(selectedRow.cells[3].innerHTML=="Male")
  {
    document.getElementById("M").checked=true;
  }
  
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.studentName;
  selectedRow.cells[1].innerHTML = formData.collegeName;
  selectedRow.cells[2].innerHTML = formData.Email;
  selectedRow.cells[3].innerHTML = formData.Gender;
  selectedRow.cells[4].innerHTML = formData.dob;
}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
  var tb=document.getElementById("storeList");
  if(tb.tBodies[0].rows.length==0){
    tb.setAttribute("hidden","hidden");
  }
}

function resetForm() {
  document.getElementById("studentName").value = "";
  document.getElementById("collegeName").value = "";
  document.getElementById("Email").value = "";
  if (document.getElementById("M").checked){
    document.getElementById("M").checked=false;
  }
  if (document.getElementById("F").checked){
    document.getElementById("F").checked=false;
  }
  document.getElementById("dob").value = "";

  selectedRow = null;
}