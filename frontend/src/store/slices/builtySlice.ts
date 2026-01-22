import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Person {
  name: string;
  mobile: string;
  address: string;
}

interface Route {
  from: string;
  to: string;
  via: string;
}

interface Goods {
  noOfPackages: number;
  category: string;
  weight: number;
  rate: number;
}

interface Charges {
  freight: number;
  otherCharges: number;
  advance: number;
}

interface Driver {
  name: string;
  licenseNo: string;
  mobile: string;
}

export interface BuiltyInfo {
  builtyNo: string;
  date: string;
  vehicleNo: string;
  route: Route;
  consignor: Person;
  consignee: Person;
  goods: Goods;
  charges: Charges;
  driver: Driver;
  owner: Person;
}

interface BuiltyState {
  showAddBuiltyModal: boolean;
  builtyInfo: BuiltyInfo;
  builtyData: any[];
}

interface UpdateFieldPayload {
  path: string;
  value: string | number;
}

export interface Builty {
  _id: string;
  builtyNo: string;
  date: string;
  vehicleNo: string;
  route: Route;
  consignor: Person;
  consignee: Person;
  goods: Goods;
  charges: Charges & { balance: number };
  driver: Driver;
  owner: Person;
  status: string;
}

interface Pagination {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
}

// interface BuiltyListResponse {
//   message: string;
//   data: Builty[];
//   pagination: Pagination;
// }


const initialState: BuiltyState = {
  showAddBuiltyModal: false,
  builtyInfo: {
    builtyNo: "",
    date: "",
    vehicleNo: "",
    route: {
      from: "",
      to: "",
      via: "",
    },
    consignor: {
      name: "",
      mobile: "",
      address: "",
    },
    consignee: {
      name: "",
      mobile: "",
      address: "",
    },
    goods: {
      noOfPackages: 0,
      category: "",
      weight: 0,
      rate: 0,
    },
    charges: {
      freight: 0,
      otherCharges: 0,
      advance: 0,
    },
    driver: {
      name: "",
      licenseNo: "",
      mobile: "",
    },
    owner: {
      name: "",
      mobile: "",
      address: "",
    },
  },
  builtyData: [],
};


const builtySlice = createSlice({
  name: "builty",
  initialState,
  reducers: {
    setShowAddBuiltyModal: (state, action: PayloadAction<boolean>) => {
      state.showAddBuiltyModal = action.payload;
    },
    setBuiltyInfo: (state, action: PayloadAction<BuiltyInfo>) => {
      state.builtyInfo = action.payload;
    },
    updateBuiltyField: (
      state,
      action: PayloadAction<UpdateFieldPayload>
    ) => {
      const { path, value } = action.payload;

      const keys = path.split(".");
      let obj: any = state.builtyInfo;

      keys.slice(0, -1).forEach((key) => {
        obj = obj[key];
      });

      obj[keys[keys.length - 1]] = value;
    },
    setBuiltyData: (state, action: PayloadAction<any[]>) => {
      state.builtyData = action.payload;
    },
  },
});

export const { setShowAddBuiltyModal, setBuiltyInfo, updateBuiltyField, setBuiltyData } = builtySlice.actions;

// selector
export const selectShowAddBuiltyModal = (state: any) =>
  state.builty.showAddBuiltyModal;
export const selectBuiltyInfo = (state: any) => state.builty.builtyInfo;
export const selectBuiltyData = (state: any) => state.builty.builtyData;

export default builtySlice.reducer;
