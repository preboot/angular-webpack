// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { LazyComponent } from './lazy.component';

describe('Lazy Component', () => {
  const html = '<my-lazy></my-lazy>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [LazyComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Lazy Works!');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
