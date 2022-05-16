import { Data } from ".";

export type User = {
  name: string;
  email: string;
  majority: string;
  entryYear: number;
  graduationYear?: number;
  thesisURL?: string;
  profileImageURL?: string;
  hashBlur?: string;
  isGraduated: boolean;
  isAdmin: boolean;
  isVerified: boolean;
};

export type UserData = User & Data;
