export interface UserResponse {
  user: {
    username: string;
    email: string;
    avatarId?: number;
    token: string;
  };
}
