import styled, { css } from "styled-components";

export const Button = styled.button`
  height: 46px;
  padding: 0 24px;
  border-radius: 12px;
  border: none;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.25s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ $variant }) => $variant === "primary" && css`
    background: linear-gradient(135deg,#3B82F6,#6366F1);
    color: white;

    box-shadow: 0 8px 20px rgba(59,130,246,0.4);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 30px rgba(59,130,246,0.45);
    }

    &:active {
      transform: translateY(0px);
    }
  `}

  ${({ $variant }) => $variant === "secundary" && css`
    background: rgba(255,255,255,0.08);
    color: #E2E8F0;
    border: 1px solid rgba(255,255,255,0.15);

    &:hover {
      background: rgba(255,255,255,0.15);
      transform: translateY(-2px);
    }
  `}
`;
