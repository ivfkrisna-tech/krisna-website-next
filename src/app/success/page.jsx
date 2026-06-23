import SuccessStoriesContent from "@/components/SuccessStoriesContent";

async function getStories() {
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  try {
    
    const res = await fetch(`${baseUrl}/api/success_stories`, { cache: 'no-store' });
    
    if (!res.ok) throw new Error('Network response was not ok');
    
    const data = await res.json();
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