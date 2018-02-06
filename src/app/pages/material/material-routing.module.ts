import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { CardsComponent } from './cards/cards.component';
import { GridsComponent } from './grids/grids.component';
import { ListsComponent } from './lists/lists.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'grids',
    component: GridsComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
