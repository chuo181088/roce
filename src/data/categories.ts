import { Category } from "./types";

export const categories: Category[] = [
    {
        id: "cat-001",
        nombre: "Equipos",
        slug: "equipos",
        descripcion: "Unidades dentales, autoclaves y equipos completos",
        imagen: "https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Equipos",
        orden: 1
    },
    {
        id: "cat-002",
        nombre: "Materiales",
        slug: "materiales",
        descripcion: "Resinas, cementos y materiales de restauración",
        imagen: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Materiales",
        orden: 2
    },
    {
        id: "cat-003",
        nombre: "Instrumental",
        slug: "instrumental",
        descripcion: "Instrumental quirúrgico y de diagnóstico",
        imagen: "https://via.placeholder.com/400x300/10b981/ffffff?text=Instrumental",
        orden: 3
    },
    {
        id: "cat-004",
        nombre: "Radiología",
        slug: "radiologia",
        descripcion: "Equipos de rayos X y diagnóstico por imagen",
        imagen: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Radiologia",
        orden: 4
    },
    {
        id: "cat-005",
        nombre: "Bioseguridad",
        slug: "bioseguridad",
        descripcion: "Elementos de protección y bioseguridad",
        imagen: "https://via.placeholder.com/400x300/ef4444/ffffff?text=Bioseguridad",
        orden: 5
    },
    {
        id: "cat-006",
        nombre: "Consumibles",
        slug: "consumibles",
        descripcion: "Insumos desechables y consumibles clínicos",
        imagen: "https://via.placeholder.com/400x300/6366f1/ffffff?text=Consumibles",
        orden: 6
    }
];