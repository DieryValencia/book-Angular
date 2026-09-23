import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Labs } from './pages/labs/labs';
import { MainList } from './main-list/main-list';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'inicio',
        component: Home
    },
    {
        path: 'labs',
        component: Labs
    },
{
        path: 'main-list',
        component: MainList
    }
];
