import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bowser from "bowser";

// Define types for cursor references
type CursorRefs = {
  cursorRef: React.RefObject<HTMLDivElement>;
  cursorSmallRef: React.RefObject<HTMLDivElement>;
  cursorLargeRef: React.RefObject<HTMLDivElement>;
};

const useCustomCursor = (): CursorRefs => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorSmallRef = useRef<HTMLDivElement>(null);
  const cursorLargeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorSmall = cursorSmallRef.current;
    const cursorLarge = cursorLargeRef.current;

    if (!cursor || !cursorSmall || !cursorLarge) return;

    // Detect if device is touch-based (hide cursor for mobile/tablet)
    const browser = Bowser.getParser(window.navigator.userAgent);
    const isTouchDevice = browser.getPlatformType() === "tablet" || browser.getPlatformType() === "mobile";

    if (isTouchDevice) {
      cursor.style.display = "none";
      return;
    }

    let smallPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let largePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const updateCursor = () => {
      smallPos.x += (mousePos.x - smallPos.x) * 0.2;
      smallPos.y += (mousePos.y - smallPos.y) * 0.2;

      largePos.x += (mousePos.x - largePos.x) * 0.1;
      largePos.y += (mousePos.y - largePos.y) * 0.1;

      gsap.set(cursorSmall, { x: smallPos.x, y: smallPos.y });
      gsap.set(cursorLarge, { x: largePos.x, y: largePos.y });

      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const handlePointerEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute("data-pointer") === "hover") {
        gsap.to(cursorLarge, { scale: 2, opacity: 1, duration: 0.3 });
        gsap.to(cursorSmall, { scale: 0, opacity: 0, duration: 0.3 });
      }
    };

    const handlePointerLeave = () => {
      gsap.to(cursorLarge, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(cursorSmall, { scale: 1, opacity: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Select elements properly as HTMLElement
    const pointerElements = document.querySelectorAll("[data-pointer]") as NodeListOf<HTMLElement>;
    pointerElements.forEach((element) => {
      element.addEventListener("mouseenter", handlePointerEnter);
      element.addEventListener("mouseleave", handlePointerLeave);
    });

    updateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      pointerElements.forEach((element) => {
        element.removeEventListener("mouseenter", handlePointerEnter);
        element.removeEventListener("mouseleave", handlePointerLeave);
      });
    };
  }, []);

  return { cursorRef, cursorSmallRef, cursorLargeRef };
};

export default useCustomCursor;
