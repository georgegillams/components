import React, { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useFocusTrap } from '../focus-trap/use-focus-trap';
import {
  Body,
  CloseButton,
  Dialog,
  HeaderRow,
  Scrim,
  Title,
  Viewport,
} from './modal.styles';

export type ModalCloseReason = 'closeButton' | 'scrim' | 'escape';

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean;
  onClose: (reason: ModalCloseReason) => void;
  title: React.ReactNode;
  children: React.ReactNode;
  closeOnScrimClick?: boolean;
  closeOnEscape?: boolean;
  portal?: boolean;
  padded?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement | null>;
  ariaLabelledById?: string;
}

const canUseDOM = () => typeof window !== 'undefined' && !!window.document;

const Modal = (props: ModalProps) => {
  const {
    open,
    onClose,
    title,
    children,
    closeOnScrimClick = true,
    closeOnEscape = true,
    portal = true,
    padded = true,
    initialFocusRef,
    ariaLabelledById,
    ...rest
  } = props;

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const previousBodyOverflowRef = useRef<string | null>(null);

  const titleId = useMemo(() => {
    if (ariaLabelledById) return ariaLabelledById;
    return `modal-title-${Math.random().toString(36).slice(2, 10)}`;
  }, [ariaLabelledById]);

  useFocusTrap(dialogRef, open, { initialFocusRef });

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    if (!canUseDOM()) {
      return undefined;
    }

    previouslyFocusedRef.current =
      (document.activeElement as HTMLElement | null) ?? null;

    // Lock background scroll while open.
    previousBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflowRef.current ?? '';

      const toRestore = previouslyFocusedRef.current;
      if (toRestore && typeof toRestore.focus === 'function') {
        toRestore.focus();
      }
    };
  }, [open]);

  useEffect(() => {
    if (!open || !closeOnEscape) {
      return undefined;
    }
    if (!canUseDOM()) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing) return;
      if (event.key === 'Escape' || event.keyCode === 27) {
        event.preventDefault();
        onClose('escape');
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, closeOnEscape, onClose]);

  if (!open) {
    return null;
  }

  const content = (
    <>
      <Scrim
        aria-hidden="true"
        role="presentation"
        onClick={closeOnScrimClick ? () => onClose('scrim') : undefined}
      />
      <Viewport>
        <Dialog
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          {...rest}
        >
          <HeaderRow>
            <Title id={titleId}>{title}</Title>
            <CloseButton
              aria-label="Close"
              onClick={() => onClose('closeButton')}
            >
              ×
            </CloseButton>
          </HeaderRow>
          <Body padded={padded}>{children}</Body>
        </Dialog>
      </Viewport>
    </>
  );

  if (portal && canUseDOM()) {
    return createPortal(content, document.body);
  }

  return content;
};

export default Modal;
