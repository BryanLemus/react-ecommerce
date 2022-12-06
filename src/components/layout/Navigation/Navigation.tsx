import { AdaptativeView, Tab, Tabs } from "@/components/ui";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="Navigation">
      <AdaptativeView
        /* phone navigation */
        sm={
          <div className="Navigation--sm">
            <Tabs>
              <Tab value="Discover">Discover</Tab>
              <Tab value="Explore">Explore</Tab>
              <Tab value="Favorites">Wishes</Tab>
              <Tab value="Cart">Cart</Tab>
              <Tab value="Profile">Profile</Tab>
            </Tabs>
          </div>
        }

        /* tablet navigation */
        md={
          <div className="Navigation--md">
            <div className="Logo">Oggie</div>

            <Tabs orientation="vertical">
              <Tab value="Discover">Discover</Tab>
              <Tab value="Explore">Explore</Tab>
              <Tab value="Favorites">Wishes</Tab>
              <Tab value="Cart">Cart</Tab>
            </Tabs>

            <div className="Profile"></div>
          </div>
        }

        lg={
          <div className="Navigation--lg">
          </div>
        }
      />
    </div>
  );
};
