import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wonozzbgygpirndokbog.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvbm96emJneWdwaXJuZG9rYm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNjIxMTUsImV4cCI6MjAwNDkzODExNX0.XEBUqOvB19hF6YjtgND9RuJ3TrTF3t7Zjb3aHkmIwls";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
