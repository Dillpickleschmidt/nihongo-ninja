// react-native-web ships no TypeScript types. Declare only what this app uses:
// StyleSheet.getSheet (a web-only API; __root.tsx inlines the sheet for SSR).
declare module "react-native-web" {
  export const StyleSheet: {
    getSheet(): { id: string; textContent: string };
  };
}
