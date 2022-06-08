# Eloquent JavaScript
## Introducción

La programación ese el acto de construir un programa - un conjunto de instrucciones precisas que le dicen a una computadora qué hacer.

La programación puede ser muy gratificante, te permite hacer en segundos cosas que tardarían para siempre a mano

Al igual que los lenguajes humanos, los lenguajes de computación permiten que las palabras y frases sean combinadas de nuevas maneras, lo que nos permite expresar siempre nuevos conceptos.

JavaScript, está integrado en cada navegador web moderno y, por lo tanto, está disponible en casi todos los dispositivos.

### Acerca de la programación
La prgramación es difícil. Las reglas fundamentales son simples y claras, pero los programas construidos en base a estas reglas tienden a ser lo suficientemente complejas como para introducir sus propias reglas y complejidad.

Un programa es un edificio de pensamiento. No cuesta nada construirlo, no pesa nada, y crece fácilmente bajo nuestras manos que teclean.

El arte de la programación es la habilidad de controlar la complejidad. Un gran programa es moderado, hecho simple en su complejidad.

### Por qué el lenguaje importa
Programa que suma los números del 1 al 10 entre ellos e imprime el resultado `1 + 2 + ... + 10 = 55`.

```
00110001 00000000 00000000
00110001 00000001 00000001
00110011 00000001 00000010
01010001 00001011 00000010
00100010 00000010 00001000
01000011 00000001 00000000
01000001 00000001 00000001
00010000 00000010 00000000
01100010 00000000 00000000
```

{{index memoria, instrucción}}

Cada línea del programa anterior contiene una sola instruccción, podría ser escrito en español así:

1.  Almacenar el número 0 en la ubicación de memoria 0.
2.  Almacenar el número 1 en la ubicación de memoria 1.
3.  Almacenar el valor de la ubicación de memoria 1 en la ubicación de memoria 2.
4.  Restar el número 11 del valor en la ubicación de memoria 2.
5.  Si el valor en la ubicación de memoria 2 es el número 0, continuar con la instrucción 9.
6.  Sumar el valor de la ubicación de memoria 1 a la ubicación de memoria 0.
7.  Sumar el número 1 al valor de la ubicación de memoria 1.
8.  Continuar con la instrucción 3.
9.  Imprimir el valor de la ubicación de memoria 0.

Aunque eso ya es más legible que la sopa de bits, es aún difícil de entender. Usar nombres en lugar de números para las instrucciones y ubicaciones de memoria ayuda:

```
Establecer "total" como 0.
Establecer "cuenta" como 1.
[loop]
   Establecer "comparar" como "cuenta".
   Restar 11 de "comparar".
   Si "comparar" es cero, continuar en [fin].
   Agregar "cuenta" a "total".
   Agregar 1 a "cuenta".
   Continuar en [loop].
[fin]
 Imprimir "total".
```

Aquí está el mismo programa en JavaScript:

```
let total = 0, cuenta = 1
while (cuenta <= 10) {
	total += cuenta
	cuenta += 1
}

console.log(total)

// -> 55
```

Esta versión nos da algunas mejoras más. La más importante, ya no hay necesidad de especificar la forma en que queremos que el programa salte hacia adelante y hacia atrás. El constructo del lenguaje `while` se ocupa de eso.

Finalmente, aquí está cómo se vería el programa si tuviéramos acceso a las las convenientes operaciones `rango` y `suma` disponibles, que respectivamente crean una colección de números dentro de un rango y calculan la suma de una colección de números:

```
console.log(suma(rango(1, 10)))
// -> 55
```

En capítulos posteriores se verá como definir operaciones como suma y rango.

## ¿Qué es JavaScript?
JavaScript se introdujo en 1995 como una forma de agregar programas a páginas web en el navegador Netscape Navigator. El lenguaje ha sido desde entonces adoptado por todos los otros navegadores web principales. Ha hecho que las aplicaciones web modernas sean posibles: aplicaciones con las que puedes interactuar directamente, sin hacer una recarga de página para cada acción. JavaScript también es utilizado en sitios web más tradicionales para proporcionar diversas formas de interactividad e ingenio.

**JavaScript !== Java**

Después de su adopción fuera de Netscape, se escribió un documento estándar para describir la forma en que debería funcionar JavaScript, con objetivos de compatibilidad. A este estándar se le llamó ECMAScript, por Ecma International que hizo la estandarización

**ECMAScript === JavaScript**

JavaScript es ridículamente liberal en lo que permite. La idea detrás de este diseño, era hacer la vida más fácil para los programadores principiantes, pero realizó un efecto inverso, porque hace más difícil entcontrar problemas en tus programas.

Sin embargo, esta flexibilidad también tiene sus ventajas. Deja espacio para muchas técnicas que son imposibles en idiomas más rígidos, y como verás, se pueden usar para superar algunas de las deficiencias de JavaScript. Después de aprender el idioma correctamente y luego de trabajar con él por un tiempo, he aprendido a _querer_ a JavaScript.

Han existido varias versiones de JavaScript. ECMAScript version 3 fue la más ampliamente compatible en el momento de ascenso de JavaScript a su dominio. De ahí se saltó directamente a la versión 5 que era mucho menos ambiciosa que la 4, en el 2009. Luego en 2015 se hizo una actualización importante incluyendo algunas ideas planificadas para la versión 4. Desde entonces se han tenido actualizaciones nuevas y pequeñas cada año.

Los navegadores web no son las únicas plataformas en las que se usa JavaScript.

**Bases de datos**
- MongoDB
- CouchDB

**Programación fuera del navegador**
- Node.js

### Código, y qué hacer con él

Es el texto que compone los programas. Leer código y escribir código son partes ***indispensables*** del aprendizaje para programar. No supongas que entiendes los ejercicios hasta que hayas escrito una solución funcional para resolverlos.

La [caja de arena](https://eloquentjavascript.net/code) en el sitio web proporciona enlaces a archivos Zip que contienen todos los scripts y archivos de datos necesarios para ejecutar el código de un capítulo determinado.

## Valores, Tipos, y Operadores
Dentro del mundo de los computadores, todo es data, puedes leer data, modificar data, crear nueva data, pero lo que no son datos no se puede mencionar.

Los bits son un tipo de cosas de dos valores, usualmente descritos como ceros y unos. Dentro de la computadora, ellos toman formas de cargas eléctricas altas y bajas, una señal fuerte o débil o una superficie brillante u opaca en un CD. Cualquier parte de información discreta puede ser reducita en secuencias de ceros y unos y por lo tanto representada en bits.

Número 13 en bits

```
   0   0   0   0   1   1   0   1
 128  64  32  16   8   4   2   1
```

### Valores
Una computadora típica moderna tiene más de 30 billones de bits en su almacenamiento de data volátil (memoria que está trabajando).  La memora no volátil (el disco duro) tiende a tener algunos órdenes de magnitud más.

Para ser capaz ede trabajar con cantidades de bits sin perderte, deberemos separarlos en trozos que representan fragmentos de información, estos pedazos en JavaScript son llamados ***valores***.

Para crear un valor, deberás invocar su nombre, si lo llamas, lo tienes. No es realmente creado del aire por supuesto. Cada valor está alojado en algún lugar.

### Números
Valores de tipo número son valores numéricos. En un programa JavaScript, serán escritos de la siguiente forma:

```
13
```

Usa esto en un programa, y esto causará que el patrón de bits del número 13 venga dentro de la existencia de la memoria de la computadora.

JavaScript usa un número fijo de bits, 64 de ellos exactamente, para guardar un valor numérico simple. Para una representación limitada de diferentes tipos de números, exactamente se puede representar 2^64 números diferentes, que es un aproximado de 18 quintillones (un 18 con 18 ceros después de él).

Las computadoras actuales pueden soportar pedazos de 64-bit sin preocuparse sobre el ovverflow solo cuando tratamos con verdaderos números astronómicos.

Para números verdaderamente grandes o verdaderamente pequeños, podrías usar notiación científica añadiendo una e (para el exponente), seguida por el exponente del número

```
2.998e8
2.998 * 10^8 = 299,800,000
```


### Aritmética
La razón principal de hacer algo con números es la aritmética. Las operaciones aritméticas como la mutiplicación o la adición, toma dos números y produce un nuevo número de ellos

```
100 + 4 * 11 
```

Los símbolos `+` y `*` son llamados operadores

```
100 + 4 * 11 = 144
(100 + 4) * 11 = 1144
```

El símbolo `%` representa el módulo o resto

### Números especiales
Hay tres valores especiales en JavaScript que son considerados números, pero no se comportan como números normales.

- Infinity: Infinito positivo
- - Infinity: Infinito negativo
- NaN: NO es un número

El valor de NaN es de tipo número, podrías obtener este resultado cuando tú por ejemplo, intentas calcular `0/0`  `Infinity - Infinity`, o cualquier operación numérica que no entregue un resultado con significado

### Strings
El siguiente tipo de data básico es el *string*. Son usados para representar texto y son escritos dentro de comillas.

```
`Down ond the sea`
'Lie on the ocean'
"Float on the ocean"
```

Si se desea trabajar con diferentes líneas se pueden usar backtticks

```
`This is the first line
 And this is the second`
```

También es posible usar un backslash en un string para generar que el caracter tiene un significado especial como \n

```
"This is the first line\nAnd this is the second"

-> This is the first line
   And this is the second
```

Si deseamos usar un backslash o una comilla como un caracter normal deberemos anteponer un backslash delante del otro \\

```
"A newline character is written like \"\\n\"."
```

Los strings también son series de bits modelados que pueden existir dentro de una computadora. El modo en que JavaScritp lo hace está basado en el estándar Unicode

Los strings no pueden ser divididos, multiplicados o restados, pero el operador `+` permite ser utilizado en ellos. No añadirá, pero si **concatenará**, o sea pegará dos strings juntas. 

En la siguiente línea de código produciremos el string "concatenate":

```
"con" + "cat" + "e" + "nate"
```

Los strings envueltos con backtick se le llaman ***Template Literals***, y pueden hacer algunos trucos, aparte de dar saltos de líneas, también pueden embeder otros valores

```
`la mitad de 100 es ${100 / 2}`

-> La mitad de 100 es 50
```

### Operadores unarios
No todos los operadores son símbolos. Algunos son escritos como palabras. Un ejemplo es el operador `typeof` que produce un valor de string nombrando el tipo del valor que tu diste

```
console.log(typeof 4.5)
// -> number

console.log(typeof "x")
// -> string
```

Los otros operadores muestran todas las operaciones con dos valores, pero `typeof` solo toma uno. Los operadores que usan dos valores, se llaman operadores *binarios*, mientras que los que llaman a un solo operador se llaman operadores *unarios*.

### Valores Booleanos
Es frecuente usar un  valor que distingue entre solo dos posibilidades, como "si" o "no" o "encendido" o "apagado". Para este propósito, JavaScript tiene el tipo *boolean*, que tiene sólamente dos valores `true` y `false`

```
console.log(3 > 2)
// -> true
console.log(2 > 3)
// -> false
```

Los strings pueden ser comparados de la misma forma.

```
console.log("Aardvark" < "Zoroaster")
// -> true
```

La forma en que los string son ordenados es apenas alfabética, pero no realmente como tú esperas verlo en un diccionario: Las mayúsculas son siempre "menores" que las minúsculas, entonces "Z" < "a", y los caracteres no alfabéticos (!, -, y demás) son incluidos en el orden. Cuando se comparan strings, JavaScript va sobre los caracteres de izquierda a derecha, comparando los códigos Unicode uno por uno.

Otros operadores similares son >= (Mayor o igual qué), <= (Menor o igual que), == (Igual a) y != (no igual a)

```
console.log("Itchy" != "Scratchy")
// -> true
console.log("Apple" == "Orange")
// -> false
console.log(NaN == NaN)
// -> false
```

NaN es supuestamente para denotar el resultado de un cálculo sin sentido y como tal, no es igual al resultado de otro cálculo sin sentido.

### Operadores Lógicos
También hay operadores que pueden ser aplicados a los valores booleanos en si mismos. JavaScript soporta tres operadores lógicos, *and*, *or* y *not*. Estos pueden ser usados para "razonar" sobre Booleanos

`&&` representa `and` 

```
console.log(true && false)
// -> false
console.log(true && true)
// -> true
```

`||` representa `or`

```
console.log(false || true)
// -> true
console.log(false || false)
// -> false
```

`!` representa `not`

```
console.log(!true)
// -> false
console.log(!false)
// -> true
```

Cuando se mezclan estos operadores Boleanos con aritmética y otros operadores, no siempre es obvio que los paréntesis son necesarios.

Orden de precedencia de operadores de mayor a menor

```
()
/
*
+
-
>, <, >=, <=, ==, !=
&&
||
```

En algunos casos los paréntesis pueden ser necesarios

```
1 + 1 == 2 && 10 * 10 > 50
(1 + 1 == 2) && (10 * 10 > 50) 
```

Operador ternario

Es el operador que opera con tres valores, es escrito con un signo de pregunta como primera opción y dos puntos como segunda opción

`pregunta ? verdadero : falso`

```
console.log(true ? 1 : 2);
// -> 1
console.log(false ? 1 : 2);
// -> 2
```

### Valores vacíos
Hay dos valores especiales, escritos como `null` y `undefined`, que son usados para denotar la ausencia de un valor *con significado*, Ellos son valores en si mismos, pero no cargan información.

La diferencia en el significado entre `undefined` y `null` es un accidente en el diseño de JavaScript, y no importa la mayoría del tiempo. En casos que deberías preocuparte por esos valores, Recomendaría tratarlos como intercambiables.

### Conversión automática de tipos
```
console.log(8 * null)
// -> 0

console.log("5" - 1)
// -> 4

console.log("5" + 1)
// -> 51

console.log("five" * 2)
// -> NaN

console.log(false == 0)
// -> true
```

Cuando un operador es aplicado con el tipo de valor "incorrecto", JavaScript silenciosamente intentará convertir el tipo de valor que sea necesario, usando un conjunto de reglas que usalmente no esperaríamos. Esto es llamado `coercion`

### Corto circuito de operadores lógicos
Los operadores lógicos && y || manejan diferentes tipos de valores de una manera peculiar. Ellos convierten el valor del lado izquierdo en un tipo Booleano en orden de decidir qué se hará, pero dependiendo del operador que resulte con esta conversión, el retornará  el valor de la mano izquierda o el valor de la mano derecha.

```
console.log(null || "user")
// -> user

console.log("Agnes" || "user")
// -> Agnes
```


## Estructura del programa
En este capítulo, empezaremos a hacer cosas que actualmente son llamadas *programación*. Expandiremos nuestros comandos en el lenguaje JavaScript más allá de sustantivos y fragmentos de oraciones que hemos visto hasta ahora, hasta el punto que podamos expresar una prosa significativa.

### Expresiones y declaraciones
La creación de valores es la sustancia principal de cualquier programa en JavaScript, Peroesta sustancia debe ser colocada en una estructura más larga para ser usable.

Un fragmento de código que produce un valor es llamado ***Expresión***. Cada valor que es escrito literalmente (como 22 o "psicoanalisis") es una expresión. Una expresión dentro de paréntesis es también una expresión, como lo es un operador binario aplicado a dos espresiones o un operador unario aplicado a una.

Esto muestra parte de la belleza de la interfaz basada en un lenguaje. Las expresiones pueden contener otras expresiones al igual que los lenguajes humanos.

El tipo más simple de estado es una expresión con un punto y coma después de el, esto es un programa

```
1;
!false;
```

### Bindings 
¿Cómo hacemos para que un programa permanezca en un estado interno? ¿Cómo hacemos para que él recuerde cosas?

Para atrapar y guardar valores, JavaScript produce algo llamado un ***binding*** o ***variable*** 

```
let caught = 5 * 5;
```

Este es un tipo de declaración. La palabra reservada `let` indica que esta sentencia va a ser definida como un binding. Es seguida por el nombre del binding, y si queremos podemos darle un valor con un = operador y una expresión.

Para reasignar un valor se deberá poner la palabra reservada para la variable y un signo =

```
let theme = "dark";
console.log(theme);
// -> dark

theme = "light";
console.log(theme);
// -> light
```

Otro ejemplo

```
let christiansDebt = 140;
christiansDebt = christiansDebt - 35;
console.log(christiansDebt);
// -> 105
```

#### var, const y let
Una sola declaración `let` puede definir múltiples bindings. Las definiciones deberán ser separadas por comas.

```
let one = 1, two = 2;
console.log(one + two);
// -> 3
```

Las palabras `var` y `const` pueden ser usadas para crear bindings, de una forma similar a `let`

```
var name = "Christian";
const greeting = "Hello ";
console.log(greeting + name);
// -> Hello Ayda
```

`var`  era la forma en que los binding eran declarados en el JavaScript pre-2015
`const` es la forma de definir un binding constante, que apunta al mismo valor mientras vive.
`let` es la forma en que los binding que sufrirán variaciones deben ser declarados en JavaScript post-2015 

### Nombres de Binding
Pueden ser cualquier palabra. Los dígitos pueden ser parte de los nombres del binding, `catch22` es un nombre válido, pero el nombre no puede empezar con un dígito, el nombre puede incluir `$` y `_` pero ningún otra puntuación o caracteres especiales.

Las keywords de JavaScript no pueden ser usada compo nombres de binding, ya que son "reservadas para uso" en versiones futoras de JavaScript

```
break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import interface in instanceof let
new package private protected public return static super switch this throw true try typeof var void while with yield
```

### El entorno
La colección de bindings y sus valores que existen en un tiempo dado es llamado el *entorno*. 

Cuando el programa inicia, este entorno no está vacío, Siempre contiene bindings que son parte de los estándares del lenguaje, y en la mayoría del tiempo, esto también tiene bindings que provee formas de interactuar con el sistema circundante.

Por ejemplo en un navegador, hay funciones para interactuar con el sitio web cargado actuamente y lee inputs de mouse y teclado.

### Functions
Una *función* es un trozo de programa envuelta en un valor. Por ejemplo, en el entorno de un navegador, el binding `prompt`  es una función que muestra una pequeña caja de diálogo que pregunta por el input de un usuario.

```
prompt("Enter passcode");
```

![](https://eloquentjavascript.net/img/prompt.png)

La ejecución de una función es llamada *invocación, llamado o aplicación (invoking, calling, applying)*. Puedes llamar una función colocando un paréntesis después de la expresión que produce un valor de una función.

### La función console.log
Escribe los argumentos en algún dispositivo de salida. En los navegadores se muestra en la consola de los mismos

Ejemplo: 

```
let x = 30;
console.log("the value of x is", x);
// -> the value of x is 30
```

### Valores de retorno
Mostrar una caja de diálogo o escribir texto en la pantalla es un *efecto secundario*. Varias funciones son útiles por los efectos secundarios que producen. Las funciones también pueden producir valores, en estos casos elas no necesitan tener un efecto secundario para ser útiles. Por ejemplo la función `Math.max` toma unna cantidad de argumentos numéricos y devuelve el más grande

```
console.log(Math.max(2, 4));
// -> 4
```

Cuando la función produce un valor, es dicho que ella *retorna* ese valor, estas funciones pueden ser usadas como expresiones más largas, aquí hay un ejemplo donde `Math.min` es usada como parte de una expresión de suma.

```
console.log(Math.min(2, 4) + 100);
// -> 102
```

### Flujos de control
Cuando tu programa contiene más de un estado, los estados son ejecutados como si fueran una historia, de arriba hacia abajo.

```
let theNumber = Number(prompt("Pick a number"));
console.log("your number is the square root of " + theNumber * theNumber);
```

La función `Number` convierte un valor en un número, existen funciones similares llamadas `String` y `Boolean` que convierten valores a esos tipos

Representación semántica trivial de un flujo de control lineal:

![](https://eloquentjavascript.net/img/controlflow-straight.svg)

### Ejecución condicional
No todos los programas son caminos derechos. Podríamos por ejemplo, querer crear un camino ramificado, donde el programa tome la rama adecuada basada en la situación que se tiene. Esto es llamado una *Ejecución condicional*.

![](https://eloquentjavascript.net/img/controlflow-if.svg)

Se crean con la palabra reservada `ìf` . Puede mantenerse en caso simple o compuesto con una opción que no cumple los estándares de este if.

Ejemplo de if simple:

```
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
	console.log("Your number is the square root of " + theNumber * theNumber);
}
```

Con esta modificación si agrego la palabra "loro", no se mostrará ningún output.

La declaración después de `if` está envuelta en corchetes ({ and }) en este ejemplo. Los corchetes pueden ser usados para agrupar cualquier número de declaraciones en una declaración individual,  esta es una convención que se usará en la mayoría de los casos, excepto cuando se trate de declaraciones de una sola línea, que se harán de esta forma:

```
if(1 +1 == 2) console.log("It's true");
// -> It's true
```

Ejemplo de if con alternativa, que se codifica con la palabra reservada `else`

```
let theNumber = Number(prompt("Pick a Number"));
if (!Number.isNaN(theNumber)) {
	console.log("Your number is the square root of " + theNumber * theNumber);
} else {
	console.log("Hey. Why didn't you give me a number?")
}
```

Si tienes más de dos caminos para agregar, tú puedes "encadenar" múltiples if/else juntos.

```
let num = Number(prompt("Pick a number"))

if (num < 10) {
	console.log("Small");
} else if (num < 100) {
	console.log("Medium");
} else {
	console.log("Large");
}
```

El esquema de este programa se ve algo así:

![](https://eloquentjavascript.net/img/controlflow-nested-if.svg)

### Ciclos While y Do
Considera un programa que todos sus inputs vayan del 0 al 12, una forma de escribirlo es como se presenta a continuación:

```
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
```

Esto "funciona", pero la idea de escribir un programa es hacerlo con *menos* trabajo, no más. Si necesitamos ejecutar este algoritmo hasta el número 1000, **este enfoque sería imposible de trabajar**. Es por eso que debemos correr un fragmento de código múltiples veces. Esta forma de control es llamada un loop.

![](https://eloquentjavascript.net/img/controlflow-loop.svg)

Una mejor forma de escribirlo sería esta:

```
let number = 0;
while (number <= 12) {
	console.log(number);
	number = number + 2
}
// -> 0
// -> 2
// ... etcetera
```

Una declaración que inicia con la palabra clave `while` crea un loop. La palabra `while` es seguida de una expresión en paréntesis y después una declaración, muy parecida al if. El loop seguirá entrando a la delcaración minetras la expresión produce un valor que retorne `true` cuando es convertido a Boolean

Ahora podemos escribir un programa que calcule y muestre el valor de 2^10 (2 a la 10 potencia)

```
let result = 1;
let counter = 0;
while (counter < 10) {
	result = result * 2;
	counter = counter + 1;
}
console.log(result);
// -> 1024
```

Un ciclo `do` es muy parecido a un ciclo `while`. Difieren solo en un punto: el ciclo `do` siempre ejecuta su cuerpo al menos una vez, e inicia testeando y si debe detenerse solo después de esa primera ejecución.

```
let yourName;
do {
	yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
```

Este programa te forzará a ingresar un numbre. Te lo preguntará una y otra vez hasta que tenga algo que no sea una cadena vacía. Alicando el operador `!` podrás convertir un valor a un tipo Boolean antes de negarlo, y todas las strings excepto `""` se convierten en `true`. Esto significa que el loop continuará ejecutándose hasta que se provea un nombre no vacío

### Identando el código
El rol de la identación (Tabular el código) es crear una estructura de código entendible. En el código donde nuevos bloques son abiertos dentro de otros bloques, puede ser difícil de ver dónde inicia un bloque y donde termina. Algunas personas usa cuatro espacios, otra usa el tabulador.

```
if (false != true) {
	console.log("That makes sense.");
	if (1 < 2) {
		console.log("No surprise there.");
	}
}
```

La mayoría de editores de código te ayudarán a identar automáticamente de forma correcta.

### Ciclos for
Muchos ciclos siguien el patrón mostrado en los ejemplos de while. Primero un binding de "contador" es creado para seguir el progreso del ciclo. Entonces viene el ciclo `while` usualmente con la expresión de test que verá si el contador ha alcanzado su valor final, y al final del cuerpo del ciclo, el contador es actualizado para trackear el progreso.

Porque este patrón es común, JavaScript y lenguajes similares provveen una forma más corta y progresiva, el ciclo `for`.

```
for (let number = 0; number <= 12; number = number + 2) {
	console.log(number);
}
// -> 0
// -> 2
// ... etcetera
```

```
let result = 1;
for (let counter = 0; counter < 10; counter = counter +1) {
	result = result * 2;
}
console.log(result)
// -> 1024
```

### Rompiendo un ciclo
Obtener una condición de ciclo que sea `false` no es la única forma de finalizar un ciclo. Existe una declaración especial llamada `break` que tiene el efecto inmediato de saltar fuera del ciclo interno.

```
for (let current = 20; current = current + 1) {
	if (current % 7 == 0) {
		console.log(current);
		break;
	}
}
```

Este ciclo sería infinito de no ser por el condicional interno que inica que si el módulo del número actual dividido entre 7 es igual a 0 debería romperse, se debe tener cuidado con los ciclos infinitos.

La palabra reservada `continue` es similar a `break`, Cuando la palabra continue es encontrada en el cuerpo de un ciclo, el control salta fuera del body y continúa con la siguiente iteración.

### Actualizando bindings sucintamente (Por debajo)
Especialmente cuando se hacen ciclos, un programa usualmente necesita "actualizar" un binding para mantener un valor basado en el valor anterior.

```
counter = counter + 1;
```

JavaScript provee un atajo para esto:

```
counter += 1;
number *= 2;
```

Ejemplo práctico:

```
for (let number = 0; number <= 12; number += 2) {
	console.log(number);
}
```

### Despachando un valor con switch
No es poco común en el código ver algo como esto:

```
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();
```

Existe un constructor llamado `switch` que intenta expresar un tipo de "despacho" de una manera más directa. Desafortunadamente, la sintaxis que usa JavaScript es un poco extraña.

```
switch(prompt("What is the wheater like?")) {
	case "rainy":
		console.log("Remember to bring an umbrella.");
		break;
	case "sunny":
		console.log("Dress lightly.");
		break;
	case "cloudy":
		console.log("Go outside.");
		break;
	default:
		console.log("Unknown weather type!");
		break;
}
```

### Capitalización
Los nombres de bindings no contienen espacios, sin embargo es util usar varias palabras para describir claramente que representa el binding. Estas son formas elegantes que puedes escoger para escribir un binding con varias palabras en él

```
fuzzylittleturtle x
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle
```

Cuando la primera letra del binding es mayúscula, se usa para marcar que la función es un constructor.

### Comentarios
Un comentario es una pieza de texto que es parte de un programa, pero es completamente ignorada por la computadora.

Comentario de una línea: //

```
let accountBalance = calculateBalance(account);
// It's a green hollow where a river sings
accountBalance.adjust();
// Madly catching white tatters in the grass.
let report = new Report();
// Where the sun on the proud mountain rings:
addToReport(accountBalance, report);
// It's a little valley, foaming like light in a glass.
```

Comentario multilínea: /\* \*/

```
/*
  I first found this number scrawled on the back of an old
  notebook. Since then, it has often dropped by, showing up in
  phone numbers and the serial numbers of products that I've
  bought. It obviously likes me, so I've decided to keep it.
*/
const myNumber = 11213;
```

### Ejercicios
#### Armando un triángulo.
Escribe un loop que realice siete llamadas a console.log para arrojar el triángulo siguiente:

```
#
##
###
####
#####
######
#######
```

Solución

```
for (let i=0; i < 7; i+=1) {
	const hashes = "#######";
	const triangleRow = hashes.substring(0, i+1)
	console.log(triangleRow);
}
```

#### FizzBuzz
Escribe un programa que use `console.log`  para imprimir todos los números del 1 al 100, con dos excepciones. para los números divisibles por 3, imprime "Fizz" y para los números que son divisibles por 3 y "Buzz" para los números divisibles por 5.

Cuando tu programa funcione, modifícalo para que imprima "FizzBuzz" para los números que sean divisibles por 3 y 5 (y continúa imprimiendo "Fizz" o "Buzz" para los números divisibles por uno solo de estos)

Parte 1.

```
for (let i = 0; i < 100; i ++) {
	const number = i+1;
	if ( (number % 3) == 0 ) {
		console.log("Fizz");
	} else if ( (number % 5) == 0 ) {
		console.log("Buzz");
	} else {
		console.log(number);
	}
}
```

Parte 2

```
for (let i = 0; i < 100; i ++) {
	const number = i+1;
	if ( (number % 3) == 0 ) {
		if ( (number % 5) == 0 ) {
			console.log("FizzBuzz");
		} else {
			console.log("Fizz");
		}
	} else if ( (number % 5) == 0 ) {
		console.log("Buzz");
	} else {
		console.log(number);
	}
}
```

#### Tablero de ajedréz
Escribe un programa que cree una cadena que represente una grilla de 8 x 8, usando una nueva línea, \\n En cada posición de la grilla debe tener un caracter de espacio " " o un "#". los caracteres deberían formar un tablero de ajedréz.

Se debe mostrar en un solo `console.log`.

```
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```

Solución:

```
let chessBoard = "";
let gridQuantity = 8;

for (let i = 0; i < gridQuantity; i ++) {
	for (let j = 0 ; j < gridQuantity; j++) {
		if ((i+j) % 2 == 0) {
			chessBoard += "#"
		} else {
			chessBoard += " "
		}
		if((j+1) % gridQuantity == 0) {
			chessBoard += "\n";
		}
	}
}

console.log(chessBoard);
```