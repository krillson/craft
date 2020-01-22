import React from 'react';
import Item from './item';

export default {
  title: 'Item',
  component: Item,
};

const labelTemplate = {
    labelBaseType: 'Item',
    labelPrefix: '',
    labelSuffix: '',
}

export const NormalItem = () => (
  <Item rarity='normal' label={{...labelTemplate, labelBaseType: 'Normal Item'}}></Item>
);

export const MagicItem = () => (
  <Item rarity='magic' label={{...labelTemplate, labelBaseType: 'Magic Item'}}></Item>
);

export const RareItem = () => (
  <Item rarity='rare' label={{...labelTemplate, labelBaseType: 'Rare Item'}}></Item>
);

export const UniqueItem = () => (
  <Item rarity='unique' label={{...labelTemplate, labelBaseType: 'Unique Item'}}></Item>
);
