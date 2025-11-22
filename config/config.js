require("dotenv").config();

const config = {
  supabase: {
    url: process.env.SUPABASE_URL,
    anonKey: process.env.SUPABASE_ANON_KEY,
  },
  port: process.env.PORT || 3000,
  jwt_secret: process.env.JWT_SECRET,
};

module.exports = config;
