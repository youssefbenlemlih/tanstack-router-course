import { createFileRoute } from "@tanstack/react-router";
import * as z from "zod";
import ContactsPage from "../ContactsPage";

const searchParametersSchema = z.object({
  editContactId: z.string().uuid().optional(),
});
export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: searchParametersSchema,
});

function RouteComponent() {
  const { editContactId } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <ContactsPage
      editContactId={editContactId}
      setEditContactId={(id) => {
        navigate({ search: { editContactId: id } });
      }}
    />
  );
}
