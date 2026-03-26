import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://rzfjpufcdropfjwezqsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6ZmpwdWZjZHJvcGZqd2V6cXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NzkwODUsImV4cCI6MjA5MDA1NTA4NX0.EnIaQdtkrQmf8BZGMFmEiCje6FTrlu-KiCefjVeU52Y';

export const _supabase = createClient(supabaseUrl, supabaseKey);
