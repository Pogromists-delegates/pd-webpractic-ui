import { Routes, RouterModule } from "@angular/router";
import UserpageComponent from './components/userpage/userpage';
import AdminpageComponent from './components/adminpage/adminpage';
import EntryComponent from "./components/entry/entry";
import { AppComponent } from "./app.component";
import ApplicationComponent from "./components/application/application";

const routes: Routes = [
    {path: 'entry', component: EntryComponent},
    {path: 'admin', component: AdminpageComponent},
    {path: 'user', component: UserpageComponent},
];

export const routing = RouterModule.forRoot(routes);