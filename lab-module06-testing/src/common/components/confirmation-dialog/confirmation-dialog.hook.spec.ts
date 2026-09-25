import { act, renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('/common/components/confirmation-dialog/confirmation-dialog.hook', () => {
  it('should return an object: isOpen, itemToDelete, onAccept, onClose, onOpenDialog', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    const defaultIsOpen = false;
    expect(result.current.isOpen).toEqual(defaultIsOpen);

    const defaultItemToDelete = {
      id: '',
      name: '',
    };
    expect(result.current.itemToDelete).toEqual(defaultItemToDelete);

    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should open the dialog and set the item to delete when it calls onOpenDialog', () => {
    // Arrange
    const newItem = {
      id: '1',
      name: 'John',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(newItem);
    });

    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(newItem);
  });

  it('should close the dialog when it calls onClose', () => {
    // Arrange
    const newItem = {
      id: '1',
      name: 'John',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(newItem);
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('should reset the item to delete when it calls onAccept', () => {
    // Arrange
    const newItem = {
      id: '1',
      name: 'John',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(newItem);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });
});
