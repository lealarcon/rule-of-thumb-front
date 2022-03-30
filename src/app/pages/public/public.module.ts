import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IndexComponent } from "./index/index.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/components/shared/shared.module";


const APP_ROUTES: Routes = [
  { path: "", component: IndexComponent },

];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(APP_ROUTES),
  ],
  declarations: [IndexComponent],
})
export class PublicModule { }
