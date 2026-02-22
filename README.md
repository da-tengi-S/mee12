# Datenzi Sherpa - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, dark theme with gold accents, and a professional design.

## 🎨 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS and JavaScript animations for enhanced user experience
- **Dark Theme**: Elegant dark background with gold accents
- **Interactive Elements**: Animated counters, progress bars, and hover effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Performance Optimized**: Lazy loading images and debounced scroll events

## 📁 Project Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── images/             # Image folder (create this)
    ├── profile.jpg     # Your profile photo
    ├── project1.jpg    # Project 1 image
    ├── project2.jpg    # Project 2 image
    ├── project3.jpg    # Project 3 image
    └── project4.jpg    # Project 4 image
```

## 🚀 Getting Started

### 1. Download the Files

Save these three files in a folder:
- `index.html`
- `styles.css`
- `script.js`

### 2. Create Images Folder

Create a folder named `images` in the same directory as your HTML file.

### 3. Add Your Images

Add the following images to the `images` folder:
- **profile.jpg**: Your profile photo (recommended: 400x400px, square)
- **project1.jpg to project4.jpg**: Your project screenshots (recommended: 800x600px)

**Image Recommendations:**
- Format: JPG or PNG
- Profile photo: 400x400px (square, will be displayed as circle)
- Project images: 800x600px or similar 4:3 ratio
- Keep file sizes under 500KB for faster loading

### 4. Where to Get Images

**Free Image Placeholders (until you add your own):**
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images
- [Lorem Picsum](https://picsum.photos/) - Placeholder images

**For placeholder images, you can use these URLs temporarily:**
```html
<!-- In your HTML, replace image src with: -->
Profile: https://picsum.photos/400/400
Project images: https://picsum.photos/800/600
```

### 5. Test Locally

1. Open `index.html` in your web browser
2. Navigate through all sections
3. Test the mobile menu (resize browser to mobile width)
4. Fill out the contact form to test functionality

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #D4AF37;      /* Gold accent color */
    --color-secondary: #1a1a1a;    /* Dark gray */
    --color-background: #0d0d0d;   /* Almost black */
    --color-accent: #ff6b6b;       /* Red accent */
}
```

### Updating Content

#### Personal Information
In `index.html`, update:
- Your name in the hero section
- About me text
- Skills and percentages
- Project descriptions
- Contact information

#### Statistics
Update the `data-target` values in the About section:
```html
<span class="stat-number" data-target="50">0</span> <!-- Change 50 to your number -->
```

#### Skills
Update skill names and percentages:
```html
<div class="skill-progress" data-progress="95"></div> <!-- Change 95 to your percentage -->
```

### Changing Fonts

The website uses:
- **Display Font**: Playfair Display (headings)
- **Body Font**: Space Mono (text)

To change fonts, update the Google Fonts link in `index.html` and CSS variables in `styles.css`.

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `your-username.github.io` (replace with your actual username)
4. Make it public
5. Don't initialize with README

### Step 2: Upload Your Files

**Option A: Using GitHub Website**
1. Click "uploading an existing file"
2. Drag and drop all your files and the images folder
3. Commit changes

**Option B: Using Git Command Line**
```bash
# Navigate to your project folder
cd path/to/your/portfolio-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add remote repository (replace with your username)
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "Pages" section
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://your-username.github.io`

## 🌐 Alternative Hosting Options

### Netlify (Easiest)
1. Go to [Netlify](https://www.netlify.com/)
2. Drag and drop your folder
3. Get a free subdomain: `your-site.netlify.app`

### Vercel
1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Auto-deploy on every push

### GitHub Pages (Free)
- As described above
- Best for: `username.github.io`

## 📱 Mobile Testing

Test your site on different devices:
1. Chrome DevTools (F12 → Device Toolbar)
2. Actual mobile devices
3. [Responsive Design Checker](https://responsivedesignchecker.com/)

## 🐛 Troubleshooting

### Images Not Showing
- Check file names match exactly (case-sensitive)
- Verify images are in the `images/` folder
- Check file extensions (.jpg vs .jpeg)

### Mobile Menu Not Working
- Ensure script.js is loading
- Check browser console for JavaScript errors (F12)

### Animations Not Working
- Clear browser cache
- Check if JavaScript is enabled
- Test in different browsers

### Contact Form Not Sending
The current form shows a notification but doesn't actually send emails. To make it functional:

**Option 1: Use Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Use EmailJS**
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your service ID
3. Add EmailJS JavaScript code

**Option 3: Backend Integration**
- Use Node.js with Nodemailer
- Use PHP mail() function
- Use cloud functions (Firebase, AWS Lambda)

## 📝 Content Checklist

Before going live, make sure you've updated:

- [ ] Profile photo (`images/profile.jpg`)
- [ ] All project images
- [ ] Your name in the hero section
- [ ] About me text
- [ ] Statistics numbers
- [ ] Project titles and descriptions
- [ ] Skills and percentages
- [ ] Contact email
- [ ] Phone number
- [ ] Location
- [ ] Social media links (GitHub, LinkedIn, Twitter)
- [ ] Meta description in HTML

## 🎯 Performance Tips

1. **Optimize Images**
   - Use [TinyPNG](https://tinypng.com/) to compress images
   - Recommended: JPG for photos, PNG for graphics
   - Keep under 500KB per image

2. **Minify Code** (for production)
   - Use [CSS Minifier](https://cssminifier.com/)
   - Use [JavaScript Minifier](https://javascript-minifier.com/)

3. **Enable Caching**
   - Add `.htaccess` file for Apache servers
   - Configure caching headers

## 🔒 Security Notes

- The contact form currently only shows notifications
- To accept real form submissions, implement server-side validation
- Never expose API keys in frontend code
- Use HTTPS (GitHub Pages provides this automatically)

## 📈 SEO Improvements

1. Add a `sitemap.xml`
2. Add a `robots.txt`
3. Use descriptive alt text for images
4. Add Open Graph meta tags for social sharing
5. Submit to Google Search Console

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JS reference
- [CSS Tricks](https://css-tricks.com/) - CSS tutorials
- [JavaScript.info](https://javascript.info/) - Modern JavaScript
- [Web.dev](https://web.dev/) - Performance optimization

## 📄 License

Feel free to use this template for your own portfolio! No attribution required, but appreciated.

## 🤝 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all files are in the correct location
3. Test in a different browser
4. Clear cache and reload

## 🚀 Next Steps

1. Replace all placeholder content with your own
2. Add your images
3. Test thoroughly on different devices
4. Deploy to GitHub Pages or Netlify
5. Share your portfolio with the world!

---

**Built with ❤️ by Datenzi Sherpa**

Good luck with your portfolio! 🎉
