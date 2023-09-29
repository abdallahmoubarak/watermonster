import bcrypt from "bcrypt";
import jwt, { Secret, SignOptions } from "jsonwebtoken";

declare const process: {
  env: {
    NEXT_PUBLIC_JWT_SECRET: string;
  };
};

export const createJWT = (data: string | object): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const options: SignOptions = { expiresIn: "30d" };
    jwt.sign(
      data,
      process.env.NEXT_PUBLIC_JWT_SECRET as Secret,
      options,
      (err: Error | null, token?: string) => {
        if (err) return reject(err);
        return resolve(token!);
      },
    );
  });
};

export const comparePassword = (
  plainText: string,
  hash: string,
): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    bcrypt.compare(plainText, hash, (err: any, result: boolean) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

const saltRounds = 10;

export const hashPassword = (plainText: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    bcrypt.hash(plainText, saltRounds, (err: any, hash: string) => {
      if (err) return reject(err);
      return resolve(hash);
    });
  });
};

export const decodeJWT = (token: string): Promise<any> =>
  new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET as Secret,
      (err: any, decoded: any) => {
        if (err) {
          console.error("JWT verification error:", err);
          return reject("Invalid token");
        }
        const { sub } = decoded as { sub: string };
        const { email } = decoded as { email: string };
        const { firstName } = decoded as { firstName: string };
        const { lastName } = decoded as { lastName: string };
        return resolve({ sub, email, firstName, lastName });
      },
    );
  });
