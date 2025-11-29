import { useState, useEffect } from "react";
import { useWeb3 } from "./useWeb3";
import { getCustomerBookings, BookingDetails } from "@/lib/web3/innchain";

export const useCustomerBookings = () => {
  const { provider, isConnected } = useWeb3();
  const [bookings, setBookings] = useState<BookingDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!provider || !isConnected) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const bookingsData = await getCustomerBookings(provider);
        setBookings(bookingsData);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [provider, isConnected]);

  const refetch = async () => {
    if (provider && isConnected) {
      try {
        setLoading(true);
        const bookingsData = await getCustomerBookings(provider);
        setBookings(bookingsData);
      } catch (err) {
        console.error("Error refetching bookings:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return { bookings, loading, error, refetch };
};
