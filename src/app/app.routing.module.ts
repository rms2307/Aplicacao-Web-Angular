import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './views/home/home.component';
import { AgendamentoComponent } from './views/agendamento/agendamento.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "agendamentos",
        component: AgendamentoComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
