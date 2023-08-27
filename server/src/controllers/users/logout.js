const logout = (_req, res) => {
  res.clearCookie("token").json({
    message: "Logged Out Successfully.",
  });
};

export default logout;
