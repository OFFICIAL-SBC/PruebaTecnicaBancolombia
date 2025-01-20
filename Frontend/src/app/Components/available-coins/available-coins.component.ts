import { Component } from '@angular/core';
import { CountryService } from '../../Services/country.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-available-coins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './available-coins.component.html',
  styleUrl: './available-coins.component.scss'
})
export class AvailableCoinsComponent {

  coins: any[] = [];
  countryName: string = "";
  managers: any[] = [];

    constructor(private countryService: CountryService) {
      this.countryName = localStorage.getItem('country')?.toString() || "";
    }


  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(): void {
    this.countryService.s_getCoinsByCountry(this.countryName)
      .subscribe(
        (data: any) => {
          this.coins = data.coins;
          this.managers = data.managers;
        },
        (error: any) => {
          console.error('Error fetching coins:', error);
        }
      );
  }

}
