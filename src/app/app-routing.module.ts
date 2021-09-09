import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiContentComponent } from './api-content/api-content.component';
import { ContentComponent } from './content/content.component';
import { HttpComponent } from './http/http.component';

const routes: Routes = [
  { path: '', redirectTo: 'http', pathMatch: 'full' },
  { path: 'http', component:HttpComponent },
  { path: 'content', component:ContentComponent},
  { path: 'api-content', component:ApiContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
