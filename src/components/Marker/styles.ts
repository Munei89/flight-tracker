import styled from "styled-components";

export const MapFlightMarker = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 30px;
  width: 30px;
  cursor: pointer;
  &:hover {
    filter: brightness(70%);
  }
`;
