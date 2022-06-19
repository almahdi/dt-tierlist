import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-main-page',
    templateUrl: './main.component.html',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,

    ]
})
export class MainPageComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {

    }
    onSubmit(model: any) {
        console.log({ model });
    }

};