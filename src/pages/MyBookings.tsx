import { Navigation } from "@/components/Navigation";
import { useCustomerBookings } from "@/hooks/useCustomerBookings";
import { useWeb3 } from "@/hooks/useWeb3";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { Calendar, Hotel, DollarSign, Clock } from "lucide-react";

const MyBookings = () => {
  const { isConnected } = useWeb3();
  const { bookings, loading, error } = useCustomerBookings();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-accent/20 text-accent border-accent/30";
      case "checked-in":
        return "bg-primary/20 text-primary border-primary/30";
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "cancelled":
        return "bg-destructive/20 text-destructive border-destructive/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">My Bookings</h1>
            <p className="text-muted-foreground">View and manage all your hotel reservations</p>
          </div>

          {!isConnected ? (
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">Please connect your wallet to view your bookings</p>
                </div>
              </CardContent>
            </Card>
          ) : loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-card border-border">
                  <CardHeader>
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-32 mt-2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <p className="text-destructive mb-4">{error}</p>
                </div>
              </CardContent>
            </Card>
          ) : bookings.length === 0 ? (
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <Hotel className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-6">No bookings yet. Start exploring hotels!</p>
                  <Link to="/find-hotels">
                    <Button variant="hero" size="lg">Browse Hotels</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.bookingId} className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-1 text-foreground">{booking.hotelName}</CardTitle>
                        <CardDescription className="text-base">
                          Booking #{booking.bookingId} • {booking.className}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(booking.status)} variant="outline">
                        {booking.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5" />
                        <div>
                          <p className="text-xs">Duration</p>
                          <p className="text-foreground font-medium">{booking.nights} nights</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <DollarSign className="w-5 h-5" />
                        <div>
                          <p className="text-xs">Total Amount</p>
                          <p className="text-foreground font-medium">{booking.totalAmount} USDC</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5" />
                        <div>
                          <p className="text-xs">Room Cost</p>
                          <p className="text-foreground font-medium">{booking.roomCost} USDC</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="text-sm text-muted-foreground">
                        <span className="inline-block mr-4">
                          Deposit: <span className="text-foreground">{booking.depositAmount} USDC</span>
                        </span>
                        <span className="inline-block mr-4">
                          Price/Night: <span className="text-foreground">{booking.pricePerNight} USDC</span>
                        </span>
                      </div>
                      <Link to={`/booking-details?id=${booking.bookingId}`}>
                        <Button variant="outline" size="sm">View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
