# TechReviewer - SEO-Friendly Tech Review Website

A responsive, modern, and SEO-friendly website for phone reviews and digital product content built with Next.js 14 and Tailwind CSS.

## Features

- **Responsive, Mobile-First Design**: Optimized for all screen sizes
- **SEO-Friendly**: Built with Next.js for server-side rendering and static generation
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Modern UI**: Clean, futuristic tech look with Tailwind CSS
- **Rich Content Pages**:
  - Home Page with featured reviews and trending products
  - Reviews Page with filtering and sorting capabilities
  - Blog/Articles Section with categories and search
  - Video Gallery with YouTube embeds
  - About Page with team information

## Implementation Details

### Pages
1. **Home Page**
   - Hero section with dynamic animations using Framer Motion
   - Featured reviews grid with ratings and summaries
   - Trending products carousel with navigation controls
   - Latest articles section with category tags
   - Newsletter sign-up with validation

2. **Reviews Page**
   - Filtering by brand, category, price range, and rating
   - Toggle between grid and list view
   - Sort by newest, highest rated, price (high to low/low to high)
   - Responsive design for all screen sizes

3. **Blog/Articles Page**
   - Search functionality with category filters
   - Sidebar with popular articles, newsletter sign-up, and tag cloud
   - Article card with author info, reading time, and publish date
   - Pagination controls

4. **Video Page**
   - YouTube video thumbnails with duration overlay
   - Category filtering and sorting options
   - Lightbox modal for video playback
   - Views and date information

5. **About Page**
   - Team members section with social media links
   - Mission statement and core values
   - Review methodology explanation
   - Contact information

6. **Review Detail Page**
   - Product schema markup for SEO
   - Image gallery with lightbox
   - Rating breakdown with pros and cons
   - Specifications table
   - User comments section
   - Related reviews
   - Affiliate links

### Components
- **Header**: Navigation menu, dark/light mode toggle, search button
- **Footer**: Site links, newsletter sign-up, social media icons
- **FeaturedReviews**: Showcase top product reviews
- **TrendingProducts**: Horizontal scrolling carousel
- **Newsletter**: Email subscription form with validation
- **ReviewFilters**: Filter options for the reviews listing page
- **ReviewsGrid**: Display reviews in grid or list view
- **BlogListing**: Article listing with search and filtering
- **VideoGallery**: YouTube video gallery with filtering
- **ReviewGallery**: Product image gallery with lightbox
- **ReviewRatingBox**: Visual star rating display with breakdown
- **ReviewComments**: User comments section with rating input
- **RelatedReviews**: Sidebar showing related product reviews

### Technical Stack
- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **State Management**: React hooks and context
- **Animation**: Framer Motion for smooth transitions
- **Icons**: React Icons (Feather icon set)
- **SEO**: Next SEO with JSON-LD schema markup
- **Styling**: Tailwind CSS with custom theme configuration
- **Database**: MongoDB schema models prepared for production
- **API Routes**: Next.js API endpoints for data fetching
- **Theming**: Dark/light mode using next-themes

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/tech-review-site.git
   cd tech-review-site
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
tech-review-site/
├── app/                # Next.js app directory
│   ├── about/          # About page
│   ├── api/            # API routes
│   ├── blog/           # Blog pages
│   ├── reviews/        # Review pages 
│   ├── videos/         # Video pages
│   ├── page.tsx        # Home page
│   └── layout.tsx      # Root layout
├── components/         # React components
├── public/             # Static assets
├── lib/                # Utility functions, MongoDB connection
│   ├── mongodb.ts      # Database connection utility
│   ├── schemaMarkup.ts # JSON-LD schema generators
│   └── utils.ts        # Helper functions
├── models/             # MongoDB models
│   ├── Article.ts      # Article schema
│   ├── Review.ts       # Review schema
│   └── Video.ts        # Video schema
└── ...                 # Configuration files
```

## Future Enhancements

- User authentication and personalized recommendations
- Admin dashboard for content management
- Comment system with user accounts
- Integrated analytics for tracking popular content
- Push notifications for new reviews and articles
- Integration with external APIs for product specifications

## License

This project is licensed under the MIT License - see the LICENSE file for details. 