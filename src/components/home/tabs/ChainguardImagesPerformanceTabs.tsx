import { useEffect, useState } from "react";

const iframeUrls = {
  go: "https://chainguard-dev.github.io/image-comparison/comparison-go.html",
  nginx:
    "https://chainguard-dev.github.io/image-comparison/comparison-nginx.html",
  php: "https://chainguard-dev.github.io/image-comparison/comparison-php.html",
};

//NOTE THESE TABS AND URLS ARE HARD CODED. CAN MAKE IT SO THAT THESE ARE IMPORTED IN THRU CONTENTFUL. NOT SURE HOW OFTEN THESE WILL CHANGE,
//SO SO LONG AS THESE ARENT REAALLY CHANGING OFTE, I THINK WE CAN LEAVE THEM HARD CODED.

export default function ChainguardImagesPerformanceTabs() {
  const [activeTab, setActiveTab] = useState<"go" | "nginx" | "php">("go");

  let activeUrl = activeTab;

  return (
    <>
      <div className="tabs-container space-x-[24px] pl-[17px] mb-24px ">
        <button
          onClick={() => activeTab !== "go" && setActiveTab("go")}
          className="py-[12px] px-[24px] text-cg-text-blue font-[500] border border-cg-text-blue rounded-[100px] hover:border-[#32343a] hover:text-[#32343a] transition-all duration-[.4s]"
        >
          Go
        </button>
        <button
          onClick={() => activeTab !== "nginx" && setActiveTab("nginx")}
          className="py-[12px] px-[24px] text-cg-text-blue font-[500] border border-cg-text-blue rounded-[100px] hover:border-[#32343a] hover:text-[#32343a] transition-all duration-[.4s]"
        >
          Nginx
        </button>
        <button
          onClick={() => activeTab !== "php" && setActiveTab("php")}
          className="py-[12px] px-[24px] text-cg-text-blue font-[500] border border-cg-text-blue rounded-[100px] hover:border-[#32343a] hover:text-[#32343a] transition-all duration-[.4s]"
        >
          PHP
        </button>
      </div>
      <div className="Images-performance-iframes p-[34px] h-full ">
        <iframe
          className="w-full h-full min-h-[370px]  p-[24px] border border-[#ebecfe] rounded-[8px] shadow-card"
          src={iframeUrls[activeUrl]}
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
}
