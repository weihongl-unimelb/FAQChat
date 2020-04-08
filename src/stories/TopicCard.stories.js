import React from 'react';
import { action } from '@storybook/addon-actions';

import TopicCard from './TopicCard';

export default {
  title: 'TopicCard',
  component: TopicCard,
  excludeStories: /.*Data$/, // Our exports that end in "Data" are not stories.
};


export const Default = () =>(
   <div style={{background: '#EDF4FA', width: 500, height: 500, display: 'flex' }}>
     <TopicCard topic={topicData} questions={questionsData} style={{margin: 'auto', alignSelf: 'center', width: 400, height: 300}} />
   </div>
   
  );


const topicData = {
  id: 14,
  name: "DELIVERY",
  icon: {
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAHiSURBVGhD7ZeBccIwDEW7EAOQBVgABoABYAEGgAVYAAYgA8AAMAATsAALpPdyVk5NhUlqKDrO7+5fW0eW8m3FTb6qDyEb8UY24o1sxBufbWQwGPyLNptNqJjOW40URVHdbrdQNY2okel0Wq/aKyQ1FouFeX2324W76UbUCAlfhdSIabvdhujHuDZC612v1zAjztuNWDUul0tzfTKZhNE4Lo0AbdXnPlwZ4Xet4XDYxJ1OpxBl48oIf4/H4/q0FEnco6PanZH2ynNdYmezWRj9jXsjoHfm3j25M8IpxcprMSbxyML1w66ld8XClZEYxMkci2wklb41shGryPl8rsfW63V1PB6TviXaNcjFqzu5GSvLsh4XnmaE7wYZF41Goz+bkRzUOBwO9X9unRtx7PICCUlGlstlvQv8lDGk34EoRkxfyXwWSJvQuZHk1/dgETXS1nw+b3ZAr9CzJB1ADWpZMciilxFaQKCYFZMi3abUsmKQhWmE9x2RTrharULEz0KspJ7TR/q7Qy8UtWS8PcfCNNKGh1qS0tP0q+7rrp+j95Dngpzk1gcLLdaFTkZi2yx9ncJ+vzdzIzm1HtHJCLClrI6sHi9x3MCzID85yU8HUKvPTnc24p1sxBvZiDc+xEhVfQPBRG3zHobA7QAAAABJRU5ErkJggg==",
    desc: ""
  },
  active: false,
  updateTime: "2020-03-30T05:55:16.9811119"
}

const questionsData = [
  {
    "id": 21,
    "description": "Standard Delivery",
    "content": "How does your Australian Standard Delivery service work?",
    "answer": "<h2>How much does it cost?</h2><ul><li>$5.00 for orders under&nbsp;$70.00&nbsp;</li><li>Free for orders over $70.00&nbsp;</li><li><br></li></ul><h2><strong>How long does it take?</strong></h2><ul><li><a href=\"https://www.asos.com/au/customer-care/delivery/metro-postcodes-for-faster-standard-delivery/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(45, 45, 45);\">List of metro postcodes where the delivery takes up to&nbsp;6 working days.</a></li><li><a href=\"https://www.asos.com/au/customer-care/delivery/rural-postcodes-for-standard-delivery/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(45, 45, 45);\">List of rural postcodes where the delivery takes up to 14 working days.</a></li><li>7 working days to the rest of Australia (excluding weekends and public holidays)</li><li><br></li></ul><p>Delays may sometimes occur beyond the control of ASOS and we will advise you if this happens where we can.*</p><h2><strong>Tracking your order</strong></h2><ul><li>Orders are shipped from the UK and will be delivered by Australia Post.</li><li>Once your order leaves our warehouse, you'll receive a shipping confirmation email which will contain your tracking link.</li><li>Don't worry if you don't see any tracking&nbsp;updates at first – they will begin once your parcel arrives in Australia.</li><li><br></li></ul><h2><strong>What happens on the day of the delivery?</strong></h2><ul><li>Your order will be delivered between 7am and 9pm on a working day</li><li>If you're not around when delivery is attempted, the driver will either leave your order in a safe place or a calling card will be left telling you how you can collect your ASOS order.</li><li>You can also register with Australia Post before placing your order to take advantage of their 24/7 Parcel Lockers.</li><li><br></li></ul><p>Want an even quicker delivery?&nbsp;<a href=\"https://www.asos.com/au/customer-care/delivery/how-does-your-australian-express-delivery-service-work/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(45, 45, 45);\">Check out our&nbsp;Express Delivery service.</a></p><p><strong>Just one more thing.....</strong></p><p><br></p><p>*We aim to meet these delivery times but during busy periods (including sale) deliveries may take a little longer. Occasionally tech updates to our systems or force majeure events, such as extreme weather conditions, will mean that these delivery services aren’t available, or that order cut-off times need amending and/or delivery times need to be extended. However, we will always work hard to keep these temporary changes to a minimum. ASOS cannot be held liable for any parcels that are lost or stolen as a result of any specific delivery instructions left for the carrier.</p>",
    "questionTopicId": 14,
    "rank": 2147483647,
    "active": false,
    "updateTime": "2020-03-30T05:45:54.1561626",
    "questionTopic": {
      "id": 14,
      "name": "DELIVERY",
      "icon": {
        "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAHiSURBVGhD7ZeBccIwDEW7EAOQBVgABoABYAEGgAVYAAYgA8AAMAATsAALpPdyVk5NhUlqKDrO7+5fW0eW8m3FTb6qDyEb8UY24o1sxBufbWQwGPyLNptNqJjOW40URVHdbrdQNY2okel0Wq/aKyQ1FouFeX2324W76UbUCAlfhdSIabvdhujHuDZC612v1zAjztuNWDUul0tzfTKZhNE4Lo0AbdXnPlwZ4Xet4XDYxJ1OpxBl48oIf4/H4/q0FEnco6PanZH2ynNdYmezWRj9jXsjoHfm3j25M8IpxcprMSbxyML1w66ld8XClZEYxMkci2wklb41shGryPl8rsfW63V1PB6TviXaNcjFqzu5GSvLsh4XnmaE7wYZF41Goz+bkRzUOBwO9X9unRtx7PICCUlGlstlvQv8lDGk34EoRkxfyXwWSJvQuZHk1/dgETXS1nw+b3ZAr9CzJB1ADWpZMciilxFaQKCYFZMi3abUsmKQhWmE9x2RTrharULEz0KspJ7TR/q7Qy8UtWS8PcfCNNKGh1qS0tP0q+7rrp+j95Dngpzk1gcLLdaFTkZi2yx9ncJ+vzdzIzm1HtHJCLClrI6sHi9x3MCzID85yU8HUKvPTnc24p1sxBvZiDc+xEhVfQPBRG3zHobA7QAAAABJRU5ErkJggg==",
        "desc": ""
      },
      "active": false,
      "updateTime": "2020-03-30T05:55:16.9811119"
    }
  },
  {
    "id": 22,
    "description": "Express Delivery",
    "content": "How does your Australian Express Delivery service work?",
    "answer": "<p>We can't deliver to a PO Box or a parcel locker with Express Delivery, so check out our Standard Delivery service if you need something delivered to a PO Box or want to use our Parcel Locker service.&nbsp;</p><h2>How much does it cost?</h2><ul><li>$14.99 for orders under&nbsp;$125.00</li><li>Free for orders over $50.00, just enter a promo code AUEXPRESS at the checkout.</li><li>Free if you’re a Premier Delivery subscriber.&nbsp;<a href=\"https://www.asos.com/au/customer-care/delivery/how-do-deliveries-work-with-premier-delivery/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(45, 45, 45);\">For more info on Premier Delivery click here</a>.&nbsp;</li><li><br></li></ul><h2>How long does it take?</h2><ul><li>3 working days days after you place your order (excluding weekends and public holidays)</li><li>2 working days if you live in Brisbane/Sydney/Melbourne/Perth Metro areas.&nbsp;<a href=\"https://www.asos.com/au/customer-care/delivery/metro-postcodes-for-faster-express-delivery/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(45, 45, 45);\">Click here to check the metro postcodes.&nbsp;</a></li><li><br></li></ul><p>You must have completed your order by 12.00 noon AEDT. Any orders placed after 12.00 noon will take an additional 1 business day to be delivered.*</p><h2>Tracking your order&nbsp;</h2><ul><li>Delivery is fully tracked and delivery notifications via SMS and email are provided by the carrier.</li><li>As soon as your order leaves our warehouse you'll get a shipping confirmation email which will include a tracking link for you to follow your order.</li></ul><h2><strong>What happens on the day of the delivery?</strong></h2><ul><li>You'll get an SMS message from the carrier letting you know when your parcel is due out for delivery, so we'd suggest making sure that your phone number is up to date on your account.</li><li>Your order will be delivered between 7am and 9pm and a signature will be required on receipt in most instances.</li><li>Dependant on the carrier, you might be presented with delivery options during delivery including changing your delivery date, requesting leave with neighbour, requesting collect from a service point, requesting that your parcel is left safe, and requesting that your parcel is held for delivery on another date (for example if you're on holiday).</li><li><br></li></ul><p><strong>Just one more thing.....</strong></p><p><br></p><p>*We aim to meet these delivery times but during busy periods (including sale) deliveries may take a little longer. Occasionally tech updates to our systems or force majeure events, such as extreme weather conditions, will mean that these delivery services aren’t available, or that order cut-off times need amending and/or delivery times need to be extended. However, we will always work hard to keep these temporary changes to a minimum. ASOS cannot be held liable for any parcels that are lost or stolen as a result of any specific delivery instructions left for the carrier.</p>",
    "questionTopicId": 14,
    "rank": 2147483647,
    "active": false,
    "updateTime": "2020-03-30T05:46:33.9076951",
    "questionTopic": {
      "id": 14,
      "name": "DELIVERY",
      "icon": {
        "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAHiSURBVGhD7ZeBccIwDEW7EAOQBVgABoABYAEGgAVYAAYgA8AAMAATsAALpPdyVk5NhUlqKDrO7+5fW0eW8m3FTb6qDyEb8UY24o1sxBufbWQwGPyLNptNqJjOW40URVHdbrdQNY2okel0Wq/aKyQ1FouFeX2324W76UbUCAlfhdSIabvdhujHuDZC612v1zAjztuNWDUul0tzfTKZhNE4Lo0AbdXnPlwZ4Xet4XDYxJ1OpxBl48oIf4/H4/q0FEnco6PanZH2ynNdYmezWRj9jXsjoHfm3j25M8IpxcprMSbxyML1w66ld8XClZEYxMkci2wklb41shGryPl8rsfW63V1PB6TviXaNcjFqzu5GSvLsh4XnmaE7wYZF41Goz+bkRzUOBwO9X9unRtx7PICCUlGlstlvQv8lDGk34EoRkxfyXwWSJvQuZHk1/dgETXS1nw+b3ZAr9CzJB1ADWpZMciilxFaQKCYFZMi3abUsmKQhWmE9x2RTrharULEz0KspJ7TR/q7Qy8UtWS8PcfCNNKGh1qS0tP0q+7rrp+j95Dngpzk1gcLLdaFTkZi2yx9ncJ+vzdzIzm1HtHJCLClrI6sHi9x3MCzID85yU8HUKvPTnc24p1sxBvZiDc+xEhVfQPBRG3zHobA7QAAAABJRU5ErkJggg==",
        "desc": ""
      },
      "active": false,
      "updateTime": "2020-03-30T05:55:16.9811119"
    }
  },
  {
    "id": 23,
    "description": "Post Parcel Locker",
    "content": "How do deliveries to an Australia Post Parcel Locker work?",
    "answer": "<p>If you're not going to be around for a delivery or you don't want to wait for the postman then don't worry - we've got you covered.&nbsp;With our Standard Delivery service you can take advantage of the&nbsp;<strong>Australia Post 24/7 Parcel Lockers</strong>. It's simple to use and gives you more flexibility when it comes to receiving your parcels.</p><ul><li><a href=\"https://www.asos.com/au/customer-care/delivery/how-do-deliveries-to-an-australia-post-parcel-locker-work/#BeforeOrdering\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(45, 45, 45);\">What to do before placing your order</a></li><li><a href=\"https://www.asos.com/au/customer-care/delivery/how-do-deliveries-to-an-australia-post-parcel-locker-work/#ReadyForCollection\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(45, 45, 45);\">What will happen when the order is ready for collection?</a></li><li><a href=\"https://www.asos.com/au/customer-care/delivery/how-do-deliveries-to-an-australia-post-parcel-locker-work/#Availability\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(45, 45, 45);\">Where is Parcel Locker delivery available?</a></li></ul><h2><strong style=\"color: rgb(45, 45, 45);\">What to do before placing your order</strong></h2><p>Before you place your order, you'll need to&nbsp;<strong>register online</strong>&nbsp;with Australia Post who will send you a unique Australia Post Customer Number. You can then select a Parcel Locker location most convenient for you and Australia Post will send you your Parcel Locker address. Just use this address next time you're placing an order with us. It will be something like this:</p><p>Jane Smith</p><p>Parcel Locker 01234 56789</p><p>170-172 Chapel Street</p><p>ST KILDA VIC 3182</p><h2><strong style=\"color: rgb(45, 45, 45);\">What will happen when the order is ready for collection?</strong></h2><p>You'll receive an&nbsp;<strong>SMS or email</strong>&nbsp;when your parcel is ready for collection with a&nbsp;<strong>one-off access code</strong>. You'll need this code and either the last 5 digits of your Australia Post customer number or the mobile number that your parcel notification was sent to.</p><p>The parcel will be held at your locker for&nbsp;<strong>48 hours</strong>&nbsp;but don't panic if you haven't collected it within the time frame. Your parcel will be transferred to the nearest Australia Post facility offering parcel collections. You'll get an email with details of where your parcel can be collected from and the opening hours of the facility. You'll have&nbsp;<strong>5 business days</strong>&nbsp;to collect the parcel before it is returned back to us.</p><h2><strong style=\"color: rgb(45, 45, 45);\">Where is Parcel Locker delivery available?</strong></h2><p>Parcel Locker delivery is only available on our&nbsp;<strong>Standard Delivery</strong>&nbsp;service. If you select an Express service to a Parcel Locker,&nbsp;this&nbsp;will automatically be&nbsp;shipped on a&nbsp;Standard delivery service, however we won't be able to&nbsp;refund the difference in the delivery service charges.</p><p>You can&nbsp;<a href=\"https://auspost.com.au/receiving\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(45, 45, 45);\">register online with Australia Post and find more details</a>&nbsp;here.</p><p>&nbsp;</p><p><strong>Just one more thing......</strong></p><p>Disclaimer: Our website contains links to websites owned and operated by third parties; these are provided solely for your convenience. ASOS have no control over these sites and are not responsible for their content or availability.</p>",
    "questionTopicId": 14,
    "rank": 2147483647,
    "active": false,
    "updateTime": "2020-03-30T05:47:02.4577024",
    "questionTopic": {
      "id": 14,
      "name": "DELIVERY",
      "icon": {
        "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAHiSURBVGhD7ZeBccIwDEW7EAOQBVgABoABYAEGgAVYAAYgA8AAMAATsAALpPdyVk5NhUlqKDrO7+5fW0eW8m3FTb6qDyEb8UY24o1sxBufbWQwGPyLNptNqJjOW40URVHdbrdQNY2okel0Wq/aKyQ1FouFeX2324W76UbUCAlfhdSIabvdhujHuDZC612v1zAjztuNWDUul0tzfTKZhNE4Lo0AbdXnPlwZ4Xet4XDYxJ1OpxBl48oIf4/H4/q0FEnco6PanZH2ynNdYmezWRj9jXsjoHfm3j25M8IpxcprMSbxyML1w66ld8XClZEYxMkci2wklb41shGryPl8rsfW63V1PB6TviXaNcjFqzu5GSvLsh4XnmaE7wYZF41Goz+bkRzUOBwO9X9unRtx7PICCUlGlstlvQv8lDGk34EoRkxfyXwWSJvQuZHk1/dgETXS1nw+b3ZAr9CzJB1ADWpZMciilxFaQKCYFZMi3abUsmKQhWmE9x2RTrharULEz0KspJ7TR/q7Qy8UtWS8PcfCNNKGh1qS0tP0q+7rrp+j95Dngpzk1gcLLdaFTkZi2yx9ncJ+vzdzIzm1HtHJCLClrI6sHi9x3MCzID85yU8HUKvPTnc24p1sxBvZiDc+xEhVfQPBRG3zHobA7QAAAABJRU5ErkJggg==",
        "desc": ""
      },
      "active": false,
      "updateTime": "2020-03-30T05:55:16.9811119"
    }
  }
]
