import { defineCollection, z } from "astro:content"

const footerCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		order: z.number(),
		items: z.array(

			z.object({
				title: z.string(),
                live: z.boolean(),
				link: z.string(),
				order: z.number(),
			})

		).optional(),

	})

})

export const collections = {

	"footer": footerCollection

}
