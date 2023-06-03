// FIXME: uncomment here to connect to your DB.
// request has `revalidate: 10`.
// async function getData() {
//   const res = await fetch('https://...', { next: { revalidate: 10 } });
//   return res.json();
// }

// Like getStaticPaths
// export async function generateStaticParams() {
//   const variantsUrls = await DB

//   return postSlugs?.map((slug) => ({
//     slug,
//   }));
// }

// SEO metadata
// import type { Metadata } from 'next'
// export async function generateMetadata({ params }): Promise<Metadata> {
//   const product = await DB;
//   return { title: product.title }
// }

const VariantLayout = async ({ params }: { params: { slug: string } }) => {
  // const data = await getData();
  return <p>You are currently viewing: {params.slug} </p>;
};

export default VariantLayout;
