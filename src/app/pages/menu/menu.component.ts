import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  burguer = [
    { 
      img: "https://imag.bonviveur.com/hamburguesa-clasica.jpg", 
      title: 'Clásica', 
      description: 'Carne de res, lechuga, tomate, cebolla morada, queso cheddar y mayonesa, todo en un pan de hamburguesa suave.', 
      price: 9.95
    },
    { 
      img: "https://arteflame.com/cdn/shop/articles/American_BBQ_Bacon_Cheeseburger.webp?v=1722970280&width=1600", 
      title: 'BBQ Bacon', 
      description: 'Carne de res a la parrilla, crujiente bacon, cebolla caramelizada, queso cheddar, salsa barbacoa y lechuga en pan brioche.', 
      price: 10.50
    },
    { 
      img: "https://img.freepik.com/fotos-premium/hamburguesa-hawaiana-pina-parrilla-glaseado-teriyaki_1272857-142853.jpg?w=900", 
      title: 'Hawaiana', 
      description: 'Carne de res jugosa, piña a la parrilla, jamón, queso suizo, mayonesa y ketchup en pan de hamburguesa suave.', 
      price: 11.95
    },
    { 
      img: "https://www.floraprofessional.com/es-es/-/media/Project/Upfield/Brands/Upfield-Professional/Upfield-Professional-ES/Recipes/Sync-Img/b17a0720-1a2d-439b-ba2c-039e8e7e5063.jpg?rev=7153aa18229d4618801c3866425ca257", 
      title: 'Tex-Mex', 
      description: 'Carne de res, guacamole casero, cebolla morada, lechuga, tomate, queso cheddar y salsa mexicana, todo en pan brioche.', 
      price: 12.00
    },
    { 
      img: "https://mandolina.co/wp-content/uploads/2021/03/610747100-1.jpg", 
      title: 'Gourmet', 
      description: 'Carne de res, foie gras, cebolla caramelizada, queso de cabra, mayonesa trufada y rúcula en pan artesanal.', 
      price: 13.50
    },
    { 
      img: "https://img.freepik.com/fotos-premium/hamburguesa-queso-lechuga-tomate-encima_853177-4946.jpg", 
      title: 'Deluxe', 
      description: 'Carne de res, bacon crujiente, cebolla caramelizada, queso cheddar, lechuga, tomate y salsa especial en pan brioche.', 
      price: 13.00
    }
  ];

  pizza = [
    { 
      img: "https://cdn.recetasderechupete.com/wp-content/uploads/2017/01/pizza_margarita.jpg", 
      title: 'Margarita', 
      description: 'Salsa de tomate, mozzarella fresca, albahaca fresca y un toque de aceite de oliva extra virgen, horneada en horno de leña.', 
      price: 8.00
    },
    { 
      img: "https://www.cobsbread.com/us/wp-content//uploads/2022/09/Pepperoni-pizza-850x630-1.png", 
      title: 'Pepperoni', 
      description: 'Base de tomate, queso mozzarella derretido y una generosa capa de rodajas de pepperoni crujiente.', 
      price: 9.50
    },
    { 
      img: "https://assets.unileversolutions.com/recipes-v2/244028.jpg", 
      title: 'Hawaiana', 
      description: 'Salsa de tomate, queso mozzarella, jamón ibérico y piña jugosa, combinados para un toque dulce y salado.', 
      price: 10.00
    },
    { 
      img: "https://comedera.com/wp-content/uploads/sites/9/2022/04/Pizza-cuatro-quesos-shutterstock_1514858234.jpg?w=4096", 
      title: 'Cuatro Quesos', 
      description: 'Deliciosa mezcla de mozzarella, queso azul, queso parmesano y queso de cabra, todo sobre una base de tomate.', 
      price: 11.00
    },
    { 
      img: "https://www.insights.la/wp-content/uploads/2016/04/pizza-620x400.jpg", 
      title: 'Extravagante', 
      description: 'Base de tomate, mozzarella, champiñones, pimientos, aceitunas negras y un toque de cebolla caramelizada.', 
      price: 12.50
    },
    { 
      img: "https://www.cocinatis.com/archivos/202207/CTIS0506-receta-pizza-integral-vegetariana_large_16x9.jpg?1", 
      title: 'Vegetariana', 
      description: 'Salsa de tomate, queso mozzarella, berenjenas, calabacines, pimientos y cebolla morada.', 
      price: 9.00
    }
  ];

  meat = [
    { 
      img: "https://okdiario.com/img/recetas/2017/07/21/entrecot-de-ternera-a-la-brasa-3.jpg", 
      title: 'Entrecot a la Parrilla', 
      description: 'Jugoso entrecot de res a la parrilla, sazonado con sal gruesa y acompañado de papas fritas y ensalada fresca.', 
      price: 16.95
    },
    { 
      img: "https://cdn0.uncomo.com/es/posts/3/9/5/como_hacer_costillas_bbq_en_sarten_50593_orig.jpg", 
      title: 'Costillas BBQ', 
      description: 'Costillas de cerdo tiernas, bañadas en salsa barbacoa casera, servidas con papas fritas y mazorca de maíz.', 
      price: 14.50
    },
    { 
      img: "https://asadacho.com/wp-content/uploads/2013/05/pollo-a-la-parrilla.jpg", 
      title: 'Pollo Asado', 
      description: 'Mitad de pollo asado al estilo tradicional, marinado con hierbas aromáticas y servido con puré de papa y verduras al vapor.', 
      price: 12.95
    },
    { 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtrA4HZkk1WjmhGR7zdanbb7XC7shhF975SPyNbRpGDiLZ5U2OyezbC7dejWPVasKP6k&usqp=CAU", 
      title: 'Churrasco Argentino', 
      description: 'Churrasco a la parrilla, con un toque de chimichurri, acompañado de papas a la francesa y ensalada de tomate y aguacate.', 
      price: 18.00
    },
    { 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mFjId96gkrgLd27qdKbakl_ItmQwojJc0w&s", 
      title: 'Solomillo de Cerdo', 
      description: 'Solomillo de cerdo, cocinado al horno con una capa de mostaza y hierbas, servido con papas rústicas y una ensalada fresca.', 
      price: 15.00
    },
    { 
      img: "https://canalcocina.es/medias/images/1812SaborDeHogarEp12PaletillaCorderoAsada2.jpg", 
      title: 'Paleta de Cordero', 
      description: 'Tierna paleta de cordero asada lentamente con hierbas mediterráneas, acompañada de arroz pilaf y puré de zanahorias.', 
      price: 20.00
    }
  ];

  pasta = [
    { 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCf8JewlfSbxlq1xvgIZ7-pQB9nQIa7CDrRA&s", 
      title: 'Spaghetti Boloñesa', 
      description: 'Clásico spaghetti con salsa boloñesa casera hecha con carne de res, tomate fresco, cebolla y especias italianas.', 
      price: 9.50
    },
    { 
        img: "https://img.freepik.com/fotos-premium/pasta-penne-cremosa-salsa-alfredo-s_1177965-164792.jpg", 
        title: 'Penne Alfredo', 
        description: 'Penne al dente con cremosa salsa Alfredo, queso parmesano, tomate de la huerta y un toque de perejil fresco.', 
        price: 10.00
    },
    { 
        img: "https://img.freepik.com/fotos-premium/lasagna-clasica-salsa-bolognese-superficie-oscura_974629-110188.jpg", 
        title: 'Lasagna Clásica', 
        description: 'Capas de pasta intercaladas con carne de res, salsa de tomate, queso ricotta y mozzarella derretida.', 
        price: 11.50
    },
    { 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhdDBpzQJZQLm0f9keiBd8LksOxg16bIZrQ&s", 
      title: 'Fettuccine Carbonara', 
      description: 'Fettuccine suave en una rica salsa carbonara con panceta crujiente, yema de huevo, queso pecorino y pimienta negra.', 
      price: 12.00
    },
    { 
      img: "https://popmenucloud.com/cdn-cgi/image/width=1200,height=630,format=auto,fit=cover/lyrtodhx/9713db1a-8617-4b6e-bc6c-df92dee4f397", 
      title: 'Rigatoni al Pesto', 
      description: 'Rigatoni al dente con salsa pesto hecha con albahaca fresca, piñones, ajo, queso parmesano y aceite de oliva extra virgen.', 
      price: 10.50
    },
    { 
      img: "https://i.blogs.es/5bde26/espaguetis_a_la_marinera/1366_2000.jpeg", 
      title: 'Pasta con Mariscos', 
      description: 'Spaghetti con una mezcla de mariscos frescos, como camarones, calamares y mejillones, en una salsa de tomate y ajo.', 
      price: 14.00
    }
  ];

  fish = [
    { 
      img: "https://img.freepik.com/fotos-premium/plato-salmon-asado-preparado-perfeccion_1288284-13593.jpg", 
      title: 'Salmón Asado', 
      description: 'Filete de salmón a la parrilla, acompañado de puré de papa y espárragos al vapor.', 
      price: 15.50
    },
    { 
        img: "https://okdiario.com/img/2019/12/14/merluza-rebozada-con-harina-de-garbanzo.jpg", 
        title: 'Merluza Rebozada', 
        description: 'Filetes de merluza crujientes rebozados y servidos con papas fritas y salsa tártara.', 
        price: 12.50
    },
    { 
        img: "https://okdiario.com/img/2018/07/16/atun-con-sesamo-655x368.jpg", 
        title: 'Atún con Sésamo', 
        description: 'Lomo de atún sellado con costra de sésamo y acompañado de arroz y salsa de soja.', 
        price: 16.00
    },
    { 
      img: "https://circulomarisqueria.com/wp-content/uploads/2016/09/Rodaballo-a-la-bilbaina-1024x686-1.jpg", 
      title: 'Rodaballo a la Parrilla', 
      description: 'Rodaballo fresco a la parrilla, servido con papas a la sal y una salsa ligera de limón y aceite de oliva.', 
      price: 18.00
    },
    { 
      img: "https://media-cdn.tripadvisor.com/media/photo-s/06/2f/68/b6/restaurante-mirador-de.jpg", 
      title: 'Pescado a la Plancha', 
      description: 'Filetes de pescado fresco a la plancha, acompañados de ensalada verde y arroz basmati.', 
      price: 14.00
    },
    { 
      img: "https://i.blogs.es/af35b0/dorada_verduras/650_1200.jpeg", 
      title: 'Dorada al Horno', 
      description: 'Dorada al horno con hierbas mediterráneas, acompañada de puré de zanahorias y calabacines salteados.', 
      price: 17.00
    }
  ];

  salad = [
    { 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3NnajTX2tAY7aCYZRWW5Jwi3NitPhrERRA&s", 
      title: 'César', 
      description: 'Lechuga romana, crutones, queso parmesano y pechuga de pollo a la parrilla, aderezado con salsa César.', 
      price: 8.50
    },
    { 
        img: "https://imag.bonviveur.com/ensalada-griega.jpg", 
        title: 'Griega', 
        description: 'Tomates frescos, pepino, cebolla roja, queso feta, aceitunas y un toque de aceite de oliva virgen extra.', 
        price: 7.50
    },
    { 
      img: "https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2024-05/ensalada-mediterranea-mesa-acompannamientos.jpg?itok=PueFxBX8", 
      title: 'Mediterránea', 
      description: 'Mezcla de hojas verdes, aguacate, tomate cherry, aceitunas y aderezo de limón y hierbas frescas.', 
      price: 9.00
    },
    { 
      img: "https://img.freepik.com/fotos-premium/ensalada-espinacas-medallones-cerdo-ensalada-apetitosa-util-verduras-carne-menu-restaurante-plato-cafe-cerdo-aguacate-salsa-espinacas-sesamo_168258-998.jpg", 
      title: 'Espinacas', 
      description: 'Hojas frescas de espinaca, fresas, nueces, queso de cabra y un toque de vinagreta balsámica.', 
      price: 8.00
    },
    { 
      img: "https://www.pronto.es/files/main_image/uploads/2014/03/13/62aa75fd40c8c.jpeg", 
      title: 'Remolacha', 
      description: 'Remolacha cocida, cebolla morada, queso fresco y un toque de aceite de oliva, vinagre y orégano.', 
      price: 7.00
    },
    { 
      img: "https://www.hola.com/horizon/landscape/55a2b10c9f89-ensalada-pollo-aguac-adob-t.jpg", 
      title: 'Aguacate y Pollo', 
      description: 'Aguacate fresco, pechuga de pollo a la parrilla, tomate, cebolla morada y cilantro, con un aderezo de lima y aceite de oliva.', 
      price: 9.50
    }
  ];

  dessert = [
    { 
      img: "https://img2.rtve.es/v/6897051?w=1600&preview=1684846584492.jpg", 
      title: 'Tiramisú', 
      description: 'Tiramisú hecho con capas de bizcocho, café, crema de mascarpone y cacao en polvo.', 
      price: 5.50
    },
    { 
        img: "https://estaticos-cdn.prensaiberica.es/clip/0c491a1e-f0e0-4ca1-8785-47ca4bfea053_16-9-discover-aspect-ratio_default_0.jpg", 
        title: 'Cheesecake', 
        description: 'Tarta de queso suave con base de galleta y cubierta de mermelada de frutos rojos.', 
        price: 6.00
    },
    { 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqirPuMz10zjqzvC1Qou1xeVFpwS-X9muDxA&s", 
        title: 'Brownie con Helado', 
        description: 'Brownie de chocolate caliente acompañado de una bola de helado de vainilla.', 
        price: 5.00
    },
    { 
      img: "https://cocina-casera.com/mx/wp-content/uploads/2018/10/flan-caramelo.jpg", 
      title: 'Flan Casero', 
      description: 'Flan de huevo cremoso, hecho con leche, azúcar y un toque de vainilla, servido con caramelo líquido.', 
      price: 4.50
    },
    { 
      img: "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2019/11/cambalache.jpg?resize=600%2C400&ssl=1", 
      title: 'Alfajores', 
      description: 'Alfajores rellenos de dulce de leche y cubiertos con chocolate o azúcar glas.', 
      price: 4.00
    },
    { 
      img: "https://www.recetas-italia.com/base/stock/Recipe/tarta-de-limon/tarta-de-limon_web.jpg.webp", 
      title: 'Tarta de Limón', 
      description: 'Tarta suave de limón con base de galleta crujiente, cubierta con una capa de merengue dorado al horno.', 
      price: 4.50
    }
  ];

  drink = [
    { 
      img: "https://institutoaguaysalud.es/wp-content/uploads/2016/11/agua-mieral-hidratacion-saludable-4.jpg", 
      title: 'Agua Mineral', 
      description: 'Agua mineral natural, disponible con o sin gas. Refrescante y esencial.', 
      price: 2.00
    },
    { 
        img: "https://s.libertaddigital.com/2023/06/21/1920/1080/fit/bebidas-azucaradas-soft-drinks.jpg", 
        title: 'Refresco', 
        description: 'Variedad de refrescos clásicos como Coca-Cola, Fanta y Sprite, servidos fríos.', 
        price: 2.50
    },
    { 
        img: "https://www.el-gastronomo.com/wp-content/uploads/2024/08/tipos-de-cerveza-en-beer-flight-1024x683-1.jpg", 
        title: 'Cerveza', 
        description: 'Cerveza nacional o internacional servida fría, ideal para cualquier ocasión.', 
        price: 3.00
    },
    { 
        img: "https://img.freepik.com/fotos-premium/mesa-restaurante-vaso-vino-blanco-suave-luz-dorada-restaurante-caro-hermosas-luces-al-aire-libre-noche_955012-4138.jpg", 
        title: 'Vino Blanco', 
        description: 'Elegante, fresco y afrutado, perfecto para acompañar pescados o ensaladas.', 
        price: 4.50
    },
    { 
        img: "https://img.freepik.com/fotos-premium/dos-copas-vino-tinto-mesa-madera-restaurante-ia-generativa_379824-1719.jpg", 
        title: 'Vino Tinto', 
        description: 'Vino tinto suave con cuerpo, ideal para disfrutar con carnes o pastas.', 
        price: 4.50
    },
    { 
        img: "https://img.freepik.com/fotos-premium/primer-plano-generativo-ia-hombre-que-vierte-champan-o-vino-espumoso-copa_28914-22540.jpg", 
        title: 'Copa de Cava', 
        description: 'Cava espumoso servido frío, perfecto para celebraciones o aperitivos.', 
        price: 5.00
    }
  ];

  selectedMenu: any[] = this.burguer;
  activeMenu: string = 'burguer';

  changeMenu(menu: string) {
    switch (menu) {
      case 'burguer':
        this.selectedMenu = this.burguer;
        this.activeMenu = menu;
        break;
      case 'pizza':
        this.selectedMenu = this.pizza;
        this.activeMenu = menu;
        break;
      case 'meat':
        this.selectedMenu = this.meat;
        this.activeMenu = menu;
        break;
      case 'pasta':
        this.selectedMenu = this.pasta;
        this.activeMenu = menu;
        break;
      case 'fish':
        this.selectedMenu = this.fish;
        this.activeMenu = menu;
        break;
      case 'salad':
        this.selectedMenu = this.salad;
        this.activeMenu = menu;
        break;
      case 'dessert':
        this.selectedMenu = this.dessert;
        this.activeMenu = menu;
        break;
      case 'drink':
        this.selectedMenu = this.drink;
        this.activeMenu = menu;
        break;
      default:
        this.selectedMenu = this.burguer; 
    }
  }
}
