<<<<<<< HEAD
////////////////////// CONE ///////////////////

const Cone = require('./models/Cone')
const cone = new Cone(2,2)

const areaBase = cone.calcularAreaBase()
const geratriz = cone.calcularGeratriz()
const areaLateral = cone.calcularAreaLateral()
const areaTotal = cone.calcularAreaTotal()
const volume = cone.calcularVolume()

console.log(`Area da base = ${areaBase.toFixed(2)}`)
console.log(`Geratriz = ${geratriz.toFixed(2)}`)
console.log(`Area da Lateral = ${areaLateral.toFixed(2)}`)
console.log(`Area Total = ${areaTotal.toFixed(2)}`)
console.log(`Volume = ${volume.toFixed(2)}`)

console.log('---------------------------------------------')

///////////////////////// CILINDRO   /////////////////////////////


const Cilindro = require('./models/Cilindro')
const cilindro = new Cilindro(2,2)


const areaBase2 = cilindro.calcularAreaBase()
const areaLateral2 = cilindro.calcularAreaLateral()
const areaTotal2 = cilindro.calcularAreaTotal()
const volume2 = cilindro.calcularVolume()

console.log(`Área da base: ${areaBase2.toFixed(2)}`)
console.log(`Área da base Lateral: ${areaLateral2.toFixed(2)}`)
console.log(`Área Total da base: ${areaTotal2.toFixed(2)}`)
console.log(`Volume: ${volume2.toFixed(2)}`)

console.log(`--------------------------------------------`)
=======
const Cone = require('./models/Cone')


const cone = new Cone(2,2)
const geratriz = cone.geratriz
console.log(`geratriz = ${geratriz}`)
const areaBase = cone.calcularAreaBase()
const areaLateral = cone.calcularAreaLateral()
console.log(`Area da base é igual a: ${areaBase.toFixed(2)}`)
console.log(`Area da lateral é igual a: ${areaLateral.toFixed(2)}`)
const geratriz2 = cone.geratriz
console.log(`geratriz = ${geratriz2.toFixed(2)}`)
>>>>>>> af019d2198de0964477fda8e884ae64b91aa39cc
