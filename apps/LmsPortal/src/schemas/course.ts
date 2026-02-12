import type { RxJsonSchema } from 'rxdb';
import { courseSchema as courseSchemaType } from '@type/index';

export const courseSchema: RxJsonSchema<courseSchemaType> = {
  title: 'course schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100, // RxDB requires maxLength for primary keys
    },
    title: { type: 'string' },
    duration: { type: 'number' }, // Duration in minutes
    discount: { type: 'number' },
    description: { type: 'string' },
    author: { type: 'string' },
    thumbnail: { type: 'string' },
    updated_at: { type: 'string' },
  },
  required: ['id', 'title', 'updated_at'],
};

export const chapterSchema = {
  title: 'chapter schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    course_id: {
      ref: 'courses', // Points to the 'courses' collection
      type: 'string',
    },
    title: { type: 'string' },
    video_url_title: { type: 'string' },
    order_index: { type: 'number' }, // Vital for sorting chapters correctly
  },
  required: ['id', 'course_id', 'title', 'order_index'],
};
