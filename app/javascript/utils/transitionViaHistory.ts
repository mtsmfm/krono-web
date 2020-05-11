import { MouseEvent } from 'react';

export const transitionViaHistory = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  window.history.pushState({}, '', event.currentTarget.getAttribute('href'));
}
