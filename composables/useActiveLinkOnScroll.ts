import { nextTick, onUnmounted } from 'vue';

type TOptions = {
  selector: string;
  floatingSelector?: string;
};

export function useActiveLinkOnScroll(
  options: TOptions | Record<string, never> = {},
) {
  let links: NodeListOf<Element> | [] = [];
  let containers: Array<number> = [];
  let floatingElement: HTMLElement | null = null;
  const ActiveClasses = 'text-cyan-500';
  const DefaultClass = 'text-slate-900';
  const initializeContents = () => {
    links = document.querySelectorAll(options.selector);
    if (options.floatingSelector) {
      floatingElement = document.querySelector(options.floatingSelector);
    }
    containers = Array.from(links).map((link) => {
      const Href = link.getAttribute('href') ?? '';
      const Container = document.getElementById(Href.split('#')[1]);
      return Container?.offsetTop ?? -1;
    });
  };
  const updateActiveLink = () => {
    let lastActiveLink: Element | null = null;
    const offset = floatingElement?.offsetHeight ?? 0;
    containers.forEach((section, index) => {
      if (section - offset <= window.scrollY + offset) {
        lastActiveLink = links[index];
      }
    });
    links.forEach((link) => {
      if (link === lastActiveLink) {
        lastActiveLink?.classList.add(ActiveClasses);
        lastActiveLink?.classList.remove(DefaultClass);
      } else {
        link.classList.add(DefaultClass);
        link.classList.remove(ActiveClasses);
      }
    });
  };
  onMounted(async () => {
    await nextTick();
    initializeContents();
    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', initializeContents);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveLink);
    window.removeEventListener('resize', initializeContents);
  });
}
