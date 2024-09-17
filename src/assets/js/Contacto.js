import iconoPhone from "../contacto/logos_social/Phone.png"
import iconoWhatsapp from "../contacto/logos_social/Whatsapp.png"
import iconoEmail from "../contacto/logos_social/Email.png"
import iconoInstagram from "../contacto/logos_social/Instagram.png"
import iconoFacebook from "../contacto/logos_social/Facebook.png"
import iconoX from "../contacto/logos_social/X.png"
import iconoTiktok from "../contacto/logos_social/Tiktok.png"
import iconoYoutube from "../contacto/logos_social/Youtube.png"
import iconoLinkedin from "../contacto/logos_social/Linkedin.png"
import iconoTelegram from "../contacto/logos_social/Telegram.png"

const socials = [
  {
    id: "social_email",
    imagen: iconoEmail,
    info: "devmnk@gmail.com",
    bgColor: "#2296f3"
  },
  {
    id: "social_phone",
    imagen: iconoPhone,
    info: "+58 412 616 8123",
    bgColor: "#3dba2e"
  },
  {
    id: "social_whatsapp",
    imagen: iconoWhatsapp,
    info: "+58 412 616 8123",
    bgColor: "#42e25d"
  },
  {
    id: "social_instagram",
    imagen: iconoInstagram,
    info: "@devmnk",
    bgColor: "#cb12a0"
  },
  {
    id: "social_facebook",
    imagen: iconoFacebook,
    info: "@devmnk",
    bgColor: "#1677f0"

  },
  
  {
    id: "social_x",
    imagen: iconoX,
    info: "@devmnk",
    bgColor: "#000000"
  },
  {
    id: "social_tiktok",
    imagen: iconoTiktok,
    info: "@devmnk",
    bgColor: "#000000"
  },
  {
    id: "social_youtube",
    imagen: iconoYoutube,
    info: "@devmnk",
    bgColor: "#ff0000"
  },
  {
    id: "social_linkedin",
    imagen: iconoLinkedin,
    info: "Luis Zambrano",
    bgColor: "#2967b0"
  },
  {
    id: "social_telegram",
    imagen: iconoTelegram,
    info: "+58 412 616 8123",
    bgColor: "#00a3e3"
  }
]


const handleSwipeSocials = () => {
  const socials1 = document.getElementById("socials1Small")
  const socials2 = document.getElementById("socials2Small")

  if (socials1.classList.contains("divSocials")) {
    socials1.style.transition = "transform 0.5s ease"
    socials1.style.transform = " translate(-50%, -50%) scale(0)"
    socials1.classList.remove("divSocials")

    setTimeout(() => {
      socials2.style.transition = "transform 0.5s ease"
      socials2.style.transform = " translate(-100%, 0%) scale(1)"
      socials2.classList.add("divSocials")
    }, 500)
  } else if (socials2.classList.contains("divSocials")) {
    socials2.style.transition = "transform 0.5s ease"
    socials2.style.transform = " translate(-150%, -50%) scale(0)"
    socials2.classList.remove("divSocials")

    setTimeout(() => {
      socials1.style.transition = "transform 0.5s ease"
      socials1.style.transform = " translate(0%, 0%) scale(1)"
      socials1.classList.add("divSocials")
    }, 500)
  }
}

const handleCardGrow = (idSocial, idCheckbox, idButton, idInfo ) => {

  const soundOpen = document.getElementById('cardOpen');
  const soundClose = document.getElementById('cardClose');

  // const soundOpen = new Audio('../contacto/cardOpen.mp3');
  // const soundClose = new Audio('../contacto/cardClose.mp3');

  console.log ("Click en:", idSocial);
  
  const social = document.getElementById(idSocial);
  const checkbox = document.getElementById(idCheckbox);
  const button = document.getElementById(idButton);
  const info = document.getElementById(idInfo);


  switch (checkbox.checked) {
    case true:
      soundOpen.play();
      social.classList.remove("cerrarCartaContacto");
      social.classList.add("abrirCartaContacto");
      
      setTimeout(() => {
        info.classList.remove("hidden");
      }, 300);
      
      break;
    case false:
      soundClose.play();
      info.classList.add("hidden");
      social.classList.remove("abrirCartaContacto");
      social.classList.add("cerrarCartaContacto");
      break;
  }
}

export {
  socials,
  handleSwipeSocials,
  handleCardGrow
}

