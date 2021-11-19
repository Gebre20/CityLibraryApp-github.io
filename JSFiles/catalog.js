// "use strict";
// import{addNewBook} from "../JSFiles/addNewBook.js"

window.onload = function(){
    
    function getBook(){
    
    fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/list')
    .then((res) => res.json())
    .then(function(books){

    console.log(books)
    
    let output=``;
    
    
    let index =1;
    books.forEach((data) => {
        output += `<tr class="trtd">
        <td>${index++}.</td>
        <td>${data.isbn}</td>
        <td>${data.title}</td>
        <td>${data.overdueFee}</td>
        <td>${data.publisher}</td>
        <td>${data.datePublished}</td>
        <td><button type="button" class="edit">Edit</button></td>
        <td><button type="button" class="del">Delete</button></td>
      `
    });
    let tb = document.getElementById("bookList");
    tb.innerHTML += output;
    tb.innerHTML  += addNewBook();
})
.catch((err) => console.log(err))

 } 
 getBook(); 
  
  var table = document.getElementById("bookList"),rIndex;
            
for(var i = 1; i < table.rows.length; i++){
    table.rows[i].addEventListener('click', function(){
        rIndex = this.rowIndex;
        console.log(rIndex);

        document.getElementById("isbn").value = this.cells[1].innerHTML;
        document.getElementById("title").value = this.cells[2].innerHTML;
        document.getElementById("overdueFee").value = this.cells[3].innerHTML;
        document.getElementById("publisher").value = this.cells[4].innerHTML;
        document.getElementById("datePublished").value = this.cells[5].innerHTML;
    });
}
function editRow(){
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("isbn").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("title").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("overdueFee").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("publisher").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("datePublished").value;
}


}       
        

     
    