import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpertiseHighlightsComponent } from './pages/expertise-highlights/expertise-highlights.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'expertise', component: ExpertiseHighlightsComponent },
    { path: 'blog', component: BlogComponent}
];
