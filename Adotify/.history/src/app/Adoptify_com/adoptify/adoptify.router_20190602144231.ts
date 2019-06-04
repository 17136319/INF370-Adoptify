import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDonationTypeComponent } from './Donation/add-donation-type/add-donation-type.component';
import { AddAnimalComponent } from './Animal/add-animal/add-animal.component';
import { SearchanimalComponent } from './Animal/searchanimal/searchanimal.component';

const adoptifyRoutes: Routes = [
    // auth/adoptify/LookupTables
    { path: 'LookupTables', component: AddDonationTypeComponent},
    // auth/adoptify/AddAnimal
    { path: 'AddAnimal', component: AddAnimalComponent},
    // auth/adoptify/searchAnimal
    { path: 'searchAnimal', component: SearchanimalComponent}
];

@NgModule({
imports: [
  RouterModule.forChild(adoptifyRoutes)
    ],
exports: [
  RouterModule
]
})
export class AdoptifyRouterModule {}