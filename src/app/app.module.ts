import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './Demo/demo.component';
import { DemoCliComponent } from './demo-cli/demo-cli.component';
import { HomeModule } from './Home/home.module';
import { Ex2Module } from './ex2/ex2.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './structure-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CardComponent } from './card/card.component';
import { InteractionModule } from './interaction/interaction.module';
import { Ex8Module } from './Ex8/ex8.module';
import { RouterModule, Routes } from '@angular/router';
import { ArticleModule } from './article/article.module';

// cấu hình routes cho ứng dụng
const routes: Routes = [
  {path: '', component: DemoComponent}, //ko có / đầu tiên như React
  {path: "data-binding", component: DataBindingComponent},
  {path: "structural-directive", component: StructuralDirectiveComponent},
  {path: "attribute-directive", component: AttributeDirectiveComponent},
  
  {path: "ex-2", loadChildren: () => Ex2Module},
  {path:"ex-8", loadChildren: () => Ex8Module},
  {path: "article", loadChildren: () => ArticleModule}
]

// cú pháp decorator: @NgModule -> giúp angular bk file này là module 
// bên trong decorator là các metadata để cấu hình module
@NgModule({
  // declaration là nơi khai báo các components do module quản lý
  // 1 Component bắt buộc phải được 1 và chỉ 1 module quản lý (1 module quản lý nhiều component)
  declarations: [
    AppComponent, 
    DemoComponent, 
    DemoCliComponent, 
    DataBindingComponent, 
    StructuralDirectiveComponent, 
    AttributeDirectiveComponent,
    CardComponent,
  ],
  // imports có "s" là nơi khai báo các module cần sử dụng
  // VD: HomeModule quản lý HeaderComponent, FooterComponent, SidebarComponent, ContentComponent 
  // -> Chỉ cần import HomeModule bên trong AppComponent
  // Ngoài ra, angular còn cung cấp rất nhiều modules khác: FormsModule, RouterModule, HTTPClientModule
  imports: [
    BrowserModule, 

    HomeModule,

    // Ex2Module,
    // nếu đã có route thì ko cần import

    FormsModule,

    InteractionModule,

    // Routing, cơ chế single page
    // Chỉ duy nhất app mới được forRoot, còn module con là ForRoot
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
