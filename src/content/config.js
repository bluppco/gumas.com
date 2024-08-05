import { z, defineCollection } from "astro:content"

const headerCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
})
const headerhoverCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
})

export const collections = {

    "header": headerCollection,
	"header-hover": headerhoverCollection

}
