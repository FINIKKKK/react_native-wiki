import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../../utils/types/account';

export interface TUserSlice {
  user: TUser | null;
}

const initialState: TUserSlice = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<TUser | null>) {
      state.user = payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
