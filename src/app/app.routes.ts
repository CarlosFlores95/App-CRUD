import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { TablaComponent } from './Components/tabla/tabla.component';


const Rutas:Routes = [
    {path: 'inicio', component: FormularioComponent},
    { path: 'tabla', component: TablaComponent}
];

export const APP_ROUTING = RouterModule.forRoot(Rutas);