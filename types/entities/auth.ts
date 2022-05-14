export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = {
  majority: string;
  entryYear: number;
} & LoginParams;
