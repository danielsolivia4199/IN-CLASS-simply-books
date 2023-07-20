import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const getAuthorDetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    getAuthorDetails();
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h1>{authorDetails.first_name} {authorDetails.last_name}</h1>
        <h5>{authorDetails.favorite ? <span className="badge text-bg-warning">Favorite</span> : ''}</h5>
        <h1>Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a></h1>
      </div>
      <div className="d-flex flex-wrap">{authorDetails.books?.map((book) => (
        <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAuthorDetails} />
      ))}
      </div>
    </div>
  );
}
