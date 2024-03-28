import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://byeptzjuivafhnmvlxfw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZXB0emp1aXZhZmhubXZseGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MTEzMDAsImV4cCI6MjAyNTk4NzMwMH0.ycL1aYKsV2HtmkPfjLmJcaMeYTRttnz7wqZ-u0PqthE"
);
