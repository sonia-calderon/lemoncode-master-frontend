import { css } from '@emotion/css';

export const container = css`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
`;

export const wrapper = css`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const backLink = css`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 0.4rem;

  color: #555;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;

  transition: color 0.2s ease;

  &:hover {
    color: #1976d2;
  }
`;

export const card = css`
  display: grid;
  grid-template-columns: 350px 1fr;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const image = css`
  width: 100%;
  height: 100%;
  min-height: 400px;
  object-fit: cover;

  @media (max-width: 700px) {
    height: 350px;
    min-height: unset;
  }
`;

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
`;

export const header = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const title = css`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
`;

export const status = css`
  align-self: flex-start;
`;

export const info = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const row = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const label = css`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #777;
`;

export const value = css`
  font-size: 1rem;
  color: #333;
`;
