import React, { useState, useEffect } from "react";
import { RouteProps, useParams } from "react-router-dom"; // Correct import
import axios from "axios";
import styled from "styled-components";

interface Contact {
email: string,
name: string,
url: string,
}

interface ApiInfo {
    contact: Contact;
    description: string;
    title: string;
    version: string;
    "x-apisguru-categories": string[];
    // Additional properties from the example...
  }
  
  interface ApiDetailsInfo {
    added: string;
  info: ApiInfo;
  link: string;
  openapiVer: string;
  swaggerUrl: string;
  swaggerYamlUrl: string;
  updated: string;
  }
  

const DetailsContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Header = styled.h2`
margin-top: 20px;
padding: 20px;
border-radius: 5px;
text-align: center; 
margin-left: auto; 
margin-right: auto;
`;

const ContactInfo = styled.p`
  margin-bottom: 8px;
`;

const ApiDetails = () => {
  const { provider } = useParams();
  const [apiDetails, setApiDetails] = useState<ApiDetailsInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://api.apis.guru/v2/${provider}.json`)
      .then((response) => {
        const data = response.data.apis
        const providerKeyValue = Object.keys(data)
        console.log(data[`${providerKeyValue}`])
        setApiDetails(data[`${providerKeyValue}`])
    })

      .catch((error) =>
        console.error(`Error fetching API details for ${provider}:`, error)
      ).finally(() => {
        setLoading(false);
      });
  }, [provider]);
  return (
    <DetailsContainer>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header>{provider} API Details</Header>
          <h3> Description </h3>
          {apiDetails?.info?.description}
          <h3> Swagger </h3>
          {apiDetails?.swaggerUrl}
          <h3> Contact </h3> 
          <ContactInfo> email : ${apiDetails?.info?.contact?.email}</ContactInfo>
          <ContactInfo> name : ${apiDetails?.info?.contact?.name}</ContactInfo>
          <ContactInfo> url : ${apiDetails?.info?.contact?.url}</ContactInfo>
        </>
      )}
    </DetailsContainer>
  );
};

export default ApiDetails;
