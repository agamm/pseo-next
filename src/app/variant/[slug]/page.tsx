// request has `revalidate: 10`.
// async function getData() {
//   const res = await fetch('https://...', { next: { revalidate: 10 } });
//   return res.json();
// }

const VariantLayout = async ({ params }: { params: { slug: string } }) => {
  return <p>You are currently viewing: {params.slug} </p>;
};

export default VariantLayout;
