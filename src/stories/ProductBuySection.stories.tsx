import type { Meta, StoryObj } from '@storybook/react';

import { ProductBuySection } from './ProductBuySection';

const meta = {
  component: ProductBuySection,
} satisfies Meta<typeof ProductBuySection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productImageUrl: "https://placehold.co/680",
    status: "Nuevo - 134 vendidos",
    title: "Deco Reverse Sombrero Oxford",
    price: 1980
  }
};