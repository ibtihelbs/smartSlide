# SmartSlide

> Create professional presentations in minutes, not hours.

SmartSlide transforms your structured content into polished presentations instantly. Write your script, choose your layout, and let SmartSlide handle the formatting—giving you speed without sacrificing control.

![SmartSlide Demo](./public/demo.gif) <!-- Add your demo gif here -->

## 🚀 Features

- **📝 Structure Your Content** - Write presentations in simple, structured format
- **🎨 Choose Your Layout** - Browse professionally designed layouts that auto-fill your content
- **✨ Customize Your Way** - Adjust spacing, styling, and colors to match your brand
- **💾 Export Anywhere** - Download as PowerPoint or Google Slides—fully editable

## 🎯 The Problem

Creating presentations is time-consuming. You spend hours:

- Fighting with formatting and alignment
- Adjusting spacing and layouts manually
- Copying and pasting content between slides
- Making design decisions instead of focusing on your message

## 💡 The Solution

SmartSlide lets you focus on content while handling all the design work:

1. Write your content in structured format
2. Choose from professionally designed layouts
3. Auto-fill your content instantly
4. Customize and export

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Email Collection:** [Resend/ConvertKit/Your choice]
- **Deployment:** render

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/smartslide.git

# Navigate to project directory
cd smartslide

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure

```
smartslide/
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout
│   └── api/              # API routes
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   └── WaitlistForm.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── assets/
└── styles/
```

## 🔧 Environment Variables

Create a `.env.local` file:

```env
# Email Service
RESEND_API_KEY=your_api_key_here

# Other configs
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📝 Content Format

SmartSlide uses a simple structured format:

```
Slide 1:
Title: Welcome to SmartSlide
Subtitle: Create presentations faster
Bullet Points:
- Write in simple format
- Choose your layout
- Export anywhere

Slide 2:
Title: Key Features
...
```

## 🎨 Customization

Users can customize:

- Spacing between elements
- Color schemes and themes
- Font styles and sizes
- Advanced users can create custom layouts

## 📤 Export Options

- **PowerPoint (.pptx)** - Full compatibility with Microsoft PowerPoint
- **Google Slides** - Direct import to Google Slides
- All exports are fully editable

## 🗺️ Roadmap

- [ ] Landing page with waitlist
- [ ] User authentication
- [ ] Script input interface
- [ ] Layout selection system
- [ ] Auto-fill engine
- [ ] Customization tools
- [ ] Export functionality (PPT/Google Slides)
- [ ] Advanced layout builder
- [ ] Template marketplace
- [ ] Team collaboration features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Your Name**

- GitHub: [@ibtihelbs](https://github.com/ibtihelbs)
- Email: ibtihel.bensalah@outlook.fr

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by the need for faster presentation creation

## 📞 Support

For support, email support@smartslide.com or join our Slack channel.

---

⭐ Star this repo if you find it helpful!

**Status:** 🚧 Pre-launch (Collecting waitlist signups)
