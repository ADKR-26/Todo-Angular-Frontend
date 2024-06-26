import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      // Define your routes here, if any
    ]),
    provideHttpClient(), // Provide HttpClientModule here
  ],
});
