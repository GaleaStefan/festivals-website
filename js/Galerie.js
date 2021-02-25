/*
1 0 15
0 15 14
15 14 13
14 13 12
...
2 1 0
1 0 15
*/

//Vector cu toate pozele
var galleryPhotos = [
	"sw.jpg",
	"sw1.jpg",
	"sw2.jpg",
	"ec1.jpg",
	"ec2.jpg",
	"ec3.jpg",
	"ec4.jpg",
	"nvrs1.jpg",
	"nvrs2.jpg",
	"nvrs3.jpg",
	"nvrs4.jpg",
	"rocks1.jpg",
	"rocks2.jpg",
	"rocks3.jpg",
	"rocks4.jpg",
	"unt1.jpg",
	"unt2.jpg",
	"unt3.jpg",
	"unt4.jpg",
];

// Vector cu titlurile fiecarei poze
var Titles = [
	"SUN WAVES",
	"SUN WAVES",
	"SUN WAVES",
	"ELECTRIC CASTLE",
	"ELECTRIC CASTLE",
	"ELECTRIC CASTLE",
	"ELECTRIC CASTLE",
	"NEVERSEA",
	"NEVERSEA",
	"NEVERSEA",
	"NEVERSEA",
	"ROCKSTADT",
	"ROCKSTADT",
	"ROCKSTADT",
	"ROCKSTADT",
	"UNTOLD",
	"UNTOLD",
	"UNTOLD",
	"UNTOLD"
];

//Index-ul vectorului cu pozele
var index = 0;

//Initializeaza poza si contorul
function onWebStart() {
	//Initializeaza imaginile afisate
	document.getElementById("Principal_Img").src = "fisiere/" + galleryPhotos[index];
	document.getElementById("Prev_Img").src = "fisiere/" + galleryPhotos[index + 1];
	document.getElementById("Next_Img").src = "fisiere/" + galleryPhotos[galleryPhotos.length - 1];
	
	//Initializeaza contorul ( sa afiseze 1/[nr_imagini] )
	document.getElementById("Counter").innerHTML =  "1 / " + galleryPhotos.length;
	
	//Initializeaza titlul pozei principale
	document.getElementById("Title").innerHTML = Titles[index];
}

//Functia schimba pozele la apasarea segetiilor
function changePhoto(i)
{
	//Modifica index-ul pozei
	index = index + i;
	
	//Cele 3 poze: Anterioara, Actuala, Urmatoare
	var Prev = document.getElementById("Prev").style;
	var Principal = document.getElementById("Principal").style;
	var Next = document.getElementById("Next").style;
	
	//Duratia animatiei de schimbare a pozelor
	var AnimDuration = "0.5s";
	
	//Modifica proprietatea "transition" astfel incat fiecare schimbare de aspect a pozelor sa dureze AnimDuration secunde
	Prev.transition = "all " + AnimDuration;
	Principal.transition = "all " + AnimDuration;
	Next.transition = "all " + AnimDuration;
	
	//Daca a fost apasata segeata din dreapta
	if(i == 1)
	{
		// Daca poza afisata e ultima din galerie, schimba index-ul pozei cu cel al primei poze
		if(index > galleryPhotos.length - 1) index = 0;
		
		/*
			Animatie:
				Imaginea anterioara -> Imaginea principala
				Imaginea principala -> Imaginea urmatoare 
				Imaginea urmatoare -> Imaginea anterioara( + se schimba poza ca atunci cand apasa iar pe segeata sa arate poza urmatoare)
		*/
		
		//Schimba imaginea urmatoare(
		if(index + 1 == galleryPhotos.length) document.getElementById("Next_Img").src = "fisiere/" + galleryPhotos[0];
		else document.getElementById("Next_Img").src = "fisiere/" + galleryPhotos[index + 1];
		
		//Muta imaginea urmatoare in locul celei anterioare
		Next.left = "12%";
		Next.top = "27.5%";
		Next.width = "20%";
		Next.height = "60%";
		Next.opacity = "0.6";

		//Schimba id-ul imaginii
		document.getElementById("Next").id = "aux"
		document.getElementById("Next_Img").id = "aux_i";
		
		//Muta imaginea principala in locul celei urmatoare
		Principal.left = "68%";
		Principal.top = "27.5%";
		Principal.width = "20%";
		Principal.height = "60%";
		Principal.opacity = "0.6";
		
		
		document.getElementById("Principal").id = "Next"
		document.getElementById("Principal_Img").id = "Next_Img";
		
		//Muta imaginea anterioara in locul celei principale
		Prev.left = "35%";
		Prev.top = "16%";
		Prev.width = "30%";
		Prev.height = "80%";
		Prev.opacity = "1";
		
		document.getElementById("Prev").id = "Principal"
		document.getElementById("Prev_Img").id = "Principal_Img";
		
		document.getElementById("aux").id = "Prev"
		document.getElementById("aux_i").id = "Prev_Img";
	}
	else
	{
		//Functioneaza pe acelasi principiu ca mai sus, doar ca se muta in sens invers
		if(index < 0) index = galleryPhotos.length - 1;
		
		if(index - 1 == -1) document.getElementById("Prev_Img").src = "fisiere/" + galleryPhotos[galleryPhotos.length - 1];
		else document.getElementById("Prev_Img").src = "fisiere/" + galleryPhotos[index - 1];
		
		Prev.left = "68%";
		Prev.top = "27.5%";
		Prev.width = "20%";
		Prev.height = "60%";
		Prev.opacity = "0.6";
		
		document.getElementById("Prev").id = "aux"
		document.getElementById("Prev_Img").id = "aux_i";
		
		Principal.left = "12%";
		Principal.top = "27.5%";
		Principal.width = "20%";
		Principal.height = "60%";
		Principal.opacity = "0.6";
		
		document.getElementById("Principal").id = "Prev"
		document.getElementById("Principal_Img").id = "Prev_Img";
		
		Next.left = "35%";
		Next.top = "16%";
		Next.width = "30%";
		Next.height = "80%";
		Next.opacity = "1";
		
		document.getElementById("Next").id = "Principal"
		document.getElementById("Next_Img").id = "Principal_Img";
				
		document.getElementById("aux").id = "Next"
		document.getElementById("aux_i").id = "Next_Img";
	}
	
	//Schimba contorul si titlul
	document.getElementById("Counter").innerHTML = (index + 1) + "/" + galleryPhotos.length;
	document.getElementById("Title").innerHTML = Titles[index];
}