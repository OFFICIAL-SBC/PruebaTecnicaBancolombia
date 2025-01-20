import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-my-coins',
  standalone: true,
  imports: [ModalComponent,CommonModule],
  templateUrl: './my-coins.component.html',
  styleUrl: './my-coins.component.scss'
})
export class MyCoinsComponent{
  isModalOpen = false;
  coins: any[] = [];
  countryName: string = "";
  userName: string =  "";

  constructor(private userService: UserService) {
    this.userName = localStorage.getItem('username')?.toString() || "";
  }

  ngOnInit(): void {
    this.getCoins();
    this.getCountryName();
  }

  getCoins(): void {
    this.userService.s_getCoinsUser(this.userName)
      .subscribe(
        (data: any) => {
          this.coins = data.coins;
        },
        (error: any) => {
          console.error(`Error fetching user's coins:`, error);
        }
      );
  }

  getCountryName(): void {
    this.userService.s_getCountryNameByUser(this.userName)
      .subscribe(
        (data: any) => {
          this.countryName = data.country;
        },
        (error: any) => {
          console.error('Error fetching country name:', error);
        }
      );
  }

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
    this.getCoins();
    this.closeModal();
  }

}

