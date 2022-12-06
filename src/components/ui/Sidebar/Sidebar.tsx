import { ReactNode } from "react";

interface props {
  top?: ReactNode;
  center?: ReactNode;
  bottom?: ReactNode;
}

export const Sidebar = ({ top, center, bottom }: props) => {
  return (
    <div className="Sidebar">
      <div className="Sidebar-top">{top}</div>
      <div className="Sidebar-center">{center}</div>
      <div className="Sidebar-bottom">{bottom}</div>
    </div>
  );
};
