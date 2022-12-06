import { ReactNode } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

interface props {
  sm?: ReactNode;
  md?: ReactNode;
  lg?: ReactNode;
  xl?: ReactNode;
  breakpoints?: { sm: number; md: number; lg: number };
}

export const AdaptativeView = ({
  sm,
  lg,
  md,
  xl,
  breakpoints = { sm: 380, md: 720, lg: 1200 },
}: props) => {
  const renderView = () => {
    const { width } = useWindowSize();

    if (width === undefined) return;

    if (sm && width <= breakpoints.sm) {
      return sm;
    }

    if (md && width > breakpoints.sm && width <= breakpoints.md) {
      return md;
    }

    if (lg && width > breakpoints.md && width <= breakpoints.lg) {
      return lg;
    }

    if (xl && width > breakpoints.lg) {
      return xl;
    }
  };

  return <>{renderView()}</>;
};
