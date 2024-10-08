import type { Meta, StoryObj } from "@storybook/react";

import { SearchBox } from "./SearchBox";

const meta = {
  component: SearchBox,
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchInput: "",
    placeholder: "Nunca dejes de buscar",
    ariaLabel: "Buscador de productos",
    onClick: (inputValue: string) => {
      console.log(inputValue);
    },
  },
};
