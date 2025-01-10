import {
  lastArticle2,
  lastArticle3,
  topMenu,
  flow3,
  flow6,
} from "@/content/data";

import Sidebar from "@/components/ui/Sidebar";
import FooterMobileMenu from "@/components/ui/FooterMobileMenu";

import TopBar from "@/components/sections/home/0-top-bar";
import TopMenu from "@/components/sections/home/0-top-menu";
import Flow3 from "@/components/sections/home/1-flow-3";
import Flow6 from "@/components/sections/home/1-flow-6";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-4 lg:p-8 w-full">
          <div className="mx-auto max-w-4xl">
            <TopBar lastArticle2={lastArticle2} lastArticle3={lastArticle3} />
            <TopMenu topMenu={topMenu} />
            <Flow3 flow={flow3} />
            <Flow6 flow={flow6} />
          </div>
        </main>
      </div>
      <FooterMobileMenu />
    </>
  );
}
