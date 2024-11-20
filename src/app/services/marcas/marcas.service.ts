import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  marcasItems = [
    { imagen: 'assets/marcas/sangsin2-1-768x156.png', descripcion: "Fabricante lider en la industria Coreana de piezas y partes para frenos de fricción, cuenta con más de 6 plantas a nivel mundial. Sangsin está equipado con las mejores tecnologías originales globalmente apreciadas y es suplidor OEM para Hyundai, Kia, GM Daewoo, SSangyong y Renault Samsung. Sangsin está equipado con las mejores tecnologías originales globalmente apreciadas y es suplidor OEM para Hyundai, Kia, GM Daewoo, SSangyong y Renault Samsung." },
    { imagen: 'assets/marcas/HANSANG-26032-768x248.png', descripcion: "La marca HANSANG maneja una amplia gama de repuestos de parte de caja como son: Piñón y corona, Deslizante, Piñones, Trenfijo, Satélites, Planetarios, Propulsor, Bronces, etc." },
    { imagen: 'assets/marcas/mando2-1-768x208.png', descripcion: "Mando Corporation pertenece al grupo Halla Holding y cuenta con 20 fabricas en el mundo, 16 centros de investigación y con más de 11,000 trabajadores. La visión de Mando Corporation es crear productos seguros, ecológicos y de fácil uso." },
    { imagen: 'assets/marcas/TCIC-e1646945558616.png', descripcion: "Tae Chul Industrial Co. fabricante de piezas de automóviles con más de 70 años de experiencia en la producción de bombas y bombines de freno y embrague de la mejor calidad. Cuenta con 5 plantas en Asia." },
    { imagen: 'assets/marcas/valeo-1-e1646949714959.jpg', descripcion: "Valeo Pyeong Hwa International es una compañía que cuenta con más de 90 años de creación y se ha convertido en socio de los principales fabricantes de automóviles, con operaciones en 33 países, diseñando tecnologías y sistemas innovadores para que los futuros automóviles sean más intuitivos, autónomos y amigables con el medio ambiente." },
    { imagen: 'assets/marcas/YULIM-1-768x236.png', descripcion: "Establecida en 1998, Yulim High-Tech ha crecido como una de las compañías líderes de la industria del automóvil en Corea. Produce y exporta piezas para sistemas de suspensión y dirección." },
  ]

  constructor() { }

  getMarcasItems() {
    return this.marcasItems;
  }
}
