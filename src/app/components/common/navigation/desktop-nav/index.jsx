import DesktopNav from "@/src/app/components/common/navigation/desktop-nav/DesktopNav";
import Dropdown from "@/src/app/components/common/navigation/desktop-nav/Dropdown";
import DropdownItem from "@/src/app/components/common/navigation/desktop-nav/DropdownItem";
import NavItem from "@/src/app/components/common/navigation/desktop-nav/NavItem";
function DesktopMenu() {
  return (
    <DesktopNav>
      <NavItem url="">Home</NavItem>
      <NavItem url="about-us">About Us</NavItem>
      <NavItem dropdown title="Services">
        <Dropdown>
        {/* <DropdownItem url="services">
            Services Details
          </DropdownItem> */}
          <DropdownItem url="services/website-development">
            Webiste Development
          </DropdownItem>
          <DropdownItem url="services/mobile-app-development">
            Mobile App Development
          </DropdownItem>
          <DropdownItem url="services/software-development">
            Software Development
          </DropdownItem>
          <DropdownItem url="services/ui-ux-design">UI/UX Design</DropdownItem>
          <DropdownItem url="services/seo-optimazation">
            SEO & Optimazation
          </DropdownItem>
          <DropdownItem url="services/digital-marketing">
            Digital Marketing
          </DropdownItem>
          <DropdownItem url="services/it-strategy-planning">
            IT Strategy & Planning
          </DropdownItem>
        </Dropdown>
      </NavItem>
      <NavItem url="portfolio">Portfolio</NavItem>
      <NavItem url="blogs">Blogs</NavItem>
      <NavItem url="contact-us">Contact Us</NavItem>
    </DesktopNav>
  );
}

export default DesktopMenu;
