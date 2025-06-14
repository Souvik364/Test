import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiStar, FiCheck, FiX, FiShoppingCart, FiChevronRight } from 'react-icons/fi';
import { getProductSchema, getBreadcrumbSchema } from '@/lib/schemaMarkup';
import ReviewRatingBox from '@/components/ReviewRatingBox';
import ReviewSpecsTable from '@/components/ReviewSpecsTable';
import ReviewGallery from '@/components/ReviewGallery';
import ReviewComments from '@/components/ReviewComments';
import RelatedReviews from '@/components/RelatedReviews';

// This would normally come from a database or API
const review = {
  id: 1,
  title: 'iPhone 15 Pro Max',
  slug: 'iphone-15-pro-max',
  brand: 'Apple',
  category: 'Smartphone',
  image: '/iphone15-pro-max.jpg',
  gallery: [
    '/iphone15-pro-max-1.jpg',
    '/iphone15-pro-max-2.jpg',
    '/iphone15-pro-max-3.jpg',
    '/iphone15-pro-max-4.jpg',
  ],
  rating: 4.8,
  price: '$1,099',
  affiliateLinks: {
    amazon: 'https://www.amazon.com/dp/B0CHX1K2ZC',
    bestBuy: 'https://www.bestbuy.com/site/apple-iphone-15-pro-max',
    walmart: 'https://www.walmart.com/ip/Apple-iPhone-15-Pro-Max'
  },
  excerpt: 'Apple's most advanced iPhone with a titanium design, A17 Pro chip, and a revolutionary camera system.',
  content: `<p>The iPhone 15 Pro Max represents Apple's ultimate smartphone offering for 2023, featuring the new A17 Pro chip built on a 3nm process, a titanium frame that reduces weight while maintaining durability, and significant camera improvements including a 5x optical zoom periscope lens.</p>
  
  <p>Starting at $1,099 for the base 128GB model, this premium device targets users who want the absolute best iPhone experience without compromise. The titanium design not only looks premium but also contributes to a device that feels surprisingly manageable despite its 6.7-inch display.</p>
  
  <p>The A17 Pro chip delivers desktop-class gaming performance, and combined with the 120Hz ProMotion display, makes everything from scrolling to gaming buttery smooth. Apple claims up to 29 hours of video playback on a single charge, and our testing confirms that the battery life is indeed excellent, easily lasting a full day of heavy use.</p>
  
  <p>Photography enthusiasts will appreciate the new camera system. The main 48MP sensor produces stunningly detailed photos, and the new 5x telephoto lens opens up new creative possibilities. The ultrawide camera has also been improved for better macro photography.</p>
  
  <p>Apple has finally replaced the Lightning port with USB-C, bringing faster data transfers and universal charging compatibility. The iPhone 15 Pro Max supports USB 3 speeds (up to 10Gbps), a significant upgrade from Lightning's USB 2.0 speeds.</p>
  
  <p>Overall, the iPhone 15 Pro Max is the most complete iPhone Apple has ever made. It's expensive, but for those who want the best possible iPhone experience, it delivers on almost every front.</p>`,
  specs: {
    display: '6.7-inch OLED ProMotion (120Hz), 2796 x 1290 pixels',
    processor: 'A17 Pro (3nm)',
    storage: '128GB / 256GB / 512GB / 1TB',
    battery: '4,422 mAh',
    rearCamera: '48MP main, 12MP ultra-wide, 12MP 5x telephoto',
    frontCamera: '12MP TrueDepth',
    os: 'iOS 17',
    dimensions: '159.9 x 76.7 x 8.25 mm',
    weight: '221 g',
    colors: 'Natural Titanium, Blue Titanium, White Titanium, Black Titanium',
    connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, USB-C, NFC',
    waterResistance: 'IP68 (6m for 30 minutes)',
  },
  pros: [
    'Premium titanium design feels great in hand',
    'Incredible performance from A17 Pro chip',
    'Versatile camera system with excellent 5x zoom',
    'Bright, vibrant display with 120Hz refresh rate',
    'USB-C port finally replaces Lightning',
    'All-day battery life'
  ],
  cons: [
    'Very expensive',
    'No charger in the box',
    'USB-C speeds not as fast as Thunderbolt',
    'Heavy compared to non-Pro iPhones',
    'iOS still has limited customization'
  ],
  verdict: 'The iPhone 15 Pro Max is the ultimate iPhone for those who want the best of everything Apple has to offer. The camera system is versatile and powerful, the A17 Pro chip sets new performance standards, and the titanium design feels premium. If you can afford it and want the absolute best iPhone experience, this is the model to get.',
  author: 'Alex Chen',
  publishDate: new Date('2023-09-22'),
  updatedDate: new Date('2023-09-25'),
  featured: true,
  trending: true
};

// This would be generated server-side based on the actual review data
export const metadata: Metadata = {
  title: `${review.title} Review - Specs, Pros & Cons | TechReviewer`,
  description: review.excerpt,
};

// This would be generated server-side as well
export async function generateMetadata() {
  // Add schema markup through the metadata
  return {
    other: {
      'json-ld': [
        getProductSchema(review),
        getBreadcrumbSchema([
          { name: 'Home', item: 'https://techreviewer.com/', position: 1 },
          { name: 'Reviews', item: 'https://techreviewer.com/reviews/', position: 2 },
          { name: review.title, item: `https://techreviewer.com/reviews/${review.slug}`, position: 3 },
        ]),
      ],
    },
  };
}

export default function ReviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs mb-6 text-gray-500 dark:text-gray-400">
        <ul className="flex items-center flex-wrap">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">
              <FiChevronRight className="inline" size={14} />
            </span>
          </li>
          <li>
            <Link href="/reviews" className="hover:text-primary transition-colors">
              Reviews
            </Link>
            <span className="mx-2">
              <FiChevronRight className="inline" size={14} />
            </span>
          </li>
          <li className="text-gray-700 dark:text-gray-200 font-medium">
            {review.title}
          </li>
        </ul>
      </div>

      {/* Review Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md">
            {review.brand}
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 text-xs px-2 py-1 rounded-md">
            {review.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{review.title} Review</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          {review.excerpt}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span>By {review.author}</span>
          <span>•</span>
          <span>
            Published: {review.publishDate.toLocaleDateString('en-US', { 
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span>•</span>
          <span>
            Updated: {review.updatedDate.toLocaleDateString('en-US', { 
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Main Image and Gallery */}
          <div className="mb-8">
            <ReviewGallery mainImage={review.image} gallery={review.gallery} />
          </div>

          {/* Review Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: review.content }} />
          </div>

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-5 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">Pros</h3>
              <ul className="space-y-2">
                {review.pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-5 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">Cons</h3>
              <ul className="space-y-2">
                {review.cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <FiX className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verdict */}
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-3">Our Verdict</h3>
            <p className="text-gray-700 dark:text-gray-300">{review.verdict}</p>
          </div>
          
          {/* Specifications */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Specifications</h3>
            <ReviewSpecsTable specs={review.specs} />
          </div>
          
          {/* Comments */}
          <div>
            <h3 className="text-2xl font-bold mb-4">User Comments</h3>
            <ReviewComments slug={review.slug} />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          {/* Rating Card */}
          <div className="sticky top-20">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold">Rating</h4>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary mr-2">{review.rating}</span>
                  <span className="text-sm text-gray-500">/5</span>
                </div>
              </div>
              
              <ReviewRatingBox rating={review.rating} />
              
              <div className="mt-6">
                <div className="text-2xl font-bold mb-2">{review.price}</div>
                <div className="space-y-3 mt-4">
                  {Object.entries(review.affiliateLinks).map(([store, url]) => (
                    <a 
                      key={store}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 py-2 px-4 w-full rounded-lg transition-colors ${
                        store === 'amazon' 
                          ? 'bg-primary text-white hover:bg-primary-dark' 
                          : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <FiShoppingCart />
                      <span className="font-medium">
                        Buy on {store.charAt(0).toUpperCase() + store.slice(1)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Related Reviews */}
            <RelatedReviews currentSlug={review.slug} brand={review.brand} category={review.category} />
          </div>
        </div>
      </div>
    </div>
  );
} 