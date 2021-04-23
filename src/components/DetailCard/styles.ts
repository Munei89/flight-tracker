import styled from "styled-components";

export const ImageDeleteButton = styled.button`
  cursor: pointer;
  color: transparent;
  position: absolute;
  background-color: transparent;
  border: none;
  z-index: 100;
  &:focus {
    outline: none;
  }
`;

export const ImageSliderWrapper = styled.div`
  .alice-carousel {
    width: 300px;
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover ${ImageDeleteButton} {
      color: white;
      opacity: 0.8;
    }
  }
  .alice-carousel__wrapper {
    width: 300px;
    height: 200px;
  }
  .alice-carousel__stage-item {
    width: 100% !important;
    div {
      width: 100%;
      height: 100%;
    }
  }
  .alice-carousel__dots {
    display: none;
  }
  .alice-carousel__prev-btn {
    position: absolute;
    width: auto;
    left: 0;
  }
  .alice-carousel__next-btn {
    position: absolute;
    width: auto;
    right: 0;
  }
  .alice-carousel__prev-btn-wrapper {
    display: flex;
    justify-content: flex-start;
  }
  .alice-carousel__next-btn-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    color: white;
    padding: 0px;
    opacity: initial;
    font-size: 50px;
    z-index: 50;
  }
`;

export const ImageSection = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid #999999;
  display: flex;
  justify-centent: center;
  align-items: center;
`;

export const NoImageText = styled.p`
  width: 100%;
  text-align: center;
`;

export const DetailBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const DetailTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const DetailItem = styled.p`
  margin: 0px;
`;

export const DetailTitle = styled.span`
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AirplaneImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
