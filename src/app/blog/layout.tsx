
export const metadata = {
  title: 'Blog index',
  description: 'Our latest blog posts',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <article>Blog specific: {children}</article>
  )
}
