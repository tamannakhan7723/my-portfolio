import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';
import MarkdownRenderer from '@/components/markdown/markdown-renderer';
import PageHeader from '@/components/page-header';
import { getPortfolioPosts } from '@/lib/db/v1/portfolio';

import "@/styles/blog/blog-text.css"

type tParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: tParams }): Promise<Metadata | undefined> {
  const { slug } = await params;
  let posts = await getPortfolioPosts();
  let post = posts.find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    banner,
  } = post.metadata;
  let ogImage = banner
    ? `http://www.tmrdata.tech${banner}`
    : `ttp://www.tmrdata.tech/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      siteName: 'Chun-Ho (Hugo) Lin - 1chooo | Open Source Enthusiast',
      description,
      type: 'article',
      publishedTime,
      url: `http://www.tmrdata.tech/portfolio/${post.slug}`,
      locale: 'en_US',
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  if (!date) return ""; // ✅ MOST IMPORTANT FIX

  noStore();

  let currentDate = new Date().getTime();

  if (date && !date.includes('T')) {
    date =`${date}T00:00:00`;
  }

  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  let daysLater: number = 0;

  if (targetDate > currentDate) {
    daysLater = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }

  // (rest of your code same...)
}


export default async function Portfolio(props: { params: tParams }) {
  const { slug } = await props.params;
  let posts = await getPortfolioPosts();
  let post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <article>
        <section className="blog-text">
          <PageHeader header="Tamanna's Portfolio" />
          <h1 className="title font-semibold text-2xl font-text-2xl tracking-tighter max-w-[650px]">
            <MarkdownRenderer content={post.metadata.title} />
          </h1>
          <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
            <Suspense fallback={<p className="h-5" />}>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </Suspense>
          </div>
          <MarkdownRenderer content={post.content} />
        </section>
      </article>
    </div>
  );
}
