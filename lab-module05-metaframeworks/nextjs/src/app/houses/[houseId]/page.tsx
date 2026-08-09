import { Metadata } from 'next';
import React from 'react';

interface Props {
  params: Promise<{ houseId: string }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  return {
    title: `Rent a house - House ${params.houseId} details`,
  };
};

const HousePage = async (props: Props) => {
  const params = await props.params;
  return (
    <>
      <h2>House detail page</h2>
      <p>{params.houseId}</p>
    </>
  );
};

export default HousePage;
