import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasInfo6Component } from './notas-info6.component';

describe('NotasInfo6Component', () => {
  let component: NotasInfo6Component;
  let fixture: ComponentFixture<NotasInfo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasInfo6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotasInfo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
