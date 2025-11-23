const supabase = require("../lib/supabaseClient");
const bcryptService = require("../services/bcrypt.service");
const jwtService = require("../services/jwt.service");

module.exports = {
  register: async (req, res) => {
    const { email, password, user } = req.body;

    const hashed = await bcryptService.encrypt(password);

    const { data, error } = await supabase
      .from("tb_user")
      .insert([{ email, password: hashed, user }])
      .select("*")
      .single();

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: "User registered", user: data });
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const { data: user, error } = await supabase
      .from("tb_user")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !user) {
      return res.status(400).json({ error: "Email not found" });
    }

    const match = await bcryptService.decrypt(password, user.password);
    if (!match) return res.status(400).json({ error: "Wrong password" });

    const token = jwtService.generate({ id: user.id, email: user.email });

    res.json({ message: "Login success", token });
  },
};
