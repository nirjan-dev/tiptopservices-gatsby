import icon from "react-icons/lib/md/verified-user"

export default {
  name: "review",
  title: "Customer Review",
  description: "Add and Edit reviews",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Customer Name",
      description: "The name of the Customer",
      type: "string",
    },
    {
      name: "review_type",
      title: "Review Type",
      description: "Is the Review related to Pest Control or Cleaning?",
      type: "string",
      list: ["pest control", "cleaning"],
      layout: "radio",
    },
    {
      name: "content",
      title: "Review",
      description: "The review of the customer",
      type: "text",
    },
    {
      name: "location",
      title: "Customer Location",
      type: "string",
      description: "Where is the customer from?",
    },
  ],
}
