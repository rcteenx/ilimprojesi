import { rVideo } from "@/public/assets/images";

import Sidebar from "@/components/ui/Sidebar";
import FooterMobileMenu from "@/components/ui/FooterMobileMenu";

export default function Home() {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="p-4 lg:p-8 w-full">
          <nav className="flex items-start justify-between font-bold text-dark-purple">
            <h1 className="text-2xl font-semibold">HomePage</h1>
            <div className="">xxx</div>
          </nav>
        </div>
      </main>
      <FooterMobileMenu />
    </>
  );
}
