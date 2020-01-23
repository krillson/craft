import React from 'react';
import Item from './item';

export default {
  title: 'Item',
  component: Item,
};

const labelTemplate = {
    labelBaseType: 'BaseType',
    labelPrefix: 'Prefix',
    labelSuffix: 'Suffix',
}

export const NormalItem = () => (
  <Item rarity='normal' label={{...labelTemplate, labelPrefix: '', labelSuffix: ''}}></Item>
);

export const MagicItem = () => (
  <Item rarity='magic' label={{...labelTemplate}}></Item>
);

export const RareItem = () => (
  <Item rarity='rare' label={{...labelTemplate, labelSuffix: ''}}></Item>
);

export const UniqueItem = () => (
  <Item rarity='unique' label={{...labelTemplate, labelSuffix: ''}}></Item>
);
