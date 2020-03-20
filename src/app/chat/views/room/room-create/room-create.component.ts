import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog , MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  RoomwebsocketService,
} from 'src/app/chat/services';

interface DialogData {
  title: string;
}

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  /**
   * [openDialog description]
   */
  openDialog() {
    const dialogRef = this.dialog.open(DialogRoomCreateDialogComponent, {
      data: { title: 'Room Create' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'app-dialog-room-create-dialog',
  templateUrl: 'dialog-room-create.dialog.html',
  styleUrls: ['./room-create.component.scss']
})
export class DialogRoomCreateDialogComponent {

  createForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private roomwebsocketservice: RoomwebsocketService,
    public dialogRef: MatDialogRef<DialogRoomCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.createForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
    });
  }

  /**
   * [name description]
   */
  get name() {
    return this.createForm.get('name');
  }

  /**
   * [closeDialog description]
   */
  closeDialog(): void {
    this.dialogRef.close();
  }

  /**
   * [onSubmit description]
   */
  onSubmit(): void {
    // Process checkout data here
    console.log(this.createForm.value);
    this.roomwebsocketservice.requestCreate(this.createForm.value.name);
    this.dialogRef.close();
  }

}
