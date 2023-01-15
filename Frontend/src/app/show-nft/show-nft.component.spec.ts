import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNftComponent } from './show-nft.component';

describe('ShowNftComponent', () => {
  let component: ShowNftComponent;
  let fixture: ComponentFixture<ShowNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
