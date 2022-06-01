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

> 
> "Debajo de la superficie de la máquina, el programa se mueve. Sin esfuerzo, se expande y se contrae. En gran armonía, los electrones se dispersan y se reagrupan. Las figuras en el monitor son tan solo ondas sobre el agua. La esencia se mantiene invisible debajo de la superficie." 
> - Master Yuan-Ma, The Book of Programming
> 

Dentro del mundo de los computadores, todo es data, puedes leer data, modificar data, crear nueva data, pero lo que no son datos no se puede mencionar.

Los vbits son un tipo de cosas de dos valores, usualmente descritos como ceros y unos. Dentro de la computadora, ellos toman formas de cargas eléctricas altas y bajas, una señal fuerte o débil o una superficie brillante u opaca en un CD. Cualquier parte de información discreta puede ser reducita en secuencias de ceros y unos y por lo tanto representada en bits.

Número 13 en bits

```
   0   0   0   0   1   1   0   1
 128  64  32  16   8   4   2   1
```

### Valores
Una computadora típica moderna tiene más de 30 billones de bits en su almacenamiento de data volátil (memoria que está trabajando). 