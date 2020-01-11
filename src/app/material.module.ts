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
  MatTabsModule
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
    MatTabsModule
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
    MatTabsModule
  ],
})
export class MaterialModule {}
