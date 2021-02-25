//Variabila care retine daca formularul e vizibil sau nu
var visible = false;

//Variabile care retin numele festivalului, pretul biletului si cantitatea de bilete
var itemName, itemPrice;
var itemQuantity ;

/* Deschide formularul de achizitionare
	-name: numele festivalului
	-price: pretul 
	
	Functia e apelata cand se apasa 1 din cele 5 butoane de cumparare
*/
function openBuyForm(name, price)
{
	//Deschide numa daca formularul nu e deja vizibil
	if(!visible)
	{
		itemName = name;
		itemPrice = price;
		itemQuantity = 1;
		
		//Id-ul containerului care contine cele 5 tipuri de bilete
		var shopItems = document.getElementById("Container");
		
		//Formularul de achizitie
		var buyFormContainer = document.getElementById("Buy_Container");
		
		//In sectiunea produs a formularului, actualizeaza numele, pretul si cantitatea
		document.getElementById("Festival").innerHTML = name;
		document.getElementById("Price").innerHTML = price;
		document.getElementById("Quantity").innerHTML = 1;
		
		//Ascunde cele 5 festivale la care poti cumpara bilete
		shopItems.style.opacity = "0";
		
		//Afiseaza formularul
		buyFormContainer.style.top = "2%";
		
		visible = true;
	}
}


//Functia care schimba cantitatea de bilete pe care utilizatorul le cumpara
function changeQuantity(i)
{
	itemQuantity = itemQuantity + i;
	
	//Limita care opreste utilizatorul sa seteze sub 1 bilet
	if(itemQuantity < 1)
	{
		itemQuantity = 1;
		return false;
	}
	
	//Limita care opreste utilizatorul sa cumpere mai mult de 4 bilete
	if(itemQuantity > 4)
	{
		itemQuantity = 4;
		return false;
	}
	
	//Actualizeaza cantitatea si pretul
	document.getElementById("Price").innerHTML = itemPrice * itemQuantity;
	document.getElementById("Quantity").innerHTML = itemQuantity;
}

//Ascunde formular
function closeBuyMenu()
{
	//Verificare daca e vizibil
	if(visible)
	{
		var shopItems = document.getElementById("Container");
		var buyFormContainer = document.getElementById("Buy_Container");
		
		//Ascunde formularul
		buyFormContainer.style.top = "-100%";
		
		//Afiseaza cele 5 festivale
		shopItems.style.opacity = "1";
		
		visible = false;
	}
}