import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hbtalnribkdkidppedgl.supabase.co/rest/v1/countries';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhidGFsbnJpYmtka2lkcHBlZGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMzY1NjEsImV4cCI6MjA2NTYxMjU2MX0.7K4xGUtBmD1xmOufojj-EKpfDEiGdyLHbAuGxqIMDFw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);