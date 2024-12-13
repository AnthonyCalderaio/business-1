import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpertiseHighlightsComponent } from './pages/expertise-highlights/expertise-highlights.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DownloadsComponent } from './downloads/downloads.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'expertise', component: ExpertiseHighlightsComponent },
    { path: 'downloads', component: DownloadsComponent },
    { path: 'blog', component: BlogComponent}
];
