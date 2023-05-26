import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(route: ActivatedRoute) {
    // const id: Observable<string> = route.params.pipe(map(p => p.id));
    // const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // // route.data includes both `data` and `resolve`
    // const user = route.data.pipe(map(d => d.user));
  }
 }
