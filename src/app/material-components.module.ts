import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
         MatToolbarModule,
         MatIconModule,
         MatDividerModule,
         MatListModule,
         MatTabsModule,
         MatSidenavModule,
         MatMenuModule,
         MatCheckboxModule,
         MatFormFieldModule,
         MatInputModule,
         MatGridListModule,
         MatCardModule,
         MatTableModule,
        MatDialogModule } from '@angular/material'

@NgModule({
  imports: [MatButtonModule, 
            MatToolbarModule,
            MatTabsModule,
            MatIconModule,
            MatSidenavModule,
            MatMenuModule,
            MatCheckboxModule,
            MatDividerModule,
            MatListModule,
            MatFormFieldModule,
            MatInputModule,
            MatGridListModule,
            MatCardModule,
            MatTableModule,
            MatDialogModule
           ],
  
  exports: [MatButtonModule,
            MatToolbarModule,
            MatTabsModule,
            MatIconModule,
            MatSidenavModule,
            MatMenuModule,
            MatCheckboxModule,
            MatDividerModule,
            MatListModule,
            MatFormFieldModule,
            MatInputModule,
            MatGridListModule,
            MatCardModule,
            MatTableModule,
            MatDialogModule
           ],
})

export class MaterialModule {}