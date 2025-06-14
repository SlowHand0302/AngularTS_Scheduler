import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
interface City {
    name: string;
    code: string;
}
@Component({
    selector: 'app-location-select',
    imports: [SharedModule],
    templateUrl: './location-select.component.html',
    styleUrl: './location-select.component.scss'
})
export class LocationSelectComponent {
    showListSearch: boolean = false;
    locationType: any[] | undefined;
    cities!: City[];

    selectedCity!: City;
    selectedType: any = { name: 'Location', icon: 'pi pi-map' };

    ngOnInit() {
        this.locationType = [
            { name: 'Link', icon: 'pi pi-link' },
            { name: 'Location', icon: 'pi pi-map' }
        ];
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

    handleShowListSearch() {
        console.log('focus');

        if (this.selectedType.name === 'Location') {
            this.showListSearch = true;
        } else {
            this.showListSearch = false;
        }
    }
}
