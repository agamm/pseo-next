// request has `revalidate: 10`.
// async function getData() {
//   const res = await fetch('https://...', { next: { revalidate: 10 } });
//   return res.json();
// }

// Like getStaticPaths
// export async function generateStaticParams() {
//   const variantsUrls = DB

//   return postSlugs?.map((slug) => ({
//     slug,
//   }));
// }

const VariantLayout = async ({ params }: { params: { slug: string } }) => {
  // const data = await getData();
  return <p>You are currently viewing: {params.slug} </p>;
};

export default VariantLayout;
