import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNftComponent } from './edit-nft.component';

describe('EditNftComponent', () => {
  let component: EditNftComponent;
  let fixture: ComponentFixture<EditNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
