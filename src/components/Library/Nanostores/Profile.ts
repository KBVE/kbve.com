import { atom, map } from 'nanostores';

export const Profile = atom(false);

export type ProfileDetail = {
  userid: string;
  name: string;
  email: string;
  phone: string;
}

export const profileData = map<Record<string, ProfileDetail>>({});