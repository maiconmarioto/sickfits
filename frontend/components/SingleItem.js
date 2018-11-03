import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <div>Loading...</div>;
          if (!data.item) return <p>No Item Found for {this.props.id}</p>;
          return <p>Single Item Component</p>;
        }}
      </Query>
    );
  }
}

export default SingleItem;
