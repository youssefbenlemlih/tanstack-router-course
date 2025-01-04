import { AppShell, Flex, Title } from "@mantine/core";
import { IconAddressBook } from "@tabler/icons-react";
import { ReactNode } from "react";

type LayoutProps = {
  title: string;
  children: ReactNode;
  rightSection?: ReactNode;
};

export const Layout = ({ children, rightSection, title }: LayoutProps) => {
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header>
        <Flex align={"center"} p="sm" justify={"space-between"}>
          <Flex align={"center"} gap="xs">
            <IconAddressBook />
            <Title order={2}>{title}</Title>
          </Flex>
          {rightSection}
        </Flex>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
