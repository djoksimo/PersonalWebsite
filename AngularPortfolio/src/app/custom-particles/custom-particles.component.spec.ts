import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomParticlesComponent } from './custom-particles.component';

describe('CustomParticlesComponent', () => {
  let component: CustomParticlesComponent;
  let fixture: ComponentFixture<CustomParticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomParticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
