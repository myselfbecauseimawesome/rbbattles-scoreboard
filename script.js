var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
    tab.addEventListerer("click", function(){
        var currentdatali = tab.getAttribute("data-li");
        
        tabs.forEach(function(tab){
            tab.classList.remove("active")
        })

        tab.classList.add("active");

        items.forEach(function(item){
            item.style.display = "none"
        })

        if(currentdatali == "today"){
            today.style.display = "block";
        }
        else if(currentdatali == "month"){
            month.style.display = "block";
        }
        else{
            year.style.display = "block";
        }
    })
})

















































//Leader Board in HTML CSS and JavaScript - Css Tabs -Tabbed Content in JS
//18:39