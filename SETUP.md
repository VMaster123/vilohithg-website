# Quick Setup Guide

## 🚀 Getting Started (5 Minutes)

### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from [nodejs.org](https://nodejs.org/) (version 18 or higher)
- Verify installation: Open terminal and run `node --version`

### Step 2: Install Dependencies
Open terminal in this project folder and run:
```bash
npm install
```

This will install all required packages (Next.js, React, TypeScript, etc.)

### Step 3: Run the Development Server
```bash
npm run dev
```

### Step 4: View Your Website
Open your browser and go to: **http://localhost:3000**

That's it! Your portfolio is running! 🎉

## 📝 Next Steps

1. **Customize Your Projects**: Edit `data/projects.ts` with your actual projects
2. **Update Skills**: Edit the skills array in `components/About.tsx`
3. **Test the Contact Form**: It works, but you'll need to configure email (see README.md)

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest - Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project" → Import your GitHub repo
4. Click "Deploy" - Done! (Takes 2 minutes)

### Option 2: Netlify
1. Build: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Or connect to GitHub for auto-deploy

## 💡 What Changed from Static Version?

- ✅ Now uses **Node.js** and **Next.js** framework
- ✅ Built with **React** components
- ✅ **TypeScript** for type safety
- ✅ **API routes** for backend functionality
- ✅ **Tailwind CSS** for modern styling
- ✅ **Framer Motion** for smooth animations
- ✅ Professional structure that looks great on resumes!

## 🆘 Troubleshooting

**Error: "npm: command not found"**
- Install Node.js from nodejs.org

**Port 3000 already in use**
- Change port: `npm run dev -- -p 3001`

**Module not found errors**
- Delete `node_modules` folder
- Run `npm install` again

## 📚 Need Help?

Check the main `README.md` for detailed documentation!

