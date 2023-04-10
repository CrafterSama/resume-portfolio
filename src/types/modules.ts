import { Database } from './supabase';

export type Profiles = Database['public']['Tables']['profiles']['Row'];
export type Experiences = Database['public']['Tables']['experiences']['Row'];
export type PersonalProjects = Database['public']['Tables']['personal_projects']['Row'];
export type Skills = Database['public']['Tables']['skills']['Row'];
export type Education = Database['public']['Tables']['education']['Row'];
export type SoftSkills = Database['public']['Tables']['soft_skills']['Row'];

export type SupabaseResponseProps = { data: Profiles; error: any; status: number };
export type ProfilesResponseProps = { data: Profiles[]; error: any; status: number };
