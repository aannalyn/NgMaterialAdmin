import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from './material/material.module';
import { LayoutMaterialModule } from './layout-material.module';

import { UserInfoComponent } from '../components/user-info/user-info.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { ToolbarNavComponent } from '../components/toolbar-nav/toolbar-nav.component';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

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
    UserInfoComponent,
    NavigationComponent,
    ToolbarNavComponent,
    LayoutComponent,
    DashboardComponent,
    FormsComponent,    
    ProfileComponent, 
    SettingsComponent,
    NavAccordionDirective,     
  ]
})
export class PagesModule { }
