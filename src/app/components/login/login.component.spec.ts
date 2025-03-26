import { MockBuilder, MockRender } from 'ng-mocks';
import { LoginComponent } from './login.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    return MockBuilder(LoginComponent)
      .mock(FormBuilder, {
        group: jest.fn().mockImplementation(
          () =>
            ({
              get: jest.fn().mockImplementation(
                () =>
                  ({
                    value: '',
                  }) as unknown as FormControl
              ),
              controls: {
                email: { value: '' } as FormControl,
                password: { value: '' } as FormControl,
              },
            }) as unknown as FormGroup
        ),
      })
      .mock(Router, {
        navigate: jest.fn(),
      });
  });

  it('should render', () => {
    const fixture = MockRender(LoginComponent);
    component = fixture.point.componentInstance;
    expect(component).toBeDefined();
    expect(component.email).toBeDefined();
    expect(component.password).toBeDefined();
  });
});
