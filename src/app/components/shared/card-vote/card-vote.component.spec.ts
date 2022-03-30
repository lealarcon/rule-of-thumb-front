import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVoteComponent } from './card-vote.component';

describe('CardVoteComponent', () => {
  let component: CardVoteComponent;
  let fixture: ComponentFixture<CardVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
