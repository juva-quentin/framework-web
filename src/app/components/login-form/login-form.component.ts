import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnDestroy } from '@angular/core'
import { AbstractControl, NonNullableFormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { LoginRequest } from '@models/authentication/login-request'
import { AuthenticationService } from '@services/authentication.service'
import { Subject, takeUntil } from 'rxjs'
import { password } from 'src/app/utils/password.validator'


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnDestroy {

  title = 'Authentication'
  errorMessage = ''
  unsubsribe = new Subject<void>()

  readonly authForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, password()]]
  })

  get emailController(): AbstractControl<string, string> | null {
   return this.authForm.get('email')
  }

  get passwordController(): AbstractControl<string, string> | null {
    return this.authForm.get('password')
   }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private fb: NonNullableFormBuilder
  ) { }

  ngOnDestroy(): void {
    this.unsubsribe.next()
    this.unsubsribe.complete()
  }

  private errorHandler(errorResponse: HttpErrorResponse): void {
    this.errorMessage = errorResponse.error.error ?? `${errorResponse.error.status} - ${errorResponse.error.statusText}`
  }

  login(): void {
    this.authenticationService.login(this.loginRequest)
      .pipe(takeUntil(this.unsubsribe))
      .subscribe({
        next: response => {
          this.authenticationService.token = response.token
          const returnUrl = this.route.snapshot.paramMap.get('returnUrl')
          this.router.navigateByUrl(returnUrl ? `/${returnUrl}` : '')
        },
        error: errorResponse => {
          this.errorHandler(errorResponse)
        }
      })
  }

  register(): void {
    this.errorMessage = ''
    this.authenticationService.register(this.loginRequest)
      .pipe(takeUntil(this.unsubsribe))
      .subscribe(
        {
          error: errorResponse => {
            this.errorHandler(errorResponse)
          }
        }
      )
  }

  get loginRequest(): LoginRequest {
    this.errorMessage = ''

    return new LoginRequest(this.emailController?.value ?? '', this.passwordController?.value ?? '')
  }

}
