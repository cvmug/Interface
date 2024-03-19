import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NFTCard from './NFTCard';
import collections from './data/collections.json';

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #121212; 
  color: #ffffff;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  object-fit: cover;
  border: 2px solid #333;
`;

const Title = styled.h1`
  flex-grow: 1;
  font-size: 1.5em;
  color: #ffffff;
`;

const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #181818; 
  color: #ffffff;
`;


function CollectionPage() {
    const navigate = useNavigate();
    const { collectionName } = useParams();
    // Initialize currentCollection with a valid default or the collectionName from the URL if it's valid
    const initialCollection = collectionName && collections[collectionName] ? collectionName : 'ordinal_maxi_biz';
    const [currentCollection, setCurrentCollection] = useState(initialCollection);
    const [nfts, setNfts] = useState([]);


    const collectionInfo = {
        'ordinal_maxi_biz': {
            logo: 'https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://bafybeidb7ltjitqivbcp22iktp5vmciee4dwzrjobwjnlzt5dkgyepj5ne.ipfs.nftstorage.link/',
            title: 'Ordinal Maxi Biz (OMB)'
        },
        'quantum_cats': {
            logo: 'https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/ord-taproot_wizards_presents_pfp_1706542390359.png',
            title: 'Quantum Cats'
        }
    };

    const otherCollectionKey = currentCollection === 'ordinal_maxi_biz' ? 'quantum_cats' : 'ordinal_maxi_biz';

    useEffect(() => {
        if (collectionName && collections[collectionName]) {
            setCurrentCollection(collectionName);
            setNfts(collections[collectionName]);
        }
    }, [collectionName]);

    const handleCollectionChange = () => {
        const newCollection = currentCollection === 'ordinal_maxi_biz' ? 'quantum_cats' : 'ordinal_maxi_biz';
        setCurrentCollection(newCollection);
        navigate(`/${newCollection}`); // This changes the URL without reloading the page
    };
    const staticTimestamp = "03/19/2024, 3:00 PM";

    return (
        <>
            <Header>
                <Logo src={collectionInfo[currentCollection].logo} alt={`${currentCollection} Logo`} />
                <Title>{collectionInfo[currentCollection].title}</Title>
                <Logo
                    src={collectionInfo[otherCollectionKey].logo}
                    alt={`${otherCollectionKey} Logo`}
                    onClick={handleCollectionChange}
                />
            </Header>
            <CollectionContainer>
                {nfts.map((nft) => (
                    <NFTCard
                        key={nft.inscriptionNumber}
                        image={nft.image}
                        inscriptionNumber={nft.inscriptionNumber}
                        price={nft.price}
                        timestamp={staticTimestamp}
                    />
                ))}
            </CollectionContainer>
        </>
    );
}

export default CollectionPage;