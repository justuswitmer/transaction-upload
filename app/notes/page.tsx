import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link'

export default async function Notes() {

  const cookieStore = cookies()
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: notes } = await supabase.from("notes").select();

  return user ? (
    <pre>{JSON.stringify(notes, null, 2)}</pre>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  )
}