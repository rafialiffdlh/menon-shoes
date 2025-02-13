import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
export const BlogSearch = () => {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search..."
        className="pl-10 w-full bg-white"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
    </div>
  );
};
