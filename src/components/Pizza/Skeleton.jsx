import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#d1d1d1"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="439" cy="430" r="84" />
    <circle cx="111" cy="166" r="106" />
    <rect x="5" y="23" rx="9" ry="9" width="211" height="28" />
    <rect x="7" y="421" rx="10" ry="10" width="80" height="33" />
    <rect x="149" y="415" rx="10" ry="10" width="68" height="42" />
    <rect x="11" y="518" rx="0" ry="0" width="206" height="102" />
    <rect x="6" y="283" rx="10" ry="10" width="224" height="97" />
  </ContentLoader>
);

export default Skeleton;
