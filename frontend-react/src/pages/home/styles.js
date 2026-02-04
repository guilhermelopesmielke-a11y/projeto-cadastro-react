import styled from "styled-components";

export const Background = styled.div`
  min-height: 100vh;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(120deg, #0F172A, #1E293B);

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background: #2563EB;
    filter: blur(160px);
    top: -120px;
    left: -120px;
    opacity: 0.35;
  }

  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background: #9333EA;
    filter: blur(160px);
    bottom: -120px;
    right: -120px;
    opacity: 0.35;
  }

  font-family: 'Inter', system-ui, -apple-system, sans-serif;
`;

export const RegistrationScreen = styled.div`
  width: 100%;
  max-width: 720px;
  border-radius: 22px;
  overflow: hidden;

  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.15);

  box-shadow:
    0 25px 80px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255,255,255,0.2);
`;

export const Header = styled.header`
  padding: 40px;

  background: linear-gradient(
    120deg,
    rgba(37, 99, 235, 0.15),
    rgba(147, 51, 234, 0.15)
  );

  border-bottom: 1px solid rgba(255,255,255,0.1);
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin: 0;

  background: linear-gradient(90deg,#60A5FA,#A78BFA);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Paragraph = styled.p`
  margin-top: 12px;
  font-size: 15px;
  color: #CBD5F5;
`;

export const RegistrationUsers = styled.form`
  padding: 40px;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 14px;
  font-weight: 500;
  color: #E2E8F0;

  span {
    color: #FB7185;
    margin-left: 4px;
  }
`;

export const Input = styled.input`
  height: 48px;
  padding: 0 14px;

  font-size: 15px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.15);

  background: rgba(255,255,255,0.08);
  color: #F8FAFC;

  transition: all 0.25s ease;

  &::placeholder {
    color: #94A3B8;
  }

  &:hover {
    border-color: rgba(96,165,250,0.6);
  }

  &:focus {
    outline: none;
    border-color: #60A5FA;
    box-shadow: 0 0 0 3px rgba(96,165,250,0.25);
    background: rgba(255,255,255,0.12);
  }
`;

