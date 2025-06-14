import mongoose, { Schema, Document } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  readTime: string;
  author: {
    name: string;
    avatar: string;
    bio?: string;
  };
  publishDate: Date;
  updatedDate: Date;
  featured: boolean;
  views: number;
}

const articleSchema = new Schema<IArticle>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  readTime: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    bio: { type: String }
  },
  publishDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false },
  views: { type: Number, default: 0 }
}, {
  timestamps: true,
});

// Add text indexes for search
articleSchema.index({ 
  title: 'text', 
  excerpt: 'text', 
  content: 'text',
  tags: 'text',
  category: 'text'
});

// Ensure slug is unique
articleSchema.index({ slug: 1 }, { unique: true });

export default mongoose.models.Article || mongoose.model<IArticle>('Article', articleSchema); 