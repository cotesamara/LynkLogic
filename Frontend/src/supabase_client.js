import { createClient } from '@supabase/supabase-js/dist/common.js';

const supabaseUrl = 'https://byewntpvuekesrlngepa.supabase.co';
const supabaseAnonKey = 'sb_publishable_MI38Vnc85tE49-NuMuvIQA_mhhj9-ey';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);