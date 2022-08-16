import * as React from "react";

export const getPostHeight = (
  element: React.ChangeEvent<HTMLTextAreaElement>,
) => {
  const height = element.target.scrollHeight;
  return height;
};

export function checkContentOverFlow(
  maxHeight: number,
  height: number,
): boolean {
  if (maxHeight < height) {
    return true;
  }
  return false;
}
