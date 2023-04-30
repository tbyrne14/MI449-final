import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lpuprybnrzkluigmlhht.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwdXByeWJucnprbHVpZ21saGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4ODU5MzQsImV4cCI6MTk5ODQ2MTkzNH0.GLskkuoAYelMbLXGDCKwB7UcM1uS_QnZ8IA_af_cXuI';

export const supabase = createClient(supabaseUrl, supabaseKey)