import { Container } from "./container";
import { Logo } from "./logo";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import DashBoardPanel from "./dashboard-panel";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/70 bg-linear-to-b from-teal-400 to-teal-700 backdrop-blur">
      <Container>
        <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-6">
          {/* LEFT - Logo */}
          <div className="flex min-w-0 justify-start">
            <Logo />
          </div>

          {/* CENTER - Main Navigation */}
          <div className="flex min-w-0 items-center justify-center">
            <MainNav />
          </div>

          {/* RIGHT - Login / Register / Profile */}
          <div className="flex min-w-0 items-center justify-end">
            <div className="hidden md:flex">
              <DashBoardPanel />
            </div>

            <div className="flex md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
