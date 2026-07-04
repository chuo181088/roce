import React, { useEffect, useState } from "react";

type HeroAnimateProps = {
  children: (showEffects: boolean) => React.ReactNode;
};

export function HeroAnimate({ children }: HeroAnimateProps) {
  const [showEffects, setShowEffects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEffects(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return <>{children(showEffects)}</>;
}
