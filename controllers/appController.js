import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import User from "../models/user.model.js";
import ENV from "../Config.js";
import fs, { mkdir, mkdirSync, writeFileSync } from "fs";
import path from "path";
const verifyEmail = async (req, res, next) => {
  try {
    const { email } = req.method == "GET" ? req.query : req.body;
    // check the user existance
    let exist = await User.findOne({ email });
    if (!exist) return res.status(404).send({ error: "Can't find email!" });
    next();
  } catch (error) {
    return res.status(404).send({ error: "Authentication Error" });
  }
};
let userData = [];
const register = async (req, res) => {
  try {
    const {
      username,
      lastname,
      password,
      email,
      profile,
      organization,
      mobile,
      address,
      role
    } = req.body;
    const existUsername = await User.findOne({ username });
    if (existUsername) {
      return res.status(500).send("user already in use");
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(500).send("email already in use");
    }
    Promise.all([existUsername, exist])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              const user = new User({
                username,
                lastname,
                password: hashedPassword,
                profile: profile || "",
                email,
                organization,
                mobile,
                address,
                role
              });
              user
                .save()
                .then((result) =>
                  res
                    .status(201)
                    .json({ result })
                    .send({ msg: "User Register Successfully" })
                )
                .catch((error) => res.status(500).send({ error }));
            })
            .catch((error) => {
              return res.status(500).send({
                error: "Enable to hashed password",
              });
            });
        }
      })
      .catch((error) => {
        return res.status(500).send({ error });
      });
    const info = req.body
    userData.push(info);
    if (!fs.existsSync(path.join("C:/authentic/backend/server"))) {
      fs.mkdirSync(path.join("C:/authentic/backend/server"));
    }
    let userInfo = fs.writeFileSync(
      path.join(`C:/authentic/backend/server/users.json`),
      JSON.stringify([...userData])
    );
  } catch (error) {
    return res.status(500).send(error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    User.findOne({ email })
      .then((exist) => {
        bcrypt
          .compare(password, exist.password)
          .then((passwordcheck) => {
            if (!passwordcheck)
              return res.status(500).send("credentials wrong");
            const token = jwt.sign(
              {
                userId: exist._id,
                email: exist.email,
              },
              ENV.JWT_SECRETE,
              { expiresIn: "24h" }
            );
            return res.status(201).send({
              msg: "login successfull",
              username: exist.username,
              token,
            });
          })
          .catch(() => {
            return res.status(401).send({ error: "credentils wrong" });
          });
      })
      .catch(() => {
        return res.status(501).send({ error: "email not exist" });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
};
const getUser = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) return res.status(501).send({ msg: "invalid email" });
    User.findOne({ email }).then((user) => {
      if (!user) {
        return res.status(501).send("email not found");
      } else {
        const { password, ...rest } = Object.assign({}, user.toJSON());
        return res.status(201).send(rest);
      }
    });
  } catch (error) {
    return res.status(401).send({ error: "thokkalo error" });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
const updateUser = async (req, res) => {
  try {
    // const id = req.query.id;
    const { userId } = req.user;
    if (userId) {
      const body = req.body;
      const updated = await User.updateOne({ _id: userId }, body);
      return res.json(updated).status(201).send({ msg: "Record updated" });
    } else {
      return res.status(401).send({ error: "User Not Found...!" });
    }
  } catch (error) {
    return res.status(501).send({ error: "internal server error" });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    return res.status(501).send({ error: "internal server error" })
  }
}
const generateOTP = async (req, res) => {
  req.app.locals.OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  res.status(201).send({ code: req.app.locals.OTP });
};
const verifyOTP = async (req, res) => {
  const { code } = req.query;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(201).send({ msg: "verification successfull" });
  }
  return res.status(400).send({ msg: "invalid OTP" });
};
const resetSession = async (req, res) => {
  if (req.app.locals.resetSession) {
    return res.status(201).send({ msg: req.app.locals.resetSession });
  }
  return res.status(440).send({ msg: "session expired...!" });
};
const resetpassword = async (req, res) => {
  try {
    if (!req.app.locals.resetSession)
      return res.status(440).send({ error: "session expired...!" });
    const { username, password } = req.body;
    try {
      User.findOne({ username })
        .then((user) => {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              User.findOne(
                {
                  username: user.username,
                },
                {
                  password: hashedPassword,
                }
              )
                .then((data) => {
                  req.app.locals.resetSession = false;
                  return res.status(201).send({ msg: "password has updated" });
                })
                .catch((error) => {
                  return res.status(402).then({ msg: "somethin went wrong" });
                });
            })
            .catch((error) => {
              res.status(500).send({ error: "enabled to hashed password" });
            });
        })
        .catch((error) => {
          return res.status(404).send({ error: "username not found" });
        });
    } catch (error) {
      return res.status(500).send({ error });
    }
  } catch (error) {
    return res.status(501).send({ msg: "internal server error" });
  }
};

export {
  verifyEmail,
  register,
  login,
  getUser,
  updateUser,
  generateOTP,
  verifyOTP,
  resetSession,
  resetpassword,
  getAllUsers,
  deleteUser
};
