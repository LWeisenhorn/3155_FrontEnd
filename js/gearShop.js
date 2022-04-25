$.ajax({
    type: "get",
    url: "../sources/JSON/gear.json",
    dataType: "json",

    timeout: 10000,
    error: function (xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
    },
    success: function (data) {
        document.getElementById("title").innerHTML = "Basketball Gear"
        $.each(data, function (i, v) {
            document.getElementById("grid-container").innerHTML = "<div id='categories'>" +
                "Categories" +
                "<br><label id='ballButton'><input onchange='ball()' type='checkbox'> Balls</label>" +
                "<br><label id='hoopButton'><input onchange='hoop()' type='checkbox'> Hoops</label></div>";

            for (let i = 0; i < v.length; i++) {
                let className = (v[i]['ItemType']);
                document.getElementById("grid-container").innerHTML +=
                    "<div class=" + className + "><h3>" + "Item Type: " + (v[i]['ItemType']) + "</h3><h4>" + "Item Name: " + (v[i]['ItemName']) + "</h4><p>" + "Price: " + (v[i]['Price']) + "</p><button>Add to cart</button></div>";
            }


        });
    }
});

let hoopCounter = 0;
let ballCounter = 0;
// Make buttons toggle on off with color coding
function hoop() {
    hoopCounter++;
    categorySelector();
}

function ball() {
    ballCounter++;
    categorySelector();
}

function categorySelector() {
    if(ballCounter % 2) {
        $('.Ball').show();
        document.getElementById("ballButton").style.backgroundColor="grey";
    }
    else {
        $('.Ball').hide();
        document.getElementById("ballButton").style.backgroundColor="rgba(0, 0, 0, 0%)";
    }

    if(hoopCounter % 2) {
        $('.Hoop').show();
        document.getElementById("hoopButton").style.backgroundColor="grey";
    }
    else {
        $('.Hoop').hide();
        document.getElementById("hoopButton").style.backgroundColor="rgba(0, 0, 0, 0%)";
    }
    if(!(ballCounter % 2) && !(hoopCounter % 2)) {
        $('.Ball').show();
        $('.Hoop').show();
    }
}
