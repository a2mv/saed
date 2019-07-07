import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SaedSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SaedSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SaedSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SaedSharedModule {
  static forRoot() {
    return {
      ngModule: SaedSharedModule
    };
  }
}
