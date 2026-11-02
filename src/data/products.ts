export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  category: 'Hombres' | 'Mujeres' | 'Niños' | 'Temporada';
  categorySlug: 'hombres' | 'mujeres' | 'ninhos' | 'temporada';
  subcategory: string;
  images: string[];
  rating: string;
  promo?: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  // ==========================================
  // TEMPORADA
  // ==========================================
  {
    id: 'recipiente-de-calabaza',
    title: 'Recipiente de calabaza',
    price: 'S/ 25.00',
    originalPrice: 'S/ 28.00',
    category: 'Temporada',
    categorySlug: 'temporada',
    subcategory: 'Decoración',
    images: [
      '/img/products/temporada/calabaza1.jpg',
      '/img/products/temporada/calabaza2.jpg'
    ],
    rating: '★★★★☆',
    promo: '5%',
    description: 'Recipiente temático de cerámica esmaltada con diseño festivo de calabaza. Ideal para almacenar dulces, pequeños accesorios o como elemento decorativo en repisas y mesas de centro. Cuenta con tapa removible y acabado brillante de alta durabilidad.',
    features: [
      'Material: Cerámica esmaltada de alta resistencia',
      'Dimensiones: 14 cm de alto x 12 cm de diámetro',
      'Tapa hermética removible con detalle de tallo verde',
      'Empaque protector para regalo incluido'
    ],
    inStock: true
  },
  {
    id: 'esqueleto-colgante-decorativo',
    title: 'Esqueleto colgante decorativo',
    price: 'S/ 30.00',
    category: 'Temporada',
    categorySlug: 'temporada',
    subcategory: 'Decoración',
    images: [
      '/img/products/temporada/calabera1.jpg',
      '/img/products/temporada/calabera2.jpg',
      '/img/products/temporada/calabera3.jpg'
    ],
    rating: '★★★★★',
    description: 'Figura articulada de esqueleto para colgar en puertas, paredes o exteriores techados. Con articulaciones móviles que permiten colocarlo en diversas posturas creativas. Fabricado con resina y polímero duradero.',
    features: [
      'Articulaciones flexibles en brazos, piernas y mandíbula',
      'Cordón de sujeción reforzado incluido',
      'Longitud aproximada: 45 cm',
      'Resistente a interiores y exteriores cubiertos'
    ],
    inStock: true
  },
  {
    id: 'linterna-calavera-mistica',
    title: 'Linterna calavera mística',
    price: 'S/ 35.00',
    category: 'Temporada',
    categorySlug: 'temporada',
    subcategory: 'Iluminación',
    images: [
      '/img/products/temporada/linterna-cala1.jpeg',
      '/img/products/temporada/linterna-cala2.jpeg'
    ],
    rating: '★★★★☆',
    description: 'Lámpara portátil decorativa con iluminación LED cálida y silueta de calavera gótica. Perfecta para ambientar habitaciones, eventos nocturnos o como luz quitamiedos de diseño único.',
    features: [
      'Luz LED de bajo consumo con interruptor en la base',
      'Funciona con pilas AAA (incluidas)',
      'Asa superior metálica para colgar o transportar',
      'Acabado estilo bronce envejecido'
    ],
    inStock: true
  },
  {
    id: 'escultura-decorativa-tematica',
    title: 'Escultura decorativa temática',
    price: 'S/ 40.00',
    category: 'Temporada',
    categorySlug: 'temporada',
    subcategory: 'Arte y Colección',
    images: [
      '/img/products/temporada/escultura1.jpeg'
    ],
    rating: '★★★★★',
    description: 'Escultura artesanal modelada a mano con minuciosos detalles en relieve. Una pieza exclusiva para coleccionistas y amantes de la decoración con carácter propio.',
    features: [
      'Pieza modelada y pintada a mano',
      'Base con fieltro para no rayar superficies',
      'Edición limitada por temporada',
      'Certificado de pieza artesanal'
    ],
    inStock: true
  },

  // ==========================================
  // HOMBRES
  // ==========================================
  {
    id: 'reloj-ejecutivo-moderno',
    title: 'Reloj ejecutivo moderno',
    price: 'S/ 25.00',
    originalPrice: 'S/ 32.00',
    category: 'Hombres',
    categorySlug: 'hombres',
    subcategory: 'Relojes',
    images: [
      '/img/products/hombre/producto1h.jpg',
      '/img/products/hombre/producto9h.jpg'
    ],
    rating: '★★★★★',
    description: 'Reloj de cuarzo para caballero con dial minimalista negro y correa de cuero sintético reforzado. Combina sofisticación clásica con un toque contemporáneo para uso diario o reuniones formales.',
    features: [
      'Mecanismo de cuarzo de alta precisión',
      'Correa de ecocuero con costura reforzada',
      'Caja de aleación metálica con cristal mineral resistente a rayones',
      'Incluye estuche protector LOokiero!'
    ],
    inStock: true
  },
  {
    id: 'collar-dije-de-flecha',
    title: 'Collar dije de flecha',
    price: 'S/ 15.00',
    originalPrice: 'S/ 18.00',
    category: 'Hombres',
    categorySlug: 'hombres',
    subcategory: 'Collares',
    images: [
      '/img/products/hombre/producto2h.jpg',
      '/img/products/hombre/producto12h.jpg'
    ],
    rating: '★★★★★',
    promo: '5%',
    description: 'Collar masculino con dije de punta de flecha en acero inoxidable acabado mate. Simboliza determinación, valentía y enfoque. La cadena de eslabones es resistente al agua y no pierde su brillo.',
    features: [
      'Acero inoxidable 316L hipoalergénico',
      'Longitud de cadena: 55 cm ajustable',
      'Cierre de mosquetón de alta seguridad',
      'Resistente al sudor y al uso diario'
    ],
    inStock: true
  },
  {
    id: 'billetera-de-cuero-clasica',
    title: 'Billetera de cuero clásica',
    price: 'S/ 50.00',
    originalPrice: 'S/ 60.00',
    category: 'Hombres',
    categorySlug: 'hombres',
    subcategory: 'Billeteras',
    images: [
      '/img/products/hombre/producto3h.jpg',
      '/img/products/hombre/producto8.jpg',
      '/img/products/hombre/producto10h.jpg'
    ],
    rating: '★★★★★',
    description: 'Billetera de cuero genuino vacuno con compartimentos dobles para billetes, múltiples ranuras para tarjetas bancarias y ventana de visor para documento de identidad. Textura suave al tacto y costuras artesanales.',
    features: [
      '100% Cuero genuino de alta calidad',
      'Bloqueo RFID para proteger tus tarjetas de clonación',
      '8 ranuras para tarjetas y 2 bolsillos para billetes',
      'Presentación en caja de regalo premium'
    ],
    inStock: true
  },
  {
    id: 'pulsera-tribal-tejida',
    title: 'Pulsera tribal tejida',
    price: 'S/ 15.00',
    category: 'Hombres',
    categorySlug: 'hombres',
    subcategory: 'Pulseras',
    images: [
      '/img/products/hombre/producto5h.jpg',
      '/img/products/hombre/producto11h.jpg'
    ],
    rating: '★★★★☆',
    promo: '2%',
    description: 'Pulsera artesanal tejida en cuero encerado e hilo de alta tenacidad con detalles de cuentas de madera y acero. Cierre ajustable que se adapta con facilidad a cualquier diámetro de muñeca.',
    features: [
      'Cuero trenzado suave de primera selección',
      'Nudo corredizo ajustable (17 cm a 23 cm)',
      'Diseño versátil para combinar con reloj',
      'Ligera y cómoda para uso continuo'
    ],
    inStock: true
  },
  {
    id: 'cadena-de-eslabones-plateada',
    title: 'Cadena de eslabones plateada',
    price: 'S/ 35.00',
    category: 'Hombres',
    categorySlug: 'hombres',
    subcategory: 'Cadenas',
    images: [
      '/img/products/hombre/producto7.jpg'
    ],
    rating: '★★★★★',
    description: 'Cadena estilo cubana de eslabones pulidos en acero quirúrgico plateado. Brillo espejo de larga duración que no se opaca con el paso del tiempo.',
    features: [
      'Acero quirúrgico pulido brillante',
      'Ancho de eslabón: 5 mm',
      'Longitud: 50 cm',
      'Resistente a la humedad y no mancha la piel'
    ],
    inStock: true
  },
  {
    id: 'billetera-compacta-de-bolsillo',
    title: 'Billetera compacta de bolsillo',
    price: 'S/ 45.00',
    category: 'Hombres',
    categorySlug: 'hombres',
    subcategory: 'Billeteras',
    images: [
      '/img/products/hombre/producto8.jpg',
      '/img/products/hombre/producto3h.jpg'
    ],
    rating: '★★★★☆',
    description: 'Billetera de perfil ultradelgado pensada para el hombre moderno que busca comodidad en bolsillos delanteros sin abultar. Incluye tarjetero exterior de acceso rápido.',
    features: [
      'Diseño Slim ultra compacto de 8 mm de grosor',
      'Clip metálico integrado para billetes',
      'Capacidad para hasta 6 tarjetas y billetes',
      'Material de cuero sintético texturizado antigolpes'
    ],
    inStock: true
  },
  {
    id: 'reloj-cronografo-sport',
    title: 'Reloj cronógrafo sport',
    price: 'S/ 65.00',
    category: 'Hombres',
    categorySlug: 'hombres',
    subcategory: 'Relojes',
    images: [
      '/img/products/hombre/producto9h.jpg',
      '/img/products/hombre/producto1h.jpg'
    ],
    rating: '★★★★★',
    description: 'Reloj deportivo y casual con sub-diales funcionales, bisel graduado y correa ergonómica. Diseñado para resistir la actividad diaria brindando una presencia imponente.',
    features: [
      'Caja de 44 mm con tratamiento anti-reflejo',
      'Cronógrafo funcional y fechador automático',
      'Resistente a salpicaduras de agua (3 ATM)',
      'Manecillas con detalle luminiscente en la oscuridad'
    ],
    inStock: true
  },
  {
    id: 'billetera-vintage-con-broche',
    title: 'Billetera vintage con broche',
    price: 'S/ 40.00',
    category: 'Hombres',
    categorySlug: 'hombres',
    subcategory: 'Billeteras',
    images: [
      '/img/products/hombre/producto10h.jpg',
      '/img/products/hombre/producto3h.jpg'
    ],
    rating: '★★★★★',
    description: 'Billetera con acabado rústico en cuero gamuzado y cierre de broche a presión. Combina gran capacidad con máxima seguridad para tus documentos personales.',
    features: [
      'Acabado rústico efecto envejecido',
      'Broche de presión metálico resistente',
      'Monedero interior con cremallera',
      'Bolsillo especial para tarjetas de memoria o SIM'
    ],
    inStock: true
  },
  {
    id: 'pulsera-de-acero-inoxidable',
    title: 'Pulsera de acero inoxidable',
    price: 'S/ 28.00',
    category: 'Hombres',
    categorySlug: 'hombres',
    subcategory: 'Pulseras',
    images: [
      '/img/products/hombre/producto11h.jpg',
      '/img/products/hombre/producto5h.jpg'
    ],
    rating: '★★★★☆',
    description: 'Brazalete rígido de acero con grabado perimetral sutil. Su estructura abierta permite acomodarlo a la muñeca de forma práctica y segura.',
    features: [
      'Acero inoxidable 316L libre de níquel',
      'Acabado plateado cepillado mate',
      'Diseño ergonómico unisex adaptable',
      'No se decolora ni se oxida'
    ],
    inStock: true
  },
  {
    id: 'collar-con-placa-militar',
    title: 'Collar con placa militar',
    price: 'S/ 22.00',
    category: 'Hombres',
    categorySlug: 'hombres',
    subcategory: 'Collares',
    images: [
      '/img/products/hombre/producto12h.jpg',
      '/img/products/hombre/producto2h.jpg'
    ],
    rating: '★★★★★',
    description: 'Collar estilo dog-tag militar con placa pulida lista para grabado personalizado. Viene con cadena de bolitas clásica de acero inoxidable.',
    features: [
      'Placa maciza de acero inoxidable de 4 x 2.5 cm',
      'Cadena de bolitas de 60 cm ajustable con alicate',
      'Superficie lisa ideal para personalización',
      'Hipoalergénico y resistente al agua'
    ],
    inStock: true
  },

  // ==========================================
  // MUJERES
  // ==========================================
  {
    id: 'anillo-solitario-plateado',
    title: 'Anillo solitario plateado',
    price: 'S/ 25.00',
    originalPrice: 'S/ 30.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Anillos',
    images: [
      '/img/products/mujer/anillo-1.jpg',
      '/img/products/mujer/anillo-2.jpg'
    ],
    rating: '★★★★★',
    description: 'Anillo solitario delicado bañado en plata 925 con circón central engarzado en cuatro garras. Un diseño atemporal que aporta brillo y feminidad a cualquier ocasión especial.',
    features: [
      'Baño de plata 925 con acabado rodinado anti-deslustre',
      'Circón de corte brillante con alto índice de refracción',
      'Diseño delgado y estilizado para dedos finos',
      'Cajita de regalo con lazo de obsequio'
    ],
    inStock: true
  },
  {
    id: 'anillo-con-grabado-y-cristal',
    title: 'Anillo con grabado y cristal',
    price: 'S/ 30.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Anillos',
    images: [
      '/img/products/mujer/anillo-2.jpg',
      '/img/products/mujer/anillo-1.jpg'
    ],
    rating: '★★★★★',
    description: 'Anillo ancho con filigrana tallada artesanalmente e incrustaciones de micro-cristales austríacos. Una joya llamativa con un aire vintage chic.',
    features: [
      'Aleación hipoalergénica con baño de plata antigua',
      'Incrustaciones fijadas a mano con precisión',
      'Diseño con grabado en bajorrelieve',
      'Disponible en tallas 6, 7 y 8'
    ],
    inStock: true
  },
  {
    id: 'aretes-circulares-modernos',
    title: 'Aretes circulares modernos',
    price: 'S/ 18.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Aretes',
    images: [
      '/img/products/mujer/arete-1.jpg',
      '/img/products/mujer/arete-2.jpg',
      '/img/products/mujer/aretes.jpg'
    ],
    rating: '★★★★☆',
    description: 'Aretes tipo arracada geométrica con doble aro entrelazado. Ligeros y confortables para llevar durante todo el día sin causar molestias.',
    features: [
      'Peso pluma: menos de 4 gramos por arete',
      'Poste de acero quirúrgico anti-alergias',
      'Diámetro de 2.5 cm',
      'Cierre a presión seguro'
    ],
    inStock: true
  },
  {
    id: 'aretes-colgantes-de-perla',
    title: 'Aretes colgantes de perla',
    price: 'S/ 22.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Aretes',
    images: [
      '/img/products/mujer/arete-2.jpg',
      '/img/products/mujer/arete-1.jpg'
    ],
    rating: '★★★★★',
    description: 'Elegantes aretes colgantes con perla barroca de imitación y base dorada texturizada. El complemento predilecto para eventos formales y salidas de noche.',
    features: [
      'Perlas de concha con lustre nacarado natural',
      'Baño en oro de 14k resistente a la decoloración',
      'Largo total: 4.2 cm',
      'Incluye tapones de silicona de repuesto'
    ],
    inStock: true
  },
  {
    id: 'aretes-diseno-floral-de-plata',
    title: 'Aretes diseño floral de plata',
    price: 'S/ 40.00',
    originalPrice: 'S/ 48.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Aretes',
    images: [
      '/img/products/mujer/aretes.jpg',
      '/img/products/mujer/arete-1.jpg'
    ],
    rating: '★★★★★',
    promo: '10%',
    description: 'Aretes con forma de flor primaveral y pétalos esmaltados a mano. Cada detalle refleja la frescura y alegría de la naturaleza.',
    features: [
      'Plata de ley 925 garantizada',
      'Pétalos con esmalte fino horneado',
      'Broche de mariposa seguro',
      'Empaque de regalo LOokiero! incluido'
    ],
    inStock: true
  },
  {
    id: 'brazalete-de-plata-brillante',
    title: 'Brazalete de plata brillante',
    price: 'S/ 45.00',
    originalPrice: 'S/ 55.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Brazaletes',
    images: [
      '/img/products/mujer/brazalete.png',
      '/img/products/mujer/pulsera-2.png'
    ],
    rating: '★★★★★',
    promo: '15%',
    description: 'Brazalete rígido de plata con diseño trenzado y pulido espejo. Su flexibilidad controlada permite ajustarlo al tamaño exacto de tu muñeca.',
    features: [
      'Plata fina con capa protectora de rodio',
      'Estructura semi-rígida autoajustable',
      'Acabado liso sin bordes filosos',
      'Ideal para uso en solitario o combinación'
    ],
    inStock: true
  },
  {
    id: 'collar-gargantilla-delicado',
    title: 'Collar gargantilla delicado',
    price: 'S/ 35.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Collares',
    images: [
      '/img/products/mujer/collar.png',
      '/img/products/mujer/producto8m.jpg'
    ],
    rating: '★★★★★',
    description: 'Collar estilo choker fino con pequeños dijes esféricos espaciados a lo largo de la cadena. Realza la línea del cuello con sutil encanto.',
    features: [
      'Largo de cadena: 40 cm + 5 cm de extensión',
      'Dijes pulidos de 3 mm',
      'Cierre tipo resorte fácil de colocar',
      'Brillo duradero y resistente al agua'
    ],
    inStock: true
  },
  {
    id: 'pulseras-artesanales-finas',
    title: 'Pulseras artesanales finas',
    price: 'S/ 5.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Pulseras',
    images: [
      '/img/products/mujer/pulsera-1.png',
      '/img/products/mujer/pulsera-2.png'
    ],
    rating: '★★★★★',
    description: 'Set de pulseras tejidas a mano con hilo de seda de colores pastel y detalles dorados. El detalle perfecto para compartir entre amigas o regalar.',
    features: [
      '100% Hecho a mano por artesanos peruanos',
      'Hilo de seda resistente al desteñido',
      'Ajustable para todas las edades',
      'Excelente opción como recuerdo o regalo'
    ],
    inStock: true
  },
  {
    id: 'pulsera-doble-cadena-dorada',
    title: 'Pulsera doble cadena dorada',
    price: 'S/ 28.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Pulseras',
    images: [
      '/img/products/mujer/pulsera-2.png',
      '/img/products/mujer/brazalete.png'
    ],
    rating: '★★★★☆',
    description: 'Pulsera en capas con dos cadenas de diferentes tramas: una estilo fígaro y otra de eslabones compactos. Da la ilusión de llevar dos pulseras en una sola pieza.',
    features: [
      'Baño en oro brillante de 18k',
      'Cierre único para evitar enredos',
      'Largo: 18 cm con cadena extensora',
      'Hipoalergénico y libre de plomo'
    ],
    inStock: true
  },
  {
    id: 'collar-con-dije-de-corazon',
    title: 'Collar con dije de corazón',
    price: 'S/ 32.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Collares',
    images: [
      '/img/products/mujer/producto8m.jpg',
      '/img/products/mujer/collar.png'
    ],
    rating: '★★★★★',
    description: 'Collar con dije de corazón calado y piedra de cristal facetado en su interior. Expresa amor y ternura en cada uno de sus detalles.',
    features: [
      'Dije de corazón de 1.8 cm con cristal rosado',
      'Cadena veneciana de plata brillante',
      'Largo de 45 cm',
      'Incluye bolsita de terciopelo'
    ],
    inStock: true
  },
  {
    id: 'aretes-largos-de-fiesta',
    title: 'Aretes largos de fiesta',
    price: 'S/ 26.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Aretes',
    images: [
      '/img/products/mujer/producto9m.jpg',
      '/img/products/mujer/arete-2.jpg'
    ],
    rating: '★★★★★',
    description: 'Aretes con caída en cascada de eslabones brillantes que reflejan la luz con cada movimiento. Ideales para vestidos de noche o cóctel.',
    features: [
      'Largo de caída: 6.5 cm',
      'Movimiento fluido y liviano',
      'Ganchos antialérgicos con tope de seguridad',
      'Brillo excepcional garantizado'
    ],
    inStock: true
  },
  {
    id: 'pulsera-con-dije-de-mariposa',
    title: 'Pulsera con dije de mariposa',
    price: 'S/ 24.00',
    category: 'Mujeres',
    categorySlug: 'mujeres',
    subcategory: 'Pulseras',
    images: [
      '/img/products/mujer/producto10m.jpg',
      '/img/products/mujer/pulsera-1.png'
    ],
    rating: '★★★★★',
    description: 'Pulsera de cadena fina con dije de mariposa esmaltada en tonos celestes. Representa libertad, cambio positivo y belleza natural.',
    features: [
      'Dije con esmaltado fino al horno',
      'Cadena de plata regulable',
      'Broche de langosta resistente',
      'Perfecta para uso diario'
    ],
    inStock: true
  },

  // ==========================================
  // NIÑOS
  // ==========================================
  {
    id: 'peluche-pablo-backyardigan',
    title: 'Peluche Pablo Backyardigan',
    price: 'S/ 25.00',
    category: 'Niños',
    categorySlug: 'ninhos',
    subcategory: 'Peluches',
    images: [
      '/img/products/ninhos/producto1n.jpg',
      '/img/products/ninhos/producto2n.jpg'
    ],
    rating: '★★★★★',
    description: 'Peluche oficial del carismático pingüino azul Pablo de los Backyardigans. Confeccionado en felpa ultra suave antialérgica y relleno hipoalergénico esponjoso.',
    features: [
      'Material: Felpa de pelo corto suave y lavable',
      'Relleno de fibra siliconada hipoalergénica',
      'Ojos y detalles bordados para mayor seguridad de bebés',
      'Altura aproximada: 28 cm'
    ],
    inStock: true
  },
  {
    id: 'peluche-amigo-gigante-suave',
    title: 'Peluche amigo gigante suave',
    price: 'S/ 45.00',
    category: 'Niños',
    categorySlug: 'ninhos',
    subcategory: 'Peluches',
    images: [
      '/img/products/ninhos/producto2n.jpg',
      '/img/products/ninhos/producto1n.jpg'
    ],
    rating: '★★★★★',
    description: 'Peluche grande y abrazable ideal como compañero de juegos y siestas. Suave como una nube, resistente a jalones y fácil de mantener limpio.',
    features: [
      'Tamaño grande: 50 cm de altura',
      'Costuras reforzadas de triple puntada',
      'Material 100% lavable a máquina en ciclo suave',
      'Apto para niños a partir de 1 año'
    ],
    inStock: true
  },
  {
    id: 'muneco-interactivo-divertido',
    title: 'Muñeco interactivo divertido',
    price: 'S/ 35.00',
    category: 'Niños',
    categorySlug: 'ninhos',
    subcategory: 'Juguetes',
    images: [
      '/img/products/ninhos/producto4n.jpg',
      '/img/products/ninhos/producto10n.jpg'
    ],
    rating: '★★★★☆',
    description: 'Muñeco interactivo que estimula la imaginación y la motricidad de los pequeños mediante sonidos alegres y partes móviles seguras.',
    features: [
      'Material plástico ABS no tóxico libre de BPA',
      'Bordes redondeados sin piezas pequeñas desprendibles',
      'Sonidos divertidos no estridentes',
      'Funciona con pilas tipo botón con compartimento seguro'
    ],
    inStock: true
  },
  {
    id: 'peluche-tierno-de-apego',
    title: 'Peluche tierno de apego',
    price: 'S/ 20.00',
    category: 'Niños',
    categorySlug: 'ninhos',
    subcategory: 'Peluches',
    images: [
      '/img/products/ninhos/producto5n.jpg',
      '/img/products/ninhos/producto7n.jpg'
    ],
    rating: '★★★★★',
    description: 'Manta de apego y peluche diseñado para brindar calma y seguridad a los bebés durante la hora de dormir. Suavidad extrema comprobada.',
    features: [
      'Tejido velvet suave al tacto con la piel del bebé',
      'Colores tenues que facilitan la relajación',
      'Tamaño perfecto para manos pequeñas (22 cm)',
      'Lavable y de secado rápido'
    ],
    inStock: true
  },
  {
    id: 'set-creativo-de-pinturas-y-arte',
    title: 'Set creativo de pinturas y arte',
    price: 'S/ 20.00',
    category: 'Niños',
    categorySlug: 'ninhos',
    subcategory: 'Educativo',
    images: [
      '/img/products/ninhos/producto6n.jpg',
      '/img/products/ninhos/producto9n.jpg'
    ],
    rating: '★★★★★',
    promo: '5%',
    description: 'Maletín de arte infantil con lápices de colores, acuarelas, crayones y stickers. Fomenta el talento artístico y la concentración de los niños.',
    features: [
      'Pinturas y pigmentos lavables con agua',
      'Materiales 100% no tóxicos certificados',
      'Estuche plegable organizador fácil de transportar',
      'Más de 40 piezas creativas'
    ],
    inStock: true
  },
  {
    id: 'peluche-burro-triste-tierno',
    title: 'Peluche burro triste tierno',
    price: 'S/ 25.00',
    category: 'Niños',
    categorySlug: 'ninhos',
    subcategory: 'Peluches',
    images: [
      '/img/products/ninhos/producto7n.jpg',
      '/img/products/ninhos/producto5n.jpg'
    ],
    rating: '★★★★★',
    description: 'Adorable peluche con mirada tierna y orejitas caídas. Su expresión reconfortante se roba el corazón de niños y adultos al instante.',
    features: [
      'Pelaje ultra suave con relleno mullido',
      'Detalles de costura artesanal en ojos y hocico',
      'Medidas: 26 cm sentado',
      'Empaque de regalo LOokiero! incluido'
    ],
    inStock: true
  },
  {
    id: 'peluche-leon-valiente',
    title: 'Peluche león valiente',
    price: 'S/ 28.00',
    category: 'Niños',
    categorySlug: 'ninhos',
    subcategory: 'Peluches',
    images: [
      '/img/products/ninhos/producto8n.jpg',
      '/img/products/ninhos/producto2n.jpg'
    ],
    rating: '★★★★☆',
    description: 'El rey de la selva en versión tierna y abrazable. Con melena esponjosa y patitas acolchadas para horas de aventuras mágicas.',
    features: [
      'Melena con textura de estambre esponjoso',
      'Material antialérgico de máxima durabilidad',
      'Altura: 30 cm',
      'Fácil de limpiar con paño húmedo'
    ],
    inStock: true
  },
  {
    id: 'juguete-didactico-de-destreza',
    title: 'Juguete didáctico de destreza',
    price: 'S/ 30.00',
    category: 'Niños',
    categorySlug: 'ninhos',
    subcategory: 'Educativo',
    images: [
      '/img/products/ninhos/producto9n.jpg',
      '/img/products/ninhos/producto11n.jpg'
    ],
    rating: '★★★★★',
    description: 'Juego de encaje geométrico y coordinación viso-motora con piezas de madera pulida pintadas con tintes ecológicos al agua.',
    features: [
      'Madera natural con acabado libre de astillas',
      'Pinturas no tóxicas resistentes al uso',
      'Desarrolla habilidades cognitivas y lógica espacial',
      'Recomendado para edades de 2 a 6 años'
    ],
    inStock: true
  },
  {
    id: 'muneco-de-accion-infantil',
    title: 'Muñeco de acción infantil',
    price: 'S/ 22.00',
    category: 'Niños',
    categorySlug: 'ninhos',
    subcategory: 'Juguetes',
    images: [
      '/img/products/ninhos/producto10n.jpg',
      '/img/products/ninhos/producto4n.jpg'
    ],
    rating: '★★★★☆',
    description: 'Figura de acción articulada con accesorios intercambiables para recrear las aventuras más emocionantes.',
    features: [
      'Puntos de articulación en hombros, cuello y rodillas',
      'Material plástico reforzado ante caídas',
      'Altura: 18 cm',
      'Diseño colorido de gran detalle'
    ],
    inStock: true
  },
  {
    id: 'set-de-juegos-didacticos-preescolar',
    title: 'Set de juegos didácticos preescolar',
    price: 'S/ 38.00',
    category: 'Niños',
    categorySlug: 'ninhos',
    subcategory: 'Educativo',
    images: [
      '/img/products/ninhos/producto11n.jpg',
      '/img/products/ninhos/producto9n.jpg'
    ],
    rating: '★★★★★',
    description: 'Completo paquete de aprendizaje temprano con tarjetas de números, letras y figuras sensoriales para explorar jugando.',
    features: [
      'Tarjetas plastificadas de esquinas redondeadas',
      'Incluye guía de actividades para padres y educadores',
      'Caja organizadora con broche',
      'Desarrolla el lenguaje y la atención temprana'
    ],
    inStock: true
  }
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductByTitle(title: string): Product | undefined {
  const clean = (t: string) => t.trim().toLowerCase();
  return products.find((p) => clean(p.title) === clean(title));
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const current = getProductById(productId);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== productId && p.category === current.category)
    .slice(0, limit);
}
