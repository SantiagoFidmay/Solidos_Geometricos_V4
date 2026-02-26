const Cone = require('../models/Cone')

describe('Testes da versão 1.0.0 - Sólidos Geométricos',()=>{
    test('Teste unitário da Área da base',()=>{
        // Area da Base  = PI * r²
        const cone = new Cone(2,2)
        const resultado = 12.566
        expect(cone.calcularAreaBase()).toBeCloseTo(resultado,3)
})
    test('Teste unitario da Geratriz',()=>{
      // Area da Base = PI * r²
         const cone = new Cone(2,2)
         const resultado = 2.828
         expect(cone.calcularGeratriz()).toBeCloseTo(resultado,3)
        

    })

    test('Teste unitário da Area lateral',()=>{
        // AL - PI * r * Geratriz
        const cone = new Cone(2,2)
        const resultado = 17.772
        expect(cone.calcularAreaLateral()).toBeCloseTo(resultado, 3)

    })

    test('Teste unitário da Area TOTAL',()=>{
        // AT = PI * r * (g + r)
        const cone = new Cone(2,2)
        const resultado = 30.338
        expect(cone.calcularAreaTotal()).toBeCloseTo(resultado, 3)

    })

    test('Teste unitário do Volume',()=>{
        // (1/3) * areaBase * altura 
        const cone = new Cone(2,2)
        const resultado = 8.378
        expect(cone.calcularVolume()).toBeCloseTo(resultado, 3)

    })
    })
