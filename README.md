# 🚀 Portfolio DevOps - Javier Argüeso

Portfolio personal profesional de un DevOps Engineer, construido con Astro y TypeScript siguiendo principios de Clean Code y mejores prácticas de desarrollo.

## ✨ Características

- **🎨 Diseño Moderno**: Interface inspirada en editores de código con syntax highlighting realista
- **♿ Accesibilidad**: Cumple con estándares WCAG 2.1 AA
- **📱 Responsive**: Diseño adaptativo para todas las pantallas
- **⚡ Performance**: Optimizado para velocidad y SEO
- **🔧 Clean Code**: Arquitectura modular siguiendo principios SOLID
- **🎭 Componentes Reutilizables**: Sistema de design tokens y componentes base
- **📊 TypeScript**: Type safety completo en toda la aplicación

## 🛠️ Tecnologías

- **[Astro](https://astro.build)** - Framework web moderno
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **CSS Custom Properties** - Design system
- **Semantic HTML** - Estructura accesible

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/srcheesedev/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Vista previa del build |
| `npm run astro ...` | Comandos CLI de Astro |

## 🏗️ Arquitectura del Proyecto

```
/
├── public/
│   └── IMG_20250526_105648_239.jpg
├── src/
│   ├── components/
│   │   ├── AboutMe.astro
│   │   ├── CodeCard.astro
│   │   ├── PageHeader.astro
│   │   ├── Presentation.astro
│   │   ├── PythonCodeCard.astro
│   │   ├── YamlCodeCard.astro
│   │   ├── base/
│   │   │   ├── BaseCodeEditor.astro
│   │   │   └── SyntaxHighlighter.astro
│   │   └── hero/
│   │       ├── AuthorFooter.astro
│   │       ├── DateDisplay.astro
│   │       ├── HeroTitle.astro
│   │       └── SocialHeader.astro
│   ├── config/
│   │   ├── index.ts
│   │   └── seo.ts
│   ├── constants/
│   │   ├── app.ts
│   │   └── ui.ts
│   ├── data/
│   │   ├── content.ts
│   │   ├── developer.py
│   │   └── experience-pipeline.yml
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   ├── styles/
│   │   ├── code-carousel.css
│   │   ├── global.css
│   │   ├── hero-clean.css
│   │   └── components/
│   │       ├── about-me.css
│   │       ├── author-footer.css
│   │       ├── base-code-editor.css
│   │       ├── date-display-new.css
│   │       ├── hero-title.css
│   │       ├── python-code-card.css
│   │       ├── social-header.css
│   │       ├── yaml-code-card.css
│   │       └── tech-stack.css
│   ├── types/
│   │   ├── content.ts
│   │   ├── core.ts
│   │   └── index.ts
│   └── utils/
│       ├── css.ts
│       └── seo.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 🧱 Componentes Principales

### BaseCodeEditor
Componente base reutilizable para todas las tarjetas de código:
- Header con nombre de archivo y botón de cierre
- Área de contenido con slot personalizable
- Estilos consistentes y responsive
- Accesibilidad incorporada

### SyntaxHighlighter
Highlighting de sintaxis para múltiples lenguajes:
- Python, YAML, TypeScript, Bash
- Tokens semánticos por lenguaje
- Colores consistentes con el design system

### TechStack
Visualización moderna del stack tecnológico:
- Categorización por tipo (Cloud, Containers, CI/CD, Languages)
- Iconos expresivos y colores personalizados
- Hover effects y animaciones sutiles

## 🎨 Design System

### Design Tokens
- **Colores**: Sistema semántico con modos claro/oscuro
- **Tipografía**: Escala modular y line-heights consistentes
- **Espaciado**: Grid de 4px para consistencia visual
- **Breakpoints**: Mobile-first responsive design

### Arquitectura CSS
```css
:root {
  /* Colores semánticos */
  --color-primary: #79c0ff;
  --color-background: #0d1117;

  /* Tipografía */
  --font-size-xl: 1.25rem;
  --line-height-relaxed: 1.625;

  /* Espaciado */
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
}
```

## 📊 Optimizaciones

### Performance
- **Lazy loading** de componentes no críticos
- **CSS crítico** inlineado
- **Imágenes optimizadas** con formatos modernos
- **Bundle splitting** automático

### SEO
- **Meta tags** optimizados
- **Structured data** con JSON-LD
- **Open Graph** y Twitter Cards
- **Sitemap** automático

### Accesibilidad
- **Semantic HTML** en todos los componentes
- **ARIA labels** descriptivos
- **Focus management** para navegación por teclado
- **Color contrast** WCAG AA compliant

## 📱 Responsive Design

```css
/* Mobile First */
.component {
  /* Estilos mobile */
}

@media (min-width: 768px) {
  .component {
    /* Estilos tablet */
  }
}

@media (min-width: 1024px) {
  .component {
    /* Estilos desktop */
  }
}
```

## 🧪 Calidad de Código

### Principios Aplicados
- **DRY** (Don't Repeat Yourself)
- **SOLID** principles
- **Separation of Concerns**
- **Composition over Inheritance**

### Patterns Implementados
- **Strategy Pattern** para syntax highlighting
- **Factory Pattern** para componentes base
- **Observer Pattern** para estado reactivo

## 🤝 Contribución

Este es un proyecto personal, pero las sugerencias son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Javier Argüeso**
- DevOps Engineer
- 🔗 LinkedIn: [javier-argueso-soto](https://linkedin.com/in/javier-argueso-soto)
- 🐙 GitHub: [@srcheesedev](https://github.com/srcheesedev)
- 📷 Instagram: [@srcheese.dev](https://instagram.com/srcheese.dev)

## 🙏 Agradecimientos

- [Astro Team](https://astro.build) por el excelente framework
- [GitHub](https://github.com) por el design system inspirador
- Comunidad DevOps por el feedback y apoyo

---

⭐ Si este proyecto te resulta útil, ¡considera darle una estrella!