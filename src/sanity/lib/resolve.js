import { defineLocations } from "sanity/presentation";

export const resolve = {
  locations: {
    // Add more locations for other post types
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/post/${doc?.slug}`,
          },
          { title: "Posts", href: location.origin },
        ],
      }),
    }),
  },
};