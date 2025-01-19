import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
// import { MonedasService } from './monedas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-coins',
  standalone: true,
  imports: [ModalComponent,CommonModule],
  templateUrl: './my-coins.component.html',
  styleUrl: './my-coins.component.scss'
})
export class MyCoinsComponent{
  monedas: any[] = []; // Inicializa la lista vacía
  isModalOpen = false;

  // constructor(private monedasService: MonedasService) {}

  // ngOnInit(): void {
  //   this.cargarMonedas();
  // }

  // cargarMonedas() {
  //   this.monedasService.getMonedas().subscribe((data) => {
  //     this.monedas = data; // Asigna las monedas al array dinámico
  //   });
  // }

  agregarMoneda() {
    this.openModal();
  }

  editarMoneda(id: number) {
    console.log("Edit Coin")
    // alert(`Editar moneda con ID: ${id}`);
    // Aquí podrías implementar lógica para editar una moneda
  }

  eliminarMoneda(id: number) {
    console.log("Delete Coin")
    // this.monedas = this.monedas.filter(moneda => moneda.id !== id);
  }

  //! Modal Section
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleSave() {
    console.log('Guardando cambios...');
    this.closeModal();
  }

}

