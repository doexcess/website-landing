import { viewBusinessInfo } from '@/redux/slices/onboardSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useBusinessInfo = () => {
  const searchParams = useSearchParams();

  const dispatch = useDispatch<AppDispatch>();

  const businessId = searchParams.get('business_id');

  const { business_info, loading } = useSelector(
    (state: RootState) => state.onboard
  );

  useEffect(() => {
    dispatch(
      viewBusinessInfo({
        business_id: businessId as string,
      })
    );
  }, [dispatch]);

  return {
    business_info,
    loading,
  };
};

export default useBusinessInfo;
