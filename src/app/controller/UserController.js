import User from "./models/Users";

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UserController();
