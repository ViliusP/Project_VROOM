/**
*
* RequestCardItem
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Card from '../CardComponents/Card';
import CardContent from '../CardComponents/CardContent';
import MediaArticle from '../MediaObject/MediaArticle';
import MediaLeft from '../MediaObject/MediaLeft';
import Image48x48 from '../MediaObject/Image48x48';
import MediaContent from '../MediaObject/MediaContent';
import Content from '../MediaObject/Content';
import CardFooter from '../CardComponents/CardFooter';
import CardFooterItem from '../CardComponents/CardFooterItem';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/fontawesome-free-solid';


function RequestCardItem() {
  const action1 = () => 
  {
    console.log("Hello from accept");
  }

  const action2 = () => 
  {
    console.log("Hello from decline");
  }
  return (
    <Card>
      <CardContent>
        <MediaArticle>
          <MediaLeft>
          <Image48x48> 
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
          </Image48x48>
          </MediaLeft>
          <MediaContent>          
            <p className='title is-4'>Vardas Pavardė</p>
            <p className="subtitle is-6"><FontAwesomeIcon icon={faPhone} size='1x'/>860000000</p>
          </MediaContent>
        </MediaArticle>
        <Content>
          <div>From:</div>
          <div>To:</div>
          <div>Info:</div>
        </Content>
      </CardContent>
      <CardFooter>
          <CardFooterItem onclick={() => { action1 }}>Accept</CardFooterItem>
          <CardFooterItem onclick={() => { action2 }}>Decline</CardFooterItem>
        </CardFooter>
    </Card>
  );
}

RequestCardItem.propTypes = {

};

export default RequestCardItem;
