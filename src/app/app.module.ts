import { StudentsComponent } from './pages/students/students.component';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/components/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { MyAccountComponent } from './pages/my-account/my-account.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    StudentsComponent,
    MyAccountComponent,

   
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
