import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  phoneNumber?: string | null;
  preferences?: InputJsonValue;
  referralCode?: number | null;
  role?: string | null;
  roles?: InputJsonValue;
  socialMedia?: string | null;
  username?: string;
};
