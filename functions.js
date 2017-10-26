function condoName() {
	//Greet Visitor
	var visitor = document.getElementById('yourName');
	if (!visitor.value) {
		document.getElementById('greeting').innerHTML = "Hi there! Here's the lowdown on your new life:";
	} else {
		document.getElementById('greeting').innerHTML = "Hi " + visitor.value + ", here's the lowdown on your new life:";
	}
	
	//Pick random address
	var prefixes = [ '@ ', 'D\'', 'i', 'La ', 'Le ', 'De '];
	var descriptors = ['cadence', 'aspen', 'Rich', 'Royale', 'Hermitage', 'Beaverton', 'Nassau', 'Margaux', 'Viz', 'Elegance', 'Light', 'Pearl', 'Sail', 'Chez Bright', 'Butterworth', 'Flame Tree', 'Cube', 'Tresalveo', 'Cradel', 'Affluence', 'Airstream',  'Alpha', 'Avalon', 'Bella', 'Columnade', 'Gramercy', 'Pine', 'Nest', 'Oasia', 'Sunrise', 'Dahlia', 'Dairy Farm', 'Dynasty', 'Eden', 'Fanta', 'Fame', 'Gaia', 'Galaxy', 'Garlick', 'Glamour', 'Wood', 'Hollywood', 'Goodluck', 'Thanksgiving', 'Goodwill', 'Regalia', 'Hawaii', 'Idyllic', 'Infinium', 'Intero', 'Jansen', 'Jewel', 'Jool', 'Juluca', 'Viv', 'Dolce Vita', 'Casa', 'Crystal', 'Fiesta', 'Fleur', 'Quinta', 'Suisse', 'Ventura', 'Quest', 'Legend', 'Marina', 'Montrosa', 'Parc', 'Platina', 'Poet', 'Bleu', 'Sayang', 'Skies', 'Smailing', 'Symphony', 'Aberdeen', 'Amore', 'Arc', 'Beacon', 'Boutiq', 'Estrella', 'Florentine', 'Grandiflora', 'Hillier', 'Inspira', 'Infiniti', 'Inflora', 'Interweave', 'Ladyhill', 'Level', 'Linc', 'Linear', 'Modules', 'Scenic', 'Taipan', 'Trillium', 'Tiara', 'Trumps', 'Robin', 'Tivoli', 'Rainbow', 'Kentish', 'Ultra', 'Unique', 'Wang', 'Zedge', 'Zion', 'Zephyr', 'Zenith'];
	var suffixes = ['z', 'ers', 'x', '\'s', 'ing', 'ion'];
	var buildings = ['Nclave', 'Blvd', 'Rochelle', 'Casa', 'Palms', 'Court', 'Villa',  'Plaza', 'Mansion', 'Terrace', 'Point', 'Regency', 'Towers', 'Condo', 'Gardens', 'Gate', 'Bay', 'Glades', 'Ville', 'Park', 'Residences', 'Apartments', 'Heights', 'View', 'By The Park', 'By The Bay', 'Archipelago', 'Maison', 'Lights', 'Meadows', 'Habitat', 'Boulevard', 'Jade', 'Alcove', 'Abode', 'Lofts', 'Fountains', 'House', 'Studio'];
	var hoods = ['Pasir Ris', 'Commonwealth', 'Braddell', 'Orchard', 'Farrer Park', 'Bedok', 'Tampines', 'Woodlands', 'Yishun', 'Ang Mo Kio', 'Toa Payoh', 'Jurong', 'Punggol', 'River Valley', 'Little India', 'Outram', 'Chinatown', 'Hougang', 'Katong', 'Boon Lay', 'Chinese Gardens', 'Serangoon', 'Choa Chu Kang', 'Bukit Timah', 'Holland Village', 'Tanjong Rhu', 'Tanjong Pagar', 'Bukit Panjang', 'Macpherson', 'Geylang', 'Mountbatten', 'Selegie', 'Bras Basah', 'Shenton Way', 'Clementi', 'Tuas', 'Newton', 'Novena', 'Queenstown'];
	var dwellings = ['a condominium', 'a HDB flat', 'a bungalow', 'a terrace house', 'more specifically, on a bench in its void deck,', 'in an empty lot in its carpark,', 'an office space', 'a heritage shophouse', 'on its running track,'];
	
	var prefix = prefixes[Math.round(Math.random()*(prefixes.length-1))];
	var descriptor = descriptors[Math.round(Math.random()*(descriptors.length-1))];
	var suffix = suffixes[Math.round(Math.random()*(suffixes.length-1))];
	var building = buildings[Math.round(Math.random()*(buildings.length-1))];
	
	var condos = [
		prefix + descriptor, 
		descriptor + suffix, 
		descriptor + " " + building, 
		descriptor + suffix + " " + building,
		prefix + descriptor + suffix,
		prefix + descriptor + suffix + " " + building
	];
	
	var condo = condos[Math.round(Math.random()*(condos.length-1))];
	var hood = hoods[Math.round(Math.random()*(hoods.length-1))];
	var dwelling = dwellings[Math.round(Math.random()*(dwellings.length-1))];
	
	document.getElementById('address').innerHTML = "You'll live in " + "<span class='strong'>" + condo + "</span>, " + dwelling + " in <span class='strong'>" + hood + "</span>.";
	
	//Rent
	var rentPayment = Math.floor(Math.random() * ((8000-450)+1) + 450);
	var housemates = [
		'alone, enjoying the freedom to put your barang anywhere you like', 
		'alone, crying over Downton Abbey and eating ice cream straight from the tub', 
		'with an alsatian named Kopi and a turtle named Sam', 
		'with two friendly guys from Malaysia and America', 
		'with a sweet Australian girl and her darling cat with no eyes', 
		'with your cranky landlord and landlady',
		'with an exchange student who keeps helping himself to your breakfast',
		'with 6 nurses who never sleep',
		'with a lovely young couple and a not so lovely infant',
		'with a Russian model, a Japanese salaryman, and a chef who only eats instant noodles',
		'with your own dear cat, Pomelo, who knows how to turn on the television'
	];
	var housemate = housemates[Math.round(Math.random()*(housemates.length-1))];
	
	document.getElementById('rent').innerHTML = "Your monthly rent will be S$" + rentPayment + ", and you'll live " + housemate + ".";
	
	//Image
	
	//Show button
	document.getElementById('smallButton').classList.remove("display-none");
}



