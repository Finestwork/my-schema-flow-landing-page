import SweetScroll from 'sweet-scroll';
import { nextTick, onMounted, ref } from 'vue';

export function useSweetScroll() {
  const scroll = ref<SweetScroll | null>(null);

  onMounted(async () => {
    await nextTick();
    scroll.value = new SweetScroll({
      trigger: '.link',
      header: '.nav',
      preventDefault: true,
    });
  });
  return {
    scroll,
  };
}
