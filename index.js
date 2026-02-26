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