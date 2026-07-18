import { Routes } from '@angular/router';
import { CatScheduleComponent } from './cat-schedule/cat-schedule';
import { CatCheckingComponent } from './cat-checking/cat-checking';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'catSchedule', 
        pathMatch: 'full'
    },
    {
        path: 'catSchedule', 
        component: CatScheduleComponent
    },
    {
        path: 'catChecking', 
        component: CatCheckingComponent
    },
];
