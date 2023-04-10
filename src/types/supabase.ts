export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      education: {
        Row: {
          achivements_projects: string | null
          certificate_url: string | null
          created_at: string | null
          deleted_at: string | null
          ended: boolean | null
          from: string | null
          grade_obteined: string | null
          id: string
          institution_address: string | null
          institution_name: string | null
          to: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          achivements_projects?: string | null
          certificate_url?: string | null
          created_at?: string | null
          deleted_at?: string | null
          ended?: boolean | null
          from?: string | null
          grade_obteined?: string | null
          id?: string
          institution_address?: string | null
          institution_name?: string | null
          to?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          achivements_projects?: string | null
          certificate_url?: string | null
          created_at?: string | null
          deleted_at?: string | null
          ended?: boolean | null
          from?: string | null
          grade_obteined?: string | null
          id?: string
          institution_address?: string | null
          institution_name?: string | null
          to?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
      }
      experiences: {
        Row: {
          achievements_tasks: string | null
          actual_job: boolean | null
          company_address: string | null
          company_name: string | null
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          created_at: string | null
          deleted_at: string | null
          from: string | null
          id: string
          job_description: string | null
          position: string | null
          remote: boolean | null
          to: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          achievements_tasks?: string | null
          actual_job?: boolean | null
          company_address?: string | null
          company_name?: string | null
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string | null
          deleted_at?: string | null
          from?: string | null
          id?: string
          job_description?: string | null
          position?: string | null
          remote?: boolean | null
          to?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          achievements_tasks?: string | null
          actual_job?: boolean | null
          company_address?: string | null
          company_name?: string | null
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string | null
          deleted_at?: string | null
          from?: string | null
          id?: string
          job_description?: string | null
          position?: string | null
          remote?: boolean | null
          to?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
      }
      personal_projects: {
        Row: {
          alive: boolean | null
          created_at: string | null
          deleted_at: string | null
          description: string | null
          from: string | null
          id: string
          image: string | null
          name: string | null
          to: string | null
          updated_at: string | null
          url: string | null
          user_id: string | null
        }
        Insert: {
          alive?: boolean | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          from?: string | null
          id?: string
          image?: string | null
          name?: string | null
          to?: string | null
          updated_at?: string | null
          url?: string | null
          user_id?: string | null
        }
        Update: {
          alive?: boolean | null
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          from?: string | null
          id?: string
          image?: string | null
          name?: string | null
          to?: string | null
          updated_at?: string | null
          url?: string | null
          user_id?: string | null
        }
      }
      profiles: {
        Row: {
          about: string | null
          address: string | null
          avatar_url: string | null
          created_at: string | null
          deleted_at: string | null
          id: string
          last_name: string | null
          name: string | null
          phone: string | null
          position: string | null
          updated_at: string | null
          user_id: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          about?: string | null
          address?: string | null
          avatar_url?: string | null
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          last_name?: string | null
          name?: string | null
          phone?: string | null
          position?: string | null
          updated_at?: string | null
          user_id?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          about?: string | null
          address?: string | null
          avatar_url?: string | null
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          last_name?: string | null
          name?: string | null
          phone?: string | null
          position?: string | null
          updated_at?: string | null
          user_id?: string | null
          username?: string | null
          website?: string | null
        }
      }
      skills: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          description: string | null
          id: string
          name: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
      }
      socials: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          name: string | null
          updated_at: string | null
          url: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          url?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          url?: string | null
          user_id?: string | null
        }
      }
      soft_skills: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          name: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
