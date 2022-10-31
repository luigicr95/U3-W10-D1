import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioCompComponent } from './mio-comp.component';

describe('MioCompComponent', () => {
  let component: MioCompComponent;
  let fixture: ComponentFixture<MioCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MioCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MioCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
