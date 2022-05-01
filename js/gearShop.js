$.ajax({
    type: "get",
    url: "../sources/JSON/gear.json",
    dataType: "json",

    timeout: 10000,
    error: function (xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
    },
    success: function (data) {
        document.getElementById("title").innerHTML = "";
        $.each(data, function (i, v) {
            document.getElementById("grid-container").innerHTML = "<div id='categories'>" +
                "<h2>Basketball Gear</h2><h3>Categories</h3>" +
                "<br><label id='ballButton'><input onchange='ball()' type='checkbox'>Balls</label>" +
                "<br><br><label id='hoopButton'><input onchange='hoop()' type='checkbox'>Hoops</label></div>";

            for (let i = 0; i < v.length; i++) {
                let className = (v[i]['ItemType']);
                let buttonName = (v[i]['id']) + "Button";
                document.getElementById("grid-container").innerHTML +=
                    "<div class=" + className + " style=\"padding-bottom: 75px\"></h4><img src = \"" + (v[i]['img']) + "\" width='400' alt='" + (v[i]['ItemName']) + "'><div><h4 id='productName'>" + (v[i]['ItemName']) + "</h4><p id='productInfo'>" + (v[i]['Price']) + "</p></div></div>";
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
