import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      
        domain: 'dev-blswfujpmjhb41yi.us.auth0.com',
        clientId: 'sdG0lrSq0iarAsM0fOAyZmhLMFjMa7pT',
        authorizationParams: {
        redirect_uri: window.location.origin,
        audience: "https://kajblog",
        useRefreshTokens: true,
        cacheLocation: "memory" 
      }
    })
  ]
};