// Class googleMaps
var googleMaps = { 

 init : function (lat, lng) { 
            
  var styles = [
   {
     stylers: [
       //{ hue: "#ffcc00" },
       { hue: "#646f76" },
       { saturation: -20 }
     ]
   },{
     featureType: "road",
     elementType: "geometry",
     stylers: [
       { lightness: 0 },
       { visibility: "simplified" }
     ]
   },{
     featureType: "road",
     elementType: "labels",
     stylers: [
       { visibility: "off" }
     ]
   }
  ];

  var center = new google.maps.LatLng(lat, lng);
  var mapOptions = {
     zoom: 6,
     center: center,
     disableDefaultUI: true,
     mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  map.setOptions({styles: styles});

 }

};

// Call Google Maps
google.maps.event.addDomListener(window, 'load', googleMaps.init(4.3464112753331925, -71.12548828125));

// jQuery
$(document).ready(function() {

        $('#header a.scroll').on('click', function(){
        //var h = $('#header').outerHeight();
            var link = this;
            //console.log(link.hash > " ");
            //console.log(link);
            $.smoothScroll({
                //offset: -h,
                offset: 0,
                scrollTarget: link.hash
            });
            return false;
        });
});
