const searchForm = document.querySelector(".search-form");

//! buttons
const searchBtn = document.querySelector("#search-btn");


searchBtn.addEventListener("click", function (){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(!e.composedPath().includes(searchBtn)){
            searchForm.classList.remove("active");
        }
    })
});