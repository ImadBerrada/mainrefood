import { Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

class DashboardResponse {
    @Field(() => GraphQLJSON)
    data!: InputJsonValue;
}

export { DashboardResponse as DashboardResponse };