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
            MatMenuModule

          ],
})
export class MaterialModule { }
