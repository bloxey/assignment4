function Int (n) 
{ 
  return ! isNaN (n-0);
}
// funkcija pārbauda vai ievadītie dati ir skaitļi

function Parbaude() 
{  
    var reitings = document.forms["PirmaisJaut"]["Rating"].value;
    if (!Int(reitings)) //izsauc pārbaudes funkciju
	{          
        alert("Ooops, looks like You tried to enter something else, please enter a number!");
        return false;
    }
    if (reitings == null || reitings == "") 
	{ 
        alert("Please enter a number");
        return false;
    }
    if (reitings > 10 || reitings < 1)
	{      
        alert("Please use numbers from range 1-10");
        return false;
    }
}
// funkcija pārbauda vai dati nav tukši
// vai ir ievadīts reitings skalā no 1 līdz 10
// kā arī pārbauda vai nav ievadīti burti un zīmes

function videogameschange()
{ 
    if (document.getElementById("videogames").value == "yes")
	{
        document.getElementById("jautajums2").style.display = 'block';
        document.getElementById("message").style.display = 'none';     
    } 
	else 
        if (document.getElementById("videogames").value == "no")
		{
        document.getElementById("message").innerHTML = "Sad, you should totally try it";    
        document.getElementById("message").style.display = 'block';
        document.getElementById("jautajums2").style.display = 'none';   
        document.getElementById("message2").style.display = 'none';     
		} 
		else 
			if (document.getElementById("videogames").value == "none")
			{     
				document.getElementById("message").style.display = 'none';     
				document.getElementById("jautajums2").style.display = 'none';   
				document.getElementById("message2").style.display = 'none';  
			}
    
}
  
            
function yesornochange()
{
    if (document.getElementById("yesorno").value == "yes")
	{
        document.getElementById("message2").style.display = 'block';      
        document.getElementById("message2").innerHTML = "Nice, hope that you ain't the salty player";    
    }
	else 
        if (document.getElementById("yesorno").value == "no")
		{
            document.getElementById("message2").style.display = 'block';   
            document.getElementById("message2").innerHTML = "Well, maybe MOBA games ain't for you.";   
        }
		else 
            if (document.getElementById("yesorno").value == "none")
			{
            document.getElementById("message2").style.display = 'block';    
            document.getElementById("message2").innerHTML = "Insert answer";
			}
}
  