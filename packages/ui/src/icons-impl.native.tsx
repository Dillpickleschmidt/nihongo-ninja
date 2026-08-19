import type { LucideIcon } from "lucide-react-native";
import * as L from "lucide-react-native";
import { styled } from "nativewind";
import { StyleSheet, type StyleProp, type TextStyle } from "react-native";

// Lucide native icons only take size/color props; className resolves to an RN
// style via styled(), so lift those two values back out of it. Explicit
// size/color props win over the className-derived values.
type SizedProps = Omit<React.ComponentProps<LucideIcon>, "style"> & {
  style?: StyleProp<TextStyle>;
};

function themed(Icon: LucideIcon) {
  function Sized({ style, size, color, ...props }: SizedProps) {
    const flat = (StyleSheet.flatten(style) ?? {}) as {
      width?: number;
      height?: number;
      color?: string;
    };
    return (
      <Icon size={size ?? flat.height ?? flat.width ?? 24} color={color ?? flat.color} {...props} />
    );
  }
  return styled(Sized, { className: "style" });
}

export const Book = themed(L.Book);
export const ChevronDown = themed(L.ChevronDown);
export const ChevronRight = themed(L.ChevronRight);
export const Copy = themed(L.Copy);
export const Crown = themed(L.Crown);
export const Download = themed(L.Download);
export const Eye = themed(L.Eye);
export const FileText = themed(L.FileText);
export const Folder = themed(L.Folder);
export const FolderPlus = themed(L.FolderPlus);
export const Grid2x2 = themed(L.Grid2x2);
export const House = themed(L.House);
export const PencilLine = themed(L.PencilLine);
export const Plus = themed(L.Plus);
export const Share = themed(L.Share);
export const Search = themed(L.Search);
export const SquarePen = themed(L.SquarePen);
export const Trash2 = themed(L.Trash2);
export const Users = themed(L.Users);
