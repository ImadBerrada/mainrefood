import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber?: string | null;
  preferences?: InputJsonValue;
  referralCode?: number | null;
  role?: string | null;
  roles: InputJsonValue;
  socialMedia?: string | null;
  username: string;
};
