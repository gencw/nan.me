import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { baseUrl } from "@/app/sitemap";
import Image from "next/image";
import vx from "../../public/images/vx.png";
import zfb from "../../public/images/zfb.png";
import video from "../../public/images/video.png";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: any) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: any) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "我是姬方",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter ">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2  text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
      <div className="mt-8 flex flex-col gap-4">
        <p className="text-lg text-black dark:text-white font-bold">
          📺 课程状态：
        </p>
        <Image
          src={video}
          alt={"视频"}
          width={300}
          height={300}
          quality={100}
          className="rounded-lg shadow-lg dark:shadow-neutral-700/50"
        />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          ⏳ 未完待续，最后一周录制结束。
        </p>

        <p className="text-lg text-black dark:text-white font-bold">
          🌟 支付方式：
        </p>
        <p className="text-sm text-black dark:text-white">微信:</p>
        <Image
          src={vx}
          alt={"微信"}
          width={300}
          height={300}
          quality={100}
          className="rounded-lg shadow-lg dark:shadow-neutral-700/50"
        />
        <p className="text-sm text-black dark:text-white">支付宝：</p>
        <Image
          src={zfb}
          alt={"微信"}
          width={300}
          height={300}
          quality={100}
          className="rounded-lg shadow-lg dark:shadow-neutral-700/50"
        />
      </div>
      <div className="mt-8">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          最后更新于 {formatDate(post.metadata.updatedAt)}
        </p>
      </div>
    </section>
  );
}
