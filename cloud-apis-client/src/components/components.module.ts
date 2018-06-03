import { NgModule } from '@angular/core';
import { TitleComponent } from './title/title';
import { CallbackComponent } from './callback/callback';
@NgModule({
	declarations: [TitleComponent,
    CallbackComponent],
	imports: [],
	exports: [TitleComponent,
    CallbackComponent]
})
export class ComponentsModule {}
