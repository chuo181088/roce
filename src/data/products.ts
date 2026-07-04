import { Product } from './types';

export const products: Product[] = [
    {
        id: "prod-001",
        codigoInterno: "ROCE-AUT-001",
        nombre: "Autoclave Clase B 17L",
        referencia: "RUN-AUT-17B",
        marca: "Runyes",
        precio: 185000,
        imagenes: [
            "/images/products/autoclave-runyes-17l-1.jpg",
            "/images/products/autoclave-runyes-17l-2.jpg"
        ],
        descripcion: "Autoclave de clase B con capacidad de 17 litros. Ideal para consultorios dentales de alto volumen. Ciclo automático con validación de esterilización.",
        caracteristicas: [
            "Clase B de alta eficiencia",
            "Capacidad de 17 litros",
            "Ciclo automático completo",
            "Pantalla digital táctil",
            "Impresora integrada",
            "Validación de ciclo"
        ],
        especificaciones: {
            "Capacidad": "17 litros",
            "Presión": "2.1 bar",
            "Temperatura": "134°C",
            "Voltaje": "110V/60Hz",
            "Dimensiones": "55 x 45 x 40 cm",
            "Peso": "45 kg"
        },
        categoria: "cat-001",
        relacionadoIds: ["prod-002", "prod-003"],
        stock: 5
    },
    {
        id: "prod-002",
        codigoInterno: "ROCE-AUT-002",
        nombre: "Autoclave Clase B 23L",
        referencia: "RUN-AUT-23B",
        marca: "Runyes",
        precio: 225000,
        imagenes: [
            "/images/products/autoclave-runyes-23l-1.jpg"
        ],
        descripcion: "Autoclave de clase B con capacidad de 23 litros. Diseñado para clínicas dentales con alto volumen de esterilización.",
        caracteristicas: [
            "Clase B de alta eficiencia",
            "Capacidad de 23 litros",
            "Ciclo automático completo",
            "Pantalla digital táctil",
            "Impresora integrada",
            "Doble puerta opcional"
        ],
        especificaciones: {
            "Capacidad": "23 litros",
            "Presión": "2.1 bar",
            "Temperatura": "134°C",
            "Voltaje": "110V/60Hz",
            "Dimensiones": "60 x 50 x 45 cm",
            "Peso": "55 kg"
        },
        categoria: "cat-001",
        relacionadoIds: ["prod-001", "prod-003"],
        stock: 3
    },
    {
        id: "prod-003",
        codigoInterno: "ROCE-SEL-001",
        nombre: "Selladora de Pouches",
        referencia: "RUN-SEL-300",
        marca: "Runyes",
        precio: 18500,
        imagenes: [
            "/images/products/selladora-runyes-1.jpg"
        ],
        descripcion: "Selladora automática de pouches para esterilización. Sellado continuo de alta velocidad.",
        caracteristicas: [
            "Sellado continuo",
            "Corte automático",
            "Velocidad ajustable",
            "Compatible con pouches de hasta 300mm"
        ],
        especificaciones: {
            "Ancho de sellado": "6mm",
            "Velocidad": "10m/min",
            "Voltaje": "110V/60Hz",
            "Dimensiones": "40 x 15 x 10 cm",
            "Peso": "3.5 kg"
        },
        categoria: "cat-001",
        relacionadoIds: ["prod-001", "prod-002"],
        stock: 8
    },
    {
        id: "prod-004",
        codigoInterno: "ROCE-PM-001",
        nombre: "Pieza de Mano Alta Velocidad",
        referencia: "NSK-PH-S-MAX",
        marca: "NSK",
        precio: 12500,
        imagenes: [
            "/images/products/pieza-mano-nsk-1.jpg"
        ],
        descripcion: "Pieza de mano de alta velocidad con fibra óptica. Diseño ergonómico y balanceado para máximo confort.",
        caracteristicas: [
            "Fibra óptica integrada",
            "Rodamiento de cerámica",
            "Cabezal compacto",
            "Spray cuádruple",
            "Compatible con burros ISO 114"
        ],
        especificaciones: {
            "Velocidad": "300,000 - 400,000 RPM",
            "Presión de aire": "0.23 - 0.28 MPa",
            "Conexión": "ISO 114",
            "Peso": "25g",
            "Longitud": "110mm"
        },
        categoria: "cat-002",
        relacionadoIds: ["prod-005", "prod-006"],
        stock: 12
    },
    {
        id: "prod-005",
        codigoInterno: "ROCE-PM-002",
        nombre: "Pieza de Mano Baja Velocidad",
        referencia: "NSK-PH-B-MAX",
        marca: "NSK",
        precio: 9800,
        imagenes: [
            "/images/products/pieza-baja-nsk-1.jpg"
        ],
        descripcion: "Pieza de mano de baja velocidad con motor eléctrico. Ideal para procedimientos de profilaxis y ajuste.",
        caracteristicas: [
            "Motor eléctrico silencioso",
            "Velocidad variable",
            "Conexión rápida",
            "Ergonómica y liviana"
        ],
        especificaciones: {
            "Velocidad": "0 - 40,000 RPM",
            "Torque": "Alto torque",
            "Voltaje": "Eléctrico",
            "Peso": "180g",
            "Conexión": "E-type"
        },
        categoria: "cat-002",
        relacionadoIds: ["prod-004", "prod-006"],
        stock: 10
    },
    {
        id: "prod-006",
        codigoInterno: "ROCE-PM-003",
        nombre: "Micromotor Eléctrico",
        referencia: "NSK-MM-EM",
        marca: "NSK",
        precio: 35000,
        imagenes: [
            "/images/products/micromotor-nsk-1.jpg"
        ],
        descripcion: "Micromotor eléctrico de alta potencia para procedimientos de precisión. Control digital de velocidad.",
        caracteristicas: [
            "Motor sin escobillas",
            "Control digital de velocidad",
            "Bajo nivel de vibración",
            "Compatible con múltiples contra-ángulos"
        ],
        especificaciones: {
            "Potencia": "40W",
            "Velocidad": "0 - 40,000 RPM",
            "Voltaje": "24V DC",
            "Peso": "220g",
            "Longitud": "125mm"
        },
        categoria: "cat-002",
        relacionadoIds: ["prod-004", "prod-005"],
        stock: 6
    },
    {
        id: "prod-007",
        codigoInterno: "ROCE-RX-001",
        nombre: "Equipo de Rayos X Intraoral",
        referencia: "ACT-RX-IN-70",
        marca: "Acteon",
        precio: 145000,
        imagenes: [
            "/images/products/rayos-x-acteon-1.jpg"
        ],
        descripcion: "Equipo de rayos X intraoral de alta frecuencia. Mínima dosis de radiación con máxima calidad de imagen.",
        caracteristicas: [
            "Generador de alta frecuencia",
            "Tubo de rayos X de larga vida",
            "Temporizador digital",
            "Brazo articulado",
            "Panel de control intuitivo"
        ],
        especificaciones: {
            "Voltaje tubo": "70 kV",
            "Corriente": "8 mA",
            "Foco": "0.4 x 0.4 mm",
            "Tiempo exposición": "0.02 - 2.0 s",
            "Peso": "18 kg"
        },
        categoria: "cat-003",
        relacionadoIds: ["prod-008", "prod-009"],
        stock: 4
    },
    {
        id: "prod-008",
        codigoInterno: "ROCE-RX-002",
        nombre: "Sensor Digital RVG",
        referencia: "ACT-RVG-S1",
        marca: "Acteon",
        precio: 195000,
        imagenes: [
            "/images/products/sensor-rvg-acteon-1.jpg"
        ],
        descripcion: "Sensor digital de radiografía intraoral. Imágenes instantáneas de alta resolución con mínima dosis.",
        caracteristicas: [
            "Resolución de 20 lp/mm",
            "Tiempo de exposición ultracorto",
            "Sensor USB plug & play",
            "Software incluido",
            "Resistente a líquidos"
        ],
        especificaciones: {
            "Tamaño sensor": "Tamaño 2 (adulto)",
            "Resolución": "20 lp/mm",
            "Pixeles": "16.8 millones",
            "Conexión": "USB 2.0",
            "Dimensiones": "30 x 40 mm"
        },
        categoria: "cat-003",
        relacionadoIds: ["prod-007", "prod-009"],
        stock: 3
    },
    {
        id: "prod-009",
        codigoInterno: "ROCE-RX-003",
        nombre: "Pantalla Fosforescente PSP",
        referencia: "ACT-PSP-A4",
        marca: "Acteon",
        precio: 85000,
        imagenes: [
            "/images/products/pantalla-psp-acteon-1.jpg"
        ],
        descripcion: "Sistema de imagen por fósforo fotosensible. Alternativa económica al sensor digital con excelente calidad.",
        caracteristicas: [
            "Reutilizable miles de veces",
            "Flexible y cómodo para el paciente",
            "Escáner de alta velocidad",
            "Compatible con software de imagen"
        ],
        especificaciones: {
            "Tamaño": "A4 (31 x 41 cm)",
            "Resolución": "20 lp/mm",
            "Ciclos de vida": ">10,000",
            "Tiempo escaneo": "15 segundos",
            "Peso": "50g"
        },
        categoria: "cat-003",
        relacionadoIds: ["prod-007", "prod-008"],
        stock: 7
    },
    {
        id: "prod-010",
        codigoInterno: "ROCE-MAT-001",
        nombre: "Resina Compuesta Filtek Z350",
        referencia: "3M-FIL-Z350-A2",
        marca: "3M",
        precio: 2800,
        imagenes: [
            "/images/products/resina-3m-z350-1.jpg"
        ],
        descripcion: "Resina compuesta nanorellena de alta estética. Excelente pulido y retención de brillo.",
        caracteristicas: [
            "Tecnología nanorellena",
            "Alta estética",
            "Excelente pulido",
            "Baja contracción de polimerización",
            "Radiopaca"
        ],
        especificaciones: {
            "Presentación": "Jeringa 4g",
            "Color": "A2",
            "Tipo de curado": "Fotocurable",
            "Relleno": "78.5% en peso",
            "Profundidad curado": "2mm"
        },
        categoria: "cat-004",
        relacionadoIds: ["prod-011", "prod-012"],
        stock: 20
    },
    {
        id: "prod-011",
        codigoInterno: "ROCE-MAT-002",
        nombre: "Cemento de Ionómero Vítreo",
        referencia: "GC-GC-FUJI-II",
        marca: "GC",
        precio: 3200,
        imagenes: [
            "/images/products/cemento-gc-fuji-1.jpg"
        ],
        descripcion: "Cemento de ionómero vítreo para restauraciones definitivas. Liberación de flúor y adhesión química.",
        caracteristicas: [
            "Liberación de flúor",
            "Adhesión química al diente",
            "Biocompatible",
            "Fácil manipulación",
            "Radiopaco"
        ],
        especificaciones: {
            "Presentación": "Polvo 15g + Líquido 6.5ml",
            "Tipo": "Tipo II (restaurativo)",
            "Tiempo de trabajo": "2.5 min",
            "Tiempo de endurecimiento": "5 min",
            "Resistencia compresión": "180 MPa"
        },
        categoria: "cat-004",
        relacionadoIds: ["prod-010", "prod-012"],
        stock: 15
    },
    {
        id: "prod-012",
        codigoInterno: "ROCE-MAT-003",
        nombre: "Material de Impresión Silicona A",
        referencia: "ZHM-SIL-IMP-P",
        marca: "Zhermack",
        precio: 4500,
        imagenes: [
            "/images/products/silicona-zhermack-1.jpg"
        ],
        descripcion: "Silicona de adición para impresiones de alta precisión. Excelente detalle y estabilidad dimensional.",
        caracteristicas: [
            "Alta precisión de detalle",
            "Estabilidad dimensional",
            "Hidrofílico",
            "Tiempos de trabajo ajustables",
            "Compatible con yesos"
        ],
        especificaciones: {
            "Presentación": "Base 50ml + Catalizador 50ml",
            "Tipo": "Silicona de adición",
            "Tiempo de trabajo": "2 min",
            "Tiempo en boca": "4 min",
            "Precisión": "20 μm"
        },
        categoria: "cat-004",
        relacionadoIds: ["prod-010", "prod-011"],
        stock: 18
    },
    {
        id: "prod-013",
        codigoInterno: "ROCE-MOB-001",
        nombre: "Unidad Dental Completa",
        referencia: "BEGO-UNI-PRO",
        marca: "Bego",
        precio: 450000,
        imagenes: [
            "/images/products/unidad-dental-bego-1.jpg"
        ],
        descripcion: "Unidad dental completa con todos los accesorios. Diseño ergonómico para paciente y operador.",
        caracteristicas: [
            "Sillón ergonómico",
            "Mesa del operador articulada",
            "Sistema de agua integrado",
            "Iluminación LED",
            "Pedal de control multifunción"
        ],
        especificaciones: {
            "Capacidad de peso": "150 kg",
            "Voltaje": "110V/60Hz",
            "Presión de aire": "0.6 MPa",
            "Dimensiones": "180 x 80 x 120 cm",
            "Peso": "280 kg"
        },
        categoria: "cat-005",
        relacionadoIds: ["prod-014", "prod-015"],
        stock: 2
    },
    {
        id: "prod-014",
        codigoInterno: "ROCE-MOB-002",
        nombre: "Mueble Auxiliar para Unidad",
        referencia: "BEGO-MUE-AUX-01",
        marca: "Bego",
        precio: 35000,
        imagenes: [
            "/images/products/mueble-auxiliar-bego-1.jpg"
        ],
        descripcion: "Mueble auxiliar con ruedas para almacenamiento de instrumental y materiales. Diseño compacto.",
        caracteristicas: [
            "Múltiples compartimentos",
            "Ruedas con freno",
            "Superficie de trabajo",
            "Construcción en acero inoxidable"
        ],
        especificaciones: {
            "Dimensiones": "60 x 45 x 90 cm",
            "Material": "Acero inoxidable",
            "Capacidad": "50 kg",
            "Ruedas": "4 ruedas giratorias",
            "Peso": "25 kg"
        },
        categoria: "cat-005",
        relacionadoIds: ["prod-013", "prod-015"],
        stock: 5
    },
    {
        id: "prod-015",
        codigoInterno: "ROCE-MOB-003",
        nombre: "Taburete Clínico Hidráulico",
        referencia: "BEGO-TAB-HID-01",
        marca: "Bego",
        precio: 12500,
        imagenes: [
            "/images/products/taburete-bego-1.jpg"
        ],
        descripcion: "Taburete clínico con ajuste hidráulico de altura. Asiento ergonómico con respaldo.",
        caracteristicas: [
            "Ajuste hidráulico de altura",
            "Asiento ergonómico",
            "Respaldo incluido",
            "Base con 5 ruedas",
            "Tapizado antimicrobiano"
        ],
        especificaciones: {
            "Altura mínima": "45 cm",
            "Altura máxima": "60 cm",
            "Diámetro asiento": "38 cm",
            "Capacidad": "120 kg",
            "Peso": "8 kg"
        },
        categoria: "cat-005",
        relacionadoIds: ["prod-013", "prod-014"],
        stock: 10
    },
    {
        id: "prod-016",
        codigoInterno: "ROCE-ILU-001",
        nombre: "Lámpara de Fotocurado LED",
        referencia: "RUN-FC-LED-01",
        marca: "Runyes",
        precio: 8500,
        imagenes: [
            "/images/products/lampara-fotocurado-runyes-1.jpg"
        ],
        descripcion: "Lámpara de fotocurado LED de alta intensidad. Curado rápido y uniforme de resinas compuestas.",
        caracteristicas: [
            "LED de alta potencia",
            "Curado en 10 segundos",
            "Batería recargable",
            "Punta removible y autoclavable",
            "Display digital"
        ],
        especificaciones: {
            "Intensidad": "1200 mW/cm²",
            "Longitud onda": "430-490 nm",
            "Batería": "Li-ion recargable",
            "Tiempo curado": "10-20 segundos",
            "Peso": "180g"
        },
        categoria: "cat-006",
        relacionadoIds: ["prod-017", "prod-018"],
        stock: 15
    },
    {
        id: "prod-017",
        codigoInterno: "ROCE-ILU-002",
        nombre: "Lámpara Clínica LED",
        referencia: "BEGO-LAM-CLIN-01",
        marca: "Bego",
        precio: 45000,
        imagenes: [
            "/images/products/lampara-clinica-bego-1.jpg"
        ],
        descripcion: "Lámpara clínica LED para iluminación general del consultorio. Luz natural sin sombras.",
        caracteristicas: [
            "LED de alta eficiencia",
            "Temperatura de color ajustable",
            "Brazo articulado",
            "Control de intensidad",
            "Bajo consumo energético"
        ],
        especificaciones: {
            "Potencia": "30W",
            "Temperatura color": "4000-6000K",
            "Flujo luminoso": "3000 lumens",
            "Alimentación": "110V/60Hz",
            "Peso": "5 kg"
        },
        categoria: "cat-006",
        relacionadoIds: ["prod-016", "prod-018"],
        stock: 8
    },
    {
        id: "prod-018",
        codigoInterno: "ROCE-ILU-003",
        nombre: "Lámpara de Fotocurado Inalámbrica",
        referencia: "RUN-FC-WIR-01",
        marca: "Runyes",
        precio: 11000,
        imagenes: [
            "/images/products/lampara-inalambrica-runyes-1.jpg"
        ],
        descripcion: "Lámpara de fotocurado inalámbrica con batería de larga duración. Máxima movilidad en el consultorio.",
        caracteristicas: [
            "Totalmente inalámbrica",
            "Batería de larga duración",
            "Curado rápido",
            "Punta autoclavable",
            "Carga por USB"
        ],
        especificaciones: {
            "Intensidad": "1000 mW/cm²",
            "Batería": "Li-ion 2000mAh",
            "Autonomía": "100+ curados",
            "Tiempo carga": "2 horas",
            "Peso": "150g"
        },
        categoria: "cat-006",
        relacionadoIds: ["prod-016", "prod-017"],
        stock: 12
    },
    {
        id: "prod-019",
        codigoInterno: "ROCE-QUI-001",
        nombre: "Set de Fórceps de Extracción",
        referencia: "HUF-FOR-SET-01",
        marca: "HuFriedy",
        precio: 28000,
        imagenes: [
            "/images/products/forceps-hufriedy-1.jpg"
        ],
        descripcion: "Set completo de fórceps para extracciones dentales. Acero inoxidable de alta calidad.",
        caracteristicas: [
            "Acero inoxidable quirúrgico",
            "Ergonómicos y balanceados",
            "Set de 7 piezas",
            "Esterilizables",
            "Acabado satinado"
        ],
        especificaciones: {
            "Material": "Acero inoxidable 420",
            "Piezas": "7 fórceps",
            "Incluye": "Superior e inferior",
            "Longitud": "16-18 cm",
            "Peso total": "850g"
        },
        categoria: "cat-007",
        relacionadoIds: ["prod-020"],
        stock: 6
    },
    {
        id: "prod-020",
        codigoInterno: "ROCE-QUI-002",
        nombre: "Set de Elevadores Dentales",
        referencia: "HUF-ELE-SET-01",
        marca: "HuFriedy",
        precio: 18500,
        imagenes: [
            "/images/products/elevadores-hufriedy-1.jpg"
        ],
        descripcion: "Set de elevadores para luxación y extracción dental. Diseño ergonómico para máximo control.",
        caracteristicas: [
            "Acero inoxidable quirúrgico",
            "Mangos ergonómicos",
            "Set de 5 piezas",
            "Puntas de diferentes tamaños",
            "Esterilizables"
        ],
        especificaciones: {
            "Material": "Acero inoxidable 420",
            "Piezas": "5 elevadores",
            "Tipos": "Recto, curvo, de punta",
            "Longitud": "14-16 cm",
            "Peso total": "450g"
        },
        categoria: "cat-007",
        relacionadoIds: ["prod-019"],
        stock: 8
    }
];