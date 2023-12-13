import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { get_all_providers } from "../utilities/requestHelper";
import { handleApiError } from "../utilities/errorHandler";

const RightNavigation = styled.div`
width: 200px;
height: 100vh;
background-color: #f0f0f0;
padding: 20px;
box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
position: fixed;
right: 0;
top: 0;
`;

const ProvidersContainer = styled.ul`
  list-style: none;
  padding: 0;
`;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const ProviderItem = styled.li`
  cursor: pointer;
  margin-bottom: 8px;
  padding: 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #e0e0e0;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default function Providers() {
  const navigate = useNavigate();
  const [providers, setProviders] = useState([]);
  const [showNav, setShowNav] = useState<boolean>(false);

  useEffect(() => {
    get_all_providers().then((response)=> {
      if(response){
        setProviders(response.data.data || [])
      }
    }).catch((error)=> handleApiError(error))
  }, []);
  const handleProviderClick = (providerName : string) => {
    navigate(`/api-details/${providerName}`);
  };

  return (<>
  {!showNav&&
  <CenteredContainer>
  <button onClick={()=>{setShowNav(true)}}>
    Explore Web Apis
  </button>
  </CenteredContainer>
  }
   { showNav && <RightNavigation>
      <h2>Select Provider</h2>
      <CloseButton onClick={()=> setShowNav(false)}>Close</CloseButton>
      <ProvidersContainer>
        {providers.map((provider) => (
          <ProviderItem
          key={provider}
          onClick={() => handleProviderClick(provider)}
          >
            {provider}
          </ProviderItem>
        ))}
      </ProvidersContainer>
    </RightNavigation>}
        </>
  );
}
