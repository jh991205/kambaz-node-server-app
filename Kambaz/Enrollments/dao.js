import db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

let { enrollments } = db;

export const getAllEnrollments = () => enrollments;

export const enrollUserInCourse = (user, course) => {
  const newEnrollment = { _id: uuidv4(), user, course };
  enrollments.push(newEnrollment);
  return newEnrollment;
};

export const unenrollUserFromCourse = (user, course) => {
  const initialLength = enrollments.length;
  enrollments = enrollments.filter(
    (e) => !(e.user === user && e.course === course)
  );
  db.enrollments = enrollments;
  return initialLength !== enrollments.length;
};
