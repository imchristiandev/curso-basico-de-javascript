# Curso básico de JavaScript

Se aprenderán las bases de JavaScript, entendiendo qué es JavaScript

En los años 90 eran páginas muy estáticas, que no era lo que necesitaba la industria, ellos necesitaban dinamismo, como comentar.

Se genera un lenguaje de programación en la Web, buscando la interacción y generación de contenidos.

JavaScript es un lenguaje que se enfoca a hacer **páginas dinámicas** que ascenderá a **Web apps**

## "Lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico."

### Débilmente tipado

```
4 + "7";    // 47
4 * "7";    // 28
2 + true;   // 3
false - 3   // -3
```


### Lenguaje dinámico

![[compilación.png]]

Existen dos partes importantes para correr un programa, **Compilación y Runtime** La máquina solamente entiende bicode (1 - 0) Siempre se debe enviar a una etapa de compilación.

En JavaScript no es necesario compilarlo, se abre en el navegador y automáticamente corre en el navegador.

### ¿Realmente es un lenguaje Interpretado?
Significa que JS va a ir leyendo línea por línea, y va ocurriendo en Runtime, cuando detecta un error y lo lanza en la línea exacta y no puede continuar.

![[lenguaje-interpretado.png]]

1. Ocupamos sintáxis que los seres humanos puedan entender, debe haber algo que traduzca el lenguaje (V8 JavaScript) Just In Time Compiler.
2. Genera un árbol de palabras clave en JavaScript, para entender qué deseamos hacer.
3. Interpreta y mejora nuestro código, aquí es donde corrige según sus criterios.
4. Hace la compilación de la interpretación del código para devolver y renderizar lo que se deba hacer.

### JS es Backwards Compatible
La compatibilidad con versiones anteriores significa que cuando se acepta como JS válido, no habrá un cambio futuro que haga que el código deje de funcionar.

**¿Cómo usar las funcionalidades actuales de JavaScript?**

![[babel.png]]
Babel va a permitir compatibilizar las versiones actuales traduciendo la nueva versión de JS a una antigua y compatible.