'use server'

import 'server-only'
import { supabase } from '@/lib/supabaseClient'

export async function addChat(userId?:string, role?:string, content?:string) {
  try {
    const { data, error } = await supabase
    .from('chat_history')
    .insert({ userId, role, content })
    .select()
    return data;
  } catch (error) {
    return {
      error: 'Unauthorized'
    }
  }
}

export async function loadChat( userId?: string ) {
  try {
    if(!userId)
      return null;
    const { data, error } = await supabase
    .from('chat_history')
    .select()
    .eq('userId', userId)
    const list = data?.map(({userId, ...extra}) => extra)
    console.log('list: ', list)
    return list;
  } catch (error) {
    return {
      error: 'Unauthorized'
    }
  }
}
