import './polyfills';
import 'web-animations-js';
import 'jquery';
import 'bootstrap';
import 'hammerjs';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { PasswordStrengthModule } from './app/components/password-strength/password-strength.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PasswordStrengthModule)
  .catch(err => console.log(err));
