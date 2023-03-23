import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {

  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeWidgetComponent ],
      imports: [FontAwesomeModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate a id when the id input is missing', ()=>{

    expect(component.id).toBeTruthy();

  });

  it('Should NOT auto generate a id when the id input is present', ()=>{

    const id: string = 'some-id';

    component.id = id;

    expect(component.id)
    .withContext(`component id: ${component.id}`)
    .toBe(id);

  });

});
