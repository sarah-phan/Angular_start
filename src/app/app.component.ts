import { Component } from '@angular/core';

// decorator này định nghĩa class AppComponent là 1 component
@Component({
  // selector: tên component sử dụng trong file html bên ngoài 
  // <app-root></app-root>
  selector: 'app-root',
  // templateUrl: dùng để liên kết file html với component -> có thể chia sẻ dữ liệu và giao diện cho nhau
  templateUrl: './app.component.html',
  // Liên kết các files css/scss với component
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day32-angular';
}
