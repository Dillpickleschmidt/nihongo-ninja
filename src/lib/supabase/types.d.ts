export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Card = {
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

export type Note = {
  answer: string
  cid: number | null
  extend: Json | null
  nid: number
  question: string
  source: string
  sourceid: string | null
  uid: string
}

export declare enum State {
  New = 0,
  Learning = 1,
  Review = 2,
  Relearning = 3,
}

export interface Database {
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
            foreignKeyName: "fk_note"
            columns: ["nid"]
            isOneToOne: true
            referencedRelation: "note"
            referencedColumns: ["nid"]
          }
        ]
      }
      note: {
        Row: {
          answer: string
          cid: number | null
          extend: Json | null
          nid: number
          question: string
          source: string
          sourceid: string | null
          uid: string
        }
        Insert: {
          answer?: string
          cid?: number | null
          extend?: Json | null
          nid?: number
          question?: string
          source?: string
          sourceid?: string | null
          uid: string
        }
        Update: {
          answer?: string
          cid?: number | null
          extend?: Json | null
          nid?: number
          question?: string
          source?: string
          sourceid?: string | null
          uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_card"
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
          request_retention: number
          uid: number
          user_id: string | null
          w: Json
        }
        Insert: {
          card_limit?: number
          enable_fuzz?: boolean
          maximum_interval?: number
          request_retention?: number
          uid?: number
          user_id?: string | null
          w: Json
        }
        Update: {
          card_limit?: number
          enable_fuzz?: boolean
          maximum_interval?: number
          request_retention?: number
          uid?: number
          user_id?: string | null
          w?: Json
        }
        Relationships: [
          {
            foreignKeyName: "parameters_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["uid"]
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
            foreignKeyName: "fk_card"
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
          created_at: string
          email: string
          name: string
          oauthtype: string
          role: string
          uid: string
        }
        Insert: {
          created_at?: string
          email: string
          name: string
          oauthtype?: string
          role: string
          uid?: string
        }
        Update: {
          created_at?: string
          email?: string
          name?: string
          oauthtype?: string
          role?: string
          uid?: string
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
