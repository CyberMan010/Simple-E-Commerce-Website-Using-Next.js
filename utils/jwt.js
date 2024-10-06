import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '30d';

export const createToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
  });
};

export const verifyToken = (token) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace JWT_SECRET with your secret
      return decoded; // Return the decoded token if it's valid
    } catch (error) {
      return false; // Return false if the token is invalid
    }
  };