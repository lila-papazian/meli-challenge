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
      condition: "Nuevo",
      currency_id: "ARS",
      price: 5000,
      shipping: {
        free_shipping: true,
      },
      thumbnail: "https://placehold.co/180",
    },
  },
};
