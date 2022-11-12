export type TypesReviews = {
  hotelId: number;
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    name: string;
    isPro: boolean;
  };
}

export type ReviewsType = TypesReviews[];
