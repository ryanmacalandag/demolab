"use client";

import { useEffect, useState } from "react";
import { PhotosWithTotalResults } from "pexels";

const usePexels = (initial: string, qty: number = 15) => {
  const [query, setQuery] = useState<string>(initial)
  const [photos, setPhotos] = useState<PhotosWithTotalResults>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | unknown>();
  const [url, setUrl] = useState("")

  
  useEffect(() => {
    async function fetchphotos() {
      // Filter empty string; fetch "curated" photos instead
      if (query === "") {
        setUrl(`https://api.pexels.com/v1/curated?page=1&per_page=${qty}`);
      } else { 
        setUrl(`https://api.pexels.com/v1/search?query=${query}&per_page=${qty}`);
      }
      console.log("URL:", url)

      // Clear error
      setError("");
      
      try {
        // Get API key from .env file
        const PexelsAPIKEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY_DEV;
        

        if (PexelsAPIKEY != undefined) {
          const res: Response = await fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: PexelsAPIKEY,
            }
          });
          const photoset = await res.json();
          setPhotos(photoset)
        }
      } catch (e: unknown | string) {
        if (e instanceof Error) {
          // Now 'e' is known to be an Error object, you can access properties like 'e.message'
          setError(e.message);
          console.error("Caught an instanceof Error:", e.message);
        } else if (typeof e === 'string') {
          // Handle cases where a string was thrown
          setError(e);
          console.error("Caught a typeof string error:", e);
        } else {
          // Handle other unexpected types
          setError(e);
          console.error("Caught an unknown error:", e);
        }
      }
      finally {
        setLoading(false);
      }
    }
    fetchphotos();
  }, [query, url, qty]);
  
  console.log("(Logged from use-pexels.ts)", typeof photos, query, error, url);
  return { photos, loading, error, query, setQuery };
};

export default usePexels;
