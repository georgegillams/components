import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Modal from './modal';

describe('modal', () => {
  it('should render title and children when open', () => {
    render(
      <Modal open onClose={() => null} title="My title">
        <div>Content</div>
      </Modal>,
    );

    expect(screen.getByRole('dialog')).toBeTruthy();
    expect(screen.getByText('My title')).toBeTruthy();
    expect(screen.getByText('Content')).toBeTruthy();
  });

  it('should move focus inside the dialog when opened', async () => {
    render(
      <Modal open onClose={() => null} title="My title">
        <div>Content</div>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');
    await waitFor(() => {
      expect(dialog.contains(document.activeElement)).toBe(true);
    });
  });

  it('should keep focus inside the dialog when focus moves outside', async () => {
    render(
      <div>
        <button type="button" data-testid="outside">
          Outside
        </button>
        <Modal open onClose={() => null} title="My title">
          <div>Content</div>
        </Modal>
      </div>,
    );

    const dialog = screen.getByRole('dialog');
    await waitFor(() => {
      expect(dialog.contains(document.activeElement)).toBe(true);
    });

    screen.getByTestId('outside').focus();

    await waitFor(() => {
      expect(dialog.contains(document.activeElement)).toBe(true);
    });
  });

  it('should call onClose when close button clicked', () => {
    const onClose = jest.fn();
    render(
      <Modal open onClose={onClose} title="My title">
        <div>Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByLabelText('Close'));
    expect(onClose).toHaveBeenCalledWith('closeButton');
  });

  it('should call onClose on Escape', () => {
    const onClose = jest.fn();
    render(
      <Modal open onClose={onClose} title="My title">
        <div>Content</div>
      </Modal>,
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledWith('escape');
  });
});

