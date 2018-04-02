var person1 = {id:"1", firstName:"Jan", LastName:"Kowalski", dateOfBirth:"1.7.1990 11:35", company:"XSolve", note:90};
var person2 = {id:"4", firstName:"Justyna", LastName:"Kowalska", dateOfBirth:"4.02.1976 14:37", company:"XSolve", note:91};
var person3 = {id:"2", firstName:"Krzysztof", LastName:"Krawczyk", dateOfBirth:"28.10.1950 2:15", company:"Chilid", note:27};
var person4 = {id:"3", firstName:"Bogusław", LastName:"Linda", dateOfBirth:"03.01.1963 23:10", company:"XSolve", note:50};
var person5 = {id:"5", firstName:"Krzysztof", LastName:"Kononowicz", dateOfBirth:"10.10.1910 18:00", company:"Chilid", note:77};
var person6 = {id:"6", firstName:"Maryla", LastName:"Rodowicz", dateOfBirth:"29.02.1936 11:35", company:"XSolve", note:8};

var people = [person1, person2, person3, person4, person5, person6];

if(dateOfBirth.chartAt(1) != "."){
	
}

function myTable(){
var table = '';

for ( var i = 0; i<people.length; i++){
	

var ttx = moment(people[i].dateOfBirth, 'DD/MM/YYYY').format('YYYY-MM-DD');
people[i].dateOfBirth = ttx;
table += '<tr>';
table += '<td>' + people[i].id + '</td>' + '<td>' + people[i].firstName + '</td>' + '<td>' + people[i].LastName + '</td>' + '<td>' + people[i].dateOfBirth + '</td>' + '<td>' + people[i].company + '</td>' + '<td>' + people[i].note + '</td>';

table += '</tr>'
}
document.write( '<table class="myTable">' + table + '</table>' )	
}
// sorting
function mySorting(a, b){
people.sort(compareValues(a, b)); 
var table2	= '';
	for ( var i = 0; i<people.length; i++){
table2 += '<tr>';
table2 += '<td>' + people[i].id + '</td>' + '<td>' + people[i].firstName + '</td>' + '<td>' + people[i].LastName + '</td>' + '<td>' + people[i].dateOfBirth + '</td>' + '<td>' + people[i].company + '</td>' + '<td>' + people[i].note + '</td>';

table2 += '</tr>'
}
document.getElementById("MyTable").innerHTML='<table class="myTable">' + table2 + '</table>'
}

function compareValues(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0; 
    }

    const varA = (typeof a[key] === 'string') ? 
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? 
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}
//filtering
function myFiltering(a, b) {
  var input, filter, table, tr, td, i;
  input = document.getElementById(b);
  filter = input.value.toUpperCase();
  table = document.getElementById("MyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[a];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}


