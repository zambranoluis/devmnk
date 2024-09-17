const handleChangeTool = (id) => {

  console.log("Click en:", id);

  const paneles = {
    frontend: document.getElementById("herramientas_frontend"),
    backend: document.getElementById("herramientas_backend"),
    diseño: document.getElementById("herramientas_diseño"),
    profesional: document.getElementById("herramientas_profesional"),
  }

  let panelFrontal = "";
  let panelIzquierdo = "";
  let panelDerecho = "";
  let panelTrasero = "";

  for (const panel in paneles) {
    if (paneles[panel].classList.contains("panelFrontal")) {
      console.log("panelFrontal:", paneles[panel]);
      panelFrontal = paneles[panel];
    } else if (paneles[panel].classList.contains("panelDerecho")) {
      console.log("panelDerecho:", paneles[panel]);
      panelDerecho = paneles[panel];
    } else if (paneles[panel].classList.contains("panelIzquierdo")) {
      console.log("panelIzquierdo:", paneles[panel]);
      panelIzquierdo = paneles[panel];
    } else if (paneles[panel].classList.contains("panelTrasero")) {
      console.log("panelTrasero:", paneles[panel]);
      panelTrasero = paneles[panel];
    }
  }
  

  switch (id) {
    case "toolsLeft":
      panelFrontal.style.zIndex = "3";
      panelFrontal.style.transition = "transform 0.5s ease";
      panelFrontal.style.transform = "scale(0.5) translate(-64%, -55%)";
      panelFrontal.classList.remove("panelFrontal");
      panelFrontal.classList.add("panelIzquierdo");

      panelIzquierdo.style.zIndex = "1";
      panelIzquierdo.style.transition = "transform 0.5s ease";
      panelIzquierdo.style.transform = "scale(0.5) translate(0%, -76%)";
      panelIzquierdo.classList.remove("panelIzquierdo");
      panelIzquierdo.classList.add("panelTrasero");

      panelTrasero.style.zIndex = "2";
      panelTrasero.style.transition = "transform 0.5s ease";
      panelTrasero.style.transform = "scale(0.5) translate(64%, -55%)";
      panelTrasero.classList.remove("panelTrasero");
      panelTrasero.classList.add("panelDerecho");

      panelDerecho.style.zIndex = "4";
      panelDerecho.style.transition = "transform 0.5s ease";
      panelDerecho.style.transform = "scale(1) translate(0%, 40px)";
      panelDerecho.classList.remove("panelDerecho");
      panelDerecho.classList.add("panelFrontal");
      break
    case "toolsRight":
      panelFrontal.style.zIndex = "2";
      panelFrontal.style.transition = "transform 0.5s ease";
      panelFrontal.style.transform = "scale(0.5) translate(64%, -55%)";
      panelFrontal.classList.remove("panelFrontal");
      panelFrontal.classList.add("panelDerecho");

      panelIzquierdo.style.zIndex = "4";
      panelIzquierdo.style.transition = "transform 0.5s ease";
      panelIzquierdo.style.transform = "scale(1) translate(0%, 40px)";
      panelIzquierdo.classList.remove("panelIzquierdo");
      panelIzquierdo.classList.add("panelFrontal");

      panelTrasero.style.zIndex = "3";
      panelTrasero.style.transition = "transform 0.5s ease";
      panelTrasero.style.transform = "scale(0.5) translate(-64%, -55%)";
      panelTrasero.classList.remove("panelTrasero");
      panelTrasero.classList.add("panelIzquierdo");

      panelDerecho.style.zIndex = "1";
      panelDerecho.style.transition = "transform 0.5s ease";
      panelDerecho.style.transform = "scale(0.5) translate(0%, -76%)";
      panelDerecho.classList.remove("panelDerecho");
      panelDerecho.classList.add("panelTrasero");
      
      break
    default:
  }
  
}



const showSubHerramientas = (id) => {
  console.log("Click en:", id);
  const subHerramientas1 = document.getElementsByClassName("divTech1")
  const subHerramientas2 = document.getElementsByClassName("divTech2")

  const puntoSubHerramientas1 = document.getElementById("puntoSelectorSubHerramientas1")
  console.log("puntoSubHerramientas1:", puntoSubHerramientas1);
  const puntoSubHerramientas2 = document.getElementById("puntoSelectorSubHerramientas2")
  console.log("puntoSubHerramientas2:", puntoSubHerramientas2);
  switch (id) {
    case "puntoSelectorSubHerramientas1":
      puntoSubHerramientas1.classList.add("scale-[150%]")
      puntoSubHerramientas2.classList.remove("scale-[150%]")
      Object.entries(subHerramientas1).map((subHerramienta) => {
        console.log("i. subHerramienta:", subHerramienta);
        subHerramienta[1].classList.remove("hidden")
      })
      Object.entries(subHerramientas2).map((subHerramienta) => {
        subHerramienta[1].classList.add("hidden")
        console.log("i. subHerramienta:", subHerramienta);
      })
      break
    case "puntoSelectorSubHerramientas2":
      puntoSubHerramientas1.classList.remove("scale-[150%]")
      puntoSubHerramientas2.classList.add("scale-[150%]")
    Object.entries(subHerramientas1).map((subHerramienta) => {
      console.log("i. subHerramienta:", subHerramienta);
      subHerramienta[1].classList.add("hidden")
    })
    Object.entries(subHerramientas2).map((subHerramienta) => {
      console.log("i. subHerramienta:", subHerramienta);
      subHerramienta[1].classList.remove("hidden")
    })
      break
    default:
      break
  }
};




import iconHTML from "../home/logos_dev/HTML.png"
import iconCSS from "../home/logos_dev/CSS.png"
import iconTailwind from "../home/logos_dev/Tailwind.png"
import iconSASS from "../home/logos_dev/SASS.png"
import iconJS from "../home/logos_dev/JS.png"
import iconReact from "../home/logos_dev/React.png"
import iconPHP from "../home/logos_dev/PHP.png"
import iconPython from "../home/logos_dev/Python.png"
import iconWordPress from "../home/logos_dev/Wordpress.png"
import iconMySQL from "../home/logos_dev/MYSQL.png"
import MongoDB from "../home/logos_dev/MongoDB.png"
import iconNodeJS from "../home/logos_dev/NodeJS2.png"
import iconFigma from "../home/logos_dev/Figma.png"
import iconAP from "../home/logos_dev/AP.png"
import iconAI from "../home/logos_dev/AI.png"
import iconAE from "../home/logos_dev/AE.png"
import iconGithub from "../home/logos_dev/Github.png"
import iconGit from "../home/logos_dev/Git.png"
import iconDocker from "../home/logos_dev/Docker.png"
import iconOffice from "../home/logos_dev/MicrosoftOfficeShort.png"







const tecnologias = {
  frontend: [
    {
      id: "tec_html",
      tipo: "frontend",
      nombre: "HTML",
      imagen: iconHTML,
    },
    {
      id: "tec_css",
      tipo: "frontend",
      nombre: "CSS",
      imagen: iconCSS,
    },
    {
      id: "tec_js",
      tipo: "frontend",
      nombre: "JavaScript",
      imagen: iconJS,
    },
    {
      id: "tec_react",
      tipo: "frontend",
      nombre: "React",
      imagen: iconReact,
    },
    {
      id: "tec_tailwind",
      tipo: "frontend",
      nombre: "Tailwind",
      imagen: iconTailwind,
    },
    {
      id: "tec_sass",
      tipo: "frontend",
      nombre: "SASS",
      imagen: iconSASS,
    },    
    {
      id: "tec_wordpress",
      tipo: "frontend",
      nombre: "WordPress",
      imagen: iconWordPress,
    },
    {
      id: "tec_php",
      tipo: "frontend",
      nombre: "PHP",
      imagen: iconPHP,
    },
  ],
  backend: [
    {
      id: "tec_python",
      tipo: "backend",
      nombre: "Python",
      imagen: iconPython,
    },
    {
      id: "tec_nodejs",
      tipo: "backend",
      nombre: "NodeJS",
      imagen: iconNodeJS,
    },
    {
      id: "tec_mysql",
      tipo: "backend",
      nombre: "MySQL",
      imagen: iconMySQL,
    },
    {
      id: "tec_mongodb",
      tipo: "backend",
      nombre: "MongoDB",
      imagen: MongoDB,
    },
  ],
  diseño: [
    {
      id: "tec_ps",
      tipo: "diseño",
      nombre: "Photoshop",
      imagen: iconAP,
    },
    {
      id: "tec_ai",
      tipo: "diseño",
      nombre: "Illustrator",
      imagen: iconAI,
    },
    {
      id: "tec_ae",
      tipo: "diseño",
      nombre: "After Effects",
      imagen: iconAE,
    },
    {
      id: "tec_figma",
      tipo: "diseño",
      nombre: "Figma",
      imagen: iconFigma,
    },
  ],
  profesional: [
    {
      id: "tec_github",
      tipo: "profesional",
      nombre: "Github",
      imagen: iconGithub,
    },
    {
      id: "tec_git",
      tipo: "profesional",
      nombre: "Git",
      imagen: iconGit,
    },
    {
      id: "tec_docker",
      tipo: "profesional",
      nombre: "Docker",
      imagen: iconDocker,
    },
    {
      id: "tec_office",
      tipo: "profesional",
      nombre: "Microsoft Office",
      imagen: iconOffice,
    }
  ]
};




import ProyectoHTMLCSS from "../home/VideoProyectoHTMLCSS_VP8_VP8.webm"
import ProyectoTailwind from "../home/VideoProyectoTailwind_VP8_VP8.webm"
import ProyectoSASS from "../home/VideoProyectoSASS_VP8_VP8.webm"
import ProyectoJS from "../home/VideoProyectoJS_VP8_VP8.webm"
import ProyectoReact from "../home/VideoProyectoReact_VP8_VP8.webm"
import ProyectoPizzas from "../home/VideoProyectoPizzas_VP8_VP8.webm"
import ProyectoTravels from "../home/VideoProyectoTravels_VP8_VP8.webm"
import ProyectoRenovaciones from "../home/VideoProyectoRenovaciones_VP8_VP8.webm"

import CapturaSitioHTMLCSS from "../home/CapturaSitioHTMLCSS.jpg"
import CapturaSitioTailwind from "../home/CapturaSitioTailwind.jpg"
import CapturaSitioSASS from "../home/CapturaSitioSASS.jpg"
import CapturaSitioJS from "../home/CapturaSitioJS.jpg"
import CapturaSitioReact from "../home/CapturaSitioReact.png"
import CapturaSitioPizzas from "../home/CapturaSitioPizzas.jpg"
import CapturaSitioTravels from "../home/CapturaSitioTravels.jpg"
import CapturaSitioRenovaciones from "../home/CapturaSitioRenovaciones.jpg"



const proyectos = [
  {
    imagen: "https://i.ibb.co/TbxC31h/Captura-Sitio-HTMLCSS.jpg",
    video: ProyectoHTMLCSS,
    nombre: "HTML y CSS",
    descripcion: "HTML es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos.",
    descripcion2: "CSS se puede usar para estilos de texto muy básicos como, por ejemplo, cambiar el color y el tamaño de los encabezados y los enlaces. Se puede utilizar para crear un diseño, como podría ser convertir una columna de texto en una composición (en-US) con un área de contenido principal y una barra lateral para información relacionada. Incluso se puede usar para crear efectos de animación.",
    url: "https://zambranoluis.github.io/Proyecto_Uno-CSS-/",
    icon1: iconHTML,
    icon2: iconCSS
  },
  {
    imagen: "https://i.ibb.co/m4wZfdT/Captura-Sitio-JS.jpg",
    video: ProyectoJS,
    nombre: "JavaScript",
    descripcion: "Javascript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.",
    url: "https://zambranoluis.github.io/Proyecto_Cuatro-JS-/",
    icon1: iconJS
  },
  {
    imagen: "https://i.ibb.co/Y8NHmmr/Captura-Sitio-Tailwind.jpg",
    video: ProyectoTailwind,
    nombre: "Tailwind CSS",
    descripcion: "Tailwind es un marco de trabajo CSS con clases predefinidas que puedes utilizar para construir y diseñar páginas web directamente en tu marcado. Te permite escribir CSS en tu HTML en forma de clases pre-establecidas.",
    url: "https://zambranoluis.github.io/Proyecto_Tres-Tailwind-/",
    icon1: iconTailwind
  },
  {
    imagen: "https://i.ibb.co/x7fN5bn/Captura-Sitio-SASS.jpg",
    video: ProyectoSASS,
    nombre: "SASS",
    descripcion: "SASS es un preprocesador de CSS compatible con todas sus versiones. Por lo tanto, se trata de una herramienta utilizada por los desarrolladores web para traducir un código de hojas de estilo no estándar a un código CSS estándar, legible por la mayoría de los navegadores.",
    url: "https://zambranoluis.github.io/Proyecto_Dos-SASS-/",
    icon1: iconSASS
  },
  {
    imagen: "https://i.ibb.co/n3Hjnpw/Captura-Sitio-React.png",
    nombre: "REACT",
    video: ProyectoReact,
    descripcion: "React es un framework JavaScript para crear aplicaciones reales, basado en la librearía de JavaScript React para la creación de componentes visuales, cambiando el propósito de los mismos para, en lugar de ser ejecutados en navegador, correr directamente sobre las plataformas. Incluyendo además el manejo de información de procesos asíncronos en tiempo real como el consumo de una API.",
    url: "https://zambranoluis.github.io/Proyecto_Cinco-REACT-/",
    icon1: iconReact
  },
  {
    imagen: "https://i.ibb.co/gMQTxpz/Captura-Sitio-Pizzas.jpg",
    video: ProyectoPizzas,
    nombre: "Desarrollo",
    descripcion: "Desarrollo de una aplicación web para una pizzería",
    url: "https://zambranoluis.github.io/pizzasmaracaibo/"
  },
  {
    imagen: "https://i.ibb.co/7GRdCTD/Captura-Sitio-Travels.jpg",
    video: ProyectoTravels,
    nombre: "Desarrollo",
    descripcion: "Desarrollo de una aplicación web para una agencia de viajes",
    url: "https://zambranoluis.github.io/travels/"
  },
  {
    imagen: "https://i.ibb.co/VMBbDF7/Captura-Sitio-Renovaciones.jpg",
    video: ProyectoRenovaciones,
    nombre: "Producto",
    descripcion: "Producto profesional entregado, de una aplicación web para una empresa de construcción y reparación de techos",
    url: "https://zambranoluis.github.io/GIORenovaciones/"
  },
]

export {
  handleChangeTool,
  showSubHerramientas,
  
  tecnologias,
  proyectos

}