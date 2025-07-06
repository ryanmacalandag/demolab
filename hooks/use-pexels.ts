"use client";

import { useEffect, useState } from "react";
import { PhotosWithTotalResults } from "pexels";

const usePexels = (initial: string) => {
  const [query, setQuery] = useState<string>(initial)
  const [photos, setPhotos] = useState<PhotosWithTotalResults>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [url, setUrl] = useState("")

  useEffect(() => {
    async function fetchphotos() {
      try {
        const pexelskey = process.env.NEXT_PUBLIC_PEXELS_API_KEY_DEV;
        if (query === "") {
          setUrl(`https://api.pexels.com/v1/curated?page=1&per_page=20`)
        } else setUrl(`https://api.pexels.com/v1/search?query=${query}`);
        if (pexelskey != undefined) {
          const res: PhotosWithTotalResults = await fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: pexelskey,
            }
          }).then((r) => r.json());
          console.log("(Logged from use-pexels.ts)", res, query);
          setPhotos(res);
        }
      } catch (e: unknown) {
      if (e instanceof Error) {
        // Now 'e' is known to be an Error object, you can access properties like 'e.message'
        setError(e.message)
        console.error("Caught an Error: ", e.message);
      } else if (typeof e === 'string') {
        // Handle cases where a string was thrown
        setError(e)
        console.error("Caught a string error: ", e);
      } else {
        // Handle other unexpected types
        setError(e)
        console.error("Caught an unknown error: ", e);
      }
    }
      finally {
        setLoading(false);
      }
    }
    fetchphotos();
  }, [query, url]);

  return { photos, loading, error, query, setQuery };
};

export default usePexels;
