import { createClient } from '@supabase/supabase-js'

const project = 'https://igsnrguacybjvzzctypl.supabase.co'
const key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnc25yZ3VhY3lianZ6emN0eXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMTYwMTksImV4cCI6MjA0Njg5MjAxOX0.Cq2Ep39Sl5b06Yr715WY11d7way2idJflHZAvXNHGFU'
export const supabase = createClient(project, key)
