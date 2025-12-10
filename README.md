# Portfolio Website - Next.js Edition

A modern, full-stack portfolio website built with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS**. Features include smooth animations, API routes, and a professional design.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Validation**: Zod
- **Backend**: Next.js API Routes (Node.js)

## ✨ Features

- 🎨 Modern, responsive design
- ⚡ Server-side rendering with Next.js
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark mode support (ready to implement)
- 🔒 Type-safe with TypeScript
- 📧 Contact form with API backend
- 🚀 Optimized performance
- ♿ Accessible navigation

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18+ installed ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API endpoint for contact form
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
├── components/
│   ├── About.tsx                  # About section
│   ├── Contact.tsx                 # Contact section
│   ├── Footer.tsx                 # Footer component
│   ├── Hero.tsx                   # Hero section
│   ├── Navbar.tsx                 # Navigation bar
│   └── Projects.tsx               # Projects section
├── data/
│   └── projects.ts                # Projects data
├── public/                        # Static assets
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── tailwind.config.js             # Tailwind config
└── next.config.js                 # Next.js config
```

## 🎨 Customization

### Update Your Information

1. **Personal Info**: Edit `components/Hero.tsx` and `components/About.tsx`
2. **Projects**: Update `data/projects.ts` with your actual projects
3. **Contact Info**: Modify `components/Contact.tsx`
4. **Skills**: Edit the skills array in `components/About.tsx`

### Styling

- Colors: Edit `tailwind.config.js` to change the color scheme
- Global styles: Modify `app/globals.css`
- Component styles: Each component uses Tailwind classes

## 📧 Contact Form Setup

The contact form uses Next.js API routes. To enable email sending:

1. **Install nodemailer** (already in dependencies)
2. **Set up environment variables**:
   Create a `.env.local` file:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
3. **Uncomment email code** in `app/api/contact/route.ts`

Alternatively, use services like:
- **Resend** (recommended)
- **SendGrid**
- **Mailgun**

## 🚀 Deployment

### Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically!

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder or connect to GitHub

### Other Platforms

- **AWS Amplify**
- **Railway**
- **Render**
- **DigitalOcean App Platform**

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Email configuration (optional)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## 🎯 What Makes This Better

Compared to the static version, this Next.js portfolio includes:

- ✅ **Server-side rendering** for better SEO
- ✅ **API routes** for backend functionality
- ✅ **TypeScript** for type safety
- ✅ **Modern React patterns** (hooks, components)
- ✅ **Better performance** with Next.js optimizations
- ✅ **Professional structure** that employers recognize
- ✅ **Scalable architecture** for adding features

## 📄 License

Feel free to use this template for your own portfolio!

---

Made with ❤️ using Next.js, React, and TypeScript
