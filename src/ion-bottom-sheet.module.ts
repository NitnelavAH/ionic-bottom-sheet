import { NgModule, ModuleWithProviders } from "@angular/core";
import { IonBottomSheetComponent } from "./components/ion-bottom-sheet.component";
import { IonBottomSheetProvider } from "./providers/ion-bottom-sheet-provider";

@NgModule({
  imports: [IonBottomSheetComponent], // Use imports for standalone
  exports: [IonBottomSheetComponent],
})
export class IonBottomSheetModule {
  static forRoot(): ModuleWithProviders<IonBottomSheetModule> {
    return {
      ngModule: IonBottomSheetModule,
      providers: [IonBottomSheetProvider],
    };
  }
}
