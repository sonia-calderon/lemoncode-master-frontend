import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as tracker from 'react-promise-tracker';

describe('common/components/spinner/spinner.component', () => {
  it('should open the modal when the promise is in progress', () => {
    // Arrange
    vi.mock('react-promise-tracker');
    vi.spyOn(tracker, 'usePromiseTracker').mockReturnValue({
      promiseInProgress: true,
    });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const modal = screen.getByRole('presentation');
    expect(modal).toBeInTheDocument();
  });

  it('should not render the component when the promise is not in progress', () => {
    // Arrange
    vi.mock('react-promise-tracker');
    vi.spyOn(tracker, 'usePromiseTracker').mockReturnValue({
      promiseInProgress: false,
    });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const modal = screen.queryByRole('presentation');
    expect(modal).not.toBeInTheDocument();
  });
});
