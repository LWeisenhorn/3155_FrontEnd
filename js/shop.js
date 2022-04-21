$.ajax({
    type: "get",
    url: "../sources/JSON/mens.json",
    dataType: "json",

    timeout: 10000,
    error: function (xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
    },
    success: function (data) {
        document.getElementById("title").innerHTML = "Men's Clothes"
        $.each(data, function (i, v) {
            document.getElementById("grid-container").innerHTML = "<div id='categories'>" +
                "Categories" +
                "<br><button onclick='shirts()'>Shirts</button><br><button onclick='shorts()'>Shorts</button><br><button onclick='shoes()'>Shoes</button></div>";

            for (let i = 0; i < v.length; i++) {
                let className = (v[i]['ItemType']);
                document.getElementById("grid-container").innerHTML +=
                    "<div class=" + className + "><h3>" + "Item Type: " + (v[i]['ItemType']) + "</h3><h4>" + "Item Name: " + (v[i]['ItemName']) + "</h4><p>" + "Price: " + (v[i]['Price']) + "</p><button>Add to cart</button></div>";
            }


        });
    }
});


// Make buttons toggle on off with color coding
function shirts() {
    $('.Shirt').show();
    $('.Shorts').hide();
    $('.Shoes').hide();
    $('.Ball').hide();
}

function shorts() {
    $('.Shorts').show();
    $('.Shirt').hide();
    $('.Shoes').hide();
    $('.Ball').hide();
}

function shoes() {
    $('.Shoes').show();
    $('.Shorts').hide();
    $('.Shirt').hide();
    $('.Ball').hide();
}
