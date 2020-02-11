import icon from "react-icons/lib/md/bug-report"
import React from "react"
export default {
  name: "pestcontrol",
  title: "Pest Control Settings",
  description: "Edit the setting here to change the pest control site details",
  type: "document",
  //liveEdit: true,
  icon,
  fields: [
    {
      name: "logo",
      title: "Logo",
      description: "Upload the logo for the pest control site",
      type: "image",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      description:
        "Enter the headline of the homepage of the pest control site",
    },
    {
      name: "sub_heading",
      title: "Sub Heading",
      type: "blockContent",
      description:
        "Enter the sub headline that will be displayed bellow the headline",
    },
    {
      name: "quote_button_text",
      title: "Quote Button Text",
      type: "string",
      description: "Enter the text for the get quote button",
    },

    {
      name: "call_button_text",
      title: "Call Button Text",
      type: "string",
      description: "Enter the phone number for the call button",
    },
    {
      name: "main_bg",
      title: "Main Background Image",
      type: "image",
      description: "Upload the background image for the pest control homepage",
    },
    {
      name: "facebook_link",
      title: "Facebook Link",
      type: "url",
      description: "link to the facebook page",
    },
    {
      name: "twitter_link",
      title: "Twitter Link",
      type: "url",
      description: "link to the twitter page",
    },
    {
      name: "instagram_link",
      title: "Instagram Link",
      type: "url",
      description: "link to the instagram page",
    },
    {
      name: "company_description",
      title: "Company Description",
      type: "blockContent",
      description: "Enter the description to be shown in about page",
    },
    {
      name: "about_banner",
      title: "About Banner Image",
      type: "image",
      description: "Upload the banner image for the about page",
    },
    {
      name: "customer_review_heading",
      title: "Customer Reviews Heading",
      type: "string",
      description: "Enter the heading for the customer reviews section",
    },
    {
      name: "seo_title",
      title: "SEO Title Home",
      type: "string",
      description: "Enter the title for the homepage used for SEO",
    },
    {
      name: "seo_description",
      title: "SEO Description Home",
      type: "text",
      description: "Enter the description for the homepage used for SEO",
    },
    {
      name: "seo_title_about",
      title: "SEO Title About",
      type: "string",
      description: "Enter the title for the about page used for SEO",
    },
    {
      name: "seo_description_about",
      title: "SEO Description About",
      type: "text",
      description: "Enter the description for the about page used for SEO",
    },
    {
      name: "seo_title_services",
      title: "SEO Title Services",
      type: "string",
      description: "Enter the title for the services page used for SEO",
    },
    {
      name: "seo_description_services",
      title: "SEO Description Services",
      type: "text",
      description: "Enter the description for the services page used for SEO",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Click here to edit pest control site settings",
      }
    },
  },
}
