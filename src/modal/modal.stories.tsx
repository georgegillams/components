/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';

import Button from '../button';
import Modal from './modal';

export default {
  title: 'Atoms/Modal',
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal title"
        initialFocusRef={closeButtonRef}
      >
        <p>
          This is modal content. Focus should stay trapped inside the modal.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={() => setOpen(false)} ref={closeButtonRef as any}>
            Close
          </Button>
          <Button href="/test">Focusable link-style button</Button>
        </div>
      </Modal>
    </div>
  );
};

export const LongContent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open long modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Scrollable content">
        <div style={{ height: '120vh' }}>
          Long content scrolls inside the modal body, not the page.
        </div>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal>
    </div>
  );
};

export const DarkBackground = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Modal on dark canvas">
        <p>Scrim and elevated surface should read clearly against a dark page.</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal>
    </div>
  );
};

