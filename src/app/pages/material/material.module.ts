import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { LayoutMaterialModule } from '../layout-material.module';

import { MaterialComponent } from './material.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { GridsComponent } from './grids/grids.component';
import { ListsComponent } from './lists/lists.component';
import { ProgressComponent } from './progress/progress.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialRoutingModule,
    LayoutMaterialModule
  ],
  declarations: [
    MaterialComponent, 
    ButtonsComponent, 
    CardsComponent, 
    GridsComponent, 
    ListsComponent, 
    ProgressComponent,
    TabsComponent, 
  ]
})
export class MaterialModule { }
