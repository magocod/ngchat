import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// angular material
import {
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatExpansionModule,
  MatTabsModule,
  MatTableModule,
  MatChipsModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatChipsModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatChipsModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressBarModule
  ],
})
export class MaterialModule {}
