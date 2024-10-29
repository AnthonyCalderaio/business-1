import { Routes } from '@angular/router';
import { ExpertiseHighlightsComponent } from './projects/consulting/expertise-highlights/expertise-highlights.component';
import { HomeComponent } from './projects/consulting/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'expertise', component: ExpertiseHighlightsComponent }
];
