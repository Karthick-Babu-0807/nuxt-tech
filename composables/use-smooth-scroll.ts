export function useSmoothScroll(headerSelector = "header") {
  function getOffset(): number {
    const headerEl = document.querySelector(headerSelector) as HTMLElement | null;
    return headerEl?.getBoundingClientRect().height || 0;
  }

  function scrollToEl(target: string | HTMLElement, customOffset?: number) {
    let el: HTMLElement | null = null;

    if (typeof target === "string") {
      el = document.querySelector(target);
    }
    else {
      el = target;
    }

    if (el) {
      const offset = customOffset ?? getOffset();
      const top = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }

  return { scrollToEl };
}
