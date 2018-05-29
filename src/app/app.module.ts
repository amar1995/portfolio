import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TeximateModule } from 'ng-teximate';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    NgbModule.forRoot(),
    TeximateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
