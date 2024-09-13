import { CalcularArea } from "./calcularArea";

class CalcularVolumen extends CalcularArea{
    altura:number;
    volumenPrisma?:number;
    volumenPiramide?:number;
    volumenCilindro?:number;


    constructor(altura:number,lado:number,radio:number){
        super(lado,radio);
        this.altura=altura;
    }


    calcularVolumen(): void {
        //this.areaBase=this.lado*this.lado;
        //this.areaCirculo=this.radio*(3.1416*3.1416)
        //this.volumenCilindro = this.areaCirculo * this.altura;
        this.volumenPiramide = (this.areaBase * this.altura)/2;
        this.volumenPrisma = this.areaBase * this.altura;
        console.log("Volumen de Prisma "+this.volumenPrisma)
        console.log("Volumen de Piramide "+this.volumenPiramide)
        console.log("Volumen de Cilindro "+this.volumenCilindro)
    }
}

const calculos2 = new CalcularVolumen(5,2,1);

calculos2.calcularArea()
calculos2.calcularVolumen();

