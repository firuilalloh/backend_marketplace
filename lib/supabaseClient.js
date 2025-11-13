const { createClient } = require("@supabase/supabase-js");
const config = require("../config/app.config.json");

const supabaseURL = config.supabase.url;
const supabaseKey = config.supabase.anonKey;

const supabase = createClient(supabaseURL, supabaseKey);

module.exports = supabase;
