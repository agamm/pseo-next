import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

// This generates all teh blog posts paths
export async function generateStaticParams() {
  const postSlugs = allPosts.map((post) => post.slug);

  return postSlugs?.map((slug) => ({
    slug,
  }));
}

// Getting a post
async function getPost(slug: string) {
  const post = allPosts.find((post) => post.slug === slug);
  return post;
}

export const metadata = {
  title: "Post title",
  description: "Post description",
};

const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post: Post | undefined = await getPost(slug);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">Home</Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div
          className="cl-post-body"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </>
  );
};

export default PostLayout;
