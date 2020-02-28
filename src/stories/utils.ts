import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { APP_INITIALIZER } from '@angular/core';
import { faCheck, faSearch, faPowerOff } from '@fortawesome/free-solid-svg-icons';
export const provideFa = {
  imports: [FontAwesomeModule],
  // The key bit is the providers array below.
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (iconLibrary: FaIconLibrary) => {
        return async () => {
          // Add the necessary icons inside the initializer body.
          iconLibrary.addIcons(
            faCheck,
            faSearch,
            faPowerOff
          );
        };
      },
      // When using a factory provider you need to
      // explicitly specify its dependencies.
      deps: [FaIconLibrary],
      multi: true,
    },
  ]
}
