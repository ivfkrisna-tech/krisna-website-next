import SuccessStoriesContent from "@/components/SuccessStoriesContent";

async function getStories() {
  try {
    const res = await fetch('http://127.0.0.1:5000/api/success_stories', { cache: 'no-store' });
    const data = await res.json();
    console.log("Server side par fetch hua data:", data); // YE CHECK KAREIN
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
}

export default async function SuccessStoriesPage() {
  const stories = await getStories();
  return <SuccessStoriesContent initialStories={stories} />;
}