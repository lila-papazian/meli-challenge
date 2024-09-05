import type { Meta, StoryObj } from "@storybook/react";

import { ProductCard } from "./ProductCard";

const meta = {
  component: ProductCard,
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: (id: string) => console.log(id),
    item: {
      id: "ID",
      title: "Apple Iphone Nuevo",
      price: {
        currency: "ARS",
        amount: 5000,
        decimals: 0,
      },
      picture: "https://placehold.co/180",
      condition: "Nuevo",
      freeShipping: true,
    },
  },
};
