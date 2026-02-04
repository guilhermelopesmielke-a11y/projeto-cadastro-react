import styled from "styled-components"

export const Background = styled.div`
  min-height: 100vh;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  background:
    radial-gradient(circle at top left, #1e3a8a, transparent 45%),
    radial-gradient(circle at bottom right, #6d28d9, transparent 45%),
    #0f172a;
`

export const ListContainer = styled.div`
  width: 100%;
  max-width: 900px;
  border-radius: 20px;
  overflow: hidden;

  background: rgba(30,41,59,0.85);
  backdrop-filter: blur(10px);

  box-shadow:
    0 25px 60px rgba(0,0,0,0.4),
    inset 0 1px 0 rgba(255,255,255,0.05);
`

export const Header = styled.div`
  padding: 30px 40px;
  border-bottom: 1px solid rgba(255,255,255,0.08);

  background: linear-gradient(
    135deg,
    rgba(99,102,241,0.2),
    rgba(168,85,247,0.2)
  );
`

export const Title = styled.h1`
  font-size: 26px;
  color: #e2e8f0;
  margin: 0;
`

export const Subtitle = styled.p`
  margin-top: 8px;
  color: #94a3b8;
  font-size: 14px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableHead = styled.thead`
  background: rgba(15,23,42,0.7);
`

export const TableRow = styled.tr`
  transition: background 0.2s;

  &:hover {
    background: rgba(99,102,241,0.1);
  }
`

export const TableHeader = styled.th`
  padding: 16px;
  text-align: left;
  font-size: 14px;
  color: #cbd5f5;
  font-weight: 600;
`

export const TableBody = styled.tbody``

export const TableData = styled.td`
  padding: 16px;
  border-top: 1px solid rgba(255,255,255,0.05);
  color: #e2e8f0;
  font-size: 14px;
`
export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 0, 0, 0.15);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`

export const TrashIcon = styled.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`
