import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie';
import { PageNumbersComponent } from './page-numbers/page-numbers';
@NgModule({
	declarations: [MovieComponent,
    PageNumbersComponent],
	imports: [],
	exports: [MovieComponent,
    PageNumbersComponent]
})
export class ComponentsModule {}
