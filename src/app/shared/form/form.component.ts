import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  drugForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormComponent>
  ) {
    this.drugForm = this.fb.group({
    });
    this.getFormControls(this.data);
   }
  getFormControls(data: any) {
    data.forEach((element: any) => {
      let a = new FormControl();
      if(element.isRequired){
        a.addValidators(Validators.required);
        a.updateValueAndValidity();
      }
      this.drugForm.addControl(element.key, a);
    });
  }

  ngOnInit(): void {
  }

  validateNumberInput(event: any, field: any): void {
    if(field.type === 'number'){
      if (!((event.keyCode >= 49 && event.keyCode <= 57 && !event.shiftKey) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode === 8)) {
        event.preventDefault();
      }
    }
  }

  submit(){
    if(this.drugForm.valid){
      alert(`your form submitted successfully...`);
      this.dialogRef.close();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

}
