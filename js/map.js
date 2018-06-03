var marker;
var goal = {lat: 43.2350995, lng: 76.9098842};


function initMap() {
	var image ={ url:'iconMarker.png',
			   anchor: new google.maps.Point(10,10)};
    
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 14,
          center: goal
        });
     marker = new google.maps.Marker({
          position: goal,
          map: map,
			icon: image,
          animation: google.maps.Animation.DROP
        });
	marker.addListener('click', toggleBounce);
	
      }

 function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

