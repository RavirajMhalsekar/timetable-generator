import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs/promises';

export default async function uploadImage(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err);
      res.status(500).json({ success: false, error: 'Form parsing error' });
      return;
    }

    try {
      const file = files.file as formidable.File;

      if (!file) {
        res.status(400).json({ success: false, error: 'No file uploaded' });
        return;
      }

      const oldPath = file.path;
      const newPath = `/tmp/${file.name}`;

      await fs.rename(oldPath, newPath);
      console.log(`Uploaded file saved at: ${newPath}`);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
}
