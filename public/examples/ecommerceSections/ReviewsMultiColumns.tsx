import React from 'react';
import { Star, ThumbsUp, ThumbsDown, CheckCircle, User } from 'lucide-react';

// Star Rating Component
const StarRating = ({ rating, size = 'sm' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
            star <= rating
              ? 'text-yellow-400 fill-current'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

// Individual Review Card Component
const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {review.avatar ? (
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={review.avatar}
                alt={review.author}
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-400" />
              </div>
            )}
          </div>
          <div className="ml-3">
            <div className="flex items-center">
              <h4 className="text-sm font-medium text-gray-900">{review.author}</h4>
              {review.verified && (
                <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
              )}
            </div>
            <div className="flex items-center mt-1">
              <StarRating rating={review.rating} size="sm" />
              <span className="ml-2 text-sm text-gray-500">{review.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h5 className="text-sm font-medium text-gray-900">{review.title}</h5>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          {review.content}
        </p>
      </div>

      {review.images && review.images.length > 0 && (
        <div className="mt-4 flex space-x-2">
          {review.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Review image ${index + 1}`}
              className="h-16 w-16 rounded-lg object-cover border border-gray-200"
            />
          ))}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>Helpful ({review.helpful})</span>
          </button>
          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <ThumbsDown className="h-4 w-4 mr-1" />
            <span>Not helpful</span>
          </button>
        </div>
        {review.purchaseVerified && (
          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
            Verified Purchase
          </span>
        )}
      </div>
    </div>
  );
};

// Review Summary Component
const ReviewSummary = ({ reviews }) => {
  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
  
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / totalReviews) * 100
  }));

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
      <h3 className="text-lg font-medium text-gray-900">Customer Reviews</h3>
      
      <div className="mt-6 flex items-center">
        <div className="flex items-center">
          <StarRating rating={Math.round(averageRating)} size="md" />
          <span className="ml-2 text-lg font-medium text-gray-900">
            {averageRating.toFixed(1)}
          </span>
        </div>
        <span className="ml-3 text-sm text-gray-500">
          Based on {totalReviews} reviews
        </span>
      </div>

      <div className="mt-6">
        {ratingCounts.map(({ rating, count, percentage }) => (
          <div key={rating} className="flex items-center mt-2">
            <span className="text-sm font-medium text-gray-700 w-8">
              {rating}
            </span>
            <Star className="h-4 w-4 text-yellow-400 fill-current ml-1" />
            <div className="mx-3 flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-yellow-400 h-2 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="text-sm text-gray-500 w-12 text-right">
              {count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Filter and Sort Component
const ReviewFilters = ({ sortBy, setSortBy, filterRating, setFilterRating }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div className="flex items-center space-x-4">
        <select
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="all">All ratings</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="highest">Highest rated</option>
          <option value="lowest">Lowest rated</option>
          <option value="helpful">Most helpful</option>
        </select>
      </div>
    </div>
  );
};

// Main Multi-Column Reviews Component
const MultiColumnReviews = () => {
  const [sortBy, setSortBy] = React.useState('newest');
  const [filterRating, setFilterRating] = React.useState('all');

  // Sample review data
  const reviews = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      title: "Excellent quality and fast shipping",
      content: "I absolutely love this product! The quality is outstanding and it arrived much faster than expected. The attention to detail is impressive and it's exactly what I was looking for. Highly recommend to anyone considering this purchase.",
      date: "2 days ago",
      helpful: 12,
      verified: true,
      purchaseVerified: true,
      images: ["https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop"]
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      title: "Good value for money",
      content: "Really solid product overall. The build quality is good and it works as advertised. Only minor complaint is that the packaging could be better, but the product itself is great. Would definitely buy again.",
      date: "1 week ago",
      helpful: 8,
      verified: true,
      purchaseVerified: true
    },
    {
      id: 3,
      author: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      title: "Perfect for my needs",
      content: "This exceeded my expectations in every way. The design is beautiful, functionality is top-notch, and customer service was amazing when I had questions. Can't recommend this enough!",
      date: "1 week ago",
      helpful: 15,
      verified: true,
      purchaseVerified: true,
      images: [
        "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=200&fit=crop"
      ]
    },
    {
      id: 4,
      author: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 3,
      title: "Decent but room for improvement",
      content: "It's an okay product. Does what it's supposed to do but I've seen better quality elsewhere. The price point is fair though, so if you're on a budget this could work for you.",
      date: "2 weeks ago",
      helpful: 3,
      verified: true,
      purchaseVerified: true
    },
    {
      id: 5,
      author: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      title: "Amazing customer service",
      content: "Not only is the product fantastic, but the customer service team went above and beyond to help me with my order. They answered all my questions promptly and professionally. This is how business should be done!",
      date: "3 weeks ago",
      helpful: 9,
      verified: true,
      purchaseVerified: true
    },
    {
      id: 6,
      author: "James Thompson",
      rating: 4,
      title: "Great build quality",
      content: "Really impressed with the construction and materials used. Feels very solid and well-made. Setup was straightforward and everything works perfectly. Good purchase overall.",
      date: "3 weeks ago",
      helpful: 6,
      verified: false,
      purchaseVerified: true
    },
    {
      id: 7,
      author: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      rating: 2,
      title: "Not as described",
      content: "The product doesn't quite match the description on the website. It's smaller than I expected and the color is slightly different. It works fine, but I wish the listing was more accurate.",
      date: "1 month ago",
      helpful: 4,
      verified: true,
      purchaseVerified: true
    },
    {
      id: 8,
      author: "Robert Brown",
      rating: 5,
      title: "Exceeded expectations",
      content: "This product has been a game-changer for me. The quality is exceptional and it has made my daily routine so much easier. Worth every penny and I'll definitely be a repeat customer.",
      date: "1 month ago",
      helpful: 11,
      verified: false,
      purchaseVerified: true
    }
  ];

  // Filter and sort reviews
  const filteredReviews = React.useMemo(() => {
    let filtered = reviews;
    
    if (filterRating !== 'all') {
      filtered = filtered.filter(review => review.rating === parseInt(filterRating));
    }
    
    switch (sortBy) {
      case 'oldest':
        return [...filtered].reverse();
      case 'highest':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'lowest':
        return [...filtered].sort((a, b) => a.rating - b.rating);
      case 'helpful':
        return [...filtered].sort((a, b) => b.helpful - a.helpful);
      default: // newest
        return filtered;
    }
  }, [filterRating, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Product Reviews</h1>
          <p className="mt-2 text-lg text-gray-600">
            See what our customers are saying about this product
          </p>
        </div>

        {/* Review Summary */}
        <ReviewSummary reviews={reviews} />

        {/* Filters */}
        <ReviewFilters 
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterRating={filterRating}
          setFilterRating={setFilterRating}
        />

        {/* Reviews Grid - Multi-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiColumnReviews;