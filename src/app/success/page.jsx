import SuccessStoriesContent from "@/components/SuccessStoriesContent";

import connectDB from '@/lib/mongodb';
import { Story } from '@/models/Data';

import { localStories } from '@/data/stories';

async function getStories() {
  let dbStoriesParsed = [];
  try {
    await connectDB();
    const stories = await Story.find({}).sort({ createdAt: -1 }).lean();
    if (stories && stories.length > 0) {
      dbStoriesParsed = JSON.parse(JSON.stringify(stories));
    }
  } catch (error) {
    console.error("Database fetch failed:", error);
  }

  const allStories = [...dbStoriesParsed];
  const getSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  for (const localStory of localStories) {
    const slug = getSlug(localStory.title);
    if (!allStories.some(dbStory => (dbStory.slug === slug || dbStory.title === localStory.title))) {
      allStories.push({ ...localStory, slug });
    }
  }
  
  return allStories;
}

export default async function SuccessStoriesPage() {
  const stories = await getStories();
  return <SuccessStoriesContent initialStories={stories} />;
}