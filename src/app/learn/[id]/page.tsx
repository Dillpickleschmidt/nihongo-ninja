"use client"
import supabase from "@/app/config/supabaseClient"
import { use, useEffect, useState } from "react"

import Dialog from "@/app/components/dialog"
import Image from "next/image"
import Button from "@/app/components/button"

export default function Lesson({ params }: { params: { id: string } }) {
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [lesson, setLesson] = useState<any>(null)

  useEffect(() => {
    const fetchLesson = async () => {
      // If supabase is not initialized, return. (typescript happy)
      if (!supabase) {
        setFetchError("Supabase client is not initialized")
        setLesson(null)
        return
      }

      const { data, error } = await supabase
        .from("lessons")
        .select()
        .eq("id", parseInt(params.id))

      if (error) {
        setFetchError("Error fetching lesson")
        setLesson(null)
        console.log(error)
      } else {
        setLesson(data ? data[0] : null)
      }
    }

    fetchLesson()
  }, [params.id])

  return (
    <>
      <Dialog>
        {fetchError && <p>{fetchError}</p>}

        {lesson && lesson.content_html}
      </Dialog>
    </>
  )
}
