import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getNotes);
router.get('/notes/:noteId', getNoteById);
router.get('/test-error', () => {
  throw new Error('Simulated server error');
});
router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

export default router;
