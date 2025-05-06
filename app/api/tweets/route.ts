// app/api/tweets/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || 'elonmusk';
  const count = Number(searchParams.get('count')) || 10;

  const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

  if (!BEARER_TOKEN) {
    return NextResponse.json(
      { error: 'API token not configured' },
      { status: 500 }
    );
  }

  try {
    // Step 1: Get the user ID for the username
    const userResponse = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}`,
      {
        headers: {
          'Authorization': `Bearer ${BEARER_TOKEN}`
        },
        next: { revalidate: 600 } // Revalidate cache every 600 seconds (10 minutes)
      }
    );

    if (!userResponse.ok) {
      console.log("error", userResponse.status)
      return NextResponse.json(
        { error: `Twitter API error: ${userResponse.status}` },
        { status: userResponse.status }
      );
    }

    const userData = await userResponse.json();

    if (!userData.data || !userData.data.id) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }// Example using Next.js fetch revalidation

    const userId = userData.data.id;
    console.log("this user id ", userId)


    // Apply similar caching to the tweets fetch call
    const tweetsResponse = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets?max_results=${count}&tweet.fields=created_at,public_metrics,attachments&expansions=attachments.media_keys&media.fields=url,preview_image_url,type`,
      {
        headers: {
          'Authorization': `Bearer ${BEARER_TOKEN}`
        },
        next: { revalidate: 300 } // Revalidate cache every 300 seconds (5 minutes)
      }
    );




    if (!tweetsResponse.ok) {
      return NextResponse.json(
        { error: `Twitter API error: ${tweetsResponse.status}` },
        { status: tweetsResponse.status }
      );
    }

    const tweetsData = await tweetsResponse.json();

    return NextResponse.json(tweetsData);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tweets' },
      { status: 500 }
    );
  }
}