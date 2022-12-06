import { TabsContext, TabsContextInterface } from "@/context/TabsContext";
import { ReactElement, useState } from "react";
import { Tab } from "../Tab/Tab";

const context = TabsContext;

export interface Props {
  children?: ReactElement<typeof Tab>[];
  initialValue?: number | string;
  onChange?: (value?: number | string) => void;
  orientation?: "horizontal" | "vertical";
}

export const Tabs = ({
  children,
  initialValue = 0,
  onChange,
  orientation,
}: Props) => {
  const [activeTabValue, setActiveTabValue] = useState(initialValue);

  const TabContextValue: TabsContextInterface = {
    activeTabValue,
    setActiveTabValue,
  };

  if (onChange) onChange(activeTabValue);

  return (
    <context.Provider value={TabContextValue}>
      <div
        className={
          "Tabs" + orientation == "vertical" ? ` Tabs--${orientation}` : ""
        }
      >
        {children}
      </div>
    </context.Provider>
  );
};
