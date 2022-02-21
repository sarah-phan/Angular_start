import { Component, OnInit } from '@angular/core';

type Student = {
    name: string;
    email: string;
}

@Component({
    selector: 'app-data-binding',
    template: `
        <h1>Data Binding</h1>

        <!-- Interpolation -->
        <p>Hello {{title}}</p>
        <p>Your name: {{student.name}}</p>
        <p>Your email: {{student.email}}</p>

        <!-- Property binding (có dấu ngoặc vuông)-->
         <div class="form-group">
           <label class="text-success">Name</label>
           <input 
           type="text" 
           class="form-control" 
           [value]="student.name"
           [disabled]="isDisabled" 
           >
         </div>    
         
        <!-- Event Binding (có dấu ngoặc tròn) -->
        <!-- click = onClick -->
        <!-- khi click sẽ render lại từ đầu template -->
        <button class="btn btn-success" (click)="toggleDisable()">Disable</button>

        <!-- Kết hợp event binding và property binding -->
        <div class="form-group">
           <label class="text-success">Address</label>
           <input 
           type="text" 
           class="form-control" 
           [value]="address"
           (input)="onChangeAddress($event)"
           >
         </div>  
         <p>Address: {{address}}</p>  
    
         <!-- Template variable -->
         <div class="form-group">
           <label class="text-success">Phone Number</label>
           <input 
           type="text" 
           class="form-control" 
           #phoneEl
           >
         </div>  
        <button (click)="onChangePhone(phoneEl.value)" class="btn btn-success">Change Phone</button>
        <!-- button lấy value của input (react dùng ref) -->
        <p>Phone: {{phone}}</p>

        <!-- Two way binding = kết hợp property binding [] và event binding () nhưng ngắn hơn -->
        <!-- cần import FormsModule ở module quản lý component đó (data-binding được quản lý bởi app-module) -->
        <div class="form-group">
           <label class="text-success">Description</label>
           <input 
           type="text" 
           class="form-control" 
           [(ngModel)] = "description"
           >
         </div>  
         <p>Description: {{description}}</p>

         <div class="form-group">
           <label for="">Select color</label>
           <select class="form-control" [(ngModel)]="color">
             <option value = "">---</option>
             <option value = "green">Green</option>
             <option value = "red">Red</option>
             <option value="black">Black</option>
           </select>
         </div>
         <p>Color: {{color}}</p>

         <!-- Bài tập 4 -->
         <h3>Register Form</h3>
         <div class="form-group">
           <label class="text-success">Full name</label>
           <input 
           type="text" 
           class="form-control" 
           #fullNameRef 
           >
         </div>  
         <div class="form-group">
           <label class="text-success">Email</label>
           <input 
           type="text" 
           class="form-control" 
           [(ngModel)] = "user.email"
           >
         </div> 
         <button class="btn btn-success" (click)="submitEx4(fullNameRef.value)">Submit</button> 
        <p>Full name: {{user.fullname}}</p>
        <p>Email: {{user.email}}</p>
    `
})

export class DataBindingComponent implements OnInit {
    // Nơi khai báo các properties, methods
    title: string = "Cybersoft";
    student: Student = {
        name: "Ngọc",
        email: "ngoc@gmail.com",
    };
    isDisabled: boolean = false;
    address: string = "";
    phone: string = "";
    description: string = "";
    color: string = "";

    constructor() { }

    ngOnInit() { }

    toggleDisable() {
        this.isDisabled = !this.isDisabled
    }

    onChangeAddress(evt: Event){
        // để biết event này là của thẻ input (hoặc button, div) 
        if (evt.target instanceof HTMLInputElement){
            this.address = evt.target.value;
        }
    }

    onChangePhone(value: string){
        this.phone = value
    }

    // Bài tập 4
    user: any = {
        fullname: '',
        email: '',
    }

    submitEx4(value: string) {
        this.user.fullname = value;
    }
}