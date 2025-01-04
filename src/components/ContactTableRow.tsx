import { ActionIcon, Table } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { ContactOverview } from "../api/client";
import { useOptimisticContactName } from "../api/hooks";

type ContactTableRowProps = {
  contact: ContactOverview;
  openContactEditDialog: (contactId: string) => void;
};
export const ContactTableRow = ({
  contact,
  openContactEditDialog,
}: ContactTableRowProps) => {
  const { hovered, ref } = useHover();
  const optimisticContactName = useOptimisticContactName(contact.id);
  return (
    <Table.Tr ref={ref}>
      <Table.Td>
          {optimisticContactName
            ? optimisticContactName
            : contact.firstName + " " + contact.lastName}
      </Table.Td>
      <Table.Td>
        <ActionIcon
          variant="light"
          style={{ opacity: hovered ? 1 : 0 }}
          onClick={() => openContactEditDialog(contact.id)}
        >
          <IconEdit size={14} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  );
};
