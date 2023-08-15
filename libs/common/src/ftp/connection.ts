import { Client } from 'basic-ftp';
import { v4 } from 'uuid';

const PATH = '/shared';

const client = new Client();

const connect = async () => {
  try {
    await client.access({
      host: 'localhost',
      port: 21,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
    });
    console.log('Connected to FTP server');
  } catch (err) {
    console.error('Connection error', err);
  }
};

const generateRemotePath = async (fileName): Promise<string> => {
  const id = v4();
  const remotePath = `${PATH}/${id}-${fileName}`;
  if (await fileExists(remotePath)) {
    return generateRemotePath(fileName);
  }

  return remotePath;
};

const fileExists = async (remotePath): Promise<boolean> => {
  try {
    await client.size(remotePath);
    return true;
  } catch (err) {
    return false;
  }
};

// local file testing
const storeFileV1 = async (localPath, fileName) => {
  try {
    const path = await generateRemotePath(fileName);
    await client.uploadFrom(localPath, path);
  } catch (err) {
    console.error('Error uploading file:', err);
  } finally {
    client.close();
  }
};

export { connect, storeFileV1 };
