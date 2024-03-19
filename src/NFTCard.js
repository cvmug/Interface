import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 180px;
  margin: 10px;
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  background-color: #222;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    border-color: #cddc39;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
`;

const NFTImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const NFTDetails = styled.div`
  padding: 8px;
  text-align: center;
  color: #e0e0e0;
`;

const Inscription = styled.p`
  font-size: 0.9em;
  color: #e0e0e0;
`;

const PriceTag = styled.p`
  font-size: 1.1em;
  color: #cddc39;
  font-weight: bold;
`;

const Timestamp = styled.p`
  color: #a9a9a9;
  font-size: 0.8em;
`;

function NFTCard({ image, inscriptionNumber, price, timestamp }) {
    return (
        <Card>
            <NFTImage src={image} alt={`NFT ${inscriptionNumber}`} />
            <NFTDetails>
                <Inscription>{`#${inscriptionNumber}`}</Inscription>
                <PriceTag>{`${price}`}</PriceTag>
                <Timestamp>{`${timestamp}`}</Timestamp>
            </NFTDetails>
        </Card>
    );
}

export default NFTCard;
