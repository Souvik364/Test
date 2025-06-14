import { IReview } from '@/models/Review';
import { IArticle } from '@/models/Article';

interface Organization {
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
}

const organizationData: Organization = {
  name: 'TechReviewer',
  url: 'https://techreviewer.com',
  logo: 'https://techreviewer.com/logo.png',
  sameAs: [
    'https://facebook.com/techreviewer',
    'https://twitter.com/techreviewer',
    'https://instagram.com/techreviewer',
    'https://youtube.com/techreviewer',
  ],
};

/**
 * Generate WebSite schema markup for the homepage
 */
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TechReviewer',
    url: 'https://techreviewer.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://techreviewer.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate organization schema markup
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationData.url,
    name: organizationData.name,
    url: organizationData.url,
    logo: organizationData.logo,
    sameAs: organizationData.sameAs,
  };
}

/**
 * Generate BreadcrumbList schema markup
 */
export function getBreadcrumbSchema(items: { name: string; item: string; position: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  };
}

/**
 * Generate Product schema markup from a review
 */
export function getProductSchema(review: IReview) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: review.title,
    image: review.image,
    description: review.excerpt,
    brand: {
      '@type': 'Brand',
      name: review.brand,
    },
    offers: {
      '@type': 'Offer',
      price: review.price.replace(/[^\d.]/g, ''), // Remove currency symbols
      priceCurrency: 'USD', // Assuming USD
      availability: 'https://schema.org/InStock',
      url: review.affiliateLinks.amazon || '',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: review.author,
      },
      publisher: {
        '@type': 'Organization',
        name: organizationData.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: review.rating,
      reviewCount: 1,
      bestRating: '5',
      worstRating: '1',
    },
  };
}

/**
 * Generate Article schema markup
 */
export function getArticleSchema(article: IArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: article.image,
    datePublished: article.publishDate.toISOString(),
    dateModified: article.updatedDate.toISOString(),
    author: {
      '@type': 'Person',
      name: article.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: organizationData.name,
      logo: {
        '@type': 'ImageObject',
        url: organizationData.logo,
      },
    },
    description: article.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://techreviewer.com/blog/${article.slug}`,
    },
  };
}

/**
 * Generate VideoObject schema markup
 */
export function getVideoSchema(video: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail,
    uploadDate: video.publishDate.toISOString(),
    duration: formatDuration(video.duration),
    embedUrl: `https://www.youtube.com/embed/${video.embedId}`,
    publisher: {
      '@type': 'Organization',
      name: organizationData.name,
      logo: {
        '@type': 'ImageObject',
        url: organizationData.logo,
      },
    },
  };
}

/**
 * Helper to format duration in ISO 8601 format
 */
function formatDuration(duration: string): string {
  // Convert "12:34" format to "PT12M34S" ISO 8601 format
  const parts = duration.split(':');
  if (parts.length === 2) {
    return `PT${parts[0]}M${parts[1]}S`;
  } else if (parts.length === 3) {
    return `PT${parts[0]}H${parts[1]}M${parts[2]}S`;
  }
  return '';
} 