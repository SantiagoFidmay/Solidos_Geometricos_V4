<<<<<<< HEAD
class Cilindro{
    constructor(raio,altura){
        this.raio = raio
=======
class Cilindro {
    constructor(raio,altura){
        this.raio = raio,
>>>>>>> af019d2198de0964477fda8e884ae64b91aa39cc
        this.altura = altura
    }

    calcularAreaBase(){
        return Math.PI * this.raio * this.raio
    }
<<<<<<< HEAD

=======
    
>>>>>>> af019d2198de0964477fda8e884ae64b91aa39cc
    calcularAreaLateral(){
        return 2 * Math.PI * this.raio * this.altura
    }
    
<<<<<<< HEAD
    
=======
>>>>>>> af019d2198de0964477fda8e884ae64b91aa39cc
    calcularAreaTotal(){
        return 2 * this.calcularAreaBase() + this.calcularAreaLateral()
    }

<<<<<<< HEAD

    calcularVolume(){
        return this.calcularAreaBase() * this.altura
=======
    calcularVolume(){
        return this.calcularAreaBase * this.altura
>>>>>>> af019d2198de0964477fda8e884ae64b91aa39cc
    }
}

module.exports = Cilindro