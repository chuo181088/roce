import { Category } from "./types";

export const categories: Category[] = [
    {
        id: "cat-001",
        nombre: "Equipos",
        slug: "equipos",
        descripcion: "Unidades dentales, autoclaves y equipos completos",
        imagen: "/images/categories/equipos.png",
        orden: 1
    },
    {
        id: "cat-002",
        nombre: "Materiales",
        slug: "materiales",
        descripcion: "Resinas, cementos y materiales de restauración",
        imagen: "/images/categories/materiales.png",
        orden: 2
    },
    {
        id: "cat-003",
        nombre: "Instrumental",
        slug: "instrumental",
        descripcion: "Instrumental quirúrgico y de diagnóstico",
        imagen: "/images/categories/instrumental.png",
        orden: 3
    },
    {
        id: "cat-004",
        nombre: "Radiología",
        slug: "radiologia",
        descripcion: "Equipos de rayos X y diagnóstico por imagen",
        imagen: "/images/categories/radiologia.png",
        orden: 4
    },
    {
        id: "cat-005",
        nombre: "Bioseguridad",
        slug: "bioseguridad",
        descripcion: "Elementos de protección y bioseguridad",
        imagen: "/images/categories/bioseguridad.png",
        orden: 5
    },
    {
        id: "cat-006",
        nombre: "Consumibles",
        slug: "consumibles",
        descripcion: "Insumos desechables y consumibles clínicos",
        imagen: "/images/categories/consumibles.png",
        orden: 6
    }
];