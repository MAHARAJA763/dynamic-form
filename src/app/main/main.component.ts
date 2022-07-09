import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ApiService } from '../services/api.service';
import { FormComponent } from '../shared/form/form.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openForm(formName: string): void {
    this.apiService.getJSONData(formName).subscribe((data: any) => {
      this.dialog.open(FormComponent, {
        data: data.fields,
        maxWidth: "80%",
        minHeight: "80%",
        width: "100%",
      })
    })
  }

}
