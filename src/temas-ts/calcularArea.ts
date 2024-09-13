export class CalcularArea{
    lado:number;
    radio:number;
    areaBase:number = 0;
    areaCirculo:number = 0;

    constructor(lado:number, radio:number){
        this.lado = lado;
        this.radio = radio;
    }

    calcularArea():void{
        this.areaBase=this.lado*this.lado;
        this.areaCirculo=this.radio*(3.1416*3.1416)
        console.log("Area Base Triangulo "+this.areaBase)
        console.log("Area Base Cuadrado "+this.areaBase)
        console.log("Area Base Circulo "+this.areaCirculo)
    }


}

const calculos1 = new CalcularArea(2,1);
calculos1.calcularArea();