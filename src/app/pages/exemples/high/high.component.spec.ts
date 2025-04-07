import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighComponent } from './high.component';

describe('HighComponent', () => {
  let component: HighComponent;
  let fixture: ComponentFixture<HighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
