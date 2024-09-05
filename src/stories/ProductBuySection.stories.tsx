import type { Meta, StoryObj } from "@storybook/react";

import { ProductBuySection } from "./ProductBuySection";

const meta = {
  component: ProductBuySection,
} satisfies Meta<typeof ProductBuySection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      picture: "https://placehold.co/680",
      id: "3",
      condition: "Nuevo",
      soldQuantity: 100,
      title: "Deco Reverse Sombrero Oxford",
      price: {
        currency: "ARS",
        amount: 3900,
        decimals: 0,
      },
    },
  },
};
