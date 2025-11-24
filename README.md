# Balmcity - Modern Graphic Design Agency Landing Page

A beautiful, responsive landing page for Balmcity, a modern graphic design agency specializing in branding, digital illustrations, and creative visuals.

## 🎨 Features

- **Modern Design**: Clean, artistic aesthetic with fluid designs and earthy tones
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Static Export**: Built with Next.js static export for easy deployment
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant design and keyboard navigation

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Color Palette** - Earthy tones (soft blues, greens, neutrals)
- **Google Fonts** - Inter & Playfair Display typography

## 📋 Sections

1. **Header** - Navigation with smooth scroll links
2. **Hero** - Eye-catching introduction with call-to-action
3. **About** - Company story and core values
4. **Services** - Comprehensive service offerings
5. **Portfolio** - Filterable project showcase
6. **Testimonials** - Client feedback carousel
7. **Contact** - Contact form and company information
8. **Footer** - Links, newsletter signup, and social media

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd balmcity-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates an optimized static export in the `out` directory, ready for deployment to any static hosting service.

## 🎨 Color Palette

- **Primary Blue**: #0ea5e9 (sky-500)
- **Sage Green**: #5d735d (sage-500)
- **Neutral**: #78716c (stone-500)
- **Background**: #fafaf9 (stone-50)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

The project is configured for static export and can be deployed to:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `out` folder
- **GitHub Pages**: Upload the `out` folder contents
- **Any static hosting service**

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Manual Deployment

1. Run `npm run build`
2. Upload the contents of the `out` directory to your hosting service

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* your primary colors */ },
  sage: { /* your accent colors */ },
  // ...
}
```

### Content
- Update company information in each component
- Replace placeholder images with actual portfolio pieces
- Modify testimonials with real client feedback
- Update contact information and social links

### Fonts
Change typography in `src/app/globals.css`:

```css
@import url('your-google-fonts-url');
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support or questions, please contact:
- Email: hello@balmcity.com
- Website: [balmcity.com](https://balmcity.com)

---

Built with ❤️ by the Balmcity team