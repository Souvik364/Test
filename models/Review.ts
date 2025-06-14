import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IReview extends Document {
  title: string;
  slug: string;
  brand: string;
  category: string;
  image: string;
  gallery: string[];
  rating: number;
  price: string;
  affiliateLinks: {
    amazon?: string;
    bestBuy?: string;
    walmart?: string;
    [key: string]: string | undefined;
  };
  excerpt: string;
  content: string;
  specs: {
    [key: string]: string | number | boolean;
  };
  pros: string[];
  cons: string[];
  verdict: string;
  author: string;
  publishDate: Date;
  updatedDate: Date;
  featured: boolean;
  trending: boolean;
}

const reviewSchema = new Schema<IReview>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  gallery: [{ type: String }],
  rating: { type: Number, required: true, min: 0, max: 5 },
  price: { type: String, required: true },
  affiliateLinks: {
    amazon: { type: String },
    bestBuy: { type: String },
    walmart: { type: String },
  },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  specs: { type: Map, of: Schema.Types.Mixed },
  pros: [{ type: String }],
  cons: [{ type: String }],
  verdict: { type: String },
  author: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false },
  trending: { type: Boolean, default: false },
}, {
  timestamps: true,
});

// Add text indexes for search
reviewSchema.index({ 
  title: 'text', 
  excerpt: 'text', 
  content: 'text',
  brand: 'text',
  category: 'text'
});

// Ensure slug is unique
reviewSchema.index({ slug: 1 }, { unique: true });

// Create or use existing model
export default mongoose.models.Review || mongoose.model<IReview>('Review', reviewSchema); 