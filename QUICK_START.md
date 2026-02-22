# Quick Start Guide - Portfolio Website

## 🎯 5-Minute Setup

### Step 1: Create Your Project Folder
```
My Portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── profile.jpg
    ├── project1.jpg
    ├── project2.jpg
    ├── project3.jpg
    └── project4.jpg
```

### Step 2: Create the Images Folder
In the same folder where you saved index.html, create a new folder called `images`

### Step 3: Get Your Images Ready

#### Profile Photo (profile.jpg)
- **Size**: 400x400 pixels (square)
- **Format**: JPG or PNG
- **Tips**: 
  - Use a professional headshot
  - Good lighting
  - Neutral background
  - Smiling is good!

#### Project Images (project1.jpg - project4.jpg)
- **Size**: 800x600 pixels
- **Format**: JPG or PNG
- **Ideas**:
  - Screenshots of your projects
  - Mockups of designs
  - Code snippets with nice backgrounds
  - Project logos

### Step 4: Temporary Placeholder Images

**Don't have images yet?** No problem! Use these placeholder services:

#### Option 1: Use URLs in HTML (temporary)
Replace the image src in index.html with these:

```html
<!-- Profile Image -->
<img src="https://picsum.photos/400/400" alt="Datenzi Sherpa">

<!-- Project Images -->
<img src="https://picsum.photos/800/600?random=1" alt="Project 1">
<img src="https://picsum.photos/800/600?random=2" alt="Project 2">
<img src="https://picsum.photos/800/600?random=3" alt="Project 3">
<img src="https://picsum.photos/800/600?random=4" alt="Project 4">
```

#### Option 2: Download Placeholder Images
Visit these sites and download images:
- [Unsplash](https://unsplash.com/s/photos/tech) - Technology photos
- [Lorem Picsum](https://picsum.photos/) - Random placeholder images
- [Placeholder.com](https://placeholder.com/) - Solid color placeholders

### Step 5: Test Your Website

1. **Double-click** `index.html` to open it in your browser
2. **Check all sections**:
   - ✅ Navigation works
   - ✅ Images load
   - ✅ Animations play
   - ✅ Mobile menu works (resize browser)
   - ✅ Contact form shows notification

### Step 6: Customize Your Content

Open `index.html` and find these sections to update:

#### Update Your Name (Line ~44-47)
```html
<h1 class="hero-title">
    <span class="hero-title-line">Your First Name</span>
    <span class="hero-title-line">Your Last Name</span>
</h1>
```

#### Update Your Title (Line ~48)
```html
<p class="hero-subtitle">Your Title/Role</p>
```

#### Update About Section (Line ~71-85)
```html
<p class="lead">
    Write your introduction here...
</p>
<p>
    Write about your skills and experience...
</p>
```

#### Update Contact Info (Line ~322-340)
```html
<span>your.email@example.com</span>
<span>+977 98XXXXXXXX</span>
<span>Your City, Your Country</span>
```

#### Update Social Links (Line ~343-365)
```html
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
<a href="https://twitter.com/yourusername">
```

## 🎨 Image Requirements Summary

| Image Type | Dimensions | Format | Purpose |
|------------|------------|--------|---------|
| Profile | 400x400px | JPG/PNG | Your photo in hero section |
| Project 1-4 | 800x600px | JPG/PNG | Project screenshots |

## 📸 Creating Good Project Images

### If You Have Live Projects:
1. Take screenshots of your work
2. Use browser extensions like "Full Page Screen Capture"
3. Crop to 800x600px using free tools:
   - [Canva](https://www.canva.com/) (free)
   - [Photopea](https://www.photopea.com/) (free Photoshop alternative)
   - Paint (Windows) or Preview (Mac)

### If You Don't Have Projects Yet:
1. Create mockup designs in Canva
2. Use free mockup templates from [Mockup World](https://www.mockupworld.co/)
3. Create code snippet images using [Carbon](https://carbon.now.sh/)
4. Design simple graphics representing your skills

## 🌐 Free Image Resources

### Stock Photos (for inspiration/backgrounds)
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and videos

### Profile Photo Tools
- [Remove.bg](https://www.remove.bg/) - Remove background from photos
- [Pfpmaker](https://pfpmaker.com/) - Create professional profile pictures

### Design Tools (to create project images)
- [Canva](https://www.canva.com/) - Easy graphic design
- [Figma](https://www.figma.com/) - Professional design tool (free)
- [Photopea](https://www.photopea.com/) - Online Photoshop alternative

## 🚀 Deployment Quick Guide

### GitHub Pages (Recommended)
```bash
1. Create account on GitHub
2. Create new repository: "yourusername.github.io"
3. Upload all files
4. Enable GitHub Pages in Settings
5. Visit: https://yourusername.github.io
```

### Netlify (Easiest)
```bash
1. Go to netlify.com
2. Drag and drop your folder
3. Get free URL: yoursite.netlify.app
4. Done!
```

## ✅ Pre-Launch Checklist

Before sharing your portfolio:

**Content**
- [ ] Updated your name
- [ ] Added your photo
- [ ] Written About section
- [ ] Added project descriptions
- [ ] Updated contact info
- [ ] Added social media links

**Technical**
- [ ] All images load correctly
- [ ] Navigation works on mobile
- [ ] Contact form works
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Checked on mobile device
- [ ] No console errors (press F12)

**Optional but Recommended**
- [ ] Compressed images (use TinyPNG)
- [ ] Updated meta description
- [ ] Added favicon
- [ ] Tested loading speed
- [ ] Shared with friend for feedback

## 🎯 Common Issues & Quick Fixes

**Problem**: Images don't show
- **Fix**: Check that images folder is in same location as index.html
- **Fix**: Verify image file names match exactly (case-sensitive)

**Problem**: Mobile menu doesn't open
- **Fix**: Make sure script.js is in the same folder
- **Fix**: Check browser console for errors (F12)

**Problem**: Animations don't work
- **Fix**: Clear browser cache (Ctrl+Shift+Delete)
- **Fix**: Try a different browser

**Problem**: Website looks broken on mobile
- **Fix**: Add this meta tag in HTML head (already included):
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 📱 Testing on Mobile

### Without a Phone:
1. Open website in Chrome
2. Press F12
3. Click phone icon (top-left of DevTools)
4. Select device from dropdown

### With a Phone:
1. Upload to GitHub/Netlify
2. Visit URL on your phone
3. Test all features

## 🎓 Next Steps After Launch

1. **Share your portfolio**:
   - LinkedIn
   - Twitter
   - Resume
   - Email signature

2. **Get feedback**:
   - Friends in tech
   - Online communities (Reddit, Discord)
   - Mentors or teachers

3. **Keep updating**:
   - Add new projects
   - Update skills
   - Improve content based on feedback

4. **Analytics** (optional):
   - Add Google Analytics
   - Track visitors
   - See which projects get most views

## 💡 Pro Tips

1. **Update regularly**: Add new projects as you complete them
2. **Keep it simple**: Don't add too many projects at once (4-6 best works)
3. **Tell a story**: Each project should explain the problem you solved
4. **Show personality**: Let your about section reflect who you are
5. **Mobile first**: Most visitors will view on mobile
6. **Fast loading**: Compress images before uploading
7. **Get feedback**: Ask others to review before sharing widely

## 🆘 Need Help?

If you get stuck:
1. Read the full README.md
2. Check browser console for errors (F12)
3. Search the error on Google
4. Ask in web development communities:
   - [Stack Overflow](https://stackoverflow.com/)
   - [Reddit r/webdev](https://reddit.com/r/webdev)
   - [Dev.to](https://dev.to/)

---

**You're ready to launch! 🚀**

Good luck with your amazing portfolio!
