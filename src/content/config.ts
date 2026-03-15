import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  published: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.string().transform((val) => {
    const [day, month, year] = val.split("-");
    return new Date(`${year}-${month}-${day}`);
  }),
  published: z.boolean().optional(),
  stack: z.array(z.string()).optional(),
  type: z.string().optional(),
  heroImage: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
