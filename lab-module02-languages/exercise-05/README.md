# Ejercicio 5: Slot Machine
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un <b>contador de monedas</b> que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al <b>método play</b> el número de monedas se debe incrementar de forma automática y debe generar <b>tres booleanos aleatorios</b> que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean ```true```, y por tanto deberá mostrarse por consola el mensaje:
``` javascript
"Congratulations!!!. You won <número de monedas> coins!!";
``` 
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

``` javascript
"Good luck next time!!".
```

Ejemplo de uso
``` javascript
class SlotMachine {
  /* ... */
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
```

# Cómo ver el proyecto
## Requisitos
- Node.js
- npm

## Cómo ejecutar
1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```
2. Instalar dependencias
```bash
npm install
```
3. Compilar TypeScript
```bash
npx tsc
```
4. Abrir el proyecto ```index.html```