import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    slug: {
      type: "string",
      description: "URL slug",
      required: true,
    },
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});
