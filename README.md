# KUDANS - Koç University Dance Club Website

🌐 **Live Website**: [kudans.co](https://kudans.co)

This is the official website for KUDANS, the Koç University Dance Club. The website showcases the club's activities, events, team members, and provides comprehensive information about dance festivals, workshops, and performances.

**Developed by Emir Göcen**, a jazz dancer at KUDANS and Computer Science & Business Administration undergrad at Koç University, combining his love for dance and tech with this lovely project

## About KUDANS

KUDANS is dedicated to fostering a vibrant dance community at Koç University, promoting artistic expression through various dance styles including:
- **Hip Hop**
- **Tango** 
- **Social Latin**
- **Modern Dance**
- **Swing**
- **International Ballroom**

The club organizes major annual festivals, workshops with professional instructors, and provides a platform for students to showcase their talents through performances and competitions.

## ✨ Features

### 🎭 **Event Management**
- **Festival Showcases**: Detailed pages for major events like Carnaval 2025, Nightmare 2024, Awards 2023
- **Interactive Schedule**: Real-time event calendar with workshops, shows, and social dances
- **Past Events Archive**: Complete gallery of previous festivals dating back to 2013

### 👥 **Community & Team**
- **Board of Directors**: Comprehensive profiles of club leadership for 2024-2025
- **Dance Style Coordinators**: Information about instructors for each dance discipline
- **Team Profiles**: Showcase of active members and performers

### 📝 **Content & Communication**
- **Blog Section**: Latest news, stories, and dance-related content
- **Contact System**: Interactive forms for inquiries and membership
- **Social Media Integration**: Connected to YouTube, TikTok, LinkedIn, and Instagram

### 🛍️ **Merchandise & Services**
- **Clothing Orders**: KUDANS branded apparel and dance gear
- **Festival Tickets**: Integrated ticketing system for events
- **Workshop Registration**: Easy signup for dance classes and special sessions

### 📊 **Analytics & User Insights**
- **Hotjar Integration**: Heatmap generation to understand user behavior and website interaction patterns
- **Google Analytics**: Comprehensive traffic analysis, user engagement metrics, and conversion tracking
- **User Experience Optimization**: Data-driven insights to improve website performance and user journey

## 🛠️ Technologies Used

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon packs
- **[Nodemailer](https://nodemailer.com/)** - Email handling for contact forms
- **[Sentry](https://sentry.io/)** - Error monitoring and performance tracking
- **[Hotjar](https://www.hotjar.com/)** - Heatmap generation and user behavior analytics
- **[Google Analytics](https://analytics.google.com/)** - Website traffic and user engagement tracking

## 📁 Project Structure

```
kudans-website/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx              # Main navigation component
│   │   ├── Footer.tsx              # Site footer
│   │   ├── HomeBanner.tsx          # Homepage hero section
│   │   ├── FestivalCard.tsx        # Festival display cards
│   │   ├── FestivalPreview.tsx     # Festival preview component
│   │   ├── DanceSquadCard.tsx      # Dance team member cards
│   │   ├── SocialMediaCard.tsx     # Social media integration
│   │   ├── SocialMediaLinks.tsx    # Social media link components
│   │   ├── MobileSearch.tsx        # Mobile search functionality
│   │   └── PreviousFestivalsSection.tsx # Past events section
│   ├── about/              # About page
│   ├── blog/               # Blog pages and content
│   ├── board/              # Board of directors information
│   ├── contact/            # Contact forms and information
│   ├── dances/             # Dance style information pages
│   ├── festivals/          # Past festivals archive
│   ├── fits/               # Merchandise/clothing section
│   ├── schedule/           # Event calendar and schedule
│   ├── team/               # Team member profiles
│   ├── data/               # Static data files
│   ├── types/              # TypeScript type definitions
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Homepage
├── public/                 # Static assets
│   ├── images/             # Festival photos, team photos, logos
│   ├── videos/             # Performance videos and promotional content
│   ├── favicon.ico         # Site favicon
│   ├── apple-touch-icon.png # Apple touch icon
│   ├── android-chrome-*.png # Android app icons
│   ├── favicon-*.png       # Various favicon sizes
│   └── site.webmanifest    # Web app manifest
├── .next/                  # Next.js build output (auto-generated)
├── node_modules/           # Dependencies (auto-generated)
├── .git/                   # Git repository data
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS customization
├── tsconfig.json           # TypeScript configuration
├── next-env.d.ts           # Next.js TypeScript declarations
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or later
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/kudans-website.git
cd kudans-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Key Features & Pages

### 🏠 **Homepage**
- Hero section with current festival promotion
- Mission statement and club overview
- Quick navigation to major sections
- Social media integration

### 📅 **Events & Festivals**
- **Carnaval 2025**: The upcoming major festival
- **Past Festivals**: Archive including Nightmare 2024, Awards 2023, Galaxy 2022
- **Workshop Schedule**: Regular classes and special sessions

### 👑 **Leadership & Team**
- **Executive Board**: President, Vice President, Treasurer, Secretary
- **Department Coordinators**: Social Media, Events, Sponsorship, Competition
- **Dance Coordinators**: Specialists for each dance style

### 🎵 **Dance Styles**
Dedicated pages for each dance discipline:
- Hip Hop with urban choreography
- Tango with passionate partner dancing
- Social Latin including Salsa, Bachata, Merengue
- Modern contemporary dance
- Swing dancing with vintage flair
- International Ballroom standards

## 🌐 Deployment

The website is currently **live at [kudans.co](https://kudans.co)** and deployed using:

- **Hosting**: [Vercel](https://vercel.com/) - Optimized for Next.js applications
- **Domain**: [NameCheap](https://www.namecheap.com/) - Custom domain `kudans.co`
- **SSL**: Automatically managed by Vercel and Namecheap, accidentally bought both ;)
- **CDN**: Global edge network provided by Vercel

### Deployment Setup
1. **Vercel Configuration**: Connected to the Git repository for automatic deployments
2. **Custom Domain**: Configured `kudans.co` domain from NameCheap
3. **DNS Settings**: Pointed to Vercel's nameservers for optimal performance

### Build for Production
```bash
npm run build
npm run start
```

### Alternative Deployment Options
The project can also be deployed to:
- **[Netlify](https://www.netlify.com/)**
- **[AWS Amplify](https://aws.amazon.com/amplify/)**
- Any hosting service supporting Node.js and Next.js

## 🤝 Contributing

This project is maintained by the KUDANS technical team. For contributions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact & Support

- **Website**: [kudans.co](https://kudans.co)
- **Email (Developer)**: Emir Göcen (egocen21@ku.edu.tr)
- **Email (KUDANS)**: DANCE-CLUB@ku.edu.tr
- **Social Media of KUDANS**:
  - [Instagram](https://instagram.com/kudans)
  - [YouTube](https://youtube.com/@kudans)
  - [TikTok](https://tiktok.com/@kudans)
  - [LinkedIn](https://linkedin.com/company/kudans)

## 📄 License & Usage Policy

This project is developed for KUDANS - Koç University Dance Club. All rights reserved.

### Usage Policy
If you use any part of this codebase, design, or project structure, you must provide proper attribution by citing:
- **KUDANS - Koç University Dance Club** (the organization)
- **Emir Göcen** (the developer)

Example citation format:
```
Based on/Inspired by the KUDANS website (kudans.co)
Developed by Emir Göcen for KUDANS - Koç University Dance Club
```

---

**Designed and developed by Emir Göcen** (Jazz Dancer & Developer) | © 2024 KUDANS - Koç University Dance Club 