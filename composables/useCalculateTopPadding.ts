import { toValue, onMounted, onUnmounted } from 'vue';
import type { MaybeRefOrGetter } from 'vue';

export function useCalculateTopPadding(
  target: MaybeRefOrGetter,
  source: MaybeRefOrGetter,
) {
  const calculatePadding = () => {
    const TargetElement = toValue(target);
    const SourceElement = toValue(source);
    if (!TargetElement || !SourceElement) return;
    const { height } = SourceElement.$el.getBoundingClientRect();
    Object.assign(TargetElement.$el.style, {
      paddingTop: `${height}px`,
    });
  };

  onMounted(() => {
    calculatePadding();
    window.addEventListener('resize', calculatePadding);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', calculatePadding);
  });

  return {
    calculatePadding,
  };
}
