var toppingsChoice = {
Pepperoni : 4,
Salami : 4,
Chorizo : 4,
Pineapple : 2,
Mushroom : 2,
Mozzarella : 3,
}


function totalPrice(){
var customerChoice=document.getElementById("customerInput").value;
var array=totalPrice.split(",");
}

var total = 0;
var i;

for (i=0; i<toppingsChoice.length; i++) {
total = (+total) + (+prices[toppingsChoice[i]]);
}

alert("$"+total);

var a=alert("Thank you!");

var locations = [
        [
        "Victoria Public Market",
        48.430233, 
        -123.363756
    ],
    [
    		"The Bay Center",
        48.425387, 
        -123.366515
    ],
    [
    "Fort Tectoria",
    48.424301, 
    -123.363203
    ]
]

var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: new google.maps.LatLng(48.425373, -123.366482),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker = [];
    var i;

    for (i = 0; i < locations.length; i++) { 
    console.log(i);
    console.log("marker: ",marker);
      marker[i] = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2],locations[i][3]),
        map: map
      });


      google.maps.event.addListener(marker[i], 'click', function(e) {
          map.setZoom(16);
          console.log(e);
          map.setCenter(e.latLng);
        });

    }
