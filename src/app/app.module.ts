import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { PostformComponent } from './postform/postform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, RouteRoutingModule, FormsModule],
  declarations: [AppComponent, PostformComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
