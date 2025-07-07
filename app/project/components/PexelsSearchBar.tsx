import { Binoculars, ImageIcon } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";

export default function PexelsSearchBar({
  setQuery,
}: {
  query?: string;
  setQuery: Dispatch<SetStateAction<string>>;
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setQuery(value);
  };

  console.log("(Logged from PexelsSearchBar.tsx) ", value);
  return (
    <div className="pexels-search-bar w-full px-0 sm:px-6 md:px-10 lg:px-24 xl:px-32 pb-6 md:pb-12">
      <div className="pexels-search-input group/search flex items-stretch bg-foreground/5 rounded-xl ">
        <div className="pexels-search-icon flex items-center px-2 bg-foreground text-background rounded-l-xl">
          <ImageIcon className="w-12" />
        </div>
        <form
          name="pexels-search-form"
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-1 items-stretch text-xl md:text-xl"
        >
          <input
            name="search"
            aria-label="search"
            value={value}
            onChange={(e) => setValue(e.target.value.toLowerCase())}
            placeholder="Search for free photos on Pexels"
            className="w-full px-3 py-3 md:py-5 border-0 placeholder:text-foreground/40 transition"
          />
          <button
            type="submit"
            className="flex gap-1 items-center px-4 md:px-6 py-3 m-2 rounded-lg text-base uppercase focus:text-white/90 bg-primary/10 md:bg-transparent group-hover/search:bg-primary focus:bg-primary transition"
          >
            <Binoculars className="size-7 group-hover/search:size-5 text-primary md:text-neutral-600 group-hover/search:text-white/90 transition" />
            <span className="hidden md:hidden md:group-hover/search:flex text-white/60 group-hover/search:text-white font-semibold transition">
              Search
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
