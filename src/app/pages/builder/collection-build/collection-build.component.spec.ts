import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionBuildComponent } from './collection-build.component';

describe('CollectionBuildComponent', () => {
  let component: CollectionBuildComponent;
  let fixture: ComponentFixture<CollectionBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionBuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
