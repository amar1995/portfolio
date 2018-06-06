import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TeximateModule } from 'ng-teximate';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

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
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    NgbModule.forRoot(),
    FlashMessagesModule.forRoot(),
    TeximateModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
