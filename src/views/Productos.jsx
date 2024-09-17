
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


import Feedback from "../assets/productos/feedback.png"
import Informacion from "../assets/productos/informacion.png"
import Red from "../assets/productos/red-global.png"

const productos = [
  {
    id: "producto_1",
    precio: "100$",
    nombre: "Alojamiento Web",
    contenido: ["1 Dominio Personalizado", "1 Alojamiento Web"],
    footer: "(no incluye contenido html)"
  },
  {
    id: "producto_2",
    precio: "150$",
    nombre: "Sitio Web Básico",
    contenido: ["1 Alojamiento Web", "1 Página Web"],
    footer: "página adicional: desde 50$"
  },
  {
    id: "producto_3",
    precio: "300$",
    nombre: "Sitio Web Completo",
    contenido: ["1 Alojamiento Web", "3 Páginas Web"],
    adicional: ["Formularios de Información", "Captación de Correo", "Localización en el Mapa", "Redes Sociales", "Whatsapp Personalizado" ],
    footer: "página adicional: desde 50$"
  },
  {
    id: "producto_4",
    precio: "500$",
    nombre: "Sitio Web Avanzado",
    contenido: ["1 Alojamiento Web", "5 Páginas Web"],
    adicional: ["Formularios de Información", "Captación de Correo", "Localización en el Mapa", "Redes Sociales", "Whatsapp Personalizado", "Tienda Virtual", "Stock", "Carrito", "Ventas No Automáticas"],
    footer: "página adicional: desde 50$"
  },

]
const recomendaciones = [
  {
    id: "recomendacion_1",
    icono: Feedback,
    texto: "Asesorías y Conversaciones disponibles si no se tiene ningún concepto previamente desarrollado para el sitio web."
  },
  {
    id: "recomendacion_2",
    icono: Informacion,
    texto: "Para optimizar el tiempo de entrega del sitio se recomienda tener un diseño previamente desarrollado ya sea en Photoshop, Figma, junto con cualquier contenido multimedia que se desee utilizar en el sitio web como el caso de logos, fondos, colores, fuentes, imágenes, iconos, entre otros."
  },
  {
    id: "recomendacion_3",
    icono: Red,
    texto: "Se recomienda considerar para el servicio de Blog y/o Tienda en Línea, la implementación de una base de datos adicional si se desea manejar el sistema de Inventario, Ventas y Facturación almacenando la información correpondiente (mediante el uso de API)."
  },
]

const Productos = () => {
  return (
    <>
      <NavBar />
      <main className="w-full flex flex-col gap-8 ">
        <section className="w-full flex flex-col justify-center items-center ">
          <div className="gap-8 flex flex-col w-full  p-2 justify-center items-center" >
            {
              productos.map(producto => (
                <div key={producto.id} className="flex flex-col  px-2 py-2 gap-2 w-[300px] lg:w-[400px] bg-[#035460]/50 rounded-md justify-center  ">
                  <h1 className=" text-4xl font-bold p-2 place-self-end"><span className="text-2xl">desde  </span>{producto.precio}</h1>
                  <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">{producto.nombre}</h1>
                    <div className="flex flex-col">
                      {
                        producto.contenido && producto.contenido.map((contenido, index) => (
                          <h1 key={`contenido_${index}`} className="text-2xl">{contenido}</h1>
                        ))
                      }
                    </div>
                  </div>
                  <div className="flex flex-col">
                    {producto.adicional && <h1 className="text-2xl font-bold">Puede contener: </h1>
                    }
                    {
                      producto.adicional && producto.adicional.map((adicional, index) => (
                        
                        <h1 key={`adicional_${index}`} className="text-xl">• {adicional}</h1>
                      ))
                    }
                  </div>
                  <h1 className="text-xl font-bold">{producto.footer}</h1>
                </div>
              ))
            }
          </div>
        </section>
        <section className="w-full flex justify-center items-center px-2 py-4">
          <div className="flex flex-col w-full  p-2 justify-center items-center gap-8 max-w-[500px]">
            {recomendaciones.map(recomendacion => (
              <div key={recomendacion.id} className="flex flex-col gap-2 border-2 border-white p-2 rounded-md hover:scale-105 select-none">
                <img src={recomendacion.icono} alt="iconoRecomendacion" className="w-[30px]" />
                <p className="text-justify">{recomendacion.texto}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Productos;