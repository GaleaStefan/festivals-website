//Functioneaza pe aceeasi idee ca Principal.js, doar ca in loc sa schimbe pagina la apasare, schimba textul cu descrierea

var activeButton;

//Vector care contine descrierea fiecarui buton
var descriptionText = {
	Untold: "&emsp;Untold Festival este cel mai mare festival de muzică din România. Acesta se desfășoară în fiecare an pe Cluj Arena în orașul Cluj Napoca. Prima ediție a festivalului a avut loc între 30 iulie și 2 august 2015, an în care Cluj-Napoca a fost desemnat Capitala Europeană a Tineretului. De-a lungul celor 4 zile de festival, au participat în medie peste 60.000 de oameni pe zi.La prima ediție au participat: Armin van Buuren, Avicii, David Guetta, ATB, Dimitri Vegas & Like Mike, Tom Odell, Fedde le Grand, Duke Dumont ș.a.În urma succesului de care s-a bucurat, festivalul a primit premiul „Best Major Festival” acordat în cadrul galei European Festival Awards 2015, desfășurată în Olanda.În 2015, Untold a atras atenția printr-o campanie de promovare a evenimentului numită \"Pay with Blood\", în care donatorii de sânge primeau bilete gratuite la festival. Astfel, în luna iulie 2015, cei care donau sânge la caravana mobilă din Parcul Herăstrău București sau la Centrul de Transfuzie Sangvină din Cluj-Napoca, primeau pe loc bilete la festival. Inițiativa de a asocia Transilvania, Vlad Țepeș, vampirii și donarea de sânge a fost remarcată internațional.",
	Rock: "&emsp;Rockstadt Extreme Fest este un festival de muzică heavy metal care are loc anual pe terenul de biatlon de la baza cetății orașului Râșnov din România. Subintitulat „On the grounds of Transylvania”, festivalul se desfășoară în luna august, pe durata mai multor zile. Festivalul este dedicat în special metalului extrem, dar este deschis și altor genuri muzicale precum heavy metal, power metal, crossover thrash sau metalcore Prima ediție a festivalului a avut loc în anul 2013, a durat 3 zile, iar printre trupele cap de afiș s-au numărat Gojira, Napalm Death, Primordial și Septicflesh.Ediția din 2019, care a avut loc între 1 și 4 august, a fost prima care a beneficiat de două scene mari",
	Sun: "&emsp;Situat în orașul Mamaia Nord de pe coasta Mării Negre, Festivalul Sunwaves din România este unul dintre cele mai vechi și mai respectate evenimente de dans electronic din țară. Cea de-a 19-a ediție, din 28 aprilie până pe 2 mai, a oferit mai multe locuri cu o listă diversă, care a acoperit aproape orice, de la talente din scena minimă din ce în ce mai accentuată a României până la principalii titulari precum Ricardo Villalobos și Marco Carola. Sonic și atmosferic vorbind, a fost un succes.",
	Nvrs: "&emsp;Neversea Festival este cel mai mare festival de muzică care are loc pe o plajă din România. Acesta se desfășoară în fiecare an pe Neversea Beach din Constanța, în apropierea plajei Modern. Prima ediție a avut loc in anul 2017, iar festivalul atinge noi recorduri in fiecare an.<br><br>Prima ediție a festivalului a avut loc între 7-9 iulie 2017. De-a lungul celor 3 zile de festival, au participat in medie peste 40.000 de oameni pe zi.<br><br>La prima ediție au participat: Dua Lipa, Tiësto, Afrojack, Fatboy Slim,Rita Ora, Jason Derulo, Ella Eyre și Years & Years  ș.a.",
	Elect: "&emsp;Electric Castle este un festival de muzică din România, care se desfășoară în fiecare an la Castelul Bánffy din comuna Bonțida, județul Cluj.Festivalul îmbină în lineup zone muzicale variate cum ar fi rock, reggae, hip hop, trap, muzică electronică sau indie cu tehnologia, cu arta alternativă, arta stradală și cultura. <br><br>Ediția cu numărul șapte, a adus festivalului premiul de Best Medium Sized Festival la European Festival Awards, categorie la care Electric Castle a fost nominalizat în fiecare an. În edițiile anterioare festivalul a avut pe scenă nume precum Florence + the Machine, Thirty Seconds to Mars, The Prodigy, Skrillex, Deadmau5, alt-J, Franz Ferdinand, Bring Me the Horizon, Fatboy Slim, Sigur Ros, Bastille, Rudimental, Thievery Corporation, Die Antwoord, Jessie J, Limp Bizkit ș.a."
	
};

//Schimba stilul unui buton
function changeButtonStyle(id, bgColor, tColor, btnBorder, alpha)
{
	var btn = document.getElementById(id).style;
	
	btn.backgroundColor = bgColor;
	btn.color = tColor;
	btn.border = btnBorder;
	btn.opacity = alpha;
}

function addEventsToButton(id)
{
	var btn = document.getElementById(id);
	
	btn.addEventListener("mouseover", function() {
										onMouseHover(id);
									} );
									
	btn.addEventListener("mouseleave", function() {
										onMouseLeave(id);
									} );
									
	btn.addEventListener("click", function() {
										onButtonClick(id);
									} );
}

function onWebLoad()
{
	activeButton = "Untold";
	changeButtonStyle("Untold", "Transparent", "white", "2px solid white", "1");
	document.getElementById("Description").innerHTML = descriptionText[activeButton];
	
	addEventsToButton("Untold");
	addEventsToButton("Rock");
	addEventsToButton("Sun");
	addEventsToButton("Elect");
	addEventsToButton("Nvrs");
}

function onMouseHover(btn)
{
	
	if(btn !== activeButton)
	{
		changeButtonStyle(btn, "white", "black", "0px", "1");
	}
}

function onMouseLeave(btn)
{
	if(btn !== activeButton)
	{
		//alert(activePage + " " + btn);
		changeButtonStyle(btn, "Transparent", "white", "0px", "1");
	}
}

//Schimba descrierea sa corespunda butonului apasat
function onButtonClick(btn)
{
	
	if(btn !== activeButton)
	{
		if(activeButton !== "")
		{
			
			changeButtonStyle(activeButton, "transparent", "white", "0px", "1");
		}
		
		changeButtonStyle(btn, "transparent", "white", "2px solid white", "1");
		
		activeButton = btn;
		document.getElementById("Description").innerHTML = descriptionText[btn];
	}
}