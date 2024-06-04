import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangdieukhienComponent } from './bangdieukhien.component';

describe('BangdieukhienComponent', () => {
  let component: BangdieukhienComponent;
  let fixture: ComponentFixture<BangdieukhienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BangdieukhienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BangdieukhienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
