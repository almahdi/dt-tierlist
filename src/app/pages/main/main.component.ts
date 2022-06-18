import { Component, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";

@Component({
    selector: 'app-main-page',
    templateUrl: './main.component.html',
    standalone: true,
    imports: [
        ReactiveFormsModule, FormlyModule, FormlyMaterialModule,MatFormFieldModule,
    ]
})
export class MainPageComponent implements OnInit {
    form = new FormGroup({});
    model = { email: 'email@email.com' };
    fields: FormlyFieldConfig[] = [
        {
            key: 'email',
            type: 'input',
        }
    ]

    constructor() {}
    ngOnInit(): void {
        
    }
    onSubmit(model: any) {
        console.log({model});
    }

};