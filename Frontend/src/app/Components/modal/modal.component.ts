import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  
  @Output() close = new EventEmitter<void>();
  @Output() saveChanges = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  save() {
    this.saveChanges.emit();
  }
}
