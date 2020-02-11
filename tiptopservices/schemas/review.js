import icon from "react-icons/lib/md/verified-user"

export default {
  name: "review",
  title: "Customer Review",
  description: "Add and Edit reviews",
  type: "document",
  //liveEdit: true,
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
      options: {
        list: ["Pest Control", "Cleaning"],
        layout: "radio",
      },
    },
    {
      name: "content",
      title: "Review",
      description: "The review of the customer",
      type: "text",
      validation: Rule =>
        Rule.max(100).warning(
          "Reviews should not be longer then 100 characters"
        ),
    },
    {
      name: "location",
      title: "Customer Location",
      type: "string",
      description: "Where is the customer from?",
    },
  ],
}
