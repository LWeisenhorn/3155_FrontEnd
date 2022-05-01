$.ajax({
    type: "get",
    url: "../sources/JSON/womens.json",
    dataType: "json",

    timeout: 10000,
    error: function (xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
    },
    success: function (data) {
        document.getElementById("title").innerHTML = "";
        $.each(data, function (i, v) {
            document.getElementById("grid-container").innerHTML = "<div id='categories'>" +
                "<h2>Women's Clothes</h2><h3>Categories</h3>" +
                "<br><label id='shirtButton'><input onchange='shirts()' type='checkbox'> Shirts</label>" +
                "<br><br><label id='shortsButton'><input onchange='shorts()' type='checkbox'> Shorts</label>" +
                "<br><br><label id='shoesButton'><input onchange='shoes()' type='checkbox'> Shoes</label></div>";

            for (let i = 0; i < v.length; i++) {
                let className = (v[i]['ItemType']);
                let buttonName = (v[i]['id']) + "Button";
                document.getElementById("grid-container").innerHTML +=
                    "<div class=" + className + " style=\"padding-bottom: 75px\"></h4><img src = \"" + (v[i]['img']) + "\" width='400' alt='" + (v[i]['ItemName']) + "'><div><h4 id='productName'>" + (v[i]['ItemName']) + "</h4><p id='productInfo'>" + (v[i]['Price']) + "</p></div></div>";
            }


        });
    }
});

let shirtCounter = 0;
let shortsCounter = 0;
let shoesCounter = 0;
// Make buttons toggle on off with color coding
function shirts() {
    shirtCounter++;
    categorySelector();
}

function shorts() {
    shortsCounter++;
    categorySelector();
}

function shoes() {
    shoesCounter++;
    categorySelector();
}

function categorySelector() {
    if(shirtCounter % 2) {
        $('.Shirt').show();
        document.getElementById("shirtButton").style.borderBottomColor="red";
    }
    else {
        $('.Shirt').hide();
        document.getElementById("shirtButton").style.borderBottomColor="transparent";
    }
    if(shortsCounter % 2) {
        $('.Shorts').show();
        document.getElementById("shortsButton").style.borderBottomColor="red";
    }
    else {
        $('.Shorts').hide();
        document.getElementById("shortsButton").style.borderBottomColor="transparent";
    }
    if(shoesCounter % 2) {
        $('.Shoes').show();
        document.getElementById("shoesButton").style.borderBottomColor="red";
    }
    else {
        $('.Shoes').hide();
        document.getElementById("shoesButton").style.borderBottomColor="transparent";
    }
    if(!(shirtCounter % 2) && !(shortsCounter % 2) && !(shoesCounter % 2)) {
        $('.Shirt').show();
        $('.Shorts').show();
        $('.Shoes').show();
    }
}
