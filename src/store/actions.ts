import { createAction } from "@reduxjs/toolkit";
import { IProduct } from "../lib/types";

export const setProducts = createAction<IProduct[]>("products/setProducts")