import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  userName: string;
  coins: any[] = [];
  selectedCoin: string = '';
  
  @Output() close = new EventEmitter<void>();
  @Output() saveChanges = new EventEmitter<void>();

  constructor(private userService: UserService) {
    this.userName = localStorage.getItem('username')?.toString() || "";

        this.userService.s_getMissingCoins(this.userName).subscribe(
          (data: any) => {
            this.coins = data.coins;
          },
          (error: any) => {
            console.error(`Error fetching user's coins:`, error);
          }
        );
  }

  closeModal() {
    this.close.emit();
  }

  save() {
    if(this.selectedCoin.length > 0) {
      this.userService.s_addCoin(this.userName, this.selectedCoin).subscribe(
        (data:any) => {
          if(data.status === true) {
            console.log('Coin added successfully');
            this.saveChanges.emit();
          }
        },
        (error: any) => {
          console.error(`Error adding coin:`, error);
        }
      );
    }
  }


  // Método para manejar cambios en la selección
  onSeleccionarMoneda(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCoin = selectElement.value;
    console.log('Moneda seleccionada:', this.selectedCoin);
  }
}
