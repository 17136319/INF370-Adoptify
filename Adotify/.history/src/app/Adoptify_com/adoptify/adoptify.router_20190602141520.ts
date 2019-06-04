import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDonationTypeComponent } from './Donation/add-donation-type/add-donation-type.component';

const materialWidgetRoutes: Routes = [
    { path: 'LookupTables', component: AddDonationTypeComponent,
    { path: 'featured', component: FeatureTableComponent ,data: { animation: 'featured' }},
    { path: 'responsive', component: ResponsiveTableComponent ,data: { animation: 'responsive' }}
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