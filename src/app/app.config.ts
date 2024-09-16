import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './shared/interceptors/errors/error.interceptor';
import { headerInterceptor } from './shared/interceptors/headers/header.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadScreenInterceptor } from './shared/interceptors/loading/load-screen.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient(withFetch(), withInterceptors([headerInterceptor, errorInterceptor, loadScreenInterceptor]) ),
    provideAnimations(),provideToastr(),provideRouter(routes,  withViewTransitions()), provideClientHydration(),
    importProvidersFrom(HttpClientModule, NgxSpinnerModule)]
};
