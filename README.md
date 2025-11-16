# Pathways to Success India - Website

A modern, responsive website for Pathways to Success India, a 501(c)(3) non-profit organization dedicated to empowering underprivileged children through quality education.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Optimized for speed with minimal dependencies
- **SEO Friendly**: Semantic HTML and proper meta tags for better search engine visibility
- **Accessible**: WCAG compliant with proper ARIA labels and semantic markup
- **Interactive Elements**: Animated counters, smooth scrolling, and engaging user interactions

## 📁 Project Structure

```
pathways-website/
├── index.html              # Homepage
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── script.js          # JavaScript for interactivity
├── pages/
│   ├── about.html         # About Us page
│   ├── impact.html        # Our Impact page
│   ├── projects.html      # Projects page
│   ├── donate.html        # Donations/Get Involved page
│   └── contact.html       # Contact page
├── images/                 # Image assets (add your images here)
├── netlify.toml           # Netlify deployment configuration
└── README.md              # This file
```

## 🚀 Quick Start

### View Locally

1. **Download or clone the project**
2. **Open `index.html` in your web browser**
3. That's it! No build process required.

For a better development experience with live reload:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have it installed)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🌐 Deployment

### Deploy to Netlify (Recommended - Free)

1. **Create a Netlify account** at [netlify.com](https://netlify.com)

2. **Option A: Drag & Drop**
   - Zip the `pathways-website` folder
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the folder
   - Your site is live!

3. **Option B: Git Deployment (Recommended for updates)**
   ```bash
   # Initialize git repository
   cd pathways-website
   git init
   git add .
   git commit -m "Initial commit"

   # Create a new repository on GitHub
   # Then push to GitHub
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main

   # Connect to Netlify
   # 1. Go to Netlify dashboard
   # 2. Click "New site from Git"
   # 3. Connect your GitHub repository
   # 4. Deploy!
   ```

4. **Custom Domain** (Optional)
   - In Netlify dashboard, go to Domain Settings
   - Add your custom domain
   - Follow DNS configuration instructions

### Deploy to GitHub Pages (Free)

1. **Create a GitHub repository**

2. **Push your code**
   ```bash
   cd pathways-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source: "main" branch, root folder
   - Save and wait for deployment

4. **Access your site** at `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Deploy to Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd pathways-website
   vercel
   ```

3. Follow the prompts to deploy

## 🎨 Customization

### Update Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-green: #2A643C;      /* Main brand color */
    --accent-orange: #F59E0B;      /* CTA buttons */
    --text-dark: #1F2937;          /* Main text */
    /* ... */
}
```

### Add Your Content

1. **Replace Placeholder Text**
   - Update team member names and bios in `pages/about.html`
   - Add real project details in `pages/projects.html`
   - Update contact information across all pages

2. **Add Images**
   - Create an `images` folder
   - Replace `.image-placeholder` divs with actual images:
   ```html
   <!-- Replace this: -->
   <div class="image-placeholder">Add image here</div>

   <!-- With this: -->
   <img src="../images/your-image.jpg" alt="Description">
   ```

3. **Update Stats**
   - Edit the `data-target` attributes in stat cards to reflect your actual numbers
   - The numbers will animate when users scroll to them

### Add Real Forms

The forms currently show alerts. To make them functional:

1. **Use a form service** like:
   - [Formspree](https://formspree.io/) (Free tier available)
   - [Netlify Forms](https://www.netlify.com/products/forms/) (Free with Netlify)
   - [Google Forms](https://forms.google.com/)

2. **Example with Formspree:**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
       <!-- Your form fields -->
   </form>
   ```

3. **Example with Netlify Forms:**
   ```html
   <form name="contact" method="POST" data-netlify="true">
       <!-- Your form fields -->
   </form>
   ```

### Add Payment Gateway

To accept donations:

1. **Razorpay** (Popular in India)
   - Sign up at [razorpay.com](https://razorpay.com/)
   - Add payment button code to `pages/donate.html`

2. **Stripe** (International)
   - Sign up at [stripe.com](https://stripe.com/)
   - Follow integration guide

3. **PayPal**
   - Create donation button at [paypal.com](https://www.paypal.com/donate/)
   - Add button code to donation page

## 📱 Pages Overview

### Homepage (`index.html`)
- Hero section with compelling headline
- Impact statistics with animated counters
- Mission statement
- Featured projects
- Success stories/testimonials
- Call-to-action sections

### About Us (`pages/about.html`)
- Organization story
- Mission and vision
- Core values
- Leadership team
- Partners and supporters
- Timeline of milestones

### Our Impact (`pages/impact.html`)
- Detailed statistics
- Schools supported
- Key impact areas
- Geographic reach
- Testimonials from beneficiaries

### Projects (`pages/projects.html`)
- Active projects with progress bars
- Completed projects with results
- Project categories
- Selection criteria

### Donate (`pages/donate.html`)
- Donation tiers with impact descriptions
- Transparent fund allocation
- Donation form
- Alternative ways to give
- Tax information

### Contact (`pages/contact.html`)
- Contact form
- Contact information
- Office hours
- Social media links
- FAQ section

## 🔧 Technical Details

- **No dependencies**: Pure HTML, CSS, and vanilla JavaScript
- **Fonts**: Google Fonts (Open Sans, Playfair Display)
- **Icons**: Unicode emojis (can be replaced with Font Awesome if needed)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile-First**: Responsive design that works on all screen sizes

## 📊 Performance

- Lighthouse Score: 95+ (expected)
- Fast load times with optimized assets
- Minimal HTTP requests
- Proper caching headers configured

## 🔒 Security

- XSS protection headers
- CSRF protection for forms (when integrated)
- Secure HTTPS (when deployed)
- No vulnerable dependencies

## 📝 Next Steps

1. **Add Real Content**
   - Replace all placeholder text with actual content
   - Add professional photos of students, schools, and projects
   - Update statistics with real numbers

2. **Set Up Analytics**
   - Add Google Analytics or similar
   - Track donations and conversions
   - Monitor user engagement

3. **Integrate Payment**
   - Set up payment gateway
   - Configure donation receipts
   - Add payment security badges

4. **Set Up Forms**
   - Configure form backend
   - Set up email notifications
   - Add form validation

5. **SEO Optimization**
   - Add Google Search Console
   - Create sitemap.xml
   - Add structured data markup

6. **Social Media**
   - Update social media links
   - Add Open Graph meta tags
   - Create social media sharing images

## 🤝 Support

For questions or issues with the website, contact the development team or refer to:
- [Netlify Documentation](https://docs.netlify.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)

## 📄 License

This website is created for Pathways to Success India. All rights reserved.

---

**Built with ❤️ for education and social impact**
