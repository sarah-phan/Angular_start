// khởi tạo nhanh module: a-module
import { NgModule } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [],
    exports: [
        // export ra các componenet cho bên ngoài sử dụng
        HeaderComponent, 
        FooterComponent, 
        SidebarComponent, 
        ContentComponent,
    ],
    declarations: [
        HeaderComponent, 
        FooterComponent, 
        SidebarComponent, 
        ContentComponent,
    ],
})
export class HomeModule { }
