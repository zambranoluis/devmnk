import { useState, useEffect } from "react"
import { useLocation, Link, NavLink } from "react-router-dom"

import PhoneCallGif from "../assets/navbar/PhoneCallWhite.gif"

import LogoDevMnk from "../assets/navbar/CharLogoDev.png"
import LogoDevSquare from "../assets/navbar/SquareLogoDev.png"

import { IoMenu } from "react-icons/io5";

import { TiArrowSortedDown } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const NavBar = () => {

  const [showSubMenu, setShowSubMenu] = useState(false);
	const [activeLinkId, setActiveLinkId] = useState(null);
	const location = useLocation();

	const handleSubMenu = (linkId) => {
		setShowSubMenu(!showSubMenu);
		setActiveLinkId(linkId);
	};

	const handleLinkClick = (linkId) => {
		if (activeLinkId === linkId) {
			setActiveLinkId(null);
		} else {
			setActiveLinkId(linkId);
		}
	};

	useEffect(() => {
		setShowSubMenu(false);
		setActiveLinkId(null)
	}, [location.pathname])

  const [showAside , setShowAside] = useState(false)

  const handleMenuClick = () => {
    setShowAside(!showAside)
  }

  const links = [
		{
			id: "NavSite1",
			name: "Acerca Dev",
			to: "/acerca-dev",
		},
		{
			id: "NavSite2",
			name: "Proyectos",
			to: "/proyectos",
		},
    {
			id: "NavSite3",
			name: "Productos",
			to: "/productos",
		},
		{
			id: "NavSite4",
			name: "Contacto",
      to: "/contacto",
		},
	]

  const styles = {
    navBarSmall: "flex w-screen h-[130px]   md:hidden items-center justify-center px-4 py-2 ",

    sectionLogoSmall: "flex items-center justify-center",
    linkLogoSmall: "flex p-4 justify-center items-center",
    imgLogoSmall: " h-[60px]",

    sectionCallNowSmall: "flex w-[40%] items-center justify-center",
    buttonCallNowSmall: "flex items-center justify-center gap-1 px-2 py-1 bg-white/50 text-black hover:text-white hover:bg-white/20  rounded-lg",
    gifButtonCallNowSmall: "w-[30px] h-[30px] ",
    textButtonCallNowSmall: "",

    sectionSitesSmall: "flex  w-[30%] items-center justify-center",
    
    
    buttonMenuSmall: "flex  items-center justify-center rounded-sm",
    iconButtonMenuSmall: "text-6xl text-[#28d2d2]",
    

    containerSitesSmall:"flex  static w-[200px]  z-[100] flex-col fixed right-[0px] w-[30%] h-full justify-end items-center ",
    divUserAside: "flex h-[180px] flex-col bg-gray-800 w-full",
    buttonCloseAside: "w-full flex pt-6 pr-6 justify-end ",
    iconButtonCloseAside :"rounded-full border border-white border-[1px] p-[3px]",
    avatarUserAside: "h-[100px] place-self-center",

    divSitesSmall: "flex flex-col items-center   h-full w-full bg-[#000018]/40  backdrop-blur-sm",
    listSiteSmall: "flex flex-col  hover:bg-[#000018]/80 hover:text-[#ef8f21] w-full items-center justify-center px-4 py-2 **",
    navLinkSiteSmall: "flex flex-col text-lg font-bold",
    navLinkTextSmall: "flex justify-center items-center",

    subContainerSmall: "flex flex-col",
    listSubSiteSmall: "flex flex-col",
    divSubSiteSmall: "flex flex-col",
    subLinkSmall: "flex",


    // Large
    navBarLarge: "hidden w-screen  md:flex h-[120px] items-center justify-center ",

    sectionLogoLarge: "flex w-[20%]  items-center justify-center",
    divLogoLarge: "flex p-5",
    logoLarge: "h-[80px]",

    sectionSitesLarge: "flex w-[60%] xl:w-[40%]  items-center justify-center",

    containerSitesLarge: "flex justify-evenly items-center w-full ",

    listSiteLarge: "flex",
    navLinkSiteLarge: "flex text-xl font-bold",
    navLinkTextLarge: " ",

    subContainerLarge: "flex",

    listSubSiteLarge : "flex",
    divSubSiteLarge : "flex",
    subLinkLarge :"",

    sectionCallNowLarge: "flex w-[20%]  items-center justify-center",
    buttonCallNowLarge: "flex items-center justify-center gap-1 px-2 py-1 bg-white/50 rounded-lg",
    gifButtonCallNowLarge: "w-[30px] h-[30px] ",
    textButtonCallNowLarge: "",
  }

  const stylesActive = ({ isActive }) => ({
		color: (isActive) ? "#ef8f21" : "",
	});

  return (
    <>
      <nav className={styles.navBarSmall}>
        <section className={styles.sectionLogoSmall}>
          <Link to="/" className={styles.linkLogoSmall}>
            <img src={LogoDevMnk} className={styles.imgLogoSmall} alt="" />
          </Link>
        </section>
        <section className={styles.sectionCallNowSmall}>
          <Link to="/llamar" className={styles.buttonCallNowSmall}>
            <img src={PhoneCallGif} className={styles.gifButtonCallNowSmall} alt="" />
            <p className={styles.textButtonCallNowSmall}>Llamar</p>
          </Link>
        </section>
        <section className={styles.sectionSitesSmall}>
          <button className={styles.buttonMenuSmall}>
            <IoMenu className={styles.iconButtonMenuSmall} onClick={(e) => {e.preventDefault(); handleMenuClick()} } />
          </button>
          { (showAside) && <div className={styles.containerSitesSmall}>
            
            <div className={styles.divUserAside}>
              <button className={styles.buttonCloseAside}>
                <ImCross className={styles.iconButtonCloseAside} onClick={(e) => {e.preventDefault(); handleMenuClick()} } />
              </button>
              <Link to="/" className={styles.linkLogoSmall}>
                <img src={LogoDevSquare} className={styles.avatarUserAside} alt="" />
              </Link>
            </div>
              
            <ul className={styles.divSitesSmall}>
              {links.map((link) => (
                <li key={link.id} className={styles.listSiteSmall} >
                  <NavLink
                    to={link.to}
                    className={styles.navLinkSiteSmall}
                    style={stylesActive}
                    onClick={link.subLinks ? () => handleSubMenu(link.id) : () => handleLinkClick(link.id)}
                  >
                    {(link.subLinks) ? <p className={styles.navLinkTextSmall}>{link.name} <TiArrowSortedDown /></p> : link.name}
                  </NavLink>

                  {link.subLinks && (
                    <ul className={`${styles.subContainerSmall} ${activeLinkId === link.id && showSubMenu ? '' : 'hidden'}`}>
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.index} className={styles.listSubSiteSmall}>
                          <div className={styles.divSubSiteSmall}>
                            <NavLink
                              to={subLink.to}
                              className={styles.subLinkSmall}
                              style={stylesActive}
                              onClick={() => handleLinkClick(link.index)}
                            >
                              {subLink.name}
                            </NavLink>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          }
        </section>

      </nav>



{/* NavNar Large */}

      <nav className={styles.navBarLarge}>
        <section className={styles.sectionLogoLarge}>
          <div className={styles.divLogoLarge}>
            <Link to="/">
              <img src={LogoDevMnk} className={styles.logoLarge} alt="" />
            </Link>
            
          </div>
        </section>
        <section className={styles.sectionSitesLarge}>
          <ul className={styles.containerSitesLarge}>
            {links.map((link) => (
              <li key={link.id} className={styles.listSiteLarge} >
                <NavLink
                  to={link.to}
                  className={styles.navLinkSiteLarge}
                  style={stylesActive}
                  onClick={link.subLinks ? () => handleSubMenu(link.id) : () => handleLinkClick(link.id)}
                >
                  {(link.subLinks) ? <p className={styles.navLinkTextLarge}>{link.name} <TiArrowSortedDown /></p> : link.name}
                </NavLink>

                {link.subLinks && (
                  <ul className={`${styles.subContainerLarge} ${activeLinkId === link.id && showSubMenu ? '' : 'hidden'}`}>
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.index} className={styles.listSubSiteLarge}>
                        <div className={styles.divSubSiteLarge}>
                          <NavLink
                            to={subLink.to}
                            className={styles.subLinkLarge}
                            style={stylesActive}
                            onClick={() => handleLinkClick(link.index)}
                          >
                            {subLink.name}
                          </NavLink>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.sectionCallNowLarge}>
          <button className={styles.buttonCallNowLarge}>
            <img src={PhoneCallGif} className={styles.gifButtonCallNowLarge} alt="" />
            <p className={styles.textButtonCallNowLarge}>Llamar</p>
          </button>
        </section>
      </nav>




      
    
    </>

  );
}

export default NavBar;