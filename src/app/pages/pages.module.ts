import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from './material/material.module';
import { LayoutMaterialModule } from './layout-material.module';

import { NavigationComponent } from '../components/navigation/navigation.component';
import { ToolbarNavComponent } from '../components/toolbar-nav/toolbar-nav.component';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';

import { NavAccordionDirective } from '../directives/nav-accordion.directive';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,    
    LayoutMaterialModule,    
  ],
  declarations: [
    NavigationComponent,
    ToolbarNavComponent,
    LayoutComponent,
    DashboardComponent,
    FormsComponent,    
    NavAccordionDirective,
  ]
})
export class PagesModule { }
