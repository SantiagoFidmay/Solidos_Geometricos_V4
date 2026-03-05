const Cilindro = require('../models/Cilindro')

describe('Testes da Versão 2.0.0 - Sólidos Geométricos // CILINDRO', ()=>{

    test('Teste unitário da Área da base',()=>{
        // AB = PI * R² 
        const cilindro = new Cilindro(2,2)
        const resultado = 12.566
        expect(cilindro.calcularAreaBase()).toBeCloseTo(resultado, 3)
    })

    test('Teste unitário da Área Lateral',()=>{
        const cilindro = new Cilindro(2,2)
        const resultado = 25.13
        expect(cilindro.calcularAreaLateral()).toBeCloseTo(resultado,2)
    })

    test('Teste unitário da Área Total',()=>{
        const cilindro = new Cilindro(2,2)
        const resultado = 50.265
        expect(cilindro.calcularAreaTotal()).toBeCloseTo(resultado, 3)
    })
    
    test('Teste únitario do Volume',()=>{
        const cilindro = new Cilindro(2,2)
        const resultado = 25.13
        expect(cilindro.calcularVolume()).toBeCloseTo(resultado, 2)
    })
})