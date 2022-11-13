import React from 'react';
import { useSelector } from 'react-redux';

export default function Wrapper({ noAuthChild, authChild }) {

  const { user } = useSelector((state) => state.User);

  return (
    <>
      {

        user === null ? noAuthChild : authChild

      }
    </>
  )
}
