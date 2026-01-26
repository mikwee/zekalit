import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
	// Load Markdown and MDX files in the `src/content/reviews/` directory.
	loader: glob({ base: './src/content/reviews', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			artist: z.string().optional(),
			year: z.number().optional(),
			rating: z.number().optional(),
			description: z.string().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			mbid: z.string().optional(),
			localCover: image().optional(),
		}),
});

export const collections = { reviews };
