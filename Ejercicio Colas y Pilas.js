// PILA -> ARREGLO #
// FUNCIONES DE BUSQUEDA,  								
// ORDENAMIENTO, -> ASCENDENTE Y DESCENDIENTE
// QUE SE PUEDA REMOVER UN ELEMENTO
// EN UNA POSICION ESPECIFICA
// VÁLIDAR SI EXISTE UN ELEMENTO EN ARREGLO

// COLA -> OBJETOS -> NOMBRE Y EDAD
// BUSQUEDA POR EDAD O NOMBRE
// ORDENAR POR EDAD O NOMBRE
// REMOVER SEGÚN EDAD
// 


class Pila{
	constructor(array){
		this.array = array;
	}

	getArray(){
		return this.array;
	}

	toFind(value){
		return this.array.indexOf(value);
	}

	toSort(){
		return this.array.sort();
	}

	toReverseSort(){
		return this.array.sort().reverse();
	}

	toRemove(pos, n){
		this.array.splice(pos, n);
	}

	toValidate(value){
		let v = this.array.indexOf(value);
		if(v==-1){
			return "No existe";
		}else{
			return "Existe"
		}
	}
}

class Cola{
	constructor(array){
		this.array = array;
	}

	getArray(){
		return this.array;
	}

	toFindByAge(value){
		return this.array.find(obj => obj.edad === value) ?? -1;
	}

	toFindByName(value){
		return this.array.find(obj => obj.name === value) ?? -1;
	}

	toSortByAge(){
		return this.array.sort((a, b) => a.edad - b.edad);
	}

	toSortByName(){
		return this.array.sort((x, y) => x.name.localeCompare(y.name));
	}

	toRemoveByAge(value){
		this.array = this.array.filter(obj => obj.edad < value);
		
	}
}

console.log("\nPilas\n=====================");
let pila = new Pila([10, 12, 43, 11, 53]);
console.log("\nElementos :" , pila);
console.log("Elemento encontrado en posicion ", pila.toFind(12));
console.log("Array Ordenado: ", pila.toSort());
console.log("Array Ordenado a la reversa: ", pila.toReverseSort());
console.log("Se elimina el elemento.", pila.toRemove(2,1));
console.log("Array Actualizado:", pila.getArray());
console.log("¿Existe el valor 5? : ", pila.toValidate(10))

console.log("\nColas\n=====================");
let cola = new Cola([
	{name: "Joshua", edad: 19},
	{name: "AMLO", edad: 420},
	{name: "Peña", edad: 22}
	]);
console.log("\nElementos :" , cola);
console.log("Busqueda por edad: " , cola.toFindByAge(22));
console.log("Busqueda por nombre: " , cola.toFindByName("Joshua"));
console.log("Ordenar por nombre: ", cola.toSortByName());
console.log("Ordenar por edad: ", cola.toSortByAge());
console.log("Borrar por edad mayor a 20: ", cola.toRemoveByAge(20));

console.log("\Final :" , cola);