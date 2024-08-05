import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://oeaefqfppxsajaiabgxx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lYWVmcWZwcHhzYWphaWFiZ3h4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5ODUxODIsImV4cCI6MjAzNjU2MTE4Mn0._fJCeGlthSQjFjTfgMWf7XRedk90tYG4tm7Yc2F0J3Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
