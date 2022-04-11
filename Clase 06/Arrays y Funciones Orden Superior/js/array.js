const paisesDelSur = ['Argentina', 'Chile', 'Uruguay', 'Paraguay', 'Bolivia', 'Perú', 'Venezuela', 'Colombia']
const localidades = ['CABA', 'Provincia Buenos Aires', 'Mar del Plata', 'Tandil', 'Córdoba Cap.', 'Rosario', 'Chivilcoy']
const precios = [125.22, 150.30, 181.99, 100.55]

//FIND()
//resultado = paisesDelSur.find(p => p === "Perú") //retorna Perú
//resultado = paisesDelSur.find(p => p >= "P") //retorna Uruguay
//resultado = paisesDelSur.find(p => p.includes("P")) //retorna Paraguay
//resultado = paisesDelSur.find(p => p < "C") //retorna Argentina

//FILTER()
//resultado = localidades.filter(l => l >= "M") 
//resultado = localidades.filter(l => l < "M")
//resultado = localidades.filter(l => l.includes("C"))
//resultado = localidades.filter(l => l.includes("c"))

//SOME()
// resultado = localidades.some(l => l == "Tandil") //retorna TRUE
// resultado = localidades.some(l => l == "Bariloche") //retorna FALSE

//MAP()
// total = precios.map(p => p * 1.2) //incrementa en un 20% cada uno de los precios
// total = precios.map(p => p * 0.9) //descuenta un 10% de cada uno de los precios

//REDUCE()
// total = precios.reduce((a, b) => a + b)
// su traducción (acumulador, elemento) => acumulador + elemento

//FLAT()
// arrayA = [1, 2, 3, 4, 5, 6]
// arrayB = [7, 8, 9, 10]
// arrayC = [11, 12]
// arrayD = [arrayC, 13, 14]
// arrayGeneral = [0, arrayA, arrayB, arrayD]
//const arrayFlateado = arrayGeneral.flat(1) //aplana el contenido del array en un solo nivel
//const arrayFlateado = arrayGeneral.flat(2) //aplana el contenido del array hasta un segundo nivel

