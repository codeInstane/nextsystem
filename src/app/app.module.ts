import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';

import { ActivatedRoute } from '@angular/router';

@NgModule({
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
