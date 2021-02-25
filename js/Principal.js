/*
	## Descrierea generala a algoritmului ##
	
	Pentru fiecare buton din meniu se adauga evenimente care au rolul sa apeleze functii cand utilizatorul 
	apasa/paraseste/atinge unul dintre butoane 
		- ex: "mouseover" va apela functia onMouseHover atunci cand utilizatorul pune cursorul pe buton(da nu il apasa)
	
	Se foloseste o variabila activePage care retine ID-ul(ala setat in Principal.html cu id="") butonului activ.
	Cand utilizatorul atinge/paraseste un buton din meniu cu cursorul, butonului i se va schimba culoarea fundalului etc..
	prin intermediul functiei changeButtonStyle( acest lucru se intampla doar daca butonul atins/parasit e diferit de 
	cel activ )
	
	La apasarea unui buton din meniu, acesta va deveni activ si va afisa pagina corespunzatoare lui prin functia changePage
*/

//Variabila retine care pagina e afisata pe ecran ( pentru a preveni reincarcarea paginii la apasarea aceluiasi buton din meniu )
var activePage = "";

/* Functia schimba stilul( culoare fundal, culoare text etc.. ) unui buton dat
	#id = id-ul butonului
	#bgColor = culoarea fundalului 
	#tColor = culoarea textului 
	#bRadius = colturile butonului(asta le face rotunjite)
	#alpha = opacitate
*/
function changeButtonStyle(id, bgColor, tColor, bRadius, alpha)
{
	var btn = document.getElementById(id).style;
	
	btn.backgroundColor = bgColor;
	btn.color = tColor;
	btn.borderRadius = bRadius;
	btn.opacity = alpha;
}

/*Functia schimba pagina care este afisata in <iframe>
	#btn = id-ul butonului apasat 
	#newPage = fisierul .html care va fi afisart 
	#newTitle = noul titlu afisat sus in colt
	#animate = (true/false) daca cand se apasa un buton din meniu, schimbarea paginii se va face cu animatie
*/
function changePage(btn, newPage, newTitle, animate)
{
	//Schimba titlul paginii
	document.getElementById("Page_Title").innerHTML = newTitle;
	
	//Retine noua pagina activa
	activePage = btn;
	
	var iframe = document.getElementById("Page_Display");
	
	if(animate) 
	{
		//daca animate == true, schimba pagina cu efect(dispare prin stanga, apare pagina noua din stanga)
		iframe.style.transition = "all 0.7s";
		iframe.style.left = "-100%";
		setTimeout(function() { iframe.src = newPage; iframe.style.left = "0"; }, 700);
	}
	else iframe.src = newPage;
}

/* Adauga evenimentele pentru butoane. In functie de eveniment, se va executa o functie anume(ex: cand apesi pe buton, se va apela functia onButtonClick)
	#id = id-ul butonului 
	#page = pagina corespunzatoare butonului 
	#title = tiltul coresp. butonului (ala de se afiseaza sus)
*/
function addEventsToButton(id, page, title)
{
	var btn = document.getElementById(id);
	
	// Cand utilizatorul pune mouse-ul pe buton, apeleaza onMouseHover
	btn.addEventListener("mouseover", function() {
										onMouseHover(id);
									} );
	
	// Cand utilizatorul paraseste butonul cu mouse-ul, apeleaza onMouseLeave
	btn.addEventListener("mouseleave", function() {
										onMouseLeave(id);
									} );
			
	// Cand utilizatorul apasa butonul, apeleaza onButtonClick
	btn.addEventListener("click", function() {
										onButtonClick(id, page, title);
									} );
}

//Functia initializeaza elementele paginii principare la pornirea acestuia
function onWebStart()
{
	// Seteaza pagina activa Acasa
	changePage("Home_Btn", "Acasa.html", "Acasă", false);
	changeButtonStyle("Home_Btn", "#292929", "white", "8px", "0.8");
	
	// Adauga evenimentele butoanelor
	addEventsToButton("Home_Btn", "Acasa.html", "Acasă");
	addEventsToButton("Gallery_Btn", "Galerie.html", "Galerie");
	addEventsToButton("About_Btn", "Despre.html", "Despre");
	addEventsToButton("Contact_Btn", "Contact.html", "Contact");
	addEventsToButton("Shop_Btn", "Magazin.html", "Magazin");
}

function onMouseHover(btn)
{
	//Schimba culoarea butonului doar daca acesta nu e cel activ(cel al carei pagini este afisata acum pe ecran)
	if(btn !== activePage)
	{
		changeButtonStyle(btn, "white", "black", "8px", "1");
	}
}

function onMouseLeave(btn)
{
	if(btn !== activePage)
	{
		changeButtonStyle(btn, "Transparent", "white", "0px", "1");
	}
}

function onButtonClick(btn, page, title)
{
	// Previne afisarea unei pagini care este deja afisata pe ecran
	if(btn !== activePage)
	{
		// Daca era o pagina activa inainte, schimba culoarea butonului respectiv inapoi la normal
		// ex: daca apesi de pe Acasa pe Galerie, schimba culoarea butonului Acasa la cea normala
		if(activePage !== "")
		{
			
			changeButtonStyle(activePage, "transparent", "white", "0px", "1");
		}
		
		// Schimba pagina si culoarea butonului apasat
		changeButtonStyle(btn, "#292929", "white", "8px", "0.8");
		changePage(btn, page, title, true);
	}
}