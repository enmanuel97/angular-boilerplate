import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule) },
    { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
