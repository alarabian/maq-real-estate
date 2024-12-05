import React from "react";

const PostFaq = () => {
  const data = [
    {
      question: "How to post a property ad on MAQ The World Projects?",
      answer: [
        "Visit the MAQ The World Projects website or app.",
        "Look for 'Post Property for Free' on the top right-hand corner and select it.",
        "Fill in details such as property type, accurate location, price, photos, property features, and more details about your property.",
        "Focus on maximizing the 'Completion Score' by filling in the maximum details available.",
        "After adding maximum details, you can 'Post one Property Ad for FREE'.",
      ],
    },
    {
      question: "Can I rent or sell property online for free?",
      answer: [
        "Yes, you can rent, let, or sell your property online for free. MAQ The World Projects allows you to post your property ad for free, connecting you with lakhs of potential buyers.",
      ],
    },
    {
      question: "How to rent or sell my flat online?",
      answer: [
        "Register or Login on MAQ The World Projects.",
        "Fill in essential details such as property type, accurate location, price, photos, and property features to maximize your Property Completion Score.",
        "Post your property for free and connect with buyers/tenants.",
      ],
    },
    {
      question: "How to sell land or plot online?",
      answer: [
        "Post your land or plot ad on MAQ The World Projects for free.",
        "Meet genuine buyers, get end-to-end assistance, and close deals faster.",
        "You can also opt for the Assisted Selling package for a dedicated Relationship Manager.",
      ],
    },
    {
      question: "Can I rent or sell my property without paying brokerage?",
      answer: [
        "Yes, you can post a rent advertisement or sell your property without paying any brokerage.",
        "MAQ The World Projects connects you with potential buyers and tenants without the need for real estate agents.",
      ],
    },
    {
      question:
        "Is MAQ The World Projects a free property ad posting site in India?",
      answer: [
        "Yes, MAQ The World Projects allows you to advertise one property for free.",
        "You get access to a large database of buyers and tenants and can also avail Property Packages and upsell-Packages.",
      ],
    },
    {
      question: "Why should I post my property on MAQ The World Projects?",
      answer: [
        "Access to over 15 lakh+ Buyers & Tenants.",
        "Get instant responses via Email & SMS.",
        "View responses and contact them to close deals faster.",
        "Great offers & discounts on Premium Services.",
        "Customized value-added Property Packages for every budget.",
      ],
    },
    {
      question: "Do I need to add photos while posting a property ad online?",
      answer: [
        "Yes, adding photos is important as almost 90% of buyers prefer properties with photos.",
        "Login to your account & go to Dashboard, then select the listing for which you wish to add photos.",
        "Click on the 'Add Photos' button, select the category (e.g., Bedroom, Bathroom, Kitchen), and click 'Save'.",
        "Photos will be screened and uploaded within 24 hours upon approval.",
        "If you don't have high-quality photos, you can request a photoshoot through the 'Photoshoot Service'.",
      ],
    },
    {
      question:
        "How can my property advertisement appear higher in search results?",
      answer: [
        "Fill all the relevant details about your property to increase the completion score and rank higher in search results.",
        "Add high-quality photos to make your property stand out.",
        "Write good descriptions with relevant keywords. You can request help from 'Content Experts' on MAQ The World Projects.",
      ],
    },
  ];

  return (
    <>
      <div className="postFaqSec">
        <div className="title">
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className="faqList">
          {data.map((item, i) => {
            return (
              <div className="faqItem" key={i}>
                <h4>{item.question}</h4>
                <ul>
                  {item.answer.map((list, i) => {
                    return <li key={i}>{list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PostFaq;
