import { StudentsComponent } from './pages/students/students.component';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormResourcesComponent } from './pages/form-resources/form-resources.component';


@NgModule({
  declarations: [
    AppComponent,

    NotFoundComponent,
    StudentsComponent,
    MyAccountComponent,
    FormResourcesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}