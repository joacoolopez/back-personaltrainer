import { Plan } from "./plan.interface";

export interface Student {
    id: string;
    name: string;
    lastname: string;
    mail: string;
    phone: string;
    plans: Plan[];
  }