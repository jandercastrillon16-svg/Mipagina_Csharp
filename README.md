# Catálogo de Autos Exclusivos - MiAppBlazor

Este proyecto es un **catálogo de autos exclusivos** desarrollado con **Blazor WebAssembly**. Permite visualizar autos de lujo, sus características y precios, y simula un carrito de compras.  

---

## Tecnologías utilizadas

- **Blazor WebAssembly**: Framework de Microsoft para aplicaciones web interactivas usando C#.  
- **HTML / CSS**: Para el diseño de la interfaz.  
- **C#**: Para la lógica de la aplicación.  
- **Bootstrap**: Para estilos básicos y diseño responsivo.  

---

## Estructura del proyecto

MiAppBlazor/
│
├─ wwwroot/ # Recursos públicos (imágenes, CSS, JS)
│ ├─ images/ # Imágenes de autos y logos
│ └─ app.css # Estilos personalizados
│
├─ Components/ # Componentes reutilizables
│ ├─ AutoCard.razor # Tarjeta de cada auto
│ ├─ AutoCard.razor.css # Estilos de AutoCard
│ ├─ NavMenu.razor # Menú de navegación superior
│ └─ NavMenu.razor.css # Estilos de NavMenu
│
├─ Pages/ # Páginas principales
│ └─ Home.razor # Página principal del catálogo
│
├─ App.razor # Componente raíz de la aplicación
├─ Routes.razor # Configuración de rutas de la aplicación
└─ Program.cs # Inicialización de la aplicación Blazor

---

## Funcionalidades

- Mostrar **autos exclusivos** con imagen, marca, modelo, año y precio.  
- **Carrito de compras** dinámico: permite agregar y eliminar autos.  
- **NavMenu** fijo y responsivo, con animación de logos de marcas de autos.  
- Estilos personalizados con `CSS` y uso de `Bootstrap`.  
- Compatible con **Blazor WebAssembly**, todo en C# sin necesidad de JavaScript para la lógica principal.  

---

## Uso

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/MiAppBlazor.git
