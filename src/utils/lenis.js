import Lenis from "lenis";

/*
 * Initialize Lenis smooth scroll
 * Use ONLY inside a component (not globally)
 */

export const initLenis = (options = {}) => {
  const lenis = new Lenis({
    smooth: true,
    duration: .8,
    lerp: 0.04,
    ...options,
  });

  let rafId;

  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };

  rafId = requestAnimationFrame(raf);

  return {
    lenis,
    destroy: () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    },
  };
};
