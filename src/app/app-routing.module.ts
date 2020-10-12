import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { AuthenticationService } from './services/authenticationService';
import { QuestionComponent } from './components/question/question.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search',
    component: SearchComponent,
		canActivate: [AuthenticationService]
  },
  {
    path: 'question/:id',
    component: QuestionComponent,
		canActivate: [AuthenticationService]

  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
