export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      card: {
        Row: {
          cid: number
          difficulty: number
          due: string
          elapsed_days: number
          lapses: number
          last_review: string | null
          nid: number
          reps: number
          scheduled_days: number
          stability: number
          state: Database["public"]["Enums"]["state"]
        }
        Insert: {
          cid?: number
          difficulty: number
          due?: string
          elapsed_days: number
          lapses: number
          last_review?: string | null
          nid: number
          reps: number
          scheduled_days: number
          stability: number
          state?: Database["public"]["Enums"]["state"]
        }
        Update: {
          cid?: number
          difficulty?: number
          due?: string
          elapsed_days?: number
          lapses?: number
          last_review?: string | null
          nid?: number
          reps?: number
          scheduled_days?: number
          stability?: number
          state?: Database["public"]["Enums"]["state"]
        }
        Relationships: [
          {
            foreignKeyName: "card_nid_fkey"
            columns: ["nid"]
            isOneToOne: true
            referencedRelation: "note"
            referencedColumns: ["nid"]
          }
        ]
      }
      new_record_logs: {
        Row: {
          created_at: string | null
          id: number
          record_data: Json | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          record_data?: Json | null
        }
        Update: {
          created_at?: string | null
          id?: number
          record_data?: Json | null
        }
        Relationships: []
      }
      note: {
        Row: {
          answers: string[]
          answers_raw: string[]
          cid: number | null
          created_by: string
          nid: number
          question: string
          question_raw: string
          style: string
          user_id: string
        }
        Insert: {
          answers: string[]
          answers_raw: string[]
          cid?: number | null
          created_by?: string
          nid?: number
          question?: string
          question_raw: string
          style: string
          user_id: string
        }
        Update: {
          answers?: string[]
          answers_raw?: string[]
          cid?: number | null
          created_by?: string
          nid?: number
          question?: string
          question_raw?: string
          style?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "note_cid_fkey"
            columns: ["cid"]
            isOneToOne: false
            referencedRelation: "card"
            referencedColumns: ["cid"]
          }
        ]
      }
      parameters: {
        Row: {
          card_limit: number
          enable_fuzz: boolean
          maximum_interval: number
          pid: number
          request_retention: number
          user_id: string
          w: number[]
        }
        Insert: {
          card_limit?: number
          enable_fuzz?: boolean
          maximum_interval?: number
          pid?: number
          request_retention?: number
          user_id: string
          w?: number[]
        }
        Update: {
          card_limit?: number
          enable_fuzz?: boolean
          maximum_interval?: number
          pid?: number
          request_retention?: number
          user_id?: string
          w?: number[]
        }
        Relationships: [
          {
            foreignKeyName: "parameters_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      revlog: {
        Row: {
          cid: number
          difficulty: number
          due: string
          elapsed_days: number
          grade: Database["public"]["Enums"]["rating"]
          last_elapsed_days: number
          lid: string
          review: string
          scheduled_days: number
          stability: number
          state: Database["public"]["Enums"]["state"]
        }
        Insert: {
          cid: number
          difficulty: number
          due: string
          elapsed_days: number
          grade: Database["public"]["Enums"]["rating"]
          last_elapsed_days: number
          lid?: string
          review: string
          scheduled_days: number
          stability: number
          state: Database["public"]["Enums"]["state"]
        }
        Update: {
          cid?: number
          difficulty?: number
          due?: string
          elapsed_days?: number
          grade?: Database["public"]["Enums"]["rating"]
          last_elapsed_days?: number
          lid?: string
          review?: string
          scheduled_days?: number
          stability?: number
          state?: Database["public"]["Enums"]["state"]
        }
        Relationships: [
          {
            foreignKeyName: "public_revlog_cid_fkey"
            columns: ["cid"]
            isOneToOne: false
            referencedRelation: "card"
            referencedColumns: ["cid"]
          }
        ]
      }
      useful_expressions: {
        Row: {
          created_at: string
          english: string
          expression: string
          id: number
        }
        Insert: {
          created_at?: string
          english: string
          expression: string
          id?: number
        }
        Update: {
          created_at?: string
          english?: string
          expression?: string
          id?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          name: string | null
          oauthtype: string | null
          role: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          name?: string | null
          oauthtype?: string | null
          role?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          name?: string | null
          oauthtype?: string | null
          role?: string | null
          user_id?: string
        }
        Relationships: []
      }
      vocab: {
        Row: {
          chapter: number
          created_at: string
          english: string
          example_sentences: string[] | null
          hiragana: string
          id: number
          kana_original: string
          postfix_frequent: boolean | null
          prefix: boolean | null
        }
        Insert: {
          chapter: number
          created_at?: string
          english: string
          example_sentences?: string[] | null
          hiragana: string
          id?: number
          kana_original: string
          postfix_frequent?: boolean | null
          prefix?: boolean | null
        }
        Update: {
          chapter?: number
          created_at?: string
          english?: string
          example_sentences?: string[] | null
          hiragana?: string
          id?: number
          kana_original?: string
          postfix_frequent?: boolean | null
          prefix?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      fetch_notes_with_cards: {
        Args: {
          user_id_param: string
          state_param: string
          due_param: string
        }
        Returns: Json
      }
      match_chapter_embeddings: {
        Args: {
          query_embedding: string
          match_threshold: number
          match_count: number
        }
        Returns: {
          id: number
          content: string
          similarity: number
        }[]
      }
    }
    Enums: {
      rating: "0" | "1" | "2" | "3" | "4"
      state: "0" | "1" | "2" | "3"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
