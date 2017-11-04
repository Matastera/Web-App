import { CarTableRowComponent } from './car-table-row/car-table-row.component';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [CarTableRowComponent],
    declarations: [CarTableRowComponent]
})
export class CarsModule {}