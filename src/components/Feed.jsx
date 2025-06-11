import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from 'firebase/firestore';
import { app } from '../firebase';
import Post from './Post';

export default async function Feed() {
  const db = getFirestore(app);
  const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => {
    const postData = doc.data();
    return {
      id: doc.id,
      ...postData,
      timestamp: postData.timestamp?.toMillis?.() || null, // Serialize timestamp to number (ms)
    };
  });

  return (
    <div>
      {data.map((post) => (
        <Post key={post.id} post={post} id={post.id} />
      ))}
    </div>
  );
}




