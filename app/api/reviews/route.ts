import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Review from '@/models/Review';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const brand = searchParams.get('brand');
    const category = searchParams.get('category');
    const minRating = searchParams.get('minRating');
    const sort = searchParams.get('sort') || 'publishDate';
    const order = searchParams.get('order') || 'desc';
    
    const skip = (page - 1) * limit;
    
    // Build filter
    const filter: any = {};
    
    if (brand) {
      filter.brand = brand;
    }
    
    if (category) {
      filter.category = category;
    }
    
    if (minRating) {
      filter.rating = { $gte: parseFloat(minRating) };
    }
    
    // Build sort
    const sortOptions: any = {};
    sortOptions[sort] = order === 'asc' ? 1 : -1;
    
    // Connect to database
    await dbConnect();
    
    // Get reviews with pagination
    const reviews = await Review.find(filter)
      .sort(sortOptions)
      .limit(limit)
      .skip(skip);
    
    // Get total count for pagination
    const totalReviews = await Review.countDocuments(filter);
    
    return NextResponse.json({
      success: true,
      data: reviews,
      pagination: {
        total: totalReviews,
        page,
        limit,
        pages: Math.ceil(totalReviews / limit)
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
} 