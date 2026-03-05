const Cone = require('../models/Cone')

describe('Testes da versão 1.0.0 - Sólidos Geométricos // CONE', ()=>{
    test('Teste unitário da Área da Base', ()=>{
        //  Ab = π.r²
        const cone = new Cone(2,2)
        const resultado = 12.566
        expect(cone.calcularAreaBase()).toBeCloseTo(resultado, 3)
    })
    test('Teste unitário da Geratriz', ()=>{
        //  g² = h² + r²
        const cone = new Cone(2,2)
        const resultado = 2.828
        expect(cone.calcularGeratriz()).toBeCloseTo(resultado, 3)
    })
    test('Teste Unitário da Área Lateral', ()=>{
        //  Al = π . r . g 
        const cone = new Cone(2,2)
        const resultado = 17.772
        expect(cone.calcularAreaLateral()).toBeCloseTo(resultado, 3)
    })
    test('Teste Unitário da Área Total', ()=>{
        //  Al = π . r . ( g + r )
        const cone = new Cone(2,2)
        const resultado = 30.338
        expect(cone.calcularAreaTotal()).toBeCloseTo(resultado, 3)
    })
    test('Teste Unitário do Volume', ()=>{
        //  Al = π . r . ( g + r )
        const cone = new Cone(2,2)
        const resultado = 8.378
        expect(cone.calcularVolume()).toBeCloseTo(resultado, 3)
    })
})