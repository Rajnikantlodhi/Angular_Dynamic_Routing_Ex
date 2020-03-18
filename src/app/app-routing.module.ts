import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RegisteruserComponent, LoginComponent, UserdetailsComponent } from './components'

const routes: Routes = [
  { path: '', component: RegisteruserComponent },
  { path: 'login', component: LoginComponent },
  // Dynamic route
  { path: ':usertype/:name/details', component: UserdetailsComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
