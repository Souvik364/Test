import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Video from '@/models/Video';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const sort = searchParams.get('sort') || 'publishDate';
    const order = searchParams.get('order') || 'desc';
    
    const skip = (page - 1) * limit;
    
    // Build filter
    const filter: any = {};
    
    if (category) {
      filter.category = category;
    }
    
    if (tag) {
      filter.tags = tag;
    }
    
    // Build sort
    const sortOptions: any = {};
    sortOptions[sort] = order === 'asc' ? 1 : -1;
    
    // Connect to database
    await dbConnect();
    
    // Get videos with pagination
    const videos = await Video.find(filter)
      .sort(sortOptions)
      .limit(limit)
      .skip(skip);
    
    // Get total count for pagination
    const totalVideos = await Video.countDocuments(filter);
    
    // Get available categories for filtering
    const categories = await Video.distinct('category');
    
    return NextResponse.json({
      success: true,
      data: videos,
      categories,
      pagination: {
        total: totalVideos,
        page,
        limit,
        pages: Math.ceil(totalVideos / limit)
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch videos' },
      { status: 500 }
    );
  }
} 