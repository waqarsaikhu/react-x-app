import React from "react";
import TrendingCard from "../Cards/RightBar/Trendig";
import WhoToFollowCard from "../Cards/RightBar/WhoToFollow";

function RightSidebar() {
  return (
    <div className="  h-sceen w-96 mr-24  bg-white p-4 shadow">
      <TrendingCard />
      <WhoToFollowCard />
    </div>
  );
}

export default RightSidebar;
