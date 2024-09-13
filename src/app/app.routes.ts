import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
export const routes: Routes = [
    {
      path: '',
      loadComponent: () =>
        import('./components/layout/layout.component').then(
          (c) => c.LayoutComponent
        )

    },

  ];