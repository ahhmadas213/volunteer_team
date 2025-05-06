// components/TweetList.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';

type TweetData = {
  id: string;
  text: string;
  created_at: string;
  public_metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  attachments?: {
    media_keys: string[];
  };
};

type MediaData = {
  media_key: string;
  type: string;
  url?: string;
  preview_image_url?: string;
};

type TweetsResponse = {
  data?: TweetData[];
  includes?: {
    media?: MediaData[];
  };
  errors?: Array<{ message: string }>;
  title?: string;
  detail?: string;
};

export default function TweetList({
  username = 'mecca2034',
  count = 10
}: {
  username?: string;
  count?: number;
}) {
  const [tweets, setTweets] = useState<TweetData[]>([]);
  const [mediaMap, setMediaMap] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/tweets?username=${username}&count=${count}`);

        if (!response.ok) {
          console.log("error fetching tweets",response)
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch tweets');
        }

        const data: TweetsResponse = await response.json();

        if (data.errors && data.errors.length > 0) {
          throw new Error(data.errors[0].message);
        }

        if (!data.data || data.data.length === 0) {
          setTweets([]);
          setLoading(false);
          return;
        }

        // Create media mapping
        const mediaMapping: Record<string, string> = {};
        if (data.includes?.media) {
          data.includes.media.forEach(media => {
            mediaMapping[media.media_key] =
              media.url ||
              media.preview_image_url ||
              '';
          });
        }

        setTweets(data.data);
        setMediaMap(mediaMapping);
      } catch (err: any) {
        setError(err.message || 'Error loading tweets');
        console.error('Tweet fetching error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, [username, count]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2">Loading tweets...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg inline-block">
          <p className="font-medium">Error</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  if (!tweets || tweets.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        No tweets found for @{username}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tweets.map(tweet => {
        // Get media URLs for this tweet if any
        const mediaUrls = tweet.attachments?.media_keys
          .map(key => mediaMap[key])
          .filter(Boolean) || [];

        return (
          <Tweet
            key={tweet.id}
            id={tweet.id}
            text={tweet.text}
            createdAt={tweet.created_at}
            metrics={tweet.public_metrics}
            mediaUrls={mediaUrls}
          />
        );
      })}
    </div>
  );
}
