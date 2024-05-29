/**
 * @file Drawer.tsx
 * @description Composant Drawer pour afficher un tiroir réactif.
 */
import React from "react";
interface IDrawerProps {
  title: string;
  position?: "right" | "left" | "top" | "bottom";
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}
export default function Drawer({
  title,
  position,
  isOpen,
  setIsOpen,
  children,
}: IDrawerProps): React.JSX.Element;
export {};
