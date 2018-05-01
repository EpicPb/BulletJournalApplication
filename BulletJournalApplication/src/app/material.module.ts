import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        MatTabsModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatMenuModule
      } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            MatProgressSpinnerModule,
            MatCardModule,
            MatSidenavModule,
            MatCheckboxModule,
            MatDividerModule,
            MatListModule,
            MatIconModule,
            MatGridListModule,
            MatTabsModule,
            MatFormFieldModule,
            MatExpansionModule,
            MatProgressSpinnerModule,
            MatMenuModule

          ],
  exports: [MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            MatProgressSpinnerModule,
            MatCardModule,
            MatSidenavModule,
            MatCheckboxModule,
            MatDividerModule,
            MatListModule,
            MatIconModule,
            MatGridListModule,
            MatTabsModule,
            MatFormFieldModule,
            MatExpansionModule,
            MatProgressSpinnerModule,
            MatMenuModule

          ],
})
export class MaterialModule { }
