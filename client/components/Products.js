import React from 'react';
import {Link} from 'react-router';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    border: '1px solid #d8ad02',
    backgroundColor: '#df42f4'
  },
  subHeader: {
    fontSize: 'xx-large',
    fontFamily: 'cursive',
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
};

export default function Products (props) {

  const products = props.products;
  return (
    <div style={styles.root}>
      <GridList
        cellHeight={500}
        style={styles.gridList}
      >
        <Subheader style={styles.subHeader}>Memes</Subheader>
        {products && products.map(product => (
          <Link to={`/products/${product.id}`}>
            <GridTile
              key={product.id}
              title={product.title}
              subtitle={<span> <b>{product.description}</b></span>}
            >
              <img src={product.imageUrl} />
            </GridTile>
          </Link>
        ))}
      </GridList>
    </div>
  )}

