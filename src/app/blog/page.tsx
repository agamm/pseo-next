import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

async function getAllPosts() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return posts;
}

function PostCard(post: { date: string; url: string; title: string }) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={post.url}>{post.title}</Link>
      </h2>
    </div>
  );
}

export const metadata = {
  title: "Blog posts",
  description: "The latest blog posts.",
};

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="">
      <h1 className="mb-8 text-3xl font-bold">All blog posts</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
