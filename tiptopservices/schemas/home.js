import icon from "react-icons/lib/md/home"

export default {
  name: "home",
  title: "Home Screen Settings",
  description: "Edit the setting here to change the home screen details",
  type: "document",
  icon,
  fields: [
    {
      name: "cleaners_title",
      title: "Cleaners Title",
      description: "The title for the cleaners site",
      type: "string",
    },
    {
      name: "pestcontrol_title",
      title: "Pest Control Title",
      description: "The title for the pest control site",
      type: "string",
    },
    {
      name: "cleaners_image",
      title: "Cleaners Background Image",
      description: "The image for the cleaners site",
      type: "image",
    },
    {
      name: "pestcontrol_image",
      title: "Pest Control Background Image",
      description: "The image for the pestcontrol site",
      type: "image",
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
  ],
}
