import { createFileRoute } from "@tanstack/react-router";
import { ContactList } from "../../components/ContactList";

export const Route = createFileRoute("/contacts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ContactList />;
}
