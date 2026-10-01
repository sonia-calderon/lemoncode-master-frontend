import { css } from '@emotion/css';

export const link = css`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

export const card = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const media = css`
  height: auto;
  background-color: #eeeeee;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  flex: 1;
`;

export const name = css`
  font-weight: 600;
  margin-bottom: 2px;
`;

export const status = css`
  align-self: flex-start;
`;

export const info = css`
  color: #666;
  margin-top: 2px;
`;

export const origin = css`
  color: #555;
  margin-top: 4px;
`;
