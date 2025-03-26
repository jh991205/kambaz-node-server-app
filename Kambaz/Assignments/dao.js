import db from "../Database/index.js";

let { assignments } = db;

export const findAllAssignments = () => assignments;

export const findAssignmentById = (assignmentId) =>
  assignments.find((a) => a._id === assignmentId);

export const createAssignment = (assignment) => {
  assignments = [...assignments, assignment];
  return assignment;
};

export const updateAssignment = (assignmentId, updatedAssignment) => {
  assignments = assignments.map((a) =>
    a._id === assignmentId ? updatedAssignment : a
  );
  return updatedAssignment;
};

export const deleteAssignment = (assignmentId) => {
  assignments = assignments.filter((a) => a._id !== assignmentId);
};
