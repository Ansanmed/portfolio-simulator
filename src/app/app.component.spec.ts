import { AppComponent } from './app.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ActivatedRoute, Router } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    return MockBuilder(AppComponent)
      .mock(ActivatedRoute, {
        snapshot: {
          paramMap: {
            get: jest.fn().mockReturnValue('some-value'),
          },
          children: [], // Mockea children como un array vacío
        },
      } as unknown as ActivatedRoute)
      .mock(Router, {
        navigate: jest.fn(),
      });
  });

  it('should create the app', () => {
    const fixture = MockRender(AppComponent);
    component = fixture.point.componentInstance;
    expect(component).toBeDefined();
  });

  it('should return false for isModalActive when no modal outlet exists', () => {
    const fixture = MockRender(AppComponent);
    component = fixture.point.componentInstance;
    expect(component.isModalActive()).toBe(false);
  });
});
