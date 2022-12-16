import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EisenhowerInputsComponent } from './eisenhower-inputs.component';

describe('EisenhowerInputsComponent', () => {
  let component: EisenhowerInputsComponent;
  let fixture: ComponentFixture<EisenhowerInputsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EisenhowerInputsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EisenhowerInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
