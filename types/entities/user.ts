import { Data } from ".";

export type User = {
  name: "admin";
  email: "admin@yahoo.com";
  majority: "ada deh";
  entryYear: number;
  graduationYear?: number;
  thesisURL?: string;
  profileImageURL?: string;
  isGraduated: boolean;
  isAdmin: boolean;
  isVerified: boolean;
};

export type UserData = User & Data;
