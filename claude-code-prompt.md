# PROMPT FOR CLAUDE CODE: Marketing Mentorship Platform Web App

## Project Overview
Build a modern, interactive web application for a 6-month AI Marketing mentorship program. The app should help mentees visualize their learning journey, track progress, and understand the curriculum structure.

## Target Audience
Marketing professionals (non-beginners) starting their career, currently working on TikTok verification projects for celebrities, looking to become strategic AI-powered marketing professionals.

## Design Requirements

### Visual Aesthetic
- **Theme:** Dark mode with tech-forward, futuristic design
- **Color Palette:**
  - Background: Deep navy/dark (#0a0e27, #151935)
  - Primary accent: Cyan/electric blue (#00d9ff)
  - Secondary accent: Vibrant orange (#ff6b35)
  - Tertiary accent: Purple (#a78bfa)
  - Text: White primary, slate secondary (#94a3b8)
- **Typography:**
  - Headers: Space Mono (monospace, tech-feel)
  - Body: Plus Jakarta Sans (modern, readable)
- **Style Direction:** Minimalist but bold, AI/tech-centric, professional with energy

### Key Design Elements
- Animated gradient backgrounds (subtle, non-distracting)
- Glassmorphism effects on cards
- Smooth hover interactions and transitions
- Scroll-triggered animations (fade-in, slide-in)
- Neon glow effects on key elements
- Timeline visualization with gradient connector line

## App Structure & Sections

### 1. HOMEPAGE / LANDING
**Hero Section:**
- Large, bold headline: "Marketing Mastery in AI Era"
- Subtitle: "Lộ trình 6 tháng biến đổi từ Marketing Executor thành Strategic AI-Powered Professional"
- Key stats grid (4 cards):
  - 6 Tháng
  - 18 Tuần Học
  - 12 Training Sessions
  - 30+ AI Tools
- CTA button: "Khám Phá Lộ Trình"

**Program Goals Section:** (NEW - CRITICAL)
Add this section right after hero, before main navigation:

Title: "Mục Tiêu Chương Trình"
Subtitle: "6 trụ cột để trở thành Marketing Professional toàn diện"

6 Goal Cards in a grid (2x3 or 3x2):

1. **Full-Stack Marketing Mastery**
   - Icon: 🎯
   - Description: "Nắm vững toàn bộ marketing ecosystem: Digital, Branding, Event, Product Marketing, và các kỹ năng integrated marketing"
   - Key Points:
     - Digital marketing (SEO, SEM, Social Media)
     - Brand building & positioning
     - Event & experiential marketing
     - Integrated campaign planning

2. **AI-Powered Execution**
   - Icon: 🤖
   - Description: "Ứng dụng AI vào mọi khâu công việc marketing để tăng năng suất 3-5x"
   - Key Points:
     - Content creation với ChatGPT, Midjourney
     - Marketing automation (Zapier, Make.com)
     - AI analytics & insights
     - Prompt engineering mastery

3. **Project Management Excellence**
   - Icon: 📊
   - Description: "Quản lý dự án chuyên nghiệp, từ planning đến execution và reporting"
   - Key Points:
     - Agile marketing methodology
     - SOPs & workflow systemization
     - Client communication framework
     - Team collaboration tools

4. **Data-Driven Thinking**
   - Icon: 📈
   - Description: "Tư duy product marketing: hiểu và optimize các chỉ số quan trọng"
   - Key Points:
     - North Star Metrics
     - AARRR framework (Pirate Metrics)
     - Attribution modeling
     - Dashboard & reporting automation

5. **Real Project Application**
   - Icon: 🚀
   - Description: "Áp dụng kiến thức trực tiếp vào dự án TikTok verification để scale lên"
   - Key Points:
     - Case studies from current projects
     - Iterative improvement cycles
     - Portfolio building
     - Client success stories

6. **Business Fundamentals**
   - Icon: 💼
   - Description: "Kiến thức business căn bản để vận hành dịch vụ marketing bền vững"
   - Key Points:
     - Unit economics & pricing
     - Legal & contracts
     - Financial planning
     - Scaling strategies

**Design for Goals Section:**
- Each goal card should have:
  - Large icon (emoji or SVG)
  - Bold title
  - 2-3 sentence description
  - 4 bullet points (key points)
  - Hover effect: lift up, glow border
  - Color-coded accent (each card different accent color from palette)
- Layout: Responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Animation: Stagger fade-in on scroll

### 2. NAVIGATION
Sticky header with pills navigation:
- Tổng Quan (Overview)
- Lộ Trình (Curriculum)
- AI Tools
- Pricing

### 3. CURRICULUM / LỘ TRÌNH SECTION

**Timeline Structure:**
Vertical timeline with 6 month blocks, each containing weeks:

**Month 1-2: Foundation & Mindset Shift**
- Week 1-2: Marketing Ecosystem trong kỷ nguyên AI
  - Reading: "Building a StoryBrand", "Contagious", AI Marketing Report
  - Hands-on: Customer journey mapping, competitive analysis
  - Training (3h): Framework tư duy, AI tools overview
  
- Week 3-4: Digital Marketing Deep Dive
  - Reading: "Jab, Jab, Jab, Right Hook", Google Digital Garage
  - Hands-on: Content calendar 30 ngày, A/B testing plan
  - Training (4h): Platform strategies, prompt engineering

**Month 3-4: Execution & Project Management**
- Week 5-6: Project Management for Marketers
  - Reading: "SCRUM", Notion/ClickUp docs
  - Hands-on: Setup PM system, SOPs, reporting templates
  - Training (3h): Agile marketing, client communication
  
- Week 7-8: Data-Driven Marketing & Product Thinking
  - Reading: "Lean Analytics", "Inspired"
  - Hands-on: Analytics setup, dashboard creation
  - Training (4h): North Star Metrics, AARRR framework

**Month 5: Branding & Integrated Marketing**
- Week 9-10: Brand Building
  - Reading: "How Brands Grow", "Positioning"
  - Hands-on: Brand guideline, personal branding
  - Training (3h): Brand architecture, AI branding tools
  
- Week 11-12: Event Marketing & Experiential
  - Reading: Event case studies, "Experience Economy"
  - Hands-on: Plan mini-event, hybrid approach
  - Training (3h): Event funnel, sponsorship strategies

**Month 6: Business Acumen & Scaling**
- Week 13-14: Business Fundamentals
  - Reading: "The Personal MBA", "Profit First"
  - Hands-on: Business plan, pricing strategy
  - Training (4h): Unit economics, legal protection
  
- Week 15-16: Scaling & AI Automation
  - Reading: "The E-Myth Revisited", AI automation cases
  - Hands-on: Identify automation tasks, build AI systems
  - Training (4h): Marketing automation stack, team building
  
- Week 17-18: Capstone Project
  - Final Project: Integrated campaign pitch deck
  - Deliverable: Strategy, channels, content, budget, timeline, AI integration
  - Presentation to mentor + mock clients

**Week Card Design:**
Each week should be a card with:
- Week title + badge (duration)
- 3 collapsible/expandable sections:
  - 📚 Reading Materials (purple accent)
  - 🛠️ Hands-on Project (orange accent)
  - 🎯 Training Session (green accent)
- Hover: slide right, border glow
- Click: expand to show full details

**Timeline Visual:**
- Vertical gradient line on left
- Circular dots at each month
- Animated on scroll (progress fill)

### 4. AI TOOLS SECTION

Grid of 30+ AI tools, categorized:

**Categories & Tools:**

1. **Content Creation:** ChatGPT, Claude, Jasper, Copy.ai
2. **Visual Design:** Midjourney, DALL-E, Stable Diffusion, Canva AI
3. **Video Editing:** CapCut AI, Runway, Descript, Pictory
4. **Analytics:** Google Analytics 4, Mixpanel, Amplitude
5. **Data Visualization:** Tableau, Power BI, Looker Studio
6. **Project Management:** Notion AI, ClickUp, Asana, Monday
7. **Automation:** Zapier, Make.com, n8n
8. **SEO:** Surfer SEO, SEMrush, Ahrefs (AI features)
9. **Email Marketing:** Mailchimp AI, HubSpot, ActiveCampaign
10. **Social Media:** Buffer, Hootsuite (AI scheduling), Lately
11. **Design:** Figma AI, Looka, Brandmark.io
12. **Voice & Audio:** ElevenLabs, Murf, Speechify

**Tool Card Design:**
- Icon (emoji or logo)
- Tool name
- Category badge
- 1-sentence description
- Hover: lift, accent border
- Click: could link to tool website or show more details

### 5. PRICING SECTION

**3 Main Packages:**

1. **Bronze Package**
   - Price: 15-25 triệu VNĐ
   - Duration: 3 tháng
   - Features:
     - 6 training sessions (2/tháng, 3h/session)
     - Reading list + resources
     - Email support (48h response)
     - 1 portfolio review

2. **Silver Package** (RECOMMENDED - featured styling)
   - Price: 35-50 triệu VNĐ
   - Duration: 6 tháng - Full Program
   - Features:
     - 12 training sessions + full curriculum
     - Bi-weekly 1-1 check-ins (30 phút/tuần)
     - Hands-on project reviews
     - Slack/Telegram support (24h response)
     - Network intro (3-5 contacts)
     - Certificate of completion

3. **Gold Package**
   - Price: 60-80 triệu VNĐ
   - Duration: 6 tháng + 3 tháng follow-up
   - Features:
     - Everything in Silver
     - Real client project collaboration
     - Mentor tham gia 1-2 projects
     - Priority support (same-day)
     - Quarterly strategy sessions

**Alternative Models Section:**
Below the 3 main packages, show:
- Revenue Share: 20-30tr upfront + 5-10% doanh thu (cap 50-70tr)
- Monthly Retainer: 8-12tr/tháng (flexible)
- Equity Partnership: 10-20% equity for long-term advisory

**Pricing Card Design:**
- Highlight "RECOMMENDED" badge on Silver
- Gradient border on hover
- Feature list with checkmarks
- CTA button at bottom
- Different accent color per package

## Technical Requirements

### Tech Stack
- **Frontend:** Pure HTML/CSS/JavaScript (no framework needed, keep it lightweight)
- **Fonts:** Google Fonts (Space Mono, Plus Jakarta Sans)
- **Icons:** Emoji or simple SVG icons (keep it simple)
- **Animations:** CSS transitions + Intersection Observer API for scroll animations
- **Responsive:** Mobile-first approach, breakpoints at 768px, 1024px, 1400px

### Performance
- Optimize for fast loading (< 3s)
- Lazy load images if any
- Minimal JavaScript (vanilla JS only)
- CSS animations over JS animations

### Accessibility
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)

### Interactions & Animations

**On Load:**
- Hero title: fade in + slide up
- Stats cards: stagger fade in
- Goals cards: stagger fade in with delay

**On Scroll:**
- Timeline: progressive reveal
- Week cards: fade in from left
- Tool cards: fade in + scale
- Pricing cards: slide up

**On Hover:**
- All cards: lift up (translateY), border glow
- Buttons: scale slightly, shadow increase
- Navigation pills: background color change

**On Click:**
- Navigation: smooth scroll to section
- Week cards: expand/collapse content
- Tools: optional modal or external link

### File Structure
```
/mentorship-platform
├── index.html          (main file with all sections)
├── styles/
│   └── main.css       (if you want to separate CSS)
├── scripts/
│   └── app.js         (if you want to separate JS)
└── assets/
    └── (any images/icons if needed)
```

**OR** keep it as a single HTML file with inline CSS and JS for simplicity.

## Content Language
- All content in Vietnamese
- Professional but friendly tone
- Clear, concise descriptions
- Action-oriented language

## Additional Features to Consider

### Nice to Have (Phase 2):
1. **Progress Tracking:**
   - Checkboxes for completed weeks
   - Progress bar showing % completion
   - LocalStorage to save progress

2. **Downloadable Resources:**
   - PDF downloads for reading lists
   - Template downloads (SOPs, proposals)

3. **Calendar Integration:**
   - "Add to Calendar" for training sessions
   - iCal export

4. **Testimonials Section:**
   - Previous mentee success stories
   - Before/after snapshots

5. **FAQ Section:**
   - Common questions about program
   - Accordion-style answers

6. **Contact Form:**
   - Interest/inquiry form
   - Email integration

## Deliverables Expected

1. **Single HTML file** (or structured project folder)
2. **Fully responsive** across all devices
3. **Interactive elements** working smoothly
4. **All 6 sections** implemented:
   - Homepage with Goals
   - Curriculum/Timeline
   - AI Tools
   - Pricing
5. **Clean, commented code**
6. **README** with:
   - How to run locally
   - How to customize content
   - How to deploy (Netlify/Vercel instructions)

## Success Criteria

The web app should:
✅ Load in under 3 seconds
✅ Look professional and modern
✅ Be easy to navigate
✅ Clearly communicate the mentorship value
✅ Inspire the mentee to enroll
✅ Work flawlessly on mobile and desktop
✅ Have smooth, delightful interactions
✅ Stand out visually (not generic AI aesthetic)

## Design Inspiration References
- Think: Stripe's marketing pages (clean, modern)
- Linear's website (dark theme, smooth animations)
- Framer's landing pages (bold typography, great interactions)
- Vercel's design system (minimalist but impactful)

## Final Notes

- Prioritize **clarity** over complexity
- Make it **memorable** with the Goals section upfront
- Ensure **Vietnamese content** is grammatically correct
- Use **real data** from the curriculum we discussed
- Make it **easy to update** (well-structured HTML/CSS)
- Focus on **user experience** - every click should feel intentional

Build something that makes the mentee excited to start their journey! 🚀
