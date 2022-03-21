import Chart from "../../AuthComponents/chart/Chart";
import FeaturedInfo from "../../AuthComponents/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../AuthComponents/widgetSm/WidgetSm";
import WidgetLg from "../../AuthComponents/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
