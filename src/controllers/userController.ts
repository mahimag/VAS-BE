// import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";

// import logger from "../misc/logger";
// import CustomError from "../misc/CustomError";
import * as userService from "../services/userService";

/**
 * Get all users.
 * @param {Request} req
 * @param {Response} res
 */
export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  userService
    .getAllUsers()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Get a single user.
 * @param {Request} req
 * @param {Response} res
 */
export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  userService
    .getUser(+userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Create a new user.
 * @param {Request} req
 * @param {Response} res
 */
export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { first_name, last_name, birth_date, ethnicity, gender, email, password } = req.body;

  userService
    .createUser({ first_name, last_name, birth_date, ethnicity, gender, email, password })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

// /**
//  * Update an existing user.
//  * @param {Request} req
//  * @param {Response} res
//  */
// export const updateUser = (req: Request, res: Response, next: NextFunction) => {
//   const { userId } = req.params;
//   const { first_name, last_name, birth_date, ethnicity, gender, email } = req.body;

//   if (!userId || !first_name || !last_name || !birth_date || !ethnicity || !gender || !email) {
//     logger.error("Missing parameters.");
//     throw new CustomError(
//       "UserId, FirstName, LastName, DOB, Ethnicity, Gender, and Email are required",
//       StatusCodes.BAD_REQUEST
//     );
//   }

//   userService
//     .updateUser({ first_name, last_name, birth_date, ethnicity, gender, email })
//     .then((data) => res.json(data))
//     .catch((err) => next(err));
// };

/**
 * Delete an existing user.
 * @param {Request} req
 * @param {Response} res
 */
export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  userService
    .deleteUser(+userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};