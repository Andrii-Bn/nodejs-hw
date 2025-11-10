import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

// export const getAllNotesSchema = Joi.object({
//   page: Joi.number().integer().min(1).default(1),
//   perPage: Joi.number().integer().min(5).max(20).default(10),
//   tag: Joi.string().valid(
//     'Work',
//     'Personal',
//     'Meeting',
//     'Shopping',
//     'Ideas',
//     'Travel',
//     'Finance',
//     'Health',
//     'Important',
//     'Todo',
//   ),
//   search: Joi.string().allow(''),
// });

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).required().messages({
      'string.base': 'Title must be a string',
      'string.empty': 'Title cannot be empty',
      'any.required': 'Title is a required field',
      'string.min': 'Title must contain at least 1 character',
    }),
    content: Joi.string().allow('').messages({
      'string.base': 'Content must be a string',
    }),
    tag: Joi.string()
      .valid(
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      )
      .messages({
        'string.base': 'Tag must be a string',
        'any.only':
          'Tag must be one of the allowed values: Work, Personal, Meeting, Shopping, Ideas, Travel, Finance, Health, Important, Todo',
      }),
  }),
};
const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
};
