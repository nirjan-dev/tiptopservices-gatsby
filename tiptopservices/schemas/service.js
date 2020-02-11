import icon from "react-icons/lib/md/list"

export default {
  name: "service",
  title: "Services",
  description: "Add and Edit services",
  type: "document",
  //liveEdit: true,
  icon,
  fields: [
    {
      name: "title",
      title: "Service Title",
      description: "The title for the Service",
      type: "string",
    },
    {
      name: "service_type",
      title: "Service Type",
      description: "Is the Service related to Pest Control or Cleaning?",
      type: "string",
      options: {
        list: ["Pest Control", "Cleaning"],
        layout: "radio",
      },
    },
    {
      name: "image",
      title: "Service Image",
      description: "The image for the Service",
      type: "image",
    },
    {
      name: "description",
      title: "Service Description",
      description: "The description of the service",
      type: "blockContent",
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "The link to the service. Use the generate button to automatically set the url",
      type: "slug",
      options: {
        source: "title",
      },
    },
  ],
}
