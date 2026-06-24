// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Use fallback empty strings so the build doesn't crash if variables are missing
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);