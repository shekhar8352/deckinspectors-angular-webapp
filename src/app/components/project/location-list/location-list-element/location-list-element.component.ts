import { Component, EventEmitter, Input, Output } from '@angular/core';
import {BuildingLocation} from "../../../../common/models/buildingLocation";
import {ProjectListElement} from "../../../../common/models/project-list-element";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AssignProjectModalComponent } from 'src/app/forms/assign-project-modal/assign-project-modal.component';

@Component({
  selector: 'app-location-list-element',
  templateUrl: './location-list-element.component.html',
  styleUrls: ['./location-list-element.component.scss']
})
export class LocationListElementComponent {
  @Input() location!: ProjectListElement;
  @Input() isSubProject!: boolean;
  @Input() projectName!: string;
  isAdmin: boolean = ((JSON.parse(localStorage.getItem('user')!))?.role === "admin");
  @Output() childClickEventTriggered = new EventEmitter<boolean>();
  constructor(private dialog: MatDialog){ }

  openAssignProjectModal(){
    this.childClickEventTriggered.emit(true);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "350px";
    dialogConfig.data = {
      location: this.location
    };
    const dialogRef = this.dialog.open(AssignProjectModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
     })
  }
}
