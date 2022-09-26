import {useSelector, TypedUseSelectorHook} from "react-redux";
import {TRootState} from "../store";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector