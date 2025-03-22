import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  categories: {
    [key: string]: boolean;
  };
  priceRange: {
    min: number;
    max: number;
  };
  playerCount: {
    [key: string]: boolean;
  };
  duration: {
    [key: string]: boolean;
  };
  difficulty: {
    [key: string]: boolean;
  };
  age: string;
  isFilterVisible: boolean;
}

const initialState: FilterState = {
  categories: {
    "Board Games": false,
    "Card Games": false,
    "Dice Games": false,
  },
  priceRange: {
    min: 10,
    max: 200,
  },
  playerCount: {
    Solo: false,
    "2 Players": false,
    "3-5 Players": false,
    ">5 Players": false,
    "Party Games": false,
  },
  duration: {
    "Short (< 30min)": false,
    "Medium (30-60min)": false,
    "Long (> 60min)": false,
  },
  difficulty: {
    Beginner: false,
    Intermediate: false,
    Expert: false,
  },
  age: "All Ages",
  isFilterVisible: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      state.categories[action.payload] = !state.categories[action.payload];
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.priceRange = action.payload;
    },
    togglePlayerCount: (state, action: PayloadAction<string>) => {
      state.playerCount[action.payload] = !state.playerCount[action.payload];
    },
    toggleDuration: (state, action: PayloadAction<string>) => {
      state.duration[action.payload] = !state.duration[action.payload];
    },
    toggleDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty[action.payload] = !state.difficulty[action.payload];
    },
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    toggleFilterVisibility: (state) => {
      state.isFilterVisible = !state.isFilterVisible;
    },

    //eventueel toevoegen.
    // resetFilters: (state) => {
    //   return initialState;
    // },
  },
});

export const {
  toggleCategory,
  setPriceRange,
  togglePlayerCount,
  toggleDuration,
  toggleDifficulty,
  setAge,
  toggleFilterVisibility,
  // resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
