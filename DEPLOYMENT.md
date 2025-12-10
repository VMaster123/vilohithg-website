# How to Deploy Your Portfolio Website

## 🎯 Quick Answer

**This website does NOT need Node.js!** It's a static website (HTML, CSS, JavaScript) that works directly in your browser.

## 📋 To View Locally Right Now

Just **double-click `index.html`** - it will open in your browser. That's it!

## 🌐 To Put It Online (For Your Resume)

You need to host it somewhere. Here's the easiest way:

### GitHub Pages (Best for Resume - Shows Your GitHub Skills)

1. **Create/Use GitHub Repository:**
   - If you don't have one, create a new repository on GitHub called `Portfolio`
   - Or use your existing one: `https://github.com/VMaster123/Portfolio`

2. **Upload Your Files:**
   - You can use GitHub Desktop, or command line:
   ```bash
   git init
   git add .
   git commit -m "Portfolio website"
   git remote add origin https://github.com/VMaster123/Portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** (top menu)
   - Scroll down to **Pages** (left sidebar)
   - Under "Source", select **main** branch
   - Click **Save**
   - Wait 1-2 minutes, then visit: `https://vmaster123.github.io/Portfolio/`

4. **Add to Resume:**
   - Your portfolio URL: `https://vmaster123.github.io/Portfolio/`
   - Add this link to your resume!

### Alternative: Netlify (Even Easier - 2 Minutes)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free) with GitHub
3. Click "Add new site" → "Deploy manually"
4. Drag your entire project folder onto the page
5. Done! You get a URL like `yourname.netlify.app`
6. You can customize the URL in site settings

## ✅ What You'll Have

Once deployed, you'll have a live URL like:
- `https://vmaster123.github.io/Portfolio/` (GitHub Pages)
- OR `https://yourname.netlify.app` (Netlify)

**Put this URL on your resume!** Employers can click it to see your portfolio.

## 🔧 No Installation Needed

- ❌ No Node.js installation needed
- ❌ No npm packages needed
- ❌ No build process needed
- ✅ Just HTML, CSS, and JavaScript files
- ✅ Works in any modern browser

## 📝 Next Steps

1. Customize your projects in `script.js`
2. Update your skills in `index.html`
3. Deploy using one of the methods above
4. Add the live URL to your resume!

