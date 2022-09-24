import { createClient, SupabaseClient } from '@supabase/supabase-js';
import config from '../config';
import Logger from './../loaders/logger';

let supabase: SupabaseClient;

export default (): SupabaseClient => {
  const options = {
    schema: 'public',
    headers: { 'X-Project-Name': 'events-portal' },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  };
  if (!supabase) {
    supabase = createClient(config.projectURL, config.publicAnonKey, options);
    Logger.warn(`🟨 New Client of Supabase is called!`);
  }
  return supabase;
};
