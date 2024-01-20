import styled from "styled-components";

export const IconSize = { height: "25px", width: "25px" };

export const IndexText = styled.span`
  width: 15px;
  margin: 5px;
`;

export const BasicInformation = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 5px;
`;

export const TrackInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  border-radius: 10px;
  padding: 3px 15px;

  &:hover {
    transform: scale(1.02);

    background-color: #80808040;
  }
`;

export const TrackNameAndArtist = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AlbumImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export const TrackText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${({ color }) => (color ? color : "grey")};
  font-size: 14px;
`;

export const DurationAndInteractions = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: grey;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
