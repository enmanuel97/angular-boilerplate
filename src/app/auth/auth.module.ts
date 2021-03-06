import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
    declarations: [
        AuthComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
    ],
    exports: [
        AuthComponent,
        SignInComponent,
        SignUpComponent
    ]
})
export class AuthModule { }
