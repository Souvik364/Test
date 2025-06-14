"use client";

import { useState } from 'react';
import { FiStar, FiMessageSquare, FiThumbsUp } from 'react-icons/fi';

interface ReviewCommentsProps {
  slug: string;
}

// Sample comments data
const sampleComments = [
  {
    id: 1,
    author: 'Michael Brown',
    rating: 5,
    content: 'The iPhone 15 Pro Max is truly impressive. The camera quality is exceptional, especially in low light conditions. I've been using it for two weeks now and the battery easily lasts all day even with heavy use. Definitely worth the upgrade if you're coming from an iPhone 12 or older.',
    date: '2023-09-25T14:32:00Z',
    likes: 12,
    avatar: '/avatars/user1.jpg'
  },
  {
    id: 2,
    author: 'Sarah Miller',
    rating: 4,
    content: 'Great phone overall but the price is a bit steep. The titanium design is nice but I'm not sure it's worth the premium over the regular Pro model. Camera system is excellent though and the A17 Pro chip handles everything I throw at it without breaking a sweat.',
    date: '2023-10-02T08:15:00Z',
    likes: 8,
    avatar: '/avatars/user2.jpg'
  },
  {
    id: 3,
    author: 'James Wilson',
    rating: 4.5,
    content: 'Been using this for about a month now and I'm very impressed with the overall package. Coming from Android, the ecosystem integration is seamless. The only minor complaint is that fast charging isn't really that fast compared to some competitors, but the battery life is good enough that it doesn't matter much.',
    date: '2023-10-10T19:45:00Z',
    likes: 5,
    avatar: '/avatars/user3.jpg'
  }
];

export default function ReviewComments({ slug }: ReviewCommentsProps) {
  const [comments, setComments] = useState(sampleComments);
  const [newComment, setNewComment] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [userName, setUserName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment || !userName || userRating === 0) return;
    
    setSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newCommentObj = {
        id: comments.length + 1,
        author: userName,
        rating: userRating,
        content: newComment,
        date: new Date().toISOString(),
        likes: 0,
        avatar: '/avatars/default.jpg'
      };
      
      setComments([newCommentObj, ...comments]);
      setNewComment('');
      setUserName('');
      setUserRating(0);
      setSubmitting(false);
    }, 1000);
  };
  
  const handleLike = (commentId: number) => {
    setComments(
      comments.map(comment =>
        comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Comment form */}
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h4 className="text-xl font-bold mb-4">Leave a Comment</h4>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium">Your Rating</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setUserRating(star)}
                  className="text-2xl focus:outline-none"
                >
                  <FiStar 
                    className={`${
                      star <= (hoveredRating || userRating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300 dark:text-gray-600'
                    }`} 
                  />
                </button>
              ))}
              {userRating > 0 && (
                <span className="ml-2 text-sm self-center">({userRating} / 5)</span>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="comment" className="block mb-2 text-sm font-medium">Your Comment</label>
            <textarea
              id="comment"
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={!newComment || !userName || userRating === 0 || submitting}
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting...' : 'Post Comment'}
          </button>
        </div>
      </form>
      
      {/* Comments list */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <FiMessageSquare className="text-gray-500" />
          <h4 className="text-xl font-bold">{comments.length} Comments</h4>
        </div>
        
        {comments.length === 0 ? (
          <div className="text-center py-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">Be the first to comment!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div 
                key={comment.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      {/* Would normally have real avatars here */}
                      <div className="w-full h-full flex items-center justify-center bg-primary text-white font-bold">
                        {comment.author.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h5 className="font-bold">{comment.author}</h5>
                        <div className="flex items-center mt-1">
                          {[1, 2, 3, 4, 5].map((star) => {
                            // Handle half stars
                            const isHalfStar = star - 0.5 === comment.rating;
                            const isFullStar = star <= comment.rating;
                            
                            return (
                              <span key={star} className="text-sm">
                                <FiStar 
                                  className={`${
                                    isFullStar
                                      ? 'text-yellow-400 fill-current'
                                      : isHalfStar
                                      ? 'text-yellow-400' // Half star
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`} 
                                />
                              </span>
                            );
                          })}
                          <span className="ml-1 text-xs text-gray-500">
                            ({comment.rating})
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                        {new Date(comment.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                    
                    <p className="mt-3 text-gray-700 dark:text-gray-300">{comment.content}</p>
                    
                    <div className="mt-4 flex items-center">
                      <button
                        onClick={() => handleLike(comment.id)}
                        className="flex items-center text-gray-500 hover:text-primary transition-colors"
                      >
                        <FiThumbsUp className="mr-1" />
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 