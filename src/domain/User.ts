interface User {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  ethnicity: string;
  gender: string;
  email: string;
  password: string;
}

export type UserToInsert = Omit<User, "id">;

export default User;