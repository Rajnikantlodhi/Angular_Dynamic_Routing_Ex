import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DemoMaterialModule } from '../material'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import {
  RegisteruserComponent,
  LoginComponent,
  UserdetailsComponent
} from './components'

@NgModule({
  declarations: [
    AppComponent,
    RegisteruserComponent,
    LoginComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
