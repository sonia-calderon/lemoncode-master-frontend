import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('/common/components/confirmation-dialog/confirmation-dialog.component', () => {
  // Everything ok
  it('should render the component given the correct props', () => {
    // Arrange
    const onAccept = () => {};
    const onClose = () => {};

    const props = {
      isOpen: true,
      onAccept,
      onClose,
      title: 'My dialog',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: 'My children content',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const title = screen.getByText('My dialog');
    const closeLabel = screen.getByText('Close');
    const acceptLabel = screen.getByText('Accept');
    const childrenContent = screen.getByText('My children content');

    // Assert
    expect(title).toBeInTheDocument();
    expect(closeLabel).toBeInTheDocument();
    expect(acceptLabel).toBeInTheDocument();
    expect(childrenContent).toBeInTheDocument();
  });

  // Click Close BTN
  it('should close the dialog when click on "Close" button', async () => {
    // Arrange
    const onAccept = () => {};
    const onClose = vi.fn();

    const props = {
      isOpen: true,
      onAccept,
      onClose,
      title: 'My dialog',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: 'My children content',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const closeBtnElement = screen.getByRole('button', {
      name: 'Close',
    });

    await userEvent.click(closeBtnElement);

    // Assert
    expect(onClose).toHaveBeenCalled();
  });

  // Click Accept BTN
  it('should call onAccept and onClose when clicking on "Accept" button', async () => {
    // Arrange
    const onAccept = vi.fn();
    const onClose = vi.fn();

    const props = {
      isOpen: true,
      onAccept,
      onClose,
      title: 'My dialog',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: 'My children content',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const acceptBtnElement = screen.getByRole('button', {
      name: 'Accept',
    });

    await userEvent.click(acceptBtnElement);

    // Assert
    expect(onAccept).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
  });
});
