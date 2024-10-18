import { gql } from "@apollo/client";

export const CREATE_VENDOR = gql`
  mutation CreateVendor($input: CreateVendorInput!) {
    createVendor(input: $input) {
      id
      email
      fname
      lname
      busname
      phone
      city
      location
    }
  }
`;

export const UPDATE_VISITOR = gql`
    mutation UpdateVisitor($id: String!, $input: UpdateVisitorInput!) {
        updateVisitor(id: $id, input: $input) {
            id
            visitor_fname
            visitor_lname
            partner_fname
            partner_lname
            engaged_date
            wed_date
            wed_venue
        }
    }
`;

export const CREATE_SERVICE = gql`
  mutation CreateOffering($input: CreateOfferingInput!) {
    createOffering(input: $input) {
      id
      name
      category
      vendor {
        id
      }
    }
  }
`;

export const UPDATE_VENDOR = gql`
  mutation UpdateVendor($id: String!, $input: UpdateVendorInput!) {
    updateVendor(id: $id, input: $input) {
      fname
      lname
      busname 
      phone 
      city 
      location
    }
  }
`;