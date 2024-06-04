import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoanhmucComponent } from './doanhmuc.component';

describe('DoanhmucComponent', () => {
  let component: DoanhmucComponent;
  let fixture: ComponentFixture<DoanhmucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoanhmucComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoanhmucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
