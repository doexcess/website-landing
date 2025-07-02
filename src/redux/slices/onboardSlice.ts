import api from '@/lib/api';
import { AddCustomerProps } from '@/lib/schema/onboard.schema';
import { BusinessInfo, BusinessInfoResponse } from '@/types/onboard';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface AuthState {
  business_info: BusinessInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  business_info: null,
  loading: false,
  error: null,
};

// Async Thunk to view business info
export const viewBusinessInfo = createAsyncThunk(
  'onboard/view-business-info/:id',
  async ({ business_id }: { business_id: string }, { rejectWithValue }) => {
    try {
      const params: Record<string, any> = {};

      if (business_id !== undefined) params['id'] = business_id;

      const { data } = await api.get<BusinessInfoResponse>(
        `/onboard/view-business-info/${business_id}`
      );

      return {
        data: data.data,
      };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || 'View business info failed'
      );
    }
  }
);

// Async Thunk to add customer
export const addCustomer = createAsyncThunk(
  'onboard/add-customer',
  async (credentials: AddCustomerProps, { rejectWithValue }) => {
    try {
      const { data } = await api.post<GenericResponse>(
        '/onboard/add-customer',
        credentials
      );

      return { message: data.message };
    } catch (error: any) {
      // console.log(error);
      return rejectWithValue(error.response?.data || 'Add customer failed');
    }
  }
);

const onboardSlice = createSlice({
  name: 'onboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewBusinessInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewBusinessInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.business_info = action.payload.data;
      })
      .addCase(viewBusinessInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default onboardSlice.reducer;
