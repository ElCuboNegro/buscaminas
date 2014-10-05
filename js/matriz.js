// se definen las variables del juego
var puntosParaGanar = 3;
var puntosJugador = 0;
var posicion = 0;
var contadorCasillas = 0;
var campo = 		[	[ 1 , 0 , 0 ]	,
						[ 0 , 1 , 1 ] 	,
						[ 1 , 0 , 1 ] 	];

var campoOculto = 	[	[ "?" , "?" , "?" ]	,
						[ "?" , "?" , "?" ] 	,
						[ "?" , "?" , "?" ] 	];

var campoVald= 		[	[ 0 , 0 , 0 ]	,
						[ 0 , 0 , 0 ] 	,
						[ 0 , 0 , 0 ] 	];

//se definen los textos para cada caso 

var textos = ["cesped", "bomba"];

// se definen las variables x y Y

var x, y;


// se definen las funciones de gana y pierde

function explota()
	{
		alert("boom!");
		document.write("<h1>AREA MINADA!</h1><br> has muerto miserablemente :( <br />");
		puntosJugador = 0;
	}
function ganaste()
	{
		alert("ganaste el puta juego, joder!");
	}

// convoca a las funciones gana o pierde a partir de la matriz campo

function escoge ()
	{
		if (posicion == 1)
		{
			explota();
			campoOculto[x][y] = textos[campo [x][y]]
		}
		else 
		{
			puntosJugador = puntosJugador ++;
			campoOculto[x][y] = textos[campo [x][y]]
		}
	}

// imprime una matriz que muestra los campos ocultos y los que ya han sido descubiertos

function mostrarcampo() 
	{
		document.write(		"Hola! este es el estado del terreno en este momento <br />" + 
							campoOculto[0][0] + "       " + campoOculto [0][1] + "       " + campoOculto [0][2] + "<br>" +
							campoOculto[1][0] + "       " + campoOculto [1][1] + "       " + campoOculto [1][2] + "<br>" +
							campoOculto[2][0] + "       " + campoOculto [2][1] + "       " + campoOculto [2][2]);
	}

// se pregunta al usuario

function pedirCoordenada ()
	{
		x = prompt("posicion en x? (entre 0 y 2)", 0);
		x = parseInt(x)
		y = prompt("posicion en y? (entre 0 y 2)", 0);
		y = parseInt(y)
		
		if ((x <= 2 && x >= 0) && (y <= 2 && y >= 0))
			{

				if( campoVald[x][y] == 0)
					{
						posicion = campo[x][y];
						alert("Elegiste " + textos [posicion]);
						escoge();
						contadorCasillas = contadorCasillas ++;
						campoVald[x][y] = 1;
						mostrarcampo();
					}
				else
					{
						alert("volviste a usar la misma casilla!")
					}
			}
			else
			{
				alert ("te saliste del campo")
				explota()
			}
	}


// se ejecuta
mostrarcampo()

while (contadorCasillas <= 4) 
	{
		pedirCoordenada()
	}
if (puntosJugador  >= puntosParaGanar)
	{ 
		ganaste() 
	}
else
	{
	boom()
	};
