import SuccessStoriesContent from "@/components/SuccessStoriesContent";

import connectDB from '@/lib/mongodb';
import { Story } from '@/models/Data';

async function getStories() {
  try {
    await connectDB();
    const stories = await Story.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(stories));
  } catch (error) {
    console.error("Database fetch failed:", error);
    return [];
  }
}

export default async function SuccessStoriesPage() {
  const stories = await getStories();
  return <SuccessStoriesContent initialStories={stories} />;
}