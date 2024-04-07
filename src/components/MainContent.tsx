import Profile from "@/components/Profile";
import Experience from "@/components/Experience";

export default function MainContent() {
  return (
    <div className="flex items-stretch bg-amber-50 text-amber-700">
      <Profile />
      <Experience />
    </div>
  );
}
