import { Label } from "./Label.model";

export interface Participant {
    id: string;
    accountId: string;
    name: string;
    labels?: Label[]
    avatar?: string;
    phone?: string;
    email?: string;
    notes: string;
}
