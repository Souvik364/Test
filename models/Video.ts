import mongoose, { Schema, Document } from 'mongoose';

export interface IVideo extends Document {
  title: string;
  slug: string;
  thumbnail: string;
  embedId: string; // YouTube embed ID
  duration: string;
  views: string;
  category: string;
  tags: string[];
  description: string;
  publishDate: Date;
  featured: boolean;
}

const videoSchema = new Schema<IVideo>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  thumbnail: { type: String, required: true },
  embedId: { type: String, required: true },
  duration: { type: String, required: true },
  views: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  description: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false }
}, {
  timestamps: true,
});

// Add text indexes for search
videoSchema.index({ 
  title: 'text', 
  description: 'text',
  tags: 'text',
  category: 'text'
});

// Ensure slug is unique
videoSchema.index({ slug: 1 }, { unique: true });

export default mongoose.models.Video || mongoose.model<IVideo>('Video', videoSchema); 