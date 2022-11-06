import { Size, useWindowSize } from "@/hooks/useWindowSize";
import React from "react";
import { DesktopLayout } from "./DesktopLayout/DesktopLayout";
import { PhoneLayout } from "./PhoneLayout/PhoneLayout";
import { TabletLayout } from "./TabletLayout/TabletLayout";

interface Props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const size: Size = useWindowSize();
  if (size.width != undefined) {
    if (size.width <= 768) return <PhoneLayout>{children}</PhoneLayout>;
    if (size.width <= 1200) return <TabletLayout>{children}</TabletLayout>;
    else return <DesktopLayout>{children}</DesktopLayout>;
  } else {
    return null;
  }
};
