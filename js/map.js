
(function() {

	var map = new google.maps.Map(document.querySelector('.map-wrapper')),
	preloader = document.querySelector('.preload-wrapper'),

	geocoder = new google.maps.Geocoder(),
	geocodeButton = document.querySelector('.geocode'),


	//directions services(drawing a route on map)

	directionsService = new google.maps.DirectionsService(),
	directionsDisplay,
	locations = [],
	marker;


	function initMap() {
         // Styles a map in night mode.
         var map = new google.maps.Map(document.getElementById('map'), {
           center: {lat: 44.50003, lng: -81.373050},
           zoom: 30,
           styles: [{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]}]
         });


				 locations[0] = {lat: 44.50003, lng: -81.373050};
				 directionsDisplay = new google.maps.DirectionsRenderer();
				 directionsDisplay.setMap(map);
marker = new google.maps.Marker({
//position: {lat: 42.983233, lng: -81.250688},
position: {lat: 44.50003, lng: -81.373050},
map: map,
title: "Hello World!"
});
preloader.classList.add('hide-preloader');
       }
//geocoding api = finding address on a map

function codeAddress() {
	var address = document.querySelector('.address').value;
	//console.log(address);
	geocoder.geocode( {'address' : address}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			locations[1] = {lat: results[0].geometry.location.lat(), lng:results[0].geometry.location.lng()};

			map.setCenter(results[0].geometry.location);
			if(marker) {
				marker.setMap(null);

				marker = new google.maps.Marker ({
					map: map,
					position: results[0].geometry.location
				});
			}

			calcRoute(results[0].geometry.location);

		} else {
			console.log("geocoder was not successful");
		}

	});
}


function calcRoute(codedLoc) {
	var request = {
		origin: locations[0],
		destination: locations[1],
		travelMode: 'DRIVING'
	};

	directionsService.route(request, function(response, status){
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
		}
	})
}


	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initMap, handleError);
	} else {
		//give some kind of error message to user
		console.log("your browser does not support geolocation");
	}

	function handleError(e) {
		console.log(e);
	}

	geocodeButton.addEventListener("click", codeAddress, false);


})();
