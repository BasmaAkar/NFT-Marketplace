import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisicComponent } from './artisic.component';

describe('ArtisicComponent', () => {
  let component: ArtisicComponent;
  let fixture: ComponentFixture<ArtisicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
