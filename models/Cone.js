<<<<<<< HEAD
class Cone{
    constructor(raio,altura){
        this.raio = raio
=======
class Cone {
    constructor(raio,altura){
        this.raio = raio,
>>>>>>> af019d2198de0964477fda8e884ae64b91aa39cc
        this.altura = altura
        this.geratriz = 0
    }

    calcularAreaBase(){
        return Math.PI * this.raio * this.raio
    }
    
    calcularGeratriz(){
<<<<<<< HEAD
      this.geratriz = Math.sqrt((this.altura * this.altura) + (this.raio * this.raio))
      return this.geratriz
    }

    calcularAreaLateral(){
        return Math.PI * this.raio * this.calcularGeratriz()
    }

    calcularAreaTotal(){
        return Math.PI * this.raio * (this.calcularGeratriz() + this.raio)
    }
    calcularVolume(){
        return (1/3) * this.calcularAreaBase() * this.altura
    }

=======
      return this.geratriz = Math.sqrt((this.altura * this.altura) + (this.raio * this.raio))

    }
    
    calcularAreaLateral(){
        return Math.PI * this.raio * this.calcularGeratriz()
        
    }
    
    calcularAreaTotal(){
        return Math.PI * this.raio * (this.calcularGeratriz() + this.raio)
    }

    calcularVolume(){
        return (1/3) * this.calcularAreaBase() * this.altura
    }
>>>>>>> af019d2198de0964477fda8e884ae64b91aa39cc
}

module.exports = Cone