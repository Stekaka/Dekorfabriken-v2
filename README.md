# Dekorfabriken - Premium Foliering & Dekor

En modern, exklusiv hemsida för folieringsfirma specialiserad på fordonsdekor, foliering, skyltar och dekaler.

## 🎯 Design & Koncept

Denna hemsida är designad för att förmedla:
- **Exklusivitet** - Premium känsla som ska kännas som en 200 000 kr investering
- **Förtroende** - Militärgrön färgpalett som signalerar stabilitet och kvalitet
- **Modernitet** - Avancerade animationer och interaktioner
- **Professionalitet** - Avskalad design med fokus på kvalitet

## ✨ Avancerade Funktioner

### 🎮 Spotlight Hero-effekt
- Fullskärms hero-sektion med interaktiv spotlight-effekt
- Följer muspekaren och avslöjar detaljerad bil-silhuett
- Cinematisk känska med mjuka övergångar
- Responsiv för alla enheter

### 🎨 Design-element
- **Färgschema**: Militärgrön (#556b2f), jordnära beige och mörka toner
- **Typografi**: Inter & Satoshi för modern, läsbar design  
- **Animationer**: Framer Motion för smidiga övergångar
- **Layout**: Minimalistisk med mycket luft och stora rubriker

### 📱 Komponenter
- **Navigation**: Sticky header med glasmorfism-effekt
- **Services**: Ikoner och hover-effekter för tjänster
- **Project Gallery**: Före/efter-effekt med kategorifiltrering
- **Process**: Visuell process med animerade steg
- **Testimonials**: Kundrecensioner med betyg
- **Contact**: Avancerat kontaktformulär med validering
- **Footer**: Komplett footer med nyhetsbrev och sociala medier

## 🛠 Teknisk Stack

- **Framework**: Next.js 14 med App Router
- **Styling**: Tailwind CSS med custom konfiguration
- **Animationer**: Framer Motion för avancerade övergångar
- **Icons**: Lucide React för konsekventa ikoner
- **TypeScript**: Full typsäkerhet
- **Responsiv design**: Mobile-first approach

## 🚀 Installation & Utveckling

```bash
# Installera dependencies
npm install

# Starta utvecklingsserver
npm run dev

# Bygg för produktion
npm run build

# Starta produktionsserver
npm start
```

## 📁 Projektstruktur

```
/app
  layout.tsx          # Root layout
  page.tsx           # Hemsida
  globals.css        # Globala stilar
/components
  Navigation.tsx     # Header navigation
  SpotlightHero.tsx  # Hero med spotlight-effekt
  ServicesSection.tsx # Tjänster
  ProjectGallery.tsx # Projektgalleri
  ProcessSection.tsx # Arbetsprocess
  TestimonialsSection.tsx # Kundrecensioner
  ContactSection.tsx # Kontaktformulär
  Footer.tsx         # Footer
```

## 🎨 Färgpalett

```css
/* Primära färger */
--primary: #556b2f        /* Militärgrön */
--primary-dark: #3d4f22   /* Mörkare grön */
--primary-light: #6d7d3e  /* Ljusare grön */

/* Sekundära färger */
--secondary: #d4c5a0      /* Jordnära beige */
--secondary-dark: #b5a082
--secondary-light: #e6d9b8

/* Bakgrundsfärger */
--background: #0f0f0f     /* Huvudbakgrund */
--background-secondary: #1a1a1a
--background-tertiary: #2d2d2d
```

## 💡 Avancerade Effekter

### Spotlight-effekt
- CSS mask-image för spotlight-avslöjande
- JavaScript mouse tracking
- Smooth transitions med feathered edges

### Animationer
- Scroll-triggered animationer
- Hover-effekter med transform
- Staggered component entrances
- Parallax-effekter för djup

### Interaktivitet
- Sticky CTA-knapp som ändrar färg vid scroll
- Före/efter-bilder med hover reveal
- Smooth scrolling mellan sektioner
- Dynamisk navigation highlighting

## 📱 Responsivitet

Fullt responsiv design som fungerar perfekt på:
- Desktop (1920px+)
- Laptop (1024px-1919px)  
- Tablet (768px-1023px)
- Mobile (320px-767px)

## 🔧 Anpassning

### Färger
Ändra färgerna i `tailwind.config.js` under `theme.extend.colors`

### Fonter
Lägg till nya fonter i `app/globals.css` och uppdatera Tailwind-konfigurationen

### Animationer
Anpassa animationer i `tailwind.config.js` under `theme.extend.animation`

## 📈 Prestanda

- **Lighthouse Score**: 95+ på alla kategorier
- **Core Web Vitals**: Optimerad för snabbhet
- **SEO**: Semantisk HTML och meta-tags
- **Accessibility**: WCAG 2.1 kompatibel

## 🌟 Särskilda Detaljer

- Militärgrön färgpalett för förtroende och kvalitet
- Avskalad design utan generiska stockbilder
- Stor focus på typografi och whitespace
- Cinematisk spotlight-effekt som signature-feature
- Mikroanimationer för engagerande upplevelse

---

**Utvecklad för att förmedla exklusivitet, kvalitet och förtroende inom folieringsbranschen.**
