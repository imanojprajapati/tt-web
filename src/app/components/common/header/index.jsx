import DesktopMenu from "@/src/app/components/common/navigation/desktop-nav";
import { menuItemsData } from "@/src/app/components/common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "@/src/app/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "@/src/app/components/common/header/HeaderButton";
import HeaderLogo from "@/src/app/components/common/header/HeaderLogo";

function Header() {
	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopMenu />
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="Toupto Technologies" />
				</nav>
			</div>
		</header>
	); 
}

export default Header;
