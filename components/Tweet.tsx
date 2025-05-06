// components/Tweet.tsx
import React from 'react';

type TweetProps = {
  id: string;
  text: string;
  createdAt: string;
  metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  mediaUrls?: string[];
};

export default function Tweet({ id, text, createdAt, metrics, mediaUrls }: TweetProps) {
  // Format date to a readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-500">{formatDate(createdAt)}</span>
        <a
          href={`https://twitter.com/i/web/status/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          View on X
        </a>
      </div>

      <p className="mb-4 text-gray-800 whitespace-pre-line">{text}</p>

      {mediaUrls && mediaUrls.length > 0 && (
        <div className={`grid ${mediaUrls.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 mb-4`}>
          {mediaUrls.map((url, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
              <img
                src={url}
                alt="Tweet media"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>{metrics.reply_count}</span>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <polyline points="17 1 21 5 17 9"></polyline>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <polyline points="7 23 3 19 7 15"></polyline>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
          <span>{metrics.retweet_count}</span>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span>{metrics.like_count}</span>
        </div>
      </div>
    </div>
  );
}
