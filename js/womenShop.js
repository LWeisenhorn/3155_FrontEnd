$.ajax({
    type: "get",
    url: "../sources/JSON/womens.json",
    dataType: "json",

    timeout: 10000,
    error: function (xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
    },
    success: function (data) {
        document.getElementById("title").innerHTML = "Women's Clothes"
        $.each(data, function (i, v) {
            document.getElementById("grid-container").innerHTML = "<div id='categories'>" +
                "Categories" +
                "<br><label id='shirtButton'><input onchange='shirts()' type='checkbox'> Shirts</label>" +
                "<br><label id='shortsButton'><input onchange='shorts()' type='checkbox'> Shorts</label>" +
                "<br><label id='shoesButton'><input onchange='shoes()' type='checkbox'> Shoes</label></div>";

            for (let i = 0; i < v.length; i++) {
                let className = (v[i]['ItemType']);
                document.getElementById("grid-container").innerHTML +=
                    "<div class=" + className + "><h3>" + "Item Type: " + (v[i]['ItemType']) + "</h3><h4>" + "Item Name: " + (v[i]['ItemName']) + "</h4><img src = \"" + (v[i]['img']) + "\" width='300'><p>" + "Price: " + (v[i]['Price']) + "</p><button>Add to cart</button></div>";
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
        document.getElementById("shirtButton").style.backgroundColor="grey";
    }
    else {
        $('.Shirt').hide();
        document.getElementById("shirtButton").style.backgroundColor="rgba(0, 0, 0, 0%)";
    }
    if(shortsCounter % 2) {
        $('.Shorts').show();
        document.getElementById("shortsButton").style.backgroundColor="grey";
    }
    else {
        $('.Shorts').hide();
        document.getElementById("shortsButton").style.backgroundColor="rgba(0, 0, 0, 0%)";
    }
    if(shoesCounter % 2) {
        $('.Shoes').show();
        document.getElementById("shoesButton").style.backgroundColor="grey";
    }
    else {
        $('.Shoes').hide();
        document.getElementById("shoesButton").style.backgroundColor="rgba(0, 0, 0, 0%)";
    }
    if(!(shirtCounter % 2) && !(shortsCounter % 2) && !(shoesCounter % 2)) {
        $('.Shirt').show();
        $('.Shorts').show();
        $('.Shoes').show();
    }
}
