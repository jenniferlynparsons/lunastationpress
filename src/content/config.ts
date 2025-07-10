import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		heroImage: z.string().optional().nullable(),
		heroAltText: z.string().optional().nullable(),
		excerpt: z.string().optional().nullable(),
		author: z.string().optional().nullable(), 
		category: z.string().optional().nullable(),
	}),
});

const books = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		author: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		pageCount: z.number().optional().nullable(),
		
		coverImage: z.string().optional(),
		heroImage: z.string().optional(),
		
		category: z.string().optional().nullable(),
		genre: z.string().optional().nullable(),
		
		isbn13: z.string().optional().nullable(),
		isbn10: z.string().optional().nullable(),
		
		// Purchase links
		paperback: z.string().optional().nullable(),
		gumroad: z.string().optional().nullable(),
		itch: z.string().optional().nullable(),
		kindle: z.string().optional().nullable(),
		weightless: z.string().optional().nullable(),
		smashwords: z.string().optional().nullable(),
		kobo: z.string().optional().nullable(),
		payhip: z.string().optional().nullable(),
		
		imprint: z.string().optional().nullable(),
		tag: z.string().optional().nullable(),
		
		// New release flag
		newRelease: z.boolean().optional().default(false),
	}),
});

const authors = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		bio: z.string().optional(),
		website: z.string().optional(),
		photoUrl: z.string().optional(),
		socialLinks: z.object({
			twitter: z.string().optional(),
			instagram: z.string().optional(),
			facebook: z.string().optional(),
			linkedin: z.string().optional(),
		}).optional(),
	}),
});


export const collections = { blog, books, authors };
