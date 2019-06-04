import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDonationTypeComponent } from './Donation/add-donation-type/add-donation-type.component';
import { AddAnimalComponent } from './Animal/add-animal/add-animal.component';

const adoptifyRoutes: Routes = [
    { path: 'LookupTables', component: AddDonationTypeComponent},
    { path: 'AddAnimal', component: AddAnimalComponent},
    { path: 'searchAnimal', component: SearchanimalComponent}
];

@NgModule({
imports: [
  RouterModule.forChild(materialWidgetRoutes)
    ],
exports: [
  RouterModule
]
})
export class AdoptifyRouterModule {}