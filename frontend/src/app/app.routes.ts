import { Routes     } from '@angular/router';
import { Login      } from './features/auth/login/login';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home       } from './features/home/home';
import { Favorites  } from './features/favorites/favorites';
import { Register   } from './features/auth/register/register';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    { 
        path: '',
        component: MainLayout,
        canActivate:[authGuard],
        children: [
            { 
                path: 'home',
                component: Home
            },
            { 
                path: 'favorites',
                component: Favorites
            }
        ]
    }
];
