import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jwpbzjrtvxtfrcunszcn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3cGJ6anJ0dnh0ZnJjdW5zemNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyNzQzMzMsImV4cCI6MjAzMTg1MDMzM30.Hh4RM7xzRzlIArxLff9JlXSlZfBqi4ajwrfjla6MuFA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
