import React from "react";
import { useDispatch } from "react-redux";
import { AirplaneItemDetailModel } from "../../shared/interfaces";
import {
  ImageSliderWrapper,
  DetailBox,
  DetailTextWrapper,
  DetailItem,
  DetailTitle,
  ImageDeleteButton,
  ImageContainer,
  AirplaneImage,
  ImageSection,
  NoImageText,
} from "./DetailCard.style";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { JetPhotos } from "../../api-interfaces";
import { GET_DETAIL_INFO } from "../../store/actionName/actionNames";
import axios from "axios";
import { URL } from "../../config/api";

interface DetailboxPropsModel {
  detailData: AirplaneItemDetailModel;
}

const DetailCard: React.FC<DetailboxPropsModel> = ({ detailData }) => {
  const dispatch = useDispatch();
  const deleteImage = (selectedImage: JetPhotos) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios.delete(URL + "jetPhotos/" + selectedImage._id).then(function () {
        dispatch({ type: GET_DETAIL_INFO, payLoad: detailData.details });
      });
    }
  };
  return (
    <div>
      {detailData && (
        <DetailBox>
          <ImageSection>
            {detailData.airplaneImages &&
              detailData.airplaneImages.length !== 0 && (
                <ImageSliderWrapper>
                  <AliceCarousel autoPlay={false}>
                    {detailData.airplaneImages.map((item, i) => (
                      <ImageContainer key={i}>
                        <AirplaneImage
                          src={item.airplane_image}
                          className="sliderimg"
                          alt=""
                        />
                        <ImageDeleteButton
                          onClick={() => deleteImage(item)}
                          className="delete-button"
                        >
                          <svg
                            height="18px"
                            version="1.1"
                            viewBox="0 0 14 18"
                            width="14px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title />
                            <desc />
                            <defs />
                            <g
                              fill="currentColor"
                              fillRule="evenodd"
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                            >
                              <g
                                fill="currentColor"
                                id="Core"
                                transform="translate(-299.000000, -129.000000)"
                              >
                                <g
                                  id="delete"
                                  transform="translate(299.000000, 129.000000)"
                                >
                                  <path
                                    d="M1,16 C1,17.1 1.9,18 3,18 L11,18 C12.1,18 13,17.1 13,16 L13,4 L1,4 L1,16 L1,16 Z M14,1 L10.5,1 L9.5,0 L4.5,0 L3.5,1 L0,1 L0,3 L14,3 L14,1 L14,1 Z"
                                    id="Shape"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </ImageDeleteButton>
                      </ImageContainer>
                    ))}
                  </AliceCarousel>
                </ImageSliderWrapper>
              )}
              {(!detailData.airplaneImages ||
              detailData.airplaneImages.length === 0) && <NoImageText>No images to show...</NoImageText> }
          </ImageSection>
          {detailData.details && (
            <DetailTextWrapper>
              <DetailItem>
                <DetailTitle>Airplane name: </DetailTitle>
                {detailData.details.callSign}
              </DetailItem>
              <DetailItem>
                <DetailTitle>Origin Country: </DetailTitle>
                {detailData.details.oriCountry}
              </DetailItem>
              <DetailItem>
                <DetailTitle>Barometric altitude(m): </DetailTitle>
                {detailData.details.baroAltitude}
              </DetailItem>
              <DetailItem>
                <DetailTitle>Velocity(m/s): </DetailTitle>
                {detailData.details.velocity}
              </DetailItem>
            </DetailTextWrapper>
          )}
        </DetailBox>
      )}
    </div>
  );
};

export default DetailCard;