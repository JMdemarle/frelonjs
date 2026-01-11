import { createSlice } from '@reduxjs/toolkit'
// Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    jwt: null,
  },
  reducers: {
    userStore: (state, action) => {
      state.user = action.payload;
    },
    userRevoke: (state, action) =>  {
      state.user = null;
    },
    jwtStore: (state, action) => {
      state.jwt = action.payload;
    },
    jwtRevoke: (state, action) =>  {
      state.jwt = null;
    },    
  },
});
export default userSlice.reducer;
export const {userStore, userRevoke, jwtStore, jwtRevoke  } = userSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions