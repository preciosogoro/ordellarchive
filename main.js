var searchResultList = document.querySelector(".search-results-list")

let availableKeywords = [
  "Pokemon Legend Arceus",
  "Pokemon Scarlet",
  "Pokemon Violet",
  "Soal BTA PK & PM Bab 1",
  "Soal BTA Matematika Bab 1"
];

const searchResult = document.querySelector(".search-results"); 
const inputBox = document.getElementById("searchInput");

inputBox.onkeyup = function() {
  let result = [];
  let input = inputBox.value;
  if(input.length) {
      result = availableKeywords.filter((keyword)=>{
        return keyword.toLowerCase().replace('amp', '').includes(input.toLowerCase());
      });
      // console.log(result)
  }
  displayResults(result)
}
// function searchFunction() {
//   window.onkeyup = keyup;


//   function keyup(e) { 
//     let input = inputBox.value;
//     if(e.input.keyword)
// }
// }

function displayResults(result) {
  const content = result.map((list) => {
    return "<li class='search-results-list' onclick=selectInput(this)>" + list + "</li>";
  }); 

  searchResult.innerHTML = "<ul>" + content.join('') + "</ul>";
}


const searchContainer = document.getElementById('searchContainer');

function selectInput(list) {
  // searchContainer.focus();
  inputBox.focus();
  inputBox.value = list.innerHTML.replace('amp;', '');
  searchResult.innerHTML = '';
}


