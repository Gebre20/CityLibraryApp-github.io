window.onload = function () {
  document.getElementById("formNewBook").addEventListener("submit", addNewBook);
  function addNewBook(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let isbn = document.getElementById("isbn").value;
    let overdueFee = document.getElementById("overdueFee").value;
    let publisher = document.getElementById("publisher").value;
    let datePublished = document.getElementById("datePublished").value;
    let body = document.getElementById("formNewBook").value;
    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        isbn: isbn,
        title: title,
        overdueFee: overdueFee,
        publisher: publisher,
        datePublished: datePublished,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  document.getElementById('formNewBook').addEventListener('reset', clearFields);
    function clearFields(e){
        e.preventDefault();
        document.getElementById("title").value = "";
        document.getElementById("isbn").value = "";
        document.getElementById("overdueFee").value ="";
        document.getElementById("publisher").value = "";
        document.getElementById("datePublished").value ="";
    }
};
