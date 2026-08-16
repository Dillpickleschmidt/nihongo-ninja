import type { TextProps, ViewProps } from "react-native";
import { View as RNView } from "react-native";

import { Text } from "./text";

// Semantic components. On web, react-native-web maps `role` to a real HTML tag
// (role="heading" + aria-level -> <h1>, role="main" -> <main>, and so on).
// On mobile, `role` sets the accessibility role. Use these for page structure
// so the server HTML has headings and landmarks for search engines.
//
// Heading and Paragraph build on Text, so the default font and color come from
// one place (see textBase in text.tsx).

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends TextProps {
  level?: Level;
  className?: string;
}

export function Heading({ level = 1, ...props }: HeadingProps) {
  return <Text role="heading" aria-level={level} {...props} />;
}

// react-native's Role type omits "paragraph". react-native-web maps it to <p>.
const paragraphRole = "paragraph" as unknown as NonNullable<TextProps["role"]>;

export function Paragraph(props: TextProps & { className?: string }) {
  return <Text role={paragraphRole} {...props} />;
}

type Container = (props: ViewProps & { className?: string }) => React.ReactNode;

const landmark =
  (role: NonNullable<ViewProps["role"]>): Container =>
  ({ className, ...props }) => <RNView role={role} className={className} {...props} />;

export const Main = landmark("main");
export const Nav = landmark("navigation");
export const Header = landmark("banner");
export const Footer = landmark("contentinfo");
export const Article = landmark("article");
export const Section = landmark("region");
export const Aside = landmark("complementary");
