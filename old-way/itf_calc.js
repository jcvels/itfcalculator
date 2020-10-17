function calcular_itf14()
{
	var factor = 3;
    var sum = 0;
	var verif = "ERROR";
	var ver = document.getElementById("ver");
	var ean = document.getElementById("ean");
	var res = document.getElementById("res");
    	
	var base = ver.value.toString() + ean.value.toString(); 
	res.innerText = "";
	
	if (base.length != 14)
	{
		res.innerText = res.innerText + "ERROR:\nEl EAN debe contener 13 digitos. Especifique una versión de embalaje.";
    }
    else
	{
		sum = sum + ver.value * factor;
		factor = 4 - factor;
		
		for (index = 0; index < 12; index++)
		{
			sum = sum + ean.value.substring(index, index + 1) * factor;
            factor = 4 - factor;
        }
		
		verif = ((1000 - sum) % 10);
		res.innerText = "IFT14:\n" + ver.value.toString() + ean.value.substring(0, 12) + verif.toString();
    }
}