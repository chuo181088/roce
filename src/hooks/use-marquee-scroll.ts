import { useRef, useCallback, useEffect } from 'react';

interface MarqueeScrollOptions {
    /** Velocidad del auto-scroll en px/frame (~60fps). Negativo = dirección contraria */
    autoScrollSpeed?: number;
    /** Factor de sensibilidad al deslizar (1 = 1:1 con el dedo) */
    sensitivity?: number;
    /** Deshabilitar eventos táctiles (para desktop) */
    disableTouch?: boolean;
    /** Pausar auto-scroll al hacer hover (para desktop) */
    pauseOnHover?: boolean;
}

/**
 * Hook para un carrusel marquee con auto-scroll suave via requestAnimationFrame.
 *
 * Usa `overflow-hidden` en el contenedor (todo el scroll es programático).
 *
 * - Auto-scroll continuo sin saltos (scrollLeft, no translateX)
 * - Mobile: control táctil con inercia al soltar
 * - Desktop: pausa en hover (opcional)
 * - Loop infinito: cuando llega al final, reinicia sin salto visual
 */
export function useMarqueeScroll<T extends HTMLElement>({
    autoScrollSpeed = 0.8,
    sensitivity = 1,
    disableTouch = false,
    pauseOnHover = false,
}: MarqueeScrollOptions = {}) {
    const containerRef = useRef<T>(null);
    const stateRef = useRef({
        isDragging: false,
        startX: 0,
        scrollLeft: 0,
        velocity: 0,
        animationFrameId: 0,
        lastTime: 0,
        lastX: 0,
        hasInertia: false,
        isHovering: false,
    });

    const speedRef = useRef(autoScrollSpeed);
    speedRef.current = autoScrollSpeed;

    const autoScrollRef = useRef<(() => void) | undefined>(undefined);

    /** Ciclo de auto-scroll usando requestAnimationFrame */
    const autoScroll = useCallback(() => {
        const state = stateRef.current;
        const container = containerRef.current;
        if (!container) return;

        // No hacer auto-scroll si: arrastrando, inercia activa, o hover pausado
        if (state.isDragging || state.hasInertia || state.isHovering) {
            state.animationFrameId = requestAnimationFrame(autoScroll);
            return;
        }

        container.scrollLeft += speedRef.current;

        // Loop infinito: cuando scrollLeft pasa del total scrolleable, reinicia
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll) {
            container.scrollLeft = 0;
        } else if (container.scrollLeft < 0) {
            container.scrollLeft = maxScroll;
        }

        state.animationFrameId = requestAnimationFrame(autoScroll);
    }, []);

    autoScrollRef.current = autoScroll;

    const startAutoScroll = useCallback(() => {
        const state = stateRef.current;
        if (state.animationFrameId) {
            cancelAnimationFrame(state.animationFrameId);
        }
        state.animationFrameId = requestAnimationFrame(autoScroll);
    }, [autoScroll]);

    const stopAutoScroll = useCallback(() => {
        const state = stateRef.current;
        state.hasInertia = false;
        if (state.animationFrameId) {
            cancelAnimationFrame(state.animationFrameId);
            state.animationFrameId = 0;
        }
    }, []);

    // ─── Touch handlers (mobile) ───

    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (disableTouch) return;
        const state = stateRef.current;
        const container = containerRef.current;
        if (!container || e.touches.length !== 1) return;

        state.isDragging = true;
        state.startX = e.touches[0].pageX;
        state.scrollLeft = container.scrollLeft;
        state.lastX = state.startX;
        state.lastTime = performance.now();
        state.velocity = 0;
        state.hasInertia = false;

        if (state.animationFrameId) {
            cancelAnimationFrame(state.animationFrameId);
            state.animationFrameId = 0;
        }
    }, [disableTouch]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (disableTouch) return;
        const state = stateRef.current;
        const container = containerRef.current;
        if (!state.isDragging || !container || e.touches.length !== 1) return;

        e.preventDefault();

        const x = e.touches[0].pageX;
        const deltaX = state.startX - x;
        const now = performance.now();
        const dt = now - state.lastTime;

        if (dt > 0) {
            const dx = x - state.lastX;
            state.velocity = dx / dt;
        }

        state.lastX = x;
        state.lastTime = now;

        container.scrollLeft = state.scrollLeft + deltaX * sensitivity;

        // Loop infinito durante el arrastre manual
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll) {
            container.scrollLeft = container.scrollLeft - maxScroll;
            state.scrollLeft = container.scrollLeft;
            state.startX = x;
        } else if (container.scrollLeft < 0) {
            container.scrollLeft = maxScroll + container.scrollLeft;
            state.scrollLeft = container.scrollLeft;
            state.startX = x;
        }
    }, [sensitivity, disableTouch]);

    const applyInertia = useCallback(() => {
        const state = stateRef.current;
        const containerEl = containerRef.current;
        if (!containerEl) return;

        state.hasInertia = true;

        const friction = 0.96;
        const minVelocity = 0.1;

        function step() {
            if (Math.abs(state.velocity) < minVelocity) {
                state.hasInertia = false;
                const cb = autoScrollRef.current;
                if (cb) {
                    state.animationFrameId = requestAnimationFrame(cb);
                }
                return;
            }

            const c = containerRef.current;
            if (!c) return;

            c.scrollLeft -= state.velocity * 16;
            state.velocity *= friction;

            const maxScroll = c.scrollWidth - c.clientWidth;
            if (c.scrollLeft >= maxScroll) {
                c.scrollLeft = 0;
            } else if (c.scrollLeft <= 0) {
                c.scrollLeft = maxScroll;
            }

            state.animationFrameId = requestAnimationFrame(step);
        }

        state.animationFrameId = requestAnimationFrame(step);
    }, []);

    const handleTouchEnd = useCallback(() => {
        if (disableTouch) return;
        const state = stateRef.current;
        if (!state.isDragging) return;

        state.isDragging = false;

        if (Math.abs(state.velocity) > 0.15) {
            applyInertia();
        } else {
            const cb = autoScrollRef.current;
            if (cb) {
                state.animationFrameId = requestAnimationFrame(cb);
            }
        }
    }, [applyInertia, disableTouch]);

    // ─── Mouse hover handlers (desktop) ───

    const handleMouseEnter = useCallback(() => {
        if (!pauseOnHover) return;
        stateRef.current.isHovering = true;
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
        if (!pauseOnHover) return;
        stateRef.current.isHovering = false;
    }, [pauseOnHover]);

    // ─── Attach/detach events ───

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        if (!disableTouch) {
            container.addEventListener('touchstart', handleTouchStart, { passive: true });
            container.addEventListener('touchmove', handleTouchMove, { passive: false });
            container.addEventListener('touchend', handleTouchEnd);
            container.addEventListener('touchcancel', handleTouchEnd);
        }

        if (pauseOnHover) {
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
        }

        startAutoScroll();

        return () => {
            stopAutoScroll();
            if (container) {
                if (!disableTouch) {
                    container.removeEventListener('touchstart', handleTouchStart);
                    container.removeEventListener('touchmove', handleTouchMove);
                    container.removeEventListener('touchend', handleTouchEnd);
                    container.removeEventListener('touchcancel', handleTouchEnd);
                }
                if (pauseOnHover) {
                    container.removeEventListener('mouseenter', handleMouseEnter);
                    container.removeEventListener('mouseleave', handleMouseLeave);
                }
            }
        };
    }, [
        disableTouch, pauseOnHover, startAutoScroll, stopAutoScroll,
        handleTouchStart, handleTouchMove, handleTouchEnd,
        handleMouseEnter, handleMouseLeave,
    ]);

    return { containerRef };
}