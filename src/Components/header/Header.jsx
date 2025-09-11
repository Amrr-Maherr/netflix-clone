"use client";

import StaggeredMenu from "../StaggeredMenu/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Movies", ariaLabel: "Learn about us", link: "/Movies" },
  { label: "Series", ariaLabel: "View our services", link: "/Series" },
  { label: "Actors", ariaLabel: "Get in touch", link: "/Actors" },
];


export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full h-[100dvh]">
      <StaggeredMenu
        position="right"
        items={menuItems}
        displaySocials={false}
        displayItemNumbering={false}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#E50914"
        changeMenuColorOnOpen={true}
        colors={["#141414", "#000000"]}
        logoUrl="/images/Netflix_Logo_PMS.png"
        accentColor="#E50914"
      />
    </nav>
  );
}
