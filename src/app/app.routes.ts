import { Routes } from '@angular/router';
import { LpComponent } from './pages/lp/lp.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LayoutComponent } from './components/layout/layout.component';
import { InProgressComponent } from './pages/in-progress/in-progress.component';
import { ManageMenuComponent } from './pages/manage-menu/manage-menu.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { ManageDeliveryComponent } from './pages/manage-delivery/manage-delivery.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: LpComponent,
    },
    {
        path: 'app',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: InProgressComponent
            },
            {
                path: 'novos',
                component: InProgressComponent
            },
            {
                path: 'gerenciar-menu',
                component: ManageMenuComponent
            },
            {
                path: 'historico',
                component: OrderHistoryComponent
            },
            {
                path: 'entregas',
                component: ManageDeliveryComponent
            }
        ]
    },
    {
        path: ':estabelecimento',
        component: MenuComponent,
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

export const routerProvider = [
    provideRouter(routes)
];
