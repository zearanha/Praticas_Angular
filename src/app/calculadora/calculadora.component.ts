import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado(){
    console.log("chamando um metodo para calcular o resultado");
    console.log("Numero 1: " + this.numero1)
    console.log("Numero 2: " + this.numero2)
    this.resultado = this.numero1 + this.numero2;
  }

}
