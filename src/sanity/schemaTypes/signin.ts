import { Rule } from "@sanity/types";

export default {
  name: "signinForm",
  title: "Signin Form",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().email().error("A valid email address is required"),
    },
    {
      name: "password",
      title: "Password",
    type: "string",
    validation: (Rule: Rule) =>
        Rule.required()
            .min(8)
            .error("Password must be at least 10 characters long")
}
  ],
};