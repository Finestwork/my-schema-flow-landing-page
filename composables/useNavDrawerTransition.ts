import anime from 'animejs/lib/anime.es';

export function useNavDrawerTransition() {
  const onEnter = (el: Element, done: () => void) => {
    const Background = <HTMLElement>el.childNodes[0];
    const Drawer = <HTMLElement>el.childNodes[1];
    if (!Background || !Drawer) return;
    Object.assign(Background.style, {
      opacity: '0',
    });
    Object.assign(Drawer.style, {
      right: '-100%',
    });
    anime({
      targets: Background,
      opacity: 1,
      easing: 'easeOutQuint',
      duration: 750,
    });
    anime({
      targets: Drawer,
      right: 0,
      easing: 'easeOutQuint',
      duration: 750,
      complete: done,
    });
  };
  const onLeave = (el: Element, done: () => void) => {
    const Background = el.childNodes[0];
    const Drawer = el.childNodes[1];
    if (!Background || !Drawer) return;
    anime({
      targets: Background,
      opacity: 0,
      easing: 'easeOutQuint',
      duration: 350,
      complete: () => {
        Background.remove();
      },
    });
    anime({
      targets: Drawer,
      right: '-100%',
      easing: 'easeOutQuint',
      duration: 750,
      complete: done,
    });
  };

  return {
    onEnter,
    onLeave,
  };
}
