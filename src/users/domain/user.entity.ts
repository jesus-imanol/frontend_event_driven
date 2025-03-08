export default class User {
  constructor(
    public readonly id: string,
    public readonly full_name: string,
    public readonly email: string,
    public readonly password_hash: string,
    public readonly gender: string,
    public readonly match_preference: string,
    public readonly city: string,
    public readonly state: string,
    public readonly interests: string,
    public readonly status_message: string,
    public readonly profile_picture: string
  ) {}

  static create({
    full_name,
    email,
    password_hash,
    gender,
    match_preference,
    city,
    state,
    interests,
    status_message,
    profile_picture,
  }: Omit<User, 'id'>): User {
    if (password_hash.length < 8) throw new Error("Password too short");
    return new User(
      crypto.randomUUID(),
      full_name,
      email,
      password_hash,
      gender,
      match_preference,
      city,
      state,
      interests,
      status_message,
      profile_picture
    );
  }
}
