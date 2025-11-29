import { useState, useEffect } from "react";
import { useWeb3 } from "./useWeb3";
import { getAllHotels, Hotel } from "@/lib/web3/innchain";

export const useHotels = () => {
  const { provider, isConnected } = useWeb3();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      if (!provider || !isConnected) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        console.log("Starting hotel fetch with provider:", provider);
        const hotelsData = await getAllHotels(provider);
        console.log("Hotels fetched successfully:", hotelsData);
        setHotels(hotelsData);
      } catch (err: any) {
        console.error("Error in useHotels:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch hotels");
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [provider, isConnected]);

  return { hotels, loading, error, refetch: () => provider && getAllHotels(provider).then(setHotels) };
};
