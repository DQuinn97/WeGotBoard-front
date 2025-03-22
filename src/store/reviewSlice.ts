import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Review = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
};

type ReviewState = {
  reviews: Review[];
};

const initialState: ReviewState = {
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      quote:
        "Working with this team has transformed our digital presence. Their attention to detail and creative solutions exceeded our expectations.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      quote:
        "The level of professionalism and technical expertise is outstanding. They delivered our project on time and with exceptional quality.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CEO, TechStart",
      quote:
        "I've worked with many teams over the years, but none have been as responsive and dedicated as this one. Truly a game-changer for our business.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  ],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews(state, action: PayloadAction<Review[]>) {
      state.reviews = action.payload;
    },
    addReview(state, action: PayloadAction<Review>) {
      state.reviews.push(action.payload);
    },
  },
});

export const { setReviews, addReview } = reviewSlice.actions;

export default reviewSlice.reducer;
