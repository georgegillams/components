import { RefObject, useEffect } from 'react';

// @ts-expect-error a11y-focus-scope is not typed
import { scopeFocus, unscopeFocus } from 'a11y-focus-scope';

type FocusTrapOptions = {
  initialFocusRef?: RefObject<HTMLElement | null>;
};

const isHTMLElement = (value: unknown): value is HTMLElement =>
  !!value && typeof value === 'object' && 'focus' in (value as any);

const focusableSelector = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]',
].join(',');

const getFirstFocusable = (container: HTMLElement): HTMLElement | null => {
  const focusable = container.querySelectorAll<HTMLElement>(focusableSelector);
  for (const el of focusable) {
    if (el.offsetParent === null) continue; // basic visibility check
    return el;
  }
  return null;
};

export const useFocusTrap = (
  containerRef: RefObject<HTMLElement | null>,
  active: boolean,
  options: FocusTrapOptions = {},
) => {
  useEffect(() => {
    if (!active) {
      return undefined;
    }

    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    scopeFocus(container);

    const preferredInitial = options.initialFocusRef?.current;
    const initialFocusTarget =
      (preferredInitial && isHTMLElement(preferredInitial) && preferredInitial) ||
      getFirstFocusable(container) ||
      container;

    // Ensure the container itself can receive focus as a last resort.
    if (initialFocusTarget === container && container.tabIndex < 0) {
      container.tabIndex = -1;
    }
    initialFocusTarget.focus();

    return () => {
      unscopeFocus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, containerRef]);
};

