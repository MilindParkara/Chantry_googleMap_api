(function(){
	var pokeImages = document.querySelectorAll("nav li"),
	critterHeader = document.querySelector(".click-header"),
	criterImage3 = document.querySelector(".single_portfolio"),
	criterImage = document.querySelector(".pokemon-large"),
	critterDesc =document.querySelector(".content-section p"),
	habHeader = document.querySelector(".habitat-header"),
	critterHab =document.querySelector(".habitat"),
	httpRequest;

	function makeRequest(){
		httpRequest = new XMLHttpRequest();

		if(!httpRequest){
			console.log('please update browser');
			return false;
		}
		httpRequest.onreadystatechange = showPokemonInfo;
		httpRequest.open('GET', 'include/getPokemon.php' + '?critter=' + this.id);
	
		httpRequest.send();
	}

	function showPokemonInfo(){
		if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
			var pokeData = JSON.parse(httpRequest.responseText);

			critterHeader.firstChild.nodeValue = pokeData.pokeName;

			[].forEach.call(document.querySelectorAll('.hidden'), function(item){
				item.classList.remove('hidden');
			});
			
			criterImage3.src = 'images/gallery/' + pokeData.image_id+ '.jpg';

			criterImage.src = 'images/gallery/' + pokeData.image_id+ '.jpg';
			critterDesc.firstChild.nodeValue = pokeData.image_desc;
			habHeader.firstChild.nodeValue = pokeData.image_title + " lives here!";
			critterHab.src = "images/gallery" + pokeData.image_id + ".jpg";
		}
	}
			
	[].forEach.call(pokeImages, function(img) {
		img.addEventListener("click", makeRequest, false);
	});

})();